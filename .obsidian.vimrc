" Have j and k navigate visual lines rather than logical ones
nmap j gj
nmap k gk
" I like using H and L for beginning/end of line
nmap H ^
nmap L $
" Quickly remove search highlights
nmap <F9> :nohl

" Yank to system clipboard
set clipboard=unnamed

" Go back and forward with Ctrl+O and Ctrl+I
" (make sure to remove default Obsidian shortcuts for these to work)
exmap back obcommand app:go-back
nmap <C-o> :back
exmap forward obcommand app:go-forward
nmap <C-i> :forward

exmap focusRight obcommand editor:focus-right
exmap focusLeft obcommand editor:focus-left
nmap <C-l> :focusRight
nmap <C-h> :focusLeft

"fake leader key
unmap <Space>

"splitting
exmap splitRight obcommand workspace:split-vertical
exmap splitDown obcommand workspace:split-horizontal

nmap <Space>s\ :splitRight
nmap <Space>s| :splitRight
nmap <Space>s- :splitDown
nmap <Space>s_ :splitDown

"tabbing
exmap gotoTab1 obcommand workspace:goto-tab-1
exmap gotoTab2 obcommand workspace:goto-tab-2
exmap gotoTab3 obcommand workspace:goto-tab-3
exmap gotoTab4 obcommand workspace:goto-tab-4
exmap gotoTab5 obcommand workspace:goto-tab-5
exmap gotoTab6 obcommand workspace:goto-tab-6
exmap gotoTab7 obcommand workspace:goto-tab-7
exmap gotoTab8 obcommand workspace:goto-tab-8
exmap gotoLastTab obcommand workspace:goto-last-tab

nmap <Space>1 :gotoTab1
nmap <Space>2 :gotoTab2
nmap <Space>3 :gotoTab3
nmap <Space>4 :gotoTab4
nmap <Space>5 :gotoTab5
nmap <Space>6 :gotoTab6
nmap <Space>7 :gotoTab7
nmap <Space>8 :gotoTab8
nmap <Space>9 :gotoLastTab


