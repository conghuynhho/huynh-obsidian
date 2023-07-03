
### proxy-labo & proxy-sf

**Branch**: [OAM-105766](https://github.com/gogojungle/api.gogojungle.co.jp)

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

```bash
docker build -f path/to/Dockerfile dir
```

docker take the `dir` as the context directory and sending all files in it to docker deamon
`.dockerignore` is can not solved this issue because docker only look for `.dockerignore` at
in the build context root.
- https://medium.com/@LihauTan/took-me-hours-to-realise-why-docker-build-ignores-my-dockerignore-and-this-is-what-ive-learned-2f87c770ea9c

> [!NOTE] Docker ignore
> Before the docker CLI sends the context to the docker daemon, it looks for a file named `.dockerignore` in the root directory of the context. If this file exists, the CLI modifies the context to exclude files and directories that match patterns in it. This helps to avoid unnecessarily sending large or sensitive files and directories to the daemon and potentially adding them to images using `ADD` or `COPY`.

> Docker CLI will only look for `.dockerignore` file in the root directory of the context, if you have a monorepo of multiple packages, make sure .dockerignore file is on the root directory of your context, it will ignore it if it is somewhere in the subfolder.

> [!Warning] Compare files size sending to docker deamon
> Before: `~500kb`
> After: `60MB`

**Solution**
- create new docker build
	- create new `buildspec`
		- change `build-docker.sh` file path
	- create new `build-docker.sh`
		- change `dir` of docker build command

- correct docker file build

**Step to do**
- [x] Add variable in sheet `aws-config`
- [x] Finish stuff
	- [x] `buildspec`
	- [x] `build-docker.sh`
- [x] build test new docker build at local
- [x] build on aws docker instance 
- [x] push to docker hub
- [x] change sheet aws-config
- [x] correct docker in each service
- [x] build test.



> [!Error] `turbo prune` issues
> The prune output with `--docker` flag will create `out` dir.
> This directory won't have the `dockerignore` in the root. We suppose to run docker build in this `out` dir, but please consider `dockeringore` when implement turbo






```
aws ecr get-login-password --region $AWS_DEFAULT_REGION | docker login --username AWS --password-stdin $AWS_ACCOUNT_ID.dkr.ecr.$AWS_DEFAULT_REGION.amazonaws.com
```

```shell-script
sudo systemctl start docker

docker build -f ./codebuild-img/Dockerfile-node-14.18.0-v2.0 -t gogojungle/nodejs_14.18.0_codebuild:1.1 .

docker login

docker push gogojungle/nodejs_14.18.0_codebuild:1.1

```



**Docker build on amazon linux error**
https://github.com/moby/moby/blob/20.10/profiles/seccomp/default.json

due to seccomp secure option
https://docs.docker.com/engine/reference/commandline/dockerd/#daemon-configuration-file

Configure Docker to use the seccomp profile:

a. Edit the Docker daemon configuration file: Open the Docker daemon configuration file in a text editor. The location of the file depends on your Linux distribution:

- Ubuntu/Debian: `/etc/docker/daemon.json`
- CentOS/RHEL: `/etc/docker/daemon.json`
- Amazon Linux: `/etc/sysconfig/docker`
```
OPTIONS="--seccomp-profile=/path/to/seccomp/profile.json"
```
