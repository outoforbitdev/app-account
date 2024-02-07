install:
    yarn install
    yarn husky install
    yarn husky init
    echo "yarn commitlint --edit \$1 --config .config/commitlint.config.js" > .husky/commit-msg
    echo "just lint" > .husky/pre-commit
    mkdir -p .config
    echo "module.exports = { extends: ['@commitlint/config-conventional'] };" > .config/commitlint.config.js

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
    docker build -t app-account .

clean : stop
	-docker rmi app-account

stop :
	-docker stop app-account
	-docker rm app-account