
# Step to implement

1. Install turbo global
2. Node version 18

##### Config `eslint` and `tsconfig` for `api-skijan`

##### Api skijan depend on `comm-api-skijan`
- move `comm-api-skijan` to packages
- add workspace in root `package.json`
	```json
	  "workspaces": [
	    "apps/gui/skijan/*",
	    "apps/api/*",
	    "packages/*",
	    "packages/common-api/*"
	  ],
	```
- add `dependencies` in api `skijan` and `skijan-vi`
```json
dependencies: {
	"comm-api-skijan": "**"
}
```
- Need to correct all the exist import

- How typescript understand
- Import path???
- [x] `eslint` is separate of this part

#### Config `tsconfig`

**1. Base**
- 


**NOW:**
- [ ] define base config ts
- [ ] befine base eslint config