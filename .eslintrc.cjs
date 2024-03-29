module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	settings: {
		react: {
			version: 'detect',
		},
	},
	extends: [
	'plugin:react/recommended',
	 'plugin:react/jsx-runtime', 
	 'plugin: react-hooks/recommended',
	 'standard'],
	overrides: [],
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	plugins: ['react'],
	rules: {
		multilineternary: false,
	},
};
