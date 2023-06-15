

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


