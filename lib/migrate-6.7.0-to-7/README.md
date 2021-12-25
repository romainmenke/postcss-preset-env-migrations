# PostCSS Preset Env : Migrate from v6.7.0 to v7

[![NPM Version][npm-img]][npm-url]

⚠️ Do not expect the regular level of support on this package ⚠️

Intended to be used as a stop-gap measure until **you** migrate your CSS source code.

As this provided migration support from `postcss-preset-env` v6.7.0 to v7.x there can be no feature request, or bug reports.

Any change to how this package behaves would defeat the purpose of providing a bridge between v6.7.0 to v7.x.

## Includes:

- [postcss-color-mod-function](https://github.com/csstools/postcss-color-mod-function)
- [postcss-color-gray](https://github.com/postcss/postcss-color-gray)
- [postcss-selector-matches](https://github.com/postcss/postcss-selector-matches)


## Works only with PostCSS v8.x

Intended to be used side by side with `postcss-preset-env` v7.x which only supports PostCSS v8.x.


## Doesn't support JS Modules.

I did not go through the effort of providing support for both `require` and `import` in this package.

Intended to be used as `require('postcss-preset-env-migrate-6.7.0-to-7')`

[npm-img]: https://img.shields.io/npm/v/postcss-preset-env-migrate-6.7.0-to-7.svg
[npm-url]: https://www.npmjs.com/package/postcss-preset-env-migrate-6.7.0-to-7
