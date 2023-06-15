### Breakdown
- Why to choose `pnpm`
- How does it work.A

### Test
Test with `gui-sf-ja`

1. Test with `pnpm` version 5
2. Package `@ggj/build-i18n` not working due to this path is not correct anymore
```js
const config = require('../../../i18n.config.js')
```
3. In `nuxt.config.js`
```js
const webpack = require('webpack')
```
This code not working anymore due to `pnpm` move sub dependencies into `.pnpm` folder

4. `nuxt 2` not working with pnpm
```txt
Error: Cannot resolve "postcss-import" from "/Users/huynh/GGJ/new-surface/surface.gogojungle.co.jp/ja/desktop/postcss-import"
    at Nuxt.resolvePath (/Users/huynh/GGJ/new-surface/surface.gogojungle.co.jp/ja/node_modules/.pnpm/nuxt@1.4.5/node_modules/nuxt/lib/core/nuxt.js:220:11)
    at config.plugins.Object.keys.map.p (/Users/huynh/GGJ/new-surface/surface.gogojungle.co.jp/ja/node_modules/.pnpm/nuxt@1.4.5/node_modules/nuxt/lib/builder/webpack/postcss.js:81:42)
    at Array.map (<anonymous>)
    at Builder.postcssConfig (/Users/huynh/GGJ/new-surface/surface.gogojungle.co.jp/ja/node_modules/.pnpm/nuxt@1.4.5/node_modules/nuxt/lib/builder/webpack/postcss.js:80:8)
    at Builder.vueLoader (/Users/huynh/GGJ/new-surface/surface.gogojungle.co.jp/ja/node_modules/.pnpm/nuxt@1.4.5/node_modules/nuxt/lib/builder/webpack/vue-loader.js:7:28)
    at Builder.webpackBaseConfig (/Users/huynh/GGJ/new-surface/surface.gogojungle.co.jp/ja/node_modules/.pnpm/nuxt@1.4.5/node_modules/nuxt/lib/builder/webpack/base.config.js:66:30)
    at Builder.webpackClientConfig (/Users/huynh/GGJ/new-surface/surface.gogojungle.co.jp/ja/node_modules/.pnpm/nuxt@1.4.5/node_modules/nuxt/lib/builder/webpack/client.config.js:31:21)
```
