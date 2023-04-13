<!--- This file was automatically generated. See docs.ts and *_template.md files for the source. -->
# Obsidian Linter

```shell
git remote add upstream git@github.com:platers/obsidian-linter.git
```

![Build](https://github.com/platers/obsidian-linter/actions/workflows/main.yml/badge.svg)
![Downloads](https://img.shields.io/github/downloads/platers/obsidian-linter/total)

This Obsidian plugin formats and styles your notes with a focus on configurability and extensibility.
Rules can be toggled and configured in the settings.

## Usage

![Demo](images/demo.gif)

To lint the current file, run `Lint the current file` (`Ctrl+Alt+L` by default).
To lint all files, run `Lint all files in the vault`.
To lint all files in the current folder run `Lint all files in the current folder`. This action includes all subfolders.  
You can also lint a folder by right clicking on it in the folder list and selecting "Lint folder" from the options.

![Lint folder contents](images/lintfolder.png)

When `Lint on save` is toggled on, the plugin will lint the current file on manual save (when you press `Ctrl+S`).

### Disable rules

```markdown
---
disabled rules: [capitalize-headings]
---
```

Add `disabled rules: [ ... ]` to the YAML frontmatter of a file to disable those rules when linting that file.

Add `disabled rules: [ all ]` to the YAML frontmatter of a file to disable all rules.

## Rules

Documentation for all rules can be found in the [rules docs](https://github.com/platers/obsidian-linter/blob/master/docs/rules.md). The docs are updated before the plugin is released, so may not be completely accurate.

Each rule is its own set of logic and is designed to be run independently. This means that enabling certain rules together could cause undesired results. One such case would be using "Paragraph blank lines" with "Two Spaces Between Lines with Content". These two rules have some overlap in what they target to change which results in undesired or unexpected results since together they work differently than if they were run by themselves.


### YAML rules

- [escape-yaml-special-characters](https://github.com/platers/obsidian-linter/blob/master/docs/rules.md#escape-yaml-special-characters)
- [force-yaml-escape](https://github.com/platers/obsidian-linter/blob/master/docs/rules.md#force-yaml-escape)
- [format-tags-in-yaml](https://github.com/platers/obsidian-linter/blob/master/docs/rules.md#format-tags-in-yaml)
- [format-yaml-array](https://github.com/platers/obsidian-linter/blob/master/docs/rules.md#format-yaml-array)
- [insert-yaml-attributes](https://github.com/platers/obsidian-linter/blob/master/docs/rules.md#insert-yaml-attributes)
- [move-tags-to-yaml](https://github.com/platers/obsidian-linter/blob/master/docs/rules.md#move-tags-to-yaml)
- [remove-yaml-keys](https://github.com/platers/obsidian-linter/blob/master/docs/rules.md#remove-yaml-keys)
- [yaml-key-sort](https://github.com/platers/obsidian-linter/blob/master/docs/rules.md#yaml-key-sort)
- [yaml-timestamp](https://github.com/platers/obsidian-linter/blob/master/docs/rules.md#yaml-timestamp)
- [yaml-title](https://github.com/platers/obsidian-linter/blob/master/docs/rules.md#yaml-title)
- [yaml-title-alias](https://github.com/platers/obsidian-linter/blob/master/docs/rules.md#yaml-title-alias)

### Heading rules

- [capitalize-headings](https://github.com/platers/obsidian-linter/blob/master/docs/rules.md#capitalize-headings)
- [file-name-heading](https://github.com/platers/obsidian-linter/blob/master/docs/rules.md#file-name-heading)
- [header-increment](https://github.com/platers/obsidian-linter/blob/master/docs/rules.md#header-increment)
- [headings-start-line](https://github.com/platers/obsidian-linter/blob/master/docs/rules.md#headings-start-line)
- [remove-trailing-punctuation-in-heading](https://github.com/platers/obsidian-linter/blob/master/docs/rules.md#remove-trailing-punctuation-in-heading)

### Footnote rules

- [footnote-after-punctuation](https://github.com/platers/obsidian-linter/blob/master/docs/rules.md#footnote-after-punctuation)
- [move-footnotes-to-the-bottom](https://github.com/platers/obsidian-linter/blob/master/docs/rules.md#move-footnotes-to-the-bottom)
- [re-index-footnotes](https://github.com/platers/obsidian-linter/blob/master/docs/rules.md#re-index-footnotes)

### Content rules

- [auto-correct-common-misspellings](https://github.com/platers/obsidian-linter/blob/master/docs/rules.md#auto-correct-common-misspellings)
- [convert-bullet-list-markers](https://github.com/platers/obsidian-linter/blob/master/docs/rules.md#convert-bullet-list-markers)
- [emphasis-style](https://github.com/platers/obsidian-linter/blob/master/docs/rules.md#emphasis-style)
- [no-bare-urls](https://github.com/platers/obsidian-linter/blob/master/docs/rules.md#no-bare-urls)
- [ordered-list-style](https://github.com/platers/obsidian-linter/blob/master/docs/rules.md#ordered-list-style)
- [proper-ellipsis](https://github.com/platers/obsidian-linter/blob/master/docs/rules.md#proper-ellipsis)
- [remove-consecutive-list-markers](https://github.com/platers/obsidian-linter/blob/master/docs/rules.md#remove-consecutive-list-markers)
- [remove-empty-list-markers](https://github.com/platers/obsidian-linter/blob/master/docs/rules.md#remove-empty-list-markers)
- [remove-hyphenated-line-breaks](https://github.com/platers/obsidian-linter/blob/master/docs/rules.md#remove-hyphenated-line-breaks)
- [remove-multiple-spaces](https://github.com/platers/obsidian-linter/blob/master/docs/rules.md#remove-multiple-spaces)
- [strong-style](https://github.com/platers/obsidian-linter/blob/master/docs/rules.md#strong-style)
- [two-spaces-between-lines-with-content](https://github.com/platers/obsidian-linter/blob/master/docs/rules.md#two-spaces-between-lines-with-content)
- [unordered-list-style](https://github.com/platers/obsidian-linter/blob/master/docs/rules.md#unordered-list-style)

### Spacing rules

- [compact-yaml](https://github.com/platers/obsidian-linter/blob/master/docs/rules.md#compact-yaml)
- [consecutive-blank-lines](https://github.com/platers/obsidian-linter/blob/master/docs/rules.md#consecutive-blank-lines)
- [convert-spaces-to-tabs](https://github.com/platers/obsidian-linter/blob/master/docs/rules.md#convert-spaces-to-tabs)
- [empty-line-around-blockquotes](https://github.com/platers/obsidian-linter/blob/master/docs/rules.md#empty-line-around-blockquotes)
- [empty-line-around-code-fences](https://github.com/platers/obsidian-linter/blob/master/docs/rules.md#empty-line-around-code-fences)
- [empty-line-around-math-blocks](https://github.com/platers/obsidian-linter/blob/master/docs/rules.md#empty-line-around-math-blocks)
- [empty-line-around-tables](https://github.com/platers/obsidian-linter/blob/master/docs/rules.md#empty-line-around-tables)
- [heading-blank-lines](https://github.com/platers/obsidian-linter/blob/master/docs/rules.md#heading-blank-lines)
- [line-break-at-document-end](https://github.com/platers/obsidian-linter/blob/master/docs/rules.md#line-break-at-document-end)
- [move-math-block-indicators-to-their-own-line](https://github.com/platers/obsidian-linter/blob/master/docs/rules.md#move-math-block-indicators-to-their-own-line)
- [paragraph-blank-lines](https://github.com/platers/obsidian-linter/blob/master/docs/rules.md#paragraph-blank-lines)
- [remove-empty-lines-between-list-markers-and-checklists](https://github.com/platers/obsidian-linter/blob/master/docs/rules.md#remove-empty-lines-between-list-markers-and-checklists)
- [remove-link-spacing](https://github.com/platers/obsidian-linter/blob/master/docs/rules.md#remove-link-spacing)
- [remove-space-around-characters](https://github.com/platers/obsidian-linter/blob/master/docs/rules.md#remove-space-around-characters)
- [space-after-list-markers](https://github.com/platers/obsidian-linter/blob/master/docs/rules.md#space-after-list-markers)
- [space-between-chinese-japanese-or-korean-and-english-or-numbers](https://github.com/platers/obsidian-linter/blob/master/docs/rules.md#space-between-chinese-japanese-or-korean-and-english-or-numbers)
- [trailing-spaces](https://github.com/platers/obsidian-linter/blob/master/docs/rules.md#trailing-spaces)

### Paste rules

- [add-blockquote-indentation-on-paste](https://github.com/platers/obsidian-linter/blob/master/docs/rules.md#add-blockquote-indentation-on-paste)
- [prevent-double-checklist-indicator-on-paste](https://github.com/platers/obsidian-linter/blob/master/docs/rules.md#prevent-double-checklist-indicator-on-paste)
- [prevent-double-list-item-indicator-on-paste](https://github.com/platers/obsidian-linter/blob/master/docs/rules.md#prevent-double-list-item-indicator-on-paste)
- [proper-ellipsis-on-paste](https://github.com/platers/obsidian-linter/blob/master/docs/rules.md#proper-ellipsis-on-paste)
- [remove-hyphens-on-paste](https://github.com/platers/obsidian-linter/blob/master/docs/rules.md#remove-hyphens-on-paste)
- [remove-leading-or-trailing-whitespace-on-paste](https://github.com/platers/obsidian-linter/blob/master/docs/rules.md#remove-leading-or-trailing-whitespace-on-paste)
- [remove-leftover-footnotes-from-quote-on-paste](https://github.com/platers/obsidian-linter/blob/master/docs/rules.md#remove-leftover-footnotes-from-quote-on-paste)
- [remove-multiple-blank-lines-on-paste](https://github.com/platers/obsidian-linter/blob/master/docs/rules.md#remove-multiple-blank-lines-on-paste)


### Custom Lint Commands

These are special lint rules that the user may specify. They are Obsidian commands. If you would like to create a custom command that you can run, you can use the [QuickAdd](https://github.com/chhoumann/quickadd) plugin in order to add a JavaScript script to make modifications to a file. **This will require some level of knowledge about the Obsidian API and JavaScript.** To use a custom user script, you will want to follow these steps:

1. Install the QuickAdd plugin
2. Go ahead and go to the settings for QuickAdd and select "Manage Macros"
3. You should see a modal popup. In that modal, make sure to type in a macro name and add the macro.
4. Once the macro is added, go ahead and configure the macro making sure to add your user user script (this should be a JavaScript file in your Obsidian vault). [Here](https://github.com/chhoumann/quickadd/blob/master/docs/docs/Examples/Macro_LogBookToDailyJournal.md) is an example from the QuickAdd repo with an explanation of what the code does.
5. Once you have finished all changes to your macro that you would like, go ahead and exit out of configure macro modal and the macro manager modal.
6. Then go ahead and select macro for the choice type and type in the name of the macro you just created (you may get suggestions or you may have to remember the name and type it in completely). Then add select "Add Choice".
7. Once the choice has been added, go ahead and click the lightning bolt icon which is the option to add a command for a choice.
8. Now you just need to search up this newly created command in the custom command settings for Obsidian Linter.

Now the next time you run the linter, the custom lint commands should run.

### Custom Regex Replacements

These are rules that run before the YAML timestamp rule, but after most of the other rules. These rules allow you to specify
the regex to find, the flags to use with that regex, and the value to replace it with. **You may specify whitespace as
the find and replace values, but please be careful as this can make a lot of unwanted changes if you are not careful.**
These rules can be useful in swapping out certain tags, words, and formatting for others if you know what you are doing in regex.

[Here](https://regexr.com/) is an online playground that you can test out regex at. It can let you know when regex is slow and you can use it to test if the text you want to replace is actually being selected by the find and flags portion of the regex.

[Here](https://javascript.info/regexp-introduction#flags) is an explanation on what each flag means. Feel free to use them as needed. The default ones added are `g` (global) and `m` (multiline).

_Note: lookbehinds do not work on iOS mobile and using them will cause linting to fail. So please **DO NOT** use them for iOS mobile._

### Paste Limitations
- The plugin only works with the standard pasting (`cmd/ctrl + v`) shortcut, and not with the `p` operator in vim. (Pasting with `cmd/ctrl + v` in normal or insert mode does work though.)
- To avoid conflicts with Plugins like [Auto Link Title](https://obsidian.md/plugins?id=obsidian-auto-link-title) or [Paste URL into Selection](https://obsidian.md/plugins?id=url-into-selection), will not be triggered when an URL is detected in the clipboard.
- On mobile, in order to paste the URL, ensure you perform the `Tap and Hold -> Paste` action to paste into your document and use the paste rules.
- When doing a multicursor multiline paste, the cursors will stay where they were after pasting the values instead of moving to the end of the pasted value

## Installing

As of version [0.9.7 of Obsidian](https://forum.obsidian.md/t/obsidian-release-v0-9-7-insider-build/7628), this plugin is available to be installed directly from within the app. The plugin can be found in the Community Plugins directory which can be accessed from the Settings pane under Third Party Plugins.

### Manual installation

1. Download the [latest release](https://github.com/platers/obsidian-linter/releases/latest)
1. Extract the obsidian-linter folder from the zip to your vault's plugins folder: `<vault>/.obsidian/plugins/`  
Note: On some machines the `.obsidian` folder may be hidden. On MacOS you should be able to press `Command+Shift+Dot` to show the folder in Finder.
1. Reload Obsidian
1. If prompted about Safe Mode, you can disable safe mode and enable the plugin.

## Contributing

Contributions are welcome, especially for new rules and new translations. If this is something you would like to do, take a look at the
[contribution guidelines](CONTRIBUTING.md).

## Credits

Thanks to all of the different people who have contributed to this plugin!  
A special thanks to [chrisgrieser](https://github.com/chrisgrieser) for doing all of the base work for and for suggesting that the paste logic should reside in the Linter!
