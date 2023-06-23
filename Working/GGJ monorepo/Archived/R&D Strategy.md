
# R&D Strategy
- Config run for dev
	- `api`
	- `gui-skijan`
- Config 
	- `eslint` 
	- `typescript`
	- `husky` & `lintstaged`
- Shared code
	- constants
	- logic code
	- UI componens
- Config build for `production`



- ESlint (Hao)
    +  Eslint lib common or seperate?
    + Core eslint packages -> place in the root
    + Separate eslint packges -> place in the workspace
    + `eslint` dependencies (plugin , typescript, ...)
    +  ESlint config:
        + [ ] base config. 
	        + js base config
	        + ts base config: 
	- [ ] framework config (extend from base)
		- nestjs
		- nextjs
		- nuxtjs
		- vue
		- react
        + [ ] how to extend?
        + [ ] Add husky, lintstaged

-> Output: 
- [ ] Define `tsconfig` for each framework


## Typescript (Nam)
- Import .ts into .js? Research
	- Demo. Is it possible to import `ts` to `js`
- Place Typescript package separate in each workspace.
- How many workspace using typescript.
- TypeScript config:
	+ base config:
		+ nestjs.config.json
		+ nextjs.config.json
	+ how to extend?