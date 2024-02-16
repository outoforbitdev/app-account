app_name := "app-account"

install:
    yarn install
    yarn husky install
    yarn husky init
    echo "yarn commitlint --edit \$1 --config .config/commitlint.config.js" > .husky/commit-msg
    echo "just lint" > .husky/pre-commit
    mkdir -p .config
    echo "module.exports = { extends: [\"@commitlint/config-conventional\"] };" > .config/commitlint.config.js

rebuild-staging:
    git fetch
    git checkout staging
    git checkout main
    git push origin --delete staging
    git branch -d staging
    git checkout main
    git pull
    git fetch && git checkout -b staging origin/main
    git push origin staging

lint:
    docker run -v $(pwd):/polylint/app polylint

run: clean
    # Build image
    docker build -t {{app_name}} ./app-account
    # Run image
    docker run -d -p 1798:44446 -v ./{{app_name}}/ClientApp/src:/app/ClientApp/src --name {{app_name}} {{app_name}}
    # Wait for the server to start
    docker container exec {{app_name}} wget http://localhost:5149 &> /dev/null
    # Wait for the SPA development server to start
    docker container exec {{app_name}} wget --no-check-certificate https://localhost:44446 &> /dev/null
    # Launch browser
    open https://localhost:1798

build: clean
    # Build image
    docker build -t {{app_name}} .
    # @TODO: remove this. This is just for testing that the build works.
    docker run -d -p 1798:80 --name {{app_name}} {{app_name}}
    # Launch browser
    open http://localhost:1798

clean : stop
	-docker rmi {{app_name}}

stop :
	-docker stop {{app_name}}
	-docker rm {{app_name}}