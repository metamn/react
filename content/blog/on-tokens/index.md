---
title: 'On tokens'
date: '2021-01-09'
---

For design systems.

<!--more-->

---

## Tokens

Tokens are the base layer of design systems and component libraries.

This is where typography, color, scaling, spacing, backgrounds, icons, borders and any other settings go.

## Fragmentation

Everybody rolls their own design system and component library without a common theory behind.

This leads to a lack of interoperability.

Every tool has to be learnt from scratch. In spite they offer the same functionality.

Reusable design systems would reduce the cognitive load. Learn once, use everywhere.

## Theme Specification

[Theme Specification](https://system-ui.com/), an open source organization and initiative, is singular in the attempt to standardize tokens and enable interoperable UI components.

Github, Artsy, Gatsby and others embrace this theory and build their design systems upon.

While the naming conventions In Theme Specification might work the implementations&mdash;[Styled system](https://styled-system.com/), [Theme UI](https://theme-ui.com/)&mdash;are certainly not meeting all token requirements.

## Token requirements

Any token system must meet the following requirements:

1. Full support for the CSS specification.
2. Including media queries.
3. Tokens should be reusable.

Media query support is where current Theme Specification implementations fail. Neither Theme UI nor Styled System supports arbitrary responsive styles.

For example, it's impossible to find out from the [documentation](https://theme-ui.com/theming/#styles) how to use different colors for different viewports.

```js
// How to make h1 color red on mobile phones?
h1: {
  fontSize: 32,
  fontFamily: 'heading',
  fontWeight: 'heading',
  color: 'primary',
  mt: 4,
  mb: 2,
},
```

The token system must have a `responsive` key to enable responsive values.

Back in 2015 [I've managed](https://github.com/metamn/gust/blob/master/code/framework/design/typography/text-style/text-style.json) to come up with a token system fulfilling all requirements.

It was JSON based, recursive (reusable tokens aka. mixins), and responsive.

```json
{
      "name": "Body text",
      "description": "Settings for text blocks.",
      "based_on": "Nimbus Sans",
	  "mixins": [
        {
          "name": "p"
        }
      ],
      "properties": [
        {
          "name": "max-width",
          "value": "25em"
        }
      ],
      "responsive": [
        {
          "breakpoint": "mobile",
          "mixins": [
            {
              "name": "color",
              "value": "red"
            }
          ]
        },
      ]
    },
```

And scaled well in [template-based](http://metamn.io/react/a-little-css-history) environments.

## Type checking

In recent component-based environments (React, CSS-in-JS) developers started to build with types instead of plain Javascript or JSON.

Types make code scalable. They offer syntax checking during development time to ensure no syntax errors will occur later during execution time.

Taking the first example, from Styled system / Theme UI, what if there is no `heading` font family defined? Or a `primary` color?

```js
// This notation is not able to check for undefined values
h1: {
  fontSize: 32,
  fontFamily: 'heading',
  fontWeight: 'heading',
  color: 'primary',
  mt: 4,
  mb: 2,
},
```

The result will be unknown.

In contrast, with type checking the result is always guaranteed. Such errors aren't possible to make. Undefined values cannot take part of the source code.

## An up-to-date solution

Theme Specification's naming conventions are a great foundation to build upon. They don't follow any abstraction&mdash;they are pure and natural.

Instead of Javascript / JSON definitions, Typescript should be used. To make token settings error-proof.

Instead of recursive declarations (`fontFamily: 'heading'`), composition, from the Functional Programming paradigm should be used. To put tokens on a complete modular architecture.

The first example, on this new stack, would look like:

```ts
const fontSize = useFontSize(32)
const fontFamily = useFontFamily('heading')
const fontWeight = useFontWeight('heading')
const color = useColor('primary')
const spacing = useSpacing({ mt: 4, mb: 2 })

// NOTE: Every `useXXX()` function is a Typescript function.
// This makes sure invalid arguments cannot be passed.

const h1 = {
  ...fontSize,
  ...fontFamily,
  ...fontWeight,
  ...color,
  ...spacing,
}
```

Isn't this beautiful?
