install:
	npm install --save-dev babel-core babel-cli babel-preset-env babel-preset-stage-0
start:
	npm run babel-node -- src/bin/brain-even.js
publish:
	npm publish
load:
	npm install anatolii-brain-games
lint:
	npm run eslint src/*.js src/bin/*.js
