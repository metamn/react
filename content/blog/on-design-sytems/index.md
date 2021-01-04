---
title: 'On design systems'
date: '2021-01-03'
---

Theory and practice.

<!--more-->

---

## A short history

Design systems have been around since 2013-2014.

Lonely Planet's [Rizzo](https://github.com/lonelyplanet/rizzo) was the early bird then followed by the well-known [Material UI](https://github.com/mui-org/material-ui) implementing Google's [Material Design](https://material.io/).

2020 was the year when design systems popped up every week. [Adele](https://adele.uxpin.com/) of UXPin lists over a hundred systems and libraries&mdash;yet the list is incomplete.

## Purpose and audience

Why companies create design systems? A [quick analysis](https://docs.google.com/spreadsheets/d/1Yn-fzRIfXcpFilQwjv62MC4yRCTQFaS2qhhtbnfohhg/edit?usp=sharing) reveals the main goals:

- Internal: To build apps for their brand and/or platform.
- External: To build general purpose apps.
- Foundational: To help build design systems and component libraries.

The majority builds internal systems&mdash;no wonder&mdash;design systems shine when used to create uniform looking products across a portfolio.

A handful of companies create general purpose systems. More precisely they create an internal system and share to the public.

This generosity links to the company size: Google, IBM, Ant, Adobe can afford to open source code worth millions:

> This represents millions of dollars of investment for each company to duplicate work that many other companies are also doing. &mdash; [React Aria](https://react-spectrum.adobe.com/react-aria/why.html)

Foundational systems represent a new business model&mdash;[Modulz](https://www.modulz.app/) helps teams create design systems without writing code&mdash;or [institutions](https://bold.bridge.ufsc.br/en/about/) sharing their work for the common good.

## Type

The terms design system and component library are often interchanged. The difference is subtle and far-reaching.

> The difference between a component library and a design system is whether or not your components have &#39;className&#39; and &#39;style&#39; props. &mdash; [Mark Dalgleish](https://twitter.com/markdalgleish/status/1308330959973027846?ref_src=twsrc%5Etfw)

Design systems are strict. They form a complete system. They don't allow on-the-fly customisation. Modifying a system is possible at a well-defined entry point then changes reflect across the site automatically.

Component libraries are loose. They offer the basics and let customisation happen at any point, any time.

Design systems are more expensive to create, and easier to use. As [Braid's Playroom](https://seek-oss.github.io/braid-design-system/) shows non-devs can create with a design system, too.

## Features

Purpose and audience defines type and features.

Material Design goes full circle. From top-bottom connects designers and their tools with developers of all platforms and technologies. From Figma to React and native apps everything is in a system.

[Radix](https://radix-ui.com/primitives/docs/overview/introduction) from Modulz is bare bones to that level of not offering any styling.

[Spectrum](https://react-spectrum.adobe.com/index.html) from Adobe offers support for server side rendering, virtual lists, state management and accessibility for anybody building design systems.

While purpose, audience and type overlap, features differentiate and define the unique characteristics of a design system.

## Example

Design systems hang on a purpose. Purpose then defines type, features and the technology stack.

Let's play with this idea further by analyzing how to approach creating a tool for building interactive design websites.

### Interactive design

> Interactive design is a user-oriented field of study that focuses on meaningful communication of media through cyclical and collaborative processes between people and technology. [Wikipedia](https://en.wikipedia.org/wiki/Interactive_design)

This definition is vague. Its principles clears the picture:

- Interactive design deals with meaningful content.
- Interacting with content is again meaningful.
- Content is changing continuously upon interaction.
- Content is updated, retrieved, transformed continously from external sources.

On web interactive design is young. Started as storytelling today it goes as [interactive articles](https://idyll-lang.org/), [explorable explanations](https://explorabl.es/), or [data-driven journalism](https://pudding.cool/). [Amelia Wattenberger](https://wattenberger.com/) leads the pack.

In short, interactive design deals with a stream of content and lets users explore it in meaningful, playful ways.

Comparing to apps interaction is through gestures&mdash;new, creative ways&mdash;versus classic input boxes.

### Somenage

Let's call this example tool Somenage, from _some_ and _nage_ (Japanese for _throw_), depicting the attempt(s) to structure the unknown.

The **purpose** is clear: A tool for building interactive design websites.

The **audience** is modest: Let it be an internal tool first, then after a few sites built perhaps others will gain interest in using it.

Now let's see how purpose and audience defines the rest.

### Features

1. Interaction design employs gestures. Like [updating the site on cursor movement](https://violuk.com/). For that we need a web framework supporting real-time interface updates. Like **React**.
2. Gestures involve input devices like keyboard, mouse, touchpad, touchscreen, camera for now and glasses, gloves in the future. Cross-browser and crss-device gesture management tools are found in **Accessibility (A11y)** libraries nowadays.
3. Interaction design deals with meaningful content. If the content is meaningful for humans it should be meaningful for machines too. This means **SEO** and **Server Side Rendering (SSR)**.
4. Content is continously updated and transformed. This can result in thousands of content pieces on a single page, which requires **virtual lists** as solution.
5. Internal audience requires to packaging. The code won't be published to a registry like **[NPM](https://www.npmjs.com/)**.

Using common terms the main features become:

- Highly interactive components (React)
- Supporting streaming content (Virtual lists)
- Supporting gestures (A11y)
- For static websites. (SSR)
- Optimized for search engines. (SEO)
- No NPM publishing. No monorepo support (Internal audience)

### Technology

1. Virtual lists and A11y is supported by [react-aria](https://react-spectrum.adobe.com/react-aria/index.html)
2. SSR is best supported by [Next.js](https://nextjs.org/)
3. SEO starts with [Semantic HTML5 elements](https://developer.mozilla.org/en-US/docs/Glossary/Semantics#Semantics_in_HTML).

## Best practices

The [design systems analysis](https://docs.google.com/spreadsheets/d/1Yn-fzRIfXcpFilQwjv62MC4yRCTQFaS2qhhtbnfohhg/edit?usp=sharing) reveals common practices covering theory, technology and usability.

### Theory

There is no theory behind design systems yet. Everybody rolls their own following or not existing design patterns.

The patterns below were extracted from the analyzed systems. Shopify's Polaris and Adobe's Spectrum are implementing all these patterns to a certain extent. The rest implements none, or part of them.

Theory is important. Drives design decisions. Design systems are built to last. It's good to have solid foundation and principles enduring years.

#### Single Source of Truth (SST)

Design systems collect settings under a common place. Any later change, update is performed in that single common place and is reflected accross the system automatically. No need to make changes in multiple places to achieve an update.

#### Single Responsibility Principle (SRP)

Design systems are built on dozens, hundreds of tokens and components. Each of them should be contained, capable to exist on its own, in isolation.

Independent components compose better and provide modular architecture.

#### The base / variant pattern (BEM)

In [Building (and Re-Building) the Airbnb Design System](https://www.slideshare.net/MajaWichrowska/building-and-rebuilding-the-airbnb-design-system) an old pattern, [BEM](http://getbem.com/introduction/) emerges as solution for scalability.

Keeping a simple base and following simple rules for extensions scales up the source code and reduces its complexity.

### Technology

In contrast to theory, technology is well defined on the design systems scene.

The majority goes with **Typescript** and **CSS-in-JS**. All solutions are packaged and published to NPM. Half of them via a **monorepo**.

Testing isn't fully satisfactory. The majority does **unit testing** using **ts-jest** and **React Testing Library** with questionable coverage.

In many cases **Storybook** is used to complement missing unit tests and to mock integration tests with visual tests.

Storybook is used extensively for documentation. Only [Bold](https://bold.bridge.ufsc.br/en/) managed to come up with a good looking Storybook for their API docs. The rest uses Storybook to complement their documentation suite which results in scattered user experience.

The big players, again, managed to come up with an **in-house, integrated documentation** tool reaching UX excellence.

What's missing from the majority of solutions is **generated documentation (JSDoc)**. Manual documentation&mdash;no matter what&mdash;breaks from the source code's reality.

### Usability

Design systems have _users_ who build solutions with the system without extending it, and have _devs_ who build / adapt / tweak new design systems from the existing system.

The first group values _User Experience (UX)_ while the second group longs for _Developer Experience (DX)_

Of course these groups overlap often times. Important is to examine design systems from two perspectives instead of a single one.

#### UX

#### DX
