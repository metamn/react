---
title: 'On tokens'
date: '2021-01-09'
---

For design systems.

<!--more-->

---

## Tokens

Tokens are the base layer of design systems and component libraries.

This is where typography, color, scaling, spacing, etc. settings goes together with other primitives like backgrounds, icons, borders and other decorations.

## Fragmentation

Everybody rolls their own design system and component library without a common theory behind.

This leads to lack of interoperability between them.

Every design system / component library has to be learnt from scratch. In spite they offer the same functionality.

At least the common base&mdash;tokens&mdash;should be the same.

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

## Type checking

I've used my design system to create dozens of websites. It scaled well in [template-based](http://metamn.io/react/a-little-css-history) environments.

In recent component-based environments (React, CSS-in-JS) developers started to build with types.

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

## Summing up

A standard theory is possible for token definitions. Both in template and component-based environments.

The technology of choice should be Typescript to make tokens error-proof and consistent.
