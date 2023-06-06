# What's new in v1.3

Released May 23, 2023

In this update, we are introducing a brand new PDF viewer. We've also made some tweaks to how tabs and tab groups work which should simplify the experience for new users.

- [New PDF viewer](app://obsidian.md/index.html#new-pdf-viewer) — We've completely overhauled the PDF viewer in Obsidian to feel more integrated within the app.
- [Changes to pinned tabs](app://obsidian.md/index.html#pinned-tab-changes) — We've changed the behavior when opening links within pinned tabs.
- [Changes to "Open to the right"](app://obsidian.md/index.html#tab-group-changes) — "Open to the right" will only create a new tab group if one doesn't exist to the right of the current tab.
- [Misc. improvements](app://obsidian.md/index.html#misc-improvements) — We've also made improvements to bookmarks, overhauled all the tree components in the app, and embed support for YouTube and Twitter links within your markdown files.

## New PDF viewer

![pdf-viewer](https://github.com/obsidianmd/obsidian-help/assets/693981/2187e955-3c4c-436e-a590-b0623cab65e7)

## Pinned tab changes

Clicking on links in a pinned tab will now open a new tab instead of reusing a existing unpinned tab. If your workflow was relying on the old behavior, make sure to read about the changes to [tab groups](app://obsidian.md/index.html#tab-group-changes).

## Tab group changes

There is now a new behavior when using the "Open to the right" menu option as well as the `Ctrl/Cmd + Alt` + Click modifier. Instead of always creating a new tab group, if there is a tab group to the right of the current tab, it will open the link in that tab group.

![open to the right](https://github.com/obsidianmd/obsidian-help/assets/693981/949d55cd-1f93-480c-bbe4-c0ae9cf5cfdb)

## Misc. improvements

- YouTube and Twitter links can now be embedded within your notes using the markdown image embed syntax (i.e. `![](https://www.youtube.com/...)`).
- We've redesigned all the tree components (e.g. File Explorer, Outline view) to make the visual hierarchy more clear. If you are using a custom theme, make sure to update it (Settings → Appearance → Check for updates) in case it was impacted at all.
- Bookmarks: Added new "Bookmark this block" menu item when right-clicking on a block ID.
- Quick switcher: Bookmarks no longer rank higher in the search results.
- Bookmarks: Bookmark view will now show an error state if the bookmarks.json file is malformed or corrupted.
- Spellcheck is now enabled by default in new vaults.
- Inline titles now have spellcheck enabled.
- When "Auto convert HTML" is enabled, HTML tables will now be converted to markdown tables on paste.
- Improved Live Preview rendering performance when moving the cursor.
- New hotkeys for interacting with the file explorer:
    - `F2` to start renaming the focused file.
    - `Space` to open the focused file.
    - macOS: `Enter` to start renaming the focused file (to follow the OS convention).
    - macOS: `Cmd + ArrowDown` to open the focused file.

## Bug fixes

- Fixed slower performance of Live Preview when using pop-out windows on a secondary monitor.
- Clicking on external links inside `<iframe>` now properly open them in the default browser.
- Fixed opening files from File Explorer not giving focus to the new tab if "Always focus new tab" is turned off.
- Fixed issue with multiple cursors having the incorrect selection color.
- Frontmatter will now still be recognized if there are spaces after the ending `---`.
- Fixed file saving interrupted when closing or quitting. Now Obsidian will properly wait for the file to be saved before closing.
- Long tables that exceed the view width will now show a scrollbar.

## Developers

- Updated PIXI.js to v7.2.4.
- Updated Turndown to 7.1.2.
- Updated Mathjax to v3.2.2.

---

A complete list of previous changes can be found on [our forum](https://forum.obsidian.md/c/announcements/13).