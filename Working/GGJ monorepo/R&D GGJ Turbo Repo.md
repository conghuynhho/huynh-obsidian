
**Branch:** OAM-103894

# Idea

### Document
- [ ] Document: How to use?
- [ ] Config basic: install turbo global + graph
	- [ ] add node version 18.16.0 recheck version
	- [ ] yarn global add turbo
	- [ ] brew install graphviz (draw dependency graph)

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

# Test & Verified
- `run` and `build` (`gui-skijan`)
- `run` and `build` (`api-skijan`)
- 


# Implement Strategy
- Config run for dev
	- `api`
	- `gui-skijan`
- Config 
	- `eslint` 
	- `typescript`
	- `husky` & `lintstaged`
	-  how to verify `eslint` and `tsconfig` work properly?? 
- Shared code
	- constants
	- logic code
	- UI componens
- Config build for `production`


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


2. `tsconfig`
Base config


##### List repo and special project
**Repository**
- surface
- mypage
- config
- api
- realtrade
- labo
- image
- gogo
*- internal*
*- arc*

**special project**
- sf-ja, sf-en,...
- realtrade
- api-mypage
- mypage
- 

# Need to test

1. [x] Different version on the same packages. How does it work??
	- [Tested] the package will be store in the child `node_modules`, some package will be store in root `node_modules`

2. [ ] only one `yarn.lock` will be generated
	- affect to build ????
	- find solution

	- verify update yarn lock (root? workspace?) ?
	- yarn version 2?
	- check mode dev + mode build? ignore yarn lock in mode build?
	- How to add new lib for root? for child repo? workflow

	Tested: 
	- with yarn workspace only `yarn.lock` is respected. others is ignore.
	- when updating package in the child -> `yarn.lock` in the root update correctly
	- ❌ Error when install new package:
		- `yarn workspace gg.gui.skijan.vi add react-dropzone`
		- `cd apps/gui/skijan/vi && yarn add react-dropzone`
		- issue: https://github.com/yarnpkg/yarn/issues/7807A
		- yarn version: `1.22.19`
		- **solution**: downgrade `yarn@1.19.0` 
			- `yarn policies set-version 1.19.0`
	- 