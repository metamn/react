---
title: 'On design systems. The first attempt'
date: '2021-01-06'
---

An overview. A work in progress.

<!--more-->

---

## Work in progress

This article is not yet finished. A better version is in the making.

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

> This represents millions of dollars of investment for each company to duplicate work that many other companies are also doing. &mdash; [Adobe Spectrum](https://react-spectrum.adobe.com/react-aria/why.html)

Foundational systems represent a new business model&mdash;[Modulz](https://www.modulz.app/) helps teams create design systems without writing code&mdash;or [institutions](https://bold.bridge.ufsc.br/en/about/) sharing their work for the common good.

## Type

The terms design system and component library are often interchanged. The difference is subtle and far-reaching.

> The difference between a component library and a design system is whether or not your components have &#39;className&#39; and &#39;style&#39; props. &mdash; [Mark Dalgleish](https://twitter.com/markdalgleish/status/1308330959973027846?ref_src=twsrc%5Etfw)

Design systems are strict. They form a complete system. They don't allow on-the-fly customisation. Modifying a system is possible at a well-defined entry point then changes reflect across the site automatically.

Component libraries are loose. They offer the basics and let customisation happen at any point, any time.

Design systems are more expensive to create, and easier to use later. [Braid's Playroom](https://seek-oss.github.io/braid-design-system/) shows even non-devs can create with a design system.

## Features

Purpose and audience defines a design system's features.

While purpose, audience and type overlap, features differentiate and define the unique characteristics of a design system.

Material Design goes full circle. From top-bottom connects designers and their tools with developers of all platforms and technologies. From Figma to web and native apps everything is in a system.

[Radix](https://radix-ui.com/primitives/docs/overview/introduction) from Modulz is bare bones to that level of not offering any styling.

[Spectrum](https://react-spectrum.adobe.com/index.html) from Adobe offers support for server side rendering, virtual lists, state management and accessibility for anybody building design systems.

## Example

Complex systems are better understood via examples. And design systems are complex.

Let's play. And see how to create a design system (component library?) for building interactive design websites.

### Interactive design

> Interactive design is a user-oriented field of study that focuses on meaningful communication of media through cyclical and collaborative processes between people and technology. [Wikipedia](https://en.wikipedia.org/wiki/Interactive_design)

This definition is vague. The principles are clear:

- Interactive design deals with meaningful content.
- Interacting with content is&mdash;again&mdash;meaningful.
- Content is changing continuously upon interaction.
- External events transform and update the content on a regular basis.

Interactive design is neither the classic web (links, buttons, menus, inputs) nor the apps (scrolls and likes).

It deals with a stream of content (semantic, multidimensional) and lets users explore it in meaningful, playful, novel ways&mdash;like gestures.

Interactive design on the web is in infancy. Started as storytelling years ago, today goes as [interactive articles](https://idyll-lang.org/), [explorable explanations](https://explorabl.es/), or [data-driven journalism](https://pudding.cool/). [Amelia Wattenberger](https://wattenberger.com/) to watch.

### Somenage

Let's call this example system Somenage, from _some_ and _nage_ (Japanese for _throw_), depicting the attempts, trials and errors, to structure something complex.

The **purpose** is clear: A tool for building interactive design websites.

The **audience** is modest: Let it be an internal tool first, then after a while available to the public.

Now let's see how purpose and audience defines the rest.

### Features

1. Interaction design employs gestures. Like [updating the site on cursor movement](https://violuk.com/). For that we need a web framework supporting real-time interface updates. Like **React**.
2. Novel interactions require support for all existing input devices: keyboard, mouse, touchpad, touchscreen, camera for now and glasses, gloves, sound control in the future. For all these, **Accessibility (A11y)** libraries offer the best integration.
3. Interaction design deals with meaningful content. If the content is meaningful for humans it should be meaningful for machines too. This means **Search Engine Optimisation (SEO)** and **Server Side Rendering (SSR)**.
4. Content is continuously updated and transformed. This can result in hundreds of content pieces on a single page, which requires **virtual lists** for performant rendering.
5. Internal audience requires no packaging. Registries like **[NPM](https://www.npmjs.com/)** are not required to publish the code.

Simplifying, the features are:

- Highly interactive user interface (React)
- Streaming content (Virtual lists)
- Gesture support (A11y)
- Static websites. (SSR)
- Optimized for search engines. (SEO)
- No packaging and publishing. (Internal audience)

### Technology

1. [react-aria](https://react-spectrum.adobe.com/react-aria/index.html) for virtual lists and A11y.
2. [Next.js](https://nextjs.org/) for SSR.
3. [Semantic HTML5 elements](https://developer.mozilla.org/en-US/docs/Glossary/Semantics#Semantics_in_HTML) for SEO.

The list is short for now. Common practices will complete the missing parts.

## Common practices

This quick [design systems analysis](https://docs.google.com/spreadsheets/d/1Yn-fzRIfXcpFilQwjv62MC4yRCTQFaS2qhhtbnfohhg/edit?usp=sharing) reveals common practices covering theory, technology and usability.

### Theory

Theory is important. Drives design decisions. It's good to have solid foundation and principles enduring years.

Design systems have no common theoretical foundation yet. Everybody rolls their own following&mdash;or not&mdash;design patterns.

The patterns listed below come compiled from the analysed systems.

[Shopify Polaris](https://polaris.shopify.com/) and [Adobe Spectrum](https://react-spectrum.adobe.com/index.html) are implementing all these patterns to a certain extent. The rest implements none, or part of them.

#### Single Source of Truth (SST)

Design systems collect settings under a common place. Any later change goes into this single source of truth and reflects across the system automatically.

This reduces the cognitive load to manage and extend the system.

#### Single Responsibility Principle (SRP)

Design systems contain dozens, hundreds of tokens and components. Wiring them into a system is not a trivial task.

[Functional programming](http://metamn.io/react/the-reactive-fuctional-nature-of-react/) advocates the idea of composing up a system from smaller parts is the best possible when the underlying components behave predictably.

Independent components&mdash;self-contained, with stable interfaces&mdash; compose better and provide modular architecture.

#### The base / variant pattern (BEM)

In [Building (and Re-Building) the Airbnb Design System](https://www.slideshare.net/MajaWichrowska/building-and-rebuilding-the-airbnb-design-system) an old pattern, [BEM](http://getbem.com/introduction/) emerges as a solution for scalability.

Keeping a simple base and following simple rules for extensions scales up the source code and reduces its complexity.

### Technology

In contrast to theory, technology is well-defined on the design systems scene.

The majority of the solutions goes with **Typescript** and **CSS-in-JS**. All solutions embrace packaging and publishing to NPM. Half of them via a **monorepo**.

Testing isn't fully satisfactory. The majority does **unit testing** using **ts-jest** and **React Testing Library** with questionable coverage.

Often times **Storybook** complements missing unit tests and mocks integration tests with visual tests.

Storybook mocks also documentation.

[Bold](https://bold.bridge.ufsc.br/en/) alone managed to come up with a good-looking Storybook for their API docs. The rest uses Storybook to complement their documentation suite which results in scattered user experience&mdash;two separate apps with different look-and-feel.

The big players&mdash;again&mdash;managed to come up with an **in-house, integrated documentation** tool reaching UX excellence.

What's missing from the majority of solutions is **generated documentation (JSDoc)**. Manual, hand-written documentation&mdash;no matter what&mdash;breaks from the source code's reality.

### Usability

Design systems have _users_ who build solutions with the system without extending it, and have _devs_ who build / adapt / tweak new design systems from the existing system.

The first group values **User Experience (UX)** while the second group longs for **Developer Experience (DX)**.

The groups overlap. Important is to examine design systems from these two perspectives instead of a single one.

#### Documentation

For users the first important feature is the documentation. This is the entry point where they meet the design system.

From the analysis [IBM's Carbon](https://www.carbondesignsystem.com/) turned out the most complete, offering the following features:

- Impeccable UX of the documentation site.
- Integrated: All docs (API, Guide) integrated into a single application.
- Generated: Entries generated from JSDoc, MDX, tests instead of written separately.
- Searchable.
- Well-explained props.
- Every prop comes with its own example.
- Live editor for examples.

#### API

For users the second important feature is the usability of the API.
Namely:

- Importing components.<p>`import ../../...` won't do it. `import @package/` will do it.</p>
- Fewer props.<p>`<Card as='thumbnail'>` is better than `<Card image={true} title='H3' excerpt={true}>`</p>
- Consistent naming.<p>`<Button as='link'>` and `<Heading level={3}>` won't do it. `<Heading as='H3'>` is better.</p>

Having a clean and consistent API is art. It takes iterations to achieve simplicity. [Braid](https://seek-oss.github.io/braid-design-system/) offers this feature as a unique selling point:

> We’re aggressively focused on the simplicity and composability of its API.

#### Example apps

Show, don't tell. An example worth thousands of words.

After browsing the docs a common practice is to check the examples to get a glimpse about the quality of the code.

Yet half of the examined systems have no example apps. Or the code quality rings alarms.

#### Naming conventions

For developers the `It Just Works!` factor is perhaps the most important.

Finding parts of the system should be intuitive with as less cognitive load as possible. From the big picture&mdash;tokens, hooks, components, themes&mdash;to the details&mdash;button variations.

The vertical integration of the layers should be clear and well-thought.
The `token -> theme -> hook -> component` path should be easy to follow when extending the system.

#### Guidelines for design principles

Design decisions make or break a product.
Yet documenting these decisions is often missing.

Guidelines explaining design decisions reduce development time.
Once developers understand the theory behind they'll use the system as their own.

## Summing up

Let's go back to Somenage and sum up the unique parts with the common practices.

- **Purpose**: A tool for building interactive design websites.
- **Target audience**: An internal tool first, then later published for wider audience.
- **Type**: Not yet decided. More a design system than a component library.
- **Features**:
  - Highly interactive user interface (React)
  - Streaming content (Virtual lists)
  - Gesture support (A11y)
  - Static websites. (SSR)
  - Optimized for search engines. (SEO)
  - No packaging and publishing. (Internal audience)
- **Technology**:
  - `react-aria` for virtual lists and A11y
  - `Next.js` for SSR
  - `Semantic HTML5` elements for SEO
  - `Typescript`
  - `CSS-in-JS`
  - `ts-jest` and `React Testing Library` for unit tests
  - Some kind of integration testing. `Cypress`, or `Storybook`
  - `JSDoc` to generate the documentation instead of writing it by hand
  - Easy imports. Something like [module path aliases](https://nextjs.org/docs/advanced-features/module-path-aliases)
- **Documentation**:

  - Integrated, all-in-one documentation
  - Searchable
  - Props properly displayed
  - Props showcased by examples
  - Live editor / playground for examples

- **Example apps**
  - High quality source code
- **Theory**
  - Single Source of Truth (SST)
  - Single Responsibility Principle (SRP)
  - The base / variant pattern (BEM)
  - Clean API
  - Naming conventions
  - Guidelines for design decisions

## The takeaway

Creating a design system or a component library starts with analysis and planning. The goal of the process is to prepare the implementation.

<table>
<thead>
	<tr>
		<th>Input</th>
		<th>Output</th>
	</tr>
</thead>
<tbody>
	<tr>
		<td>Purpose<br/>Audience<br/>Common practices</td>
		<td>Features<br/>Technologies<br/>Deliverables<br/>Theory</td>
	</tr>
</tbody>
</table>

The findings for the Somenage exercise sums up in the following tables.

<table>
<thead>
	<tr>
		<th>Technology</th>
		<th>Feature</th>
		<th>Common practice</th>
		<th>Notes</th>
	</tr>
</thead>
<tbody>
	<tr>
		<td><code>react</code></td>
		<td>Highly interactive components</td>
		<td></td>
		<td></td>
	</tr>
	<tr>
		<td><code>react-aria<code></td>
		<td>Streaming content</td>
		<td></td>
		<td>Virtual lists</td>
	</tr>
	<tr>
		<td></td>
		<td>Gestures</td>
		<td></td>
		<td>A11y</td>
	</tr>
	<tr>
		<td><code>next.js</code></td>
		<td>Static sites</td>
		<td></td>
		<td>Server side rendering</td>
	</tr>
	<tr>
		<td><code>Semantic HTML5</code></td>
		<td>Optimized for search engines</td>
		<td></td>
		<td>It's the first step. <code>JSON-LD</code> is the next.</td>
	</tr>
	<tr>
		<td><code>typescript</code></td>
		<td>Stable API</td>
		<td>✅</td>
		<td></td>
	</tr>
	<tr>
		<td><code>emotion, styled-components</code></td>
		<td>CSS-in-JS</td>
		<td>✅</td>
		<td></td>
	</tr>
	<tr>
		<td><code>ts-jest</code></td>
		<td>Unit tests</td>
		<td>✅</td>
		<td></td>
	</tr>
	<tr>
		<td><code>testing-library/react</code></td>
		<td>Unit tests</td>
		<td>✅</td>
		<td></td>
	</tr>
	<tr>
		<td><code>cypress</code></td>
		<td>Integration tests</td>
		<td>✅</td>
		<td>Storybook goes after both tests and docs but none in a perfect way.</td>
	</tr>
	<tr>
		<td><code>jsdoc</code></td>
		<td>Live, generated documentation</td>
		<td>✅</td>
		<td></td>
	</tr>
	<tr>
		<td><code>Module path aliases</code></td>
		<td>Easy imports</td>
		<td>✅</td>
		<td><code>import '@somenage/*'</code></td>
	</tr>
</tbody>
</table>

<table>
<thead>
	<tr>
		<th>Other deliverables</th>
		<th>Features</th>
		<th>Common practice</th>
		<th>Notes</th>
	</tr>
</thead>
<tbody>
	<tr>
		<td>Documentation</td>
		<td>Integrated<br/>Searchable<br/>Props<br/>Playground</td>
		<td>✅</td>
		<td>One single app with impeccable UX.</td>
	</tr>
	<tr>
		<td>Example apps</td>
		<td>High quality source code</td>
		<td>✅</td>
		<td></td>
	</tr>
	<tr>
		<td>Guidelines</td>
		<td>For design decisions</td>
		<td>✅</td>
		<td>Perhaps integrated into Documentation</td>
	</tr>
</tbody>
</table>

<table>
<thead>
	<tr>
		<th>Theory</th>
		<th>Features</th>
		<th>Common practice</th>
		<th>Notes</th>
	</tr>
</thead>
<tbody>
	<tr>
		<td>Single Source of Truth (SST)</td>
		<td>All settings in one single place.</td>
		<td>✅</td>
		<td><strong>Specific for design systems</strong></td>
	</tr>
	<tr>
		<td>Single Responsibility Principle (SRP)</td>
		<td>Functional compositions<br/>Modular architecture</td>
		<td>✅</td>
		<td>Functional Reactive Programming</td>
	</tr>
	<tr>
		<td>The base / variant pattern (BEM)</td>
		<td>Scalability and simplicity</td>
		<td>✅</td>
		<td>A common practice</td>
	</tr>
	<tr>
		<td>Clean API</td>
		<td>Minimal props with uniform naming</td>
		<td>✅</td>
		<td>The hardest to achieve</td>
	</tr>
	<tr>
		<td>Folder structure</td>
		<td>Reduce cognitive load</td>
		<td>✅</td>
		<td>Find anything in no time</td>
	</tr>
</tbody>
</table>

Et voilà.

After a long journey Somenage shows signs to be a design system rather a component library.

In theory. Well, practice distorts theory.

While each part of a tech stack works fine on its own they often break when combined.

Where two parts meet, a grey zone forms. Bugs in the grey zones doesn’t belong to any of the maintainers.

This is where stack building implies Herculean efforts. Resulting in trade-offs forcing change on the original theory.

## Updates

This short study is just the beginning. For the latest news please visit [Os Equi](https://osequi.com) my studio focussing on design systems.

## Resources

- [Adele / UXPin - A repository of publicly available design systems and pattern libraries](https://adele.uxpin.com/)
- [A quick analysis of design systems and component libraries](https://docs.google.com/spreadsheets/d/1Yn-fzRIfXcpFilQwjv62MC4yRCTQFaS2qhhtbnfohhg/edit?usp=sharing)
- [Building (and Re-Building) the Airbnb Design System ](https://www.slideshare.net/MajaWichrowska/building-and-rebuilding-the-airbnb-design-system)
- [Mark Dalgleish: Rethinking Design Practices](https://www.youtube.com/watch?v=jnV1u67_yVg&feature=youtu.be)
- [idyll - A toolkit for creating data-driven stories and explorable explanations](https://idyll-lang.org/)
