

This keyboard is pretty good, but I can not set the default F1, F2, F3 act as function keys instead of system command.

Finally, I found a workaround of it.

First, let's install the necessary software
- driver for the keyboard. [Link](https://akko.com.vn/tai-driver/)
- karabiner to remap key binding. [Link](https://karabiner-elements.pqrs.org/docs/getting-started/features/)

Then, let's config it.
- On the keyboard we will use the `MacOS` mode.
- Open the driver software
	- Remap `Esc` -> `Insert` (This will be map to `Fn` later in `Karabiner`)
	- Unbind `function` mapping for `F11` and `F12` (This is the command increase and decrease volume. We will use the `núm` to adjust the volume.)


After those step our keyboard will be
- Click `Esc` -> `Insert`
- Click `F11` -> `F11` (default will be volume decrease)
- Click `F12` -> `F12` (default will be volume increase)


Next step, we will remap keybinding in the `Karabiner`:
Idea, we will switch
- `command key` -> `function key`
- and `function key` -> `command key`

Config will be post to [.dotfiles repo](https://github.com/conghuynhho/.dotfiles)

This is bonus key mapping to `disable CMD+M`
```json

```

