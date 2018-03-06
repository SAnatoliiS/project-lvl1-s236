install:
	npm install --save-dev babel-core babel-cli babel-preset-env babel-preset-stage-0
start:
	npm run babel-node -- src/bin/brain-games.js
publish:
	npm publish
install:
	sudo npm install -g anatolii-brain-games
