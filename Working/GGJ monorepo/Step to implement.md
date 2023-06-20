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
3. Config turbo
	- Define script
	- Config turbo
4. Verify version of package
5. Build
	- Dockerhub
	- Test new docker
	- Try to build