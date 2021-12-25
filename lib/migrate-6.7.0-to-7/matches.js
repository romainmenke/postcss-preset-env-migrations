// Balanced Match

// (MIT)
// Copyright (c) 2013 Julian Gruber <julian@juliangruber.com>
// Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
// The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

/**
 * @param {string | RegExp} a
 * @param {string | RegExp} b
 * @param {string} str
 */
function balanced (a, b, str) {
	if (a instanceof RegExp) a = maybeMatch(a, str)
	if (b instanceof RegExp) b = maybeMatch(b, str)

	const r = range(a, b, str)

	return (
		r && {
			start: r[0],
			end: r[1],
			pre: str.slice(0, r[0]),
			body: str.slice(r[0] + a.length, r[1]),
			post: str.slice(r[1] + b.length)
		}
	)
}

/**
 * @param {RegExp} reg
 * @param {string} str
 */
function maybeMatch (reg, str) {
	const m = str.match(reg)
	return m ? m[0] : null
}

balanced.range = range

/**
 * @param {string} a
 * @param {string} b
 * @param {string} str
 */
function range (a, b, str) {
	let begs, beg, left, right, result
	let ai = str.indexOf(a)
	let bi = str.indexOf(b, ai + 1)
	let i = ai

	if (ai >= 0 && bi > 0) {
		if (a === b) {
			return [ai, bi]
		}
		begs = []
		left = str.length

		while (i >= 0 && !result) {
			if (i === ai) {
				begs.push(i)
				ai = str.indexOf(a, i + 1)
			} else if (begs.length === 1) {
				result = [begs.pop(), bi]
			} else {
				beg = begs.pop()
				if (beg < left) {
					left = beg
					right = bi
				}

				bi = str.indexOf(b, i + 1)
			}

			i = ai < bi && ai >= 0 ? ai : bi
		}

		if (begs.length) {
			result = [left, right]
		}
	}

	return result
}

// Selector Matches
// The MIT License (MIT)

// Copyright (c) 2017 Maxime Thirouin

// Permission is hereby granted, free of charge, to any person obtaining a copy of
// this software and associated documentation files (the "Software"), to deal in
// the Software without restriction, including without limitation the rights to
// use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
// the Software, and to permit persons to whom the Software is furnished to do so,
// subject to the following conditions:

// The above copyright notice and this permission notice shall be included in all
// copies or substantial portions of the Software.

// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
// FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
// COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
// IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
// CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.


const pseudoClass = ":matches"
const selectorElementRE = /^[a-zA-Z]/

function isElementSelector(selector) {
	const matches = selectorElementRE.exec(selector)
	// console.log({selector, matches})
	return matches
}

function normalizeSelector(selector, preWhitespace, pre) {
	if (isElementSelector(selector) && !isElementSelector(pre)) {
		return `${ preWhitespace}${ selector }${ pre }`
	}

	return `${ preWhitespace }${ pre }${ selector }`
}

function explodeSelector(selector, list, options) {
	if (selector && selector.indexOf(pseudoClass) > -1) {
		let newSelectors = []
		const preWhitespaceMatches = selector.match(/^\s+/)
		const preWhitespace = preWhitespaceMatches
			? preWhitespaceMatches[0]
			: ""
		const selectorPart = list.comma(selector)
		selectorPart.forEach(part => {
			const position = part.indexOf(pseudoClass)
			const pre = part.slice(0, position)
			const body = part.slice(position)
			const matches = balanced("(", ")", body)

			const bodySelectors = matches && matches.body ?
				list
					.comma(matches.body)
					.reduce((acc, s) => [
						...acc,
						...explodeSelector(s, list, options),
					], [])
				: [body]

			const postSelectors = matches && matches.post
				? explodeSelector(matches.post, list, options)
				: []

			let newParts
			if (postSelectors.length === 0) {
				// the test below is a poor way to try we are facing a piece of a
				// selector...
				if (position === -1 || pre.indexOf(" ") > -1) {
					newParts = bodySelectors.map((s) => preWhitespace + pre + s)
				}
				else {
					newParts = bodySelectors.map((s) => (
						normalizeSelector(s, preWhitespace, pre)
					))
				}
			}
			else {
				newParts = []
				postSelectors.forEach(postS => {
					bodySelectors.forEach(s => {
						newParts.push(preWhitespace + pre + s + postS)
					})
				})
			}
			newSelectors = [
				...newSelectors,
				...newParts,
			]
		})

		return newSelectors
	}
	return [selector]
}

function replaceRuleSelector(rule, list, options) {
	const indentation = rule.raws && rule.raws.before
		? rule.raws.before.split("\n").pop()
		: ""
	return (
		explodeSelector(rule.selector, list, options)
			.join("," + (options.lineBreak ? "\n" + indentation : " "))
	)
}

const creator = (options) => {
	options = Object(options);
	return {
		postcssPlugin: 'postcss-matches',
		Rule(rule, { list }) {
			if (rule.selector && rule.selector.indexOf(":matches") > -1) {
				rule.selector = replaceRuleSelector(rule, list, options)
			}
		},
	};
};

creator.postcss = true;

module.exports = {
	plugin: creator
};

