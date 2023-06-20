## Code build

- [ ] Create new docker image for `nodejs_18.16.0_codebuild:1.0`
	- Add turbo inside of this image

- [ ] Create new build spec for monorepo
	- Run prune command before compare build docker

- [ ] Edit `Dockerfile` of each workspace of monorepo
	- Do I need turbo in here. Maybe no need.
	- Change path file to copy

How to test in local

![[How to build 2023-06-20 17.56.29.excalidraw]]