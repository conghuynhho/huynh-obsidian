	Because everything working well with service compatible with  `node 14`

### Implement strategy

1. Define folder structure ???
```dirtree
- /apps/
	- /api/
		- skijan
		- skijan-vi
	- /gui/
		- skijan
		- skijan-vi
	- /docs/
		- abc
		- xyz
	- /proxy
		- labo
		- ggj
	- /guard
		- skijan
		- myaccount
		- ....
- /statics/
- /packages/
	- ui-components
	- common-api
	- common-guard
	- tsconfig-bases
	- eslint-config-bases
- package.json
- turbo.json
```
2. Merge repository
	- Step to merge:
	```zsh
	cd path/to/project-b
	git remote add project-a /path/to/project-a
	
	git fetch project-a --tags
	git merge --allow-unrelated-histories project-a/master
	git remote remove project-a
	```
	- `git mv source-dir/ dest/new-source-dir`
3. Add `typescript` support for `js` project
4. Config turbo
	- Define script
	- Config turbo
6. Verify version of package
7. Build
	- Dockerhub
	- Test new docker
	- Try to build


### Brainstorm

Biggest issue is merging repository.
Repositories has developing code. 
If I move it. The developing should not be in the old repository.

💡**Solutions**
1. Merge `staging` to `release` for both `api` and `sf`
2. Merge `release` to `developing` branches (make developing branch up to date with staging branch)
3. Merge master `sf` to -> master `api`
4. Create new `staging` branch from `master` api
5. Create `release` branch from  `staging` api

![[Step to implement 2023-06-26 10.20.15.excalidraw]]












