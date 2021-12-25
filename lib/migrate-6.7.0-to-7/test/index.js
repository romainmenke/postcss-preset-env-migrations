const pack = require('../index.js');
const postcss = require('postcss');
const assert = require('assert');

require('./matches.js');

function transform(css, options) {
	return postcss([pack(options)]).process(css, {from: 'test'}).css.toString();
}

assert.strict.deepEqual(
	transform("body {}"),
	"body {}",
	"should do nothing if there is no :matches"
)

assert.strict.deepEqual(
	transform("body, matches {}"),
	"body, matches {}",
	"should really do nothing if there is no :matches"
)

assert.strict.deepEqual(
	transform(":matches(a, b) {}"),
	"a, b {}",
	"should transform simple :matches()"
)

assert.strict.deepEqual(
	transform("tag:matches(.class, .class2) {}"),
	"tag.class, tag.class2 {}",
	"should transform directes :matches()"
)

assert.strict.deepEqual(
	transform("tag :matches(tag2, tag3) {}"),
	"tag tag2, tag tag3 {}",
	"should transform :matches()"
)

assert.strict.deepEqual(
	transform("tag :matches(tag2, tag3) :matches(tag4, tag5) {}"),
	"tag tag2 tag4, tag tag3 tag4, tag tag2 tag5, tag tag3 tag5 {}",
	"should transform mutltiples :matches()"
)

assert.strict.deepEqual(
	transform("tag :matches(tag2, tag3) :matches(tag4, tag5), test {}"),
	"tag tag2 tag4, tag tag3 tag4, tag tag2 tag5, tag tag3 tag5, test {}",
	"should transform mutltiples :matches() with stuff after"
)

assert.strict.deepEqual(
	transform(":matches(tag) :matches(tag2, tag3):hover {}"),
	"tag tag2:hover, tag tag3:hover {}",
	"should transform mutltiples :matches() with pseudo after"
)

assert.strict.deepEqual(
	transform("tag :matches(tag2 :matches(tag4, tag5), tag3) {}"),
	"tag tag2 tag4, tag tag2 tag5, tag tag3 {}",
	"should transform :matches() recursively"
)

assert.strict.deepEqual(
	transform("p:matches(a, span) {}"),
	"pa, pspan {}",
	"should transform shit if you ask for shit ?"
)

assert.strict.deepEqual(
	transform(".foo:matches(:nth-child(-n+2), .bar) {}"),
	".foo:nth-child(-n+2), .foo.bar {}",
	"should transform childs with parenthesis"
)

assert.strict.deepEqual(
	transform(`a:matches(
.b,
.c
) {}`),
	"a.b, a.c {}",
	"should works with lots of whitespace"
)

assert.strict.deepEqual(
	transform(".foo:matches(:nth-child(-n+2), .bar) {}", { 'postcss-selector-matches': { lineBreak: true } }),
	".foo:nth-child(-n+2),\n.foo.bar {}",
	"should add line break if asked too"
)

assert.strict.deepEqual(
	transform("  .foo:matches(:nth-child(-n+2), .bar) {}", { 'postcss-selector-matches': { lineBreak: true }}),
	"  .foo:nth-child(-n+2),\n  .foo.bar {}",
	"should add line break if asked too, and respect indentation"
)

assert.strict.deepEqual(
	transform("\n  .foo:matches(:nth-child(-n+2), .bar) {}", { 'postcss-selector-matches': { lineBreak: true } }),
	"\n  .foo:nth-child(-n+2),\n  .foo.bar {}",
	"should add line break if asked too, and respect indentation even with \n"
)

assert.strict.deepEqual(
	transform(`
button:matches(:hover, :active),
.button:matches(:hover, :active) {}`),
	`
button:hover, button:active, .button:hover, .button:active {}`,
	"should avoid duplicates"
)

assert.strict.deepEqual(
	transform(".foo:matches(:hover, :focus)::before {}"),
	".foo:hover::before, .foo:focus::before {}",
	"should work with something after :matches()"
)

assert.strict.deepEqual(
	transform("article :matches(h1, h2, h3) + p {}"),
	"article h1 + p, article h2 + p, article h3 + p {}",
	"should works correctly with adjacent selectors"
)

assert.strict.deepEqual(
	transform("article :matches(h1, h2, h3) + p {}", { 'postcss-selector-matches': { lineBreak: true } }),
	`article h1 + p,
article h2 + p,
article h3 + p {}`,
	"should works correctly with adjacent selectors and line break"
)

assert.strict.deepEqual(
	transform(".foo:matches(p) {color: red;}"),
	"p.foo {color: red;}",
	"should works correctly with a class and an element"
)

assert.strict.deepEqual(
	transform(".fo--oo > :matches(h1, h2, h3) {}"),
	".fo--oo > h1, .fo--oo > h2, .fo--oo > h3 {}",
	"regression https://github.com/postcss/postcss-selector-matches/issues/10"
)

assert.strict.deepEqual(
	transform(":matches(h4, h5, h6):hover .ba--z {}"),
	"h4:hover .ba--z, h5:hover .ba--z, h6:hover .ba--z {}",
	"regression https://github.com/postcss/postcss-selector-matches/issues/10"
)

assert.strict.deepEqual(
	transform(":matches(a, b).foo, .bar {}"),
	"a.foo, b.foo, .bar {}",
	"regression https://github.com/postcss/postcss-selector-matches/issues/10"
)
