## How to run multiple command in one git alias

```shell
cma = !git add . && git commit -m $1 && git push
```

In here `!` tell git using shell to run this alias.

To add these alias from terminal run this

```shell
git config --global alias.cma "!git add . && git commit -m $1 && git push"
```
