	Because everything working well with service compatible with  `node 14`

### Implement strategy

1. Define folder structure ???
```dirtree
- /api/
	- skijan
	- skijan-vi
- /gui/
	- skijan
	- skijan-vi
- /docs/
	- abc
	- xyz
- /statics/
- /scripts/
- /packages/
	- ui-components
	- shared-lib
	- common-api
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
3. Config turbo
	- Define script
	- Config turbo
4. Verify version of package
5. Build
	- Dockerhub
	- Test new docker
	- Try to build