### Avoid using `C-i` as prefix

Reason: `Tab` key will be messed up.

Yes, that's correct. `C-i` is the ASCII control code for the `Tab` key. When you set `C-i` as your `tmux` prefix key, it means that you have to press `C-i` followed by another key to send a command to `tmux`.

However, this can cause conflicts with other keybindings that use `Tab`. One solution is to change your `tmux` prefix key to a different key that does not conflict with any other keys you use.
