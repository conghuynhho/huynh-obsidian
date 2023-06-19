
**Branch:** OAM-103894

# Idea

### Document
- [ ] Document: How to use?
- [ ] Draw graph

### Basic
- [x] create Config surface demo
- [x] create Config surface + API skijan ja
- Build lib dependent ( remove lib configs)
- Đặt commmon package ở đâu (nextjs, MUI, nestjs…)?
- Defined Run dev Theo bộ API + GUI
- [x] Config ENV (No need)
- Config code build mode production

### Next Step
- Add husky, lintstaged, Lib Eslint
- typescript đặt ở đâu? Local or global?
- Defined config ESlint & typescript & UI component

### Share
- Share business code ( nodejs or typescipt)
- Share logic API( nodejs or typescipt), Model
- Share config ESlint & typescript & UI component

### Advanced
- Xử lý node 10
- Remote cache? 


# Issues

**1. Gui skijan**
- [x] Import icon from `@mui/material-icons/{}` failed
	- `yarn cache clean` solved the issue


- [ ] Node-sass at step 4 in `yarn install` was run under `v18.16.0`
	```
	[4/4] Building fresh packages...
	```

	**Possible Solutions**


**2. Production build**
- Reduce node_modules size on server
- Maybe can using `yarn <custome_package.json>`
- How to copy `node_modules` when the packages is now stored in multiple `node_modules`
```Dockerfile
COPY --from=builder ${GOGO_WD}/node_modules ./node_modules
COPY --from=builder ${GOGO_WD}/package.json ./package.json
```

# Notes

1. Because some packages will be hoist to the root node_modules and it also create new `yarn.lock` file. Therefore, some package with `caret range` will be update when using `workspaces`
	Example: 
	- `@mui/lab`



# Need to test

1. [x] Different version on the same packages. How does it work??
	- [Tested] the package will be store in the child `node_modules`, some package will be store in root `node_modules`

2. [x] only one `yarn.lock` will be generated
	- [x] verify update yarn lock (root? workspace?) ?
	- [x] yarn version 2? (breaking changes)
	- check mode dev + mode build? ignore yarn lock in mode build?
	- [x] How to add new lib for root? for child repo? workflow
	- [x] Migrate old yarn.lock to new root yarn.lock
		- Solution will be accept the risk and update new package. Maybe need effort to test and verify

3. How to start services (Huynh)
	- [x] start group services
		- Define task to run group services in `package.json` and `turbo.json`
		- `"start:api": "turbo run start --filter=gogo.api.skijan"`
	- [x] start separate service
		- Solution 1: Define task to run for each service
		- Solution 2: `cd` in to the workspace and run it.
		- ✏️ Need to find a way to improve performances of yarn.
	- [ ] should we apply remote cache in dev mode?
 
4. Research `pnpm`: [[pnpm Research]] 
	Result:
	- working except project with `NuxtJS 2` (sf-ja, sf-en,...) , `gui-mypage`
	- service with `node 10` need `pnpm@5`
	Conclude: 
	- Can apply but not for all
 -> ❌ Not apply `pnpm`
 
5. Test yarn specific workspace by custom package.json.
	- working
6. ✅ Test merge git repository.
	~~- `git-filter-repo` to create subfolder~~
	```sh
	#cd path/to/project-a
	#git filter-repo --to-subdirectory-filter project-a
	```
	- Step to merge:
	```zsh
	cd path/to/project-b
	git remote add project-a /path/to/project-a
	
	git fetch project-a --tags
	git merge --allow-unrelated-histories project-a/master
	git remote remove project-a
	```
	- `git mv source-dir/ dest/new-source-dir`
7. Test build config

- with yarn workspace only `yarn.lock` is respected. others is ignore.
-  ✅ when updating package in the child -> `yarn.lock` in the root update correctly
- ✅ Add new lib, edit lib version. -> Work well
	- How to add new lib in the child project:
		- `yarn workspace <name> add <package>`
		- `cd <path_to_workspace> && yarn add <package>`
	- How to add new lib in the root:
		- `yarn add -W <package>`: to avoid accidentally add package to the root, yarn workspace default will through the error when running `yarn add` in the root.
- ❌ Error when install new package:
	- `yarn workspace gg.gui.skijan.vi add react-dropzone`
	- `cd apps/gui/skijan/vi && yarn add react-dropzone`
	- issue: https://github.com/yarnpkg/yarn/issues/7807A
	- yarn version: `1.22.19`
	- **solution**: downgrade `yarn@1.19.0` 
		- `yarn policies set-version 1.19.0`
- ❌ dev: yarn only individual service using (yarn with specific package.json)
	- drawback: `yarn.lock` would be change in development. 


# Downside need to solve



# A little deep think


#### Repositories
- mypage.gogojungle.co.jp 
- surface.gogojungle.co.jp
- api.gogojungle.co.jp
- gogojungle.co.jp     
- real-trade.tech
- configs.gogojungle.co.jp 
- internal-api-v2        
- arc.gogojungle.co.jp     
- img.gogojungle.co.jp 
- labo.gogojungle.co.jp   
- internal-api 

#### Type of Services
**GUI**
- `Vuejs`: mypage (node 10)
- `Nuxtjs`: sf, real-trade, labo (node 10)
- `React`: (library) (#)
- `Next`: (gui-skijan) (node 14)

**API**
- `ExpressJS`: 
- `NestJS`: 
- `Loopback`: 
- `PHP` no problem

🔥 Consider which one will be put in workspaces



