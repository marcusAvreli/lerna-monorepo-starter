module.exports = {
	env: {
		browser: true,
		es6: true,
		node: true,
	},
	parserOptions: {
		ecmaVersion: 2019,
		sourceType: 'module',
	},
	rules: {
		indent: [1,'tab'],
		'linebreak-style': ['error', 'windows'],
		quotes: ['error', 'single'],
		semi: ['error', 'always'],
	},
	extends: ['@shared/eslint-config'],
};