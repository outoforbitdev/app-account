install:
    yarn install
    yarn husky install
    yarn husky init
    echo "yarn commitlint --edit \$1 --config ./.linters/config/commitlint.config.js" > .husky/commit-msg
    echo "just lint" > .husky/pre-commit

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