
We are using `turborepo` build on top of core of `workspaces`


### Workspace `node_modules`
- When using Yarn workspaces, all the packages within the monorepo share a common `node_modules` folder located at the root level

```dirtree
- /api/
	- skijan/
		- node_modules
	- skijan-vi
		- node_modules
- /gui/
	- skijan
		- node_modules
	- skijan-vi
		- node_modules
- package.json
- turbo.json
- yarn.lock
```
- It also create only one package lock file at the root

❓How to define workspace
- In the root `package.json`
```json
"workspaces": [
	"apps/gui/skijan/*",
	"packages/ui"
],
```

❓How to use common packages.
- Example skijan

