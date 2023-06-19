
How to start services (Huynh)
- [x] start group services
	- Define task to run group services in `package.json` and `turbo.json`
	- `"start:api": "turbo run start --filter=gogo.api.skijan"`
- [x] start separate service
	- Solution 1: Define task to run for each service
	- Solution 2: `cd` in to the workspace and run it.
	- ✏️ Need to find a way to improve performances of yarn.
- [ ] Define the script in `package.json`
- [ ] should we apply remote cache in dev mode?

❌ Can not use `node 10` for global env.
	- `NextJS 13` require nodejs 14
❌ Can not use `node 14` for global env.
	- Can not `yarn install` some service 

💡**Solution**:
- Upgrade `node:10` to `node:14`
- Using custom `package.json` for every fail `node:10`
	In this package.json. It will filter out all of the service has library required `node:14`
	❓What if common package has to required  `node:14`

> [!Error] Node 10 compatible
> Can not yarn global



1. ✅ Keep all the prestart
- if already yarn before
![[CleanShot 2023-06-19 at 13.32.01.png]]
- if delete all node_modules
	yarn install will be automatically run first at root
	next the `pre-start` will run but still be in `Already up-to-date`
- if one of the service missing node_modules
	yarn install will be automatically run first at root
	next the `pre-start` will run but still be in `Already up-to-date`

❓Issue with node version.
- node version for `yarn install`
	`run-os-script` help to install with correct version but when
	- `[4] Building fresh packages...` this step will run under current `environment` node version.
	- `NextJS 13 required node:14` to install SWC correctly.
- ✅ node version for `start` 
	`run-os-script` help to start with correct version
- ❓node version for `commit`


### Run using turbo
- `prestart`: yarn install at root
- `prestart:xxxx` for group of services x

### Start group of service
- Start from the root. Using `turbo`
- Keep `prestart` in all the service (redundant in this case but not have any bad effects)

### Start a separate service
- `yarn --cwd <project-path>` 
- Keep all the prestart

> [!WARNING] Yarn with current env node version != 10
> Because `yarn install` will trigger all `install` for all the workspaces. The process will be fail because some workspaces must to be `yarn install` in node 10.


### In the long run.
`node 10` is not good 

Found issue: 
- GUI
	- `building node-sass` when install package
	- `gui-mypage & editorjs`
- API
	- ❓❓❓

## Conclude
Keep using `node 10` 
Next phase: try to upgrade all the service to higher node version



