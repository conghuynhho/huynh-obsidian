
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

### Turbo feature

[Official Documents](https://turbo.build/repo)

`turbo` document does not mention which is the minimum `node` version to run `turbo`. 
Tested and `turbo` work in node `10` `14` `18`

- `turbo` tasks: https://turbo.build/repo/docs/core-concepts/monorepos/running-tasks
- run task with `filtering`: https://turbo.build/repo/docs/core-concepts/monorepos/filtering
- `turbo prune`: https://turbo.build/repo/docs/reference/command-line-reference/prune

## ❓ How to
### How to build
- [x] Build success `docker code-build` and push to docker hub
- [ ] create new `build-spec.yaml`
	-  compare `/out/yarn.lock` and `path to Dockerfile`
- [ ] Create new test `aws-codebuild`
	- [ ] with new column `service-name`
	- [ ] with new docker image
	- [ ] with new build spec
- [ ] ?? service's docker -> just need to edit
	- edit `build.sh` to build in the `/out/apps` folder
	- edit `cp-bundle.sh`
	- ...

### How to start


> [!NOTE] Notice
> Remember to run `yarn` before start any services

1. **Start group of service**
	- Start from the root.
	- Using `turbo --filter`
	- `start` script will be define and doc later in `package.json`
2. **Start a service separately**
	- `yarn --cwd <workspace-path>` or start at the service dir
	- or `cd` to path of workspace and run `yarn start`


### How to add new library
To add new package in specific workspace:
`yarn workspace <workspace-name> add <package_name>


### How to add new workspace
❓How to define workspace
- In the root `package.json`
```json
"workspaces": [
	"apps/gui/skijan/*",
	"packages/ui"
],
```

### How to use common package
❓How to use common packages.
Example `skijan` now using common `ui` package
- In `skijan` `package.json` file:
```json
"dependencies": [
	"ui": "*"
]
```
The `*` symbol in the dependency declaration means that NPM should install the latest **compatible** version of the `ui` package.



### Eslint, Lintstaged & Husky

### Typescript


### Issues
- projects in `node 10` and `node 14` not compatible. can not use together.
- new `yarn.lock` will be created in the root and all old `yarn.lock` will be ignored. Therefore, our old library can be update to new version. This leads to needing to check new version work OK.

