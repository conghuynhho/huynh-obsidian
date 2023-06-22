## Code build

- [x] Create new docker image for `nodejs_18.16.0_codebuild:1.0`
	- Add turbo inside of this image

- [ ] Create new build spec for monorepo
	- Run prune command before compare build docker

- [ ] Edit `Dockerfile` of each workspace of monorepo
	- Do I need turbo in here. Maybe no need.
	- Change path file to copy

How to test in local

### Need to do

- [x] Build success `docker code-build` and push to docker hub
- [ ] create new `build-spec.yaml`
	-  compare `/out/yarn.lock` and `path to Dockerfile`
- [ ] Create new test `aws-codebuild`
	- [ ] with new column `service-name`
	- [ ] with new docker image
	- [ ] with new build spec
- [ ] ?? service's docker -> just need to edit
	- edit `build.sh` to build in the `/out/apps` folder
	- edit `cp-bundle.sh`
	- ...



















![[How to build 2023-06-20 17.56.29.excalidraw]]