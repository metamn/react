---
title: 'On design systems — 1'
date: '2021-01-06'
---

Workflow, practices and deliverables.

<!--more-->

---

## Update

This post was heavily edited on 10th of November 2021, when [another take](http://metamn.io/react/on-design-systems-2/) on the subject was published.

The posts are complementary.

This is a high level overview, focusing on deliverables.
The second take is more technical, focusing on tools and processes.

## A short history

Design systems have been around since 2013-2014.

Lonely Planet's [Rizzo](https://github.com/lonelyplanet/rizzo) was the early bird, then followed by the well-known [Material UI](https://github.com/mui-org/material-ui) implementing Google's [Material Design](https://material.io/).

2020 was the year when design systems popped up every week. [Adele](https://adele.uxpin.com/) of UXPin lists over a hundred systems and libraries&mdash;yet the list is incomplete.

## Purpose and audience

Why companies create design systems? A [quick analysis](https://docs.google.com/spreadsheets/d/1Yn-fzRIfXcpFilQwjv62MC4yRCTQFaS2qhhtbnfohhg/edit?usp=sharing) reveals the main goals:

- Internal: To build apps for their brand and/or platform.
- External: To build general purpose apps.
- Foundational: To help build design systems and component libraries.

The majority builds internal systems&mdash;no wonder&mdash;design systems shine when used to create uniform looking products across a portfolio.

A handful of companies create general purpose systems. More precisely, they create an internal system and share to the public.

This generosity links to the company size: Google, IBM, Ant, Adobe can afford to open-source code worth millions:

> This represents millions of dollars of investment for each company to duplicate work that many other companies are also doing. &mdash; [Adobe Spectrum](https://react-spectrum.adobe.com/react-aria/why.html)

Foundational systems represent a new business model&mdash;[Modulz](https://www.modulz.app/) helps teams create design systems without writing code&mdash;or [institutions](https://bold.bridge.ufsc.br/en/about/) sharing their work for the common good.

## Type

The terms design system and component library are often interchanged. The difference is subtle and far-reaching.

> The difference between a component library and a design system is whether or not your components have &#39;className&#39; and &#39;style&#39; props. &mdash; [Mark Dalgleish](https://twitter.com/markdalgleish/status/1308330959973027846?ref_src=twsrc%5Etfw)

Design systems are strict. They form a complete system. They don't allow on-the-fly customisation. Modifying a system is possible at a well-defined entry point, then changes reflect across the site automatically.

Component libraries are loose. They offer the basics and let customisation happen at any point, any time.

Design systems are more expensive to create, and easier to use later. [Braid's Playroom](https://seek-oss.github.io/braid-design-system/) shows even non-devs can create with a design system.

## Features

Purpose and audience defines a design system's features.

While purpose, audience and type overlap, features differentiate and define the unique characteristics of a design system.

Material Design goes full circle. From top-bottom connects designers and their tools with developers of all platforms and technologies. From Figma to web and native apps everything is in a system.

[Radix](https://radix-ui.com/primitives/docs/overview/introduction) from Modulz is bare bones to that level of not offering any styling.

[Spectrum](https://react-spectrum.adobe.com/index.html) from Adobe offers support for server-side rendering, virtual lists, state management and accessibility for anybody building design systems.

## Common practices

This quick [design systems analysis](https://docs.google.com/spreadsheets/d/1Yn-fzRIfXcpFilQwjv62MC4yRCTQFaS2qhhtbnfohhg/edit?usp=sharing) reveals common practices covering theory, technology and usability.

### Theory

Theory is important. Drives design decisions. It's good to have a solid foundation and principles enduring years.

Design systems have no common theoretical foundation yet. Everybody rolls their own, following&mdash;or not&mdash;design patterns.

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

In [Building (and Re-Building) the Airbnb Design System](https://www.slideshare.net/MajaWichrowska/building-and-rebuilding-the-airbnb-design-system) an old pattern, [BEM](http://getbem.com/introduction/), emerges as a solution for scalability.

Keeping a simple base and following simple rules for extensions scales up the source code and reduces its complexity.

### Technology

In contrast to theory, technology is well-defined on the design systems scene.

The majority of the solutions goes with **Typescript** and **CSS-in-JS**. All solutions embrace packaging and publishing to NPM. Half of them via a **monorepo**.

Testing isn't fully satisfactory. The majority does **unit testing** using **ts-jest** and **React Testing Library** with questionable coverage.

Often times, **Storybook** complements missing unit tests and mocks integration tests with visual tests.

Storybook mocks also documentation.

[Bold](https://bold.bridge.ufsc.br/en/) alone managed to come up with a good-looking Storybook for their API docs. The rest uses Storybook to complement their documentation suite, which results in a scattered user experience&mdash;two separate apps with different look-and-feel.

The big players&mdash;again&mdash;managed to come up with an **in-house, integrated documentation** tool reaching UX excellence.

What's missing from the majority of solutions is **generated documentation (JSDoc)**. Manual, handwritten documentation&mdash;no matter what&mdash;breaks from the source code's reality.

### Usability

Design systems have _users_ who build solutions with the system without extending it, and have _devs_ who build / adapt / tweak new design systems from the existing system.

The first group values **User Experience (UX)** while the second group longs for **Developer Experience (DX)**.

The groups overlap. Important is to examine design systems from these two perspectives instead of a single one.

#### Documentation

For users, the significant feature is the documentation. This is the entry point where they meet the design system.

From the analysis, [IBM's Carbon](https://www.carbondesignsystem.com/) turned out the most complete, offering the following features:

- Impeccable UX of the documentation site.
- Integrated: All docs (API, Guide) integrated into a single application.
- Generated: Entries generated from JSDoc, MDX, tests instead of written separately.
- Searchable.
- Well-explained props.
- Every prop comes with its own example.
- Live editor for examples.

#### API

For users, another significant feature is the usability of the API.
Namely:

- Importing components.<p>`import ../../...` won't do it. `import @package/` will do it.</p>
- Fewer props.<p>`<Card as='thumbnail'>` is better than `<Card image={true} title='H3' excerpt={true}>`</p>
- Consistent naming.<p>`<Button as='link'>` and `<Heading level={3}>` won't do it. `<Heading as='H3'>` is better.</p>

Having a clean and consistent API is art. It takes iterations to achieve simplicity. [Braid](https://seek-oss.github.io/braid-design-system/) offers this feature as a unique selling point:

> We’re aggressively focused on the simplicity and composability of its API.

#### Example apps

Show, don't tell. An example worth thousands of words.

After browsing the docs, a common practice is to check the examples to get a glimpse about the quality of the code.

Yet half of the examined systems have no example apps. Or the code quality rings alarms.

#### Naming conventions

For developers, the `It Just Works!` factor is perhaps the most important.

Finding parts of the system should be intuitive with as less cognitive load as possible.
From the big picture&mdash;tokens, hooks, components, themes&mdash;to the details&mdash;button variations.

The vertical integration of the layers should be clear and well-thought.
The `token -> theme -> hook -> component` path should be easy to follow when extending the system.

#### Guidelines for design principles

Design decisions make or break a product.
Yet, documenting these decisions is often missing.

Guidelines explaining design decisions reduce development time.
Once developers understand the theory behind, they'll use the system as their own.

## Summing up

Creating a design system or a component library starts with analysis and planning.
The goal of the process is to prepare the implementation.

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

Deliverables are standard. They follow a common practice.

<table>
<thead>
	<tr>
		<th>Deliverable</th>
		<th>Features</th>
	</tr>
</thead>
<tbody>
	<tr>
		<td>Documentation</td>
		<td>Integrated<br/>Searchable<br/>Props<br/>Playground</td>
	</tr>
	<tr>
		<td>Example apps</td>
		<td>High-quality source code</td>
	</tr>
	<tr>
		<td>Guidelines</td>
		<td>For design decisions</td>
	</tr>
</tbody>
</table>

Standard theory is missing.
However it should be built using existing software design patterns.

<table>
<thead>
	<tr>
		<th>Theory</th>
		<th>Features</th>
		<th>Notes</th>
	</tr>
</thead>
<tbody>
	<tr>
		<td>Single Source of Truth (SST)</td>
		<td>All settings in one single place.</td>
		<td>Specific for design systems</td>
	</tr>
	<tr>
		<td>Single Responsibility Principle (SRP)</td>
		<td>Functional compositions<br/>Modular architecture</td>
		<td>Functional Reactive Programming</td>
	</tr>
	<tr>
		<td>The base / variant pattern (BEM)</td>
		<td>Scalability and simplicity</td>
		<td>A common practice</td>
	</tr>
	<tr>
		<td>Clean API</td>
		<td>Minimal props with uniform naming</td>
		<td>The hardest to achieve</td>
	</tr>
	<tr>
		<td>Folder structure</td>
		<td>Reduce cognitive load</td>
		<td>Find anything in no time</td>
	</tr>
</tbody>
</table>

## Resources

- [Adele / UXPin - A repository of publicly available design systems and pattern libraries](https://adele.uxpin.com/)
- [A quick analysis of design systems and component libraries](https://docs.google.com/spreadsheets/d/1Yn-fzRIfXcpFilQwjv62MC4yRCTQFaS2qhhtbnfohhg/edit?usp=sharing)
- [Building (and Re-Building) the Airbnb Design System ](https://www.slideshare.net/MajaWichrowska/building-and-rebuilding-the-airbnb-design-system)
- [Mark Dalgleish: Rethinking Design Practices](https://www.youtube.com/watch?v=jnV1u67_yVg&feature=youtu.be)
