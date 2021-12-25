const matches = require('./matches.js');
const gray = require('./gray.js');
const colorMod = require('./color-mod-function.js');

const creator = (options) => {
	options = Object(options);
	return {
		postcssPlugin: 'postcss-migrate-6.7.0-to-7',
		plugins: [
			matches.plugin(Object(options)['postcss-selector-matches']),
			gray(Object(options)['postcss-color-gray']),
			colorMod(Object(options)['postcss-color-mod-function'])
		]
	};
};

creator.postcss = true;

module.exports = creator;
