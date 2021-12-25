# PostCSS Preset Env Migrations

Migrate your CSS source code to the next version of postcss-preset-env

## Features

Manually migrating a CSS code base to the next version of postcss-preset-env is a large chore and manual fixes can introduce bugs.
This extension applies select transforms to your CSS source code automatically.

New major versions of `postcss-preset-env` might drop support for certain transforms breaking your CSS.
This extension includes only those transforms that have been dropped.

Just select the code you want to migrate and run the extension.
After this one time fix, you can update to the next version of `postcss-preset-env`.

## Usage

1. select the CSS source code you want to migrate.
2. `cmd` + `shift` + `p` / `ctrl` + `shift` + `p`
3. start typing : `PostCSS Preset Env : Migrate selection to a newer version.`
4. pick `6.7.0 -> 7.x`
5. `enter`
6. save your file

## Change Log

### 1.0.0

Provide a migration from `postcss-preset-env` v6.7.0 to v7.x

- `postcss-selector-matches`
- `postcss-color-gray`
- `postcss-color-mod-function`

Before :

```css
p:matches(:first-child, .special) {
  color: red;
}

body {
  background-color: gray(100);
  color: gray(0 / 90%);
}

:root {
  --brand-red: color-mod(yellow blend(red 50%));
  --brand-red-hsl: color-mod(yellow blend(red 50% hsl));
  --brand-red-hwb: color-mod(yellow blend(red 50% hwb));
  --brand-red-dark: color-mod(red blackness(20%));
}
```

After :

```css
p:first-child, p.special {
  color: red;
}

body {
  background-color: rgb(255,255,255);
  color: rgba(0,0,0,0.9);
}

:root {
  --brand-red: rgb(255, 128, 0);
  --brand-red-hsl: hsl(30, 100%, 50%);
  --brand-red-hwb: rgb(255, 128, 0);
  --brand-red-dark: rgb(204, 0, 0);
}
```
