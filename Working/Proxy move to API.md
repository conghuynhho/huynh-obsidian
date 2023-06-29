
### Proxy labo

?? move to api ???
	- edit code build
?? use what common ??
?? install @nest ???
?? put where in api
?? other proxy put whereA

Currently
- tsc compile will be ignore the node_modules so the common must have no dependencies.
- have to install @nest or some dependencies at the consume one and then config `tsconfig` so that the package does link the package in the consumer `node_modules`
- Build will be the same

Monorepo
1. ❌ add lib at common
	- prune work fine
	- tsc ruin my think. the `./dist` won't have enough package
2. the same as currently
 But we don't have to config `tsconfig` for `comm-package` to link to the `node_modules`


List down packages:
```json
{
	"cacheman-memory": "^1.1.0",
	"ip": "^1.1.8",
	"geoip-country": "^4.1.61",
	"@nestjs/common": "^8.4.0",
    "@nestjs/core": "^8.4.0",
}
```

**TODO**
- [x] sync code to labo
- [ ] check docker performance: run time, size
- [x] check lintstage
- [ ] check static path: mypage gui


### Change build config
1. update aws-codebuild : https://docs.google.com/spreadsheets/u/1/d/1s6nyY6H57hyZS-rra_9jXx3BNjIfpKNBD9VuxHHugYA/edit?pli=1#gid=1824190196&range=F35
	- path docker
	- fileBuidDocker
	- source
2. Change build script and run script in `package.json`
3. Correct `Dockerfile`
4. Improve build performance



#### Docker context size

Because we are build docker at the root of repository. Now it is a big repository.
Unnessary files and directories will be send into docker deamon.
Docker 
