
import {makeSureContentHasEmptyLinesAddedBeforeAndAfter} from './strings';

// Useful regexes
export const allHeadersRegex = /^([ \t]*)(#+)([ \t]+)([^\n\r]*?)([ \t]+#+)?$/gm;
export const fencedRegexTemplate = '^XXX\\.*?\n(?:((?:.|\n)*?)\n)?XXX(?=\\s|$)$';
export const yamlRegex = /^---\n((?:(((?!---)(?:.|\n)*?)\n)?))---(?=\n|$)/;
export const backtickBlockRegexTemplate = fencedRegexTemplate.replaceAll('X', '`');
export const tildeBlockRegexTemplate = fencedRegexTemplate.replaceAll('X', '~');
export const indentedBlockRegex = '^((\t|( {4})).*\n)+';
export const codeBlockRegex = new RegExp(`${backtickBlockRegexTemplate}|${tildeBlockRegexTemplate}|${indentedBlockRegex}`, 'gm');
// based on https://stackoverflow.com/a/26010910/8353749
export const wikiLinkRegex = /(!?)\[{2}([^\][\n|]+)(\|([^\][\n|]+)){0,2}\]{2}/g;
// based on https://davidwells.io/snippets/regex-match-markdown-links
export const genericLinkRegex = /(!?)\[([^[]*)\](\(.*\))/g;
export const tagWithLeadingWhitespaceRegex = /(\s|^)(#[^\s#;.,><?!=+]+)/g;
export const obsidianMultilineCommentRegex = /^%%\n[^%]*\n%%/gm;
export const wordSplitterRegex = /[,\s]+/;
export const ellipsisRegex = /(\. ?){2}\./g;
export const lineStartingWithWhitespaceOrBlockquoteTemplate = `\\s*(>\\s*)*`;
// Note that the following regex has an issue where if the table is followed by another table with only 1 blank line between them, it considers them to be one table
// if this becomes an issue, we can address it then
export const tableRegex = /^((((>[ ]?)*)|([ ]{0,3}))\[.*?\][ \t]*\n)?((((>[ ]?)*)|([ ]{0,3}))\S+.*?\|.*?\n([^\n]*?\|[^\n]*?\n)*?)?(((>[ ]?)*)|([ ]{0,3}))[|\-+:.][ \-+|:.]*?\|[ \-+|:.]*(?:\n?[^\n]*?\|([^\n]*?)*)+/gm;
export const urlRegex = /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s`\]'"‘’“”>]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s`\]'"‘’“”>]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s`\]'"‘’“”>]{2,}|www\.[a-zA-Z0-9]+\.[^\s`\]'"‘’“”>]{2,})/gi;
export const anchorTagRegex = /<a[\s]+([^>]+)>((?:.(?!<\/a>))*.)<\/a>/g;

// https://stackoverflow.com/questions/38866071/javascript-replace-method-dollar-signs
// Important to use this for any regex replacements where the replacement string
// could have user constructed dollar signs in it
export function escapeDollarSigns(str: string): string {
  return str.replace(/\$/g, '$$$$');
}

// https://stackoverflow.com/questions/3446170/escape-string-for-use-in-javascript-regex
export function escapeRegExp(string: string): string {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); // $& means the whole matched string
}

const head = /(\p{sc=Han}|\p{sc=Katakana}|\p{sc=Hiragana}|\p{sc=Hangul})( *)(\[[^[]*\]\(.*\)|`[^`]*`|\w+|[-+'"([¥$]|\*[^*])/gmu;
const tail = /(\[[^[]*\]\(.*\)|`[^`]*`|\w+|[-+;:'"°%$)\]]|[^*]\*)( *)(\p{sc=Han}|\p{sc=Katakana}|\p{sc=Hiragana}|\p{sc=Hangul})/gmu;
/**
 * Removes spaces from around the wiki link text
 * @param {string} text The text to remove the space from around wiki link text
 * @return {string} The text without space around wiki link link text
 */
export function removeSpacesInWikiLinkText(text: string): string {
  const linkMatches = text.match(wikiLinkRegex);
  if (linkMatches) {
    for (const link of linkMatches) {
      // wiki link with link text
      if (link.includes('|')) {
        const startLinkTextPosition = link.indexOf('|');
        let urlText = link.substring(0, startLinkTextPosition);
        if (urlText.startsWith('![[')) {
          urlText = '![[' + urlText.substring(3).trim();
        }
        if (urlText.startsWith('[[')) {
          urlText = '[[' + urlText.substring(2).trim();
        }
        let otherText = link.substring(startLinkTextPosition + 1, link.length - 2).trim();
        if (otherText.includes('|')) {
          const s = otherText.indexOf('|');
          let title = otherText.substring(0, s).trim();
          title = title.replace(head, '$1 $3').replace(tail, '$1 $3');
          otherText = title + '|' + otherText.substring(s + 1).trim();
        } else {
          otherText = otherText.replace(head, '$1 $3').replace(tail, '$1 $3');
        }
        const newLink = urlText + '|' + otherText + ']]';
        text = text.replace(link, newLink);
      }
    }
  }

  return text;
}

/**
 * Makes sure to add a blank line before and after tables except before a table that is on the first line of the text.
 * @param {string} text The text to make sure it has an empty line before and after tables
 * @return {string} The text with an empty line before and after tables unless the table starts off the file
 */
export function ensureEmptyLinesAroundTables(text: string): string {
  const tableMatches = text.match(tableRegex);
  if (tableMatches == null) {
    return text;
  }

  for (const table of tableMatches) {
    let start = text.indexOf(table.trimStart());
    const end = start + table.length;
    if (table.trim().startsWith('>')) {
      while (text.charAt(start).trim() === '' || text.charAt(start) === '>') {
        start++;
      }
    }

    text = makeSureContentHasEmptyLinesAddedBeforeAndAfter(text, start, end);
  }

  return text;
}

/**
 * Gets the first header one's text from the string provided making sure to convert any links to their display text.
 * @param {string} text - The text to have get the first header one's text from.
 * @return {string} The text for the first header one if present or an empty string.
 */
export function getFirstHeaderOneText(text: string): string {
  const result = text.match(/^#\s+(.*)/m);
  if (result && result[1]) {
    let headerText = result[1];
    headerText = headerText.replaceAll(wikiLinkRegex, (_, _2, $2: string, $3: string) => {
      if ($3 != null) {
        return $3.replace('|', '');
      }

      return $2;
    });

    return headerText.replaceAll(genericLinkRegex, '$2');
  }

  return '';
}

export function matchTagRegex(text: string): string[] {
  return [...text.matchAll(tagWithLeadingWhitespaceRegex)].map((match) => match[2]);
}
