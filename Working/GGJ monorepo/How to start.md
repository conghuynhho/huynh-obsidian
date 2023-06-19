
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


2 type of service.
- service compatible with node 18
- service not compatible with node 18


1. ✅ Keep all the prestart
- if already yarn before
![[CleanShot 2023-06-19 at 13.32.01.png]]
- if delete all node_modules
	yarn install will be automatically run first at root
	next the `pre-start` will run but still be in `Already up-to-date`
- if one of the service missing node_modules
	yarn install will be automatically run first at root
	next the `pre-start` will run but still be in `Already up-to-date`

- can not use turbo to run service with node `10`

❓Issue with node version.
- current environment node version (consider as node 10)
- node version for `yarn install`
	`run-os-script` help to install with correct version but when
	`[4] Building fresh packages...` this step will run under current `environment` node version.
- ✅ node version for `start` 
	`run-os-script` help to start with correct version
- ❓node version for `commit`


### Run using turbo
- `prestart`: yarn install at root

### Start group of service
- Start from the root. Using `turbo`
