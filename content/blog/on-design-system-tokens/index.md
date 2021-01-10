---
title: 'On design system tokens'
date: '2021-01-10'
---

Theory.

<!--more-->

---

## Tokens

Tokens are the base layer of design systems and component libraries.

This is where typography, color, scaling, spacing settings goes together with other primitives like background patterns, borders and other decorations.

## Fragmentation

Everybody rolls their own design system and component library without a common theory behind.

This led to lack of interoperability between them at basic, token level.

While tokens define the same settings, the different naming conventions make them unique.

Tokens from a design system are not compatible with tokens from another design system.

## Theme Specification

[Theme Specification](https://system-ui.com/), an open source organization and initiative, is singular in the attempt to standardize tokens and enable interoperable UI components.

Github, Artsy, Gatsby and others embrace this theory and build their design systems upon.

While the naming conventions might work the implementations&mdash;[Styled system](https://styled-system.com/), [Theme UI](https://theme-ui.com/)&mdash;are certainly not meeting all token requirements.

## Token requirements

A token system must meet the following requirements:

1. Full support for the CSS specification.
2. Including media queries.
3. Tokens should be reusable.

Media query support is where current Theme Specification implementations fail. Neither Theme UI nor Styled System supports arbitrary responsive styles.

For example, it's impossible to find out from the [documentation](https://theme-ui.com/theming/#styles) how to use different colors for different viewports.

```
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

[My own (humble)](https://github.com/metamn/gust/blob/master/code/framework/design/typography/text-style/text-style.json) token system demonstrates the idea:

```
{
      "name": "Body text",
      "description": "Settings for text blocks.",
      "based_on": "Nimbus Sans",
      ...
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

## The outdated JS/JSON notation

I've used my design system since 2015 to create dozens of websites.

The theory behind&mdash;recursive, responsive JSON token definitions&mdash;scaled well in [template-based](http://metamn.io/react/a-little-css-history) environments.

In recent component-based environments (React, CSS-in-JS) developers build with types. A feature not supported by the JSON notation.

Types make code scalable. They offer syntax checking during development time to ensure no syntax errors will occur execution time.

Taking the first example, with JS/JSON notation, what if there is no `heading` font family defined? Or a `primary` color?

```
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
