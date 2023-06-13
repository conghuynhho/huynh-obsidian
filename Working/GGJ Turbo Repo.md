
**Branch:** OAM-103894


### Document
- [ ] Document: How to use?
- [ ] Config basic: install turbo global + graph
	- [ ] add node version 18.16.0 recheck version
	- [ ] yarn global add turbo
	- [ ] brew install graphviz

### Basic
- [x] create Config surface demo
- [x] create Config surface + API skijan ja
- Build lib dependent ( remove lib configs)
- Đặt commmon package ở đâu (nextjs, MUI, nestjs…)?
- Defined Run dev Theo bộ API + GUI
- [x] Config ENV (No need)
- Config code build mode production

### Next Step
- Add husky, lintstaged
- Lib ES  lint & typescript đặt ở đâu? Local or global?
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


# Issue 

1. Node-sass at step 4 in `yarn install` was run under `v18.16.0`
	```
	[4/4] Building fresh packages...
	```

	**Possible Solutions**


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

### Gui skijan
- [x] Import icon from `@mui/material-icons/{}` failed
	- `yarn cache clean` solved the issue


### Production build
- Reduce node_modules size on server
- Maybe can using `yarn <custome_package.json>`

# Notes

1. Because some packages will be hoist to the root node_modules and it also create new `yarn.lock` file. Therefore, some package with `caret range` will be update when using `workspaces`
	Example: 
	- `@mui/lab`


