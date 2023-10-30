.SILENT:

.DEFAULT_GOAL = help

COLOR_RESET = \033[0m
COLOR_GREEN = \033[32m
COLOR_YELLOW = \033[33m

PROJECT_NAME = `basename $(PWD)`

SHELL := /bin/bash

## prints this help
help:
	printf "${COLOR_YELLOW}\n${PROJECT_NAME}\n\n${COLOR_RESET}"
	awk '/^[a-zA-Z\-\_0-9\.%]+:/ { \
		helpMessage = match(lastLine, /^## (.*)/); \
		if (helpMessage) { \
			helpCommand = substr($$1, 0, index($$1, ":")); \
			helpMessage = substr(lastLine, RSTART + 3, RLENGTH); \
			printf "${COLOR_GREEN}$$ make %s${COLOR_RESET} %s\n", helpCommand, helpMessage; \
		} \
	} \
	{ lastLine = $$0 }' $(MAKEFILE_LIST)
	printf "\n"


## build-image
build-image:
	docker build . \
    -t miguelsmuller/front-target-transaction \
    --build-arg API_URL=http://34.145.100.153:5028


## run-image
run-image:
	docker run --name front-target-transaction \
    -p 3090:80 \
    -d miguelsmuller/front-target-transaction


## stop-image
stop-image:
	docker container stop front-target-transaction && \
    docker rm -f front-target-transaction


## tag-image
tag-image:
	docker tag miguelsmuller/front-target-transaction miguelsmuller/front-target-transaction:1.0.0


## publish-image
publish-image:
	docker push miguelsmuller/front-target-transaction:1.0.0
