---
title: 'On design systems'
date: '2021-01-03'
---

## A short history

Design systems have been around since 2013-2014.

Lonely Planet's [Rizzo](https://github.com/lonelyplanet/rizzo) was the early bird then followed by the well-known [Material UI](https://github.com/mui-org/material-ui) implementing Google's [Material Design](https://material.io/).

2020 was the year when design systems popped up every week. [Adele](https://adele.uxpin.com/) of UXPin lists over a hundred systems and libraries&mdash;yet the list is incomplete.

## Purpose

Why companies create design systems? A [quick analysys](https://docs.google.com/spreadsheets/d/1Yn-fzRIfXcpFilQwjv62MC4yRCTQFaS2qhhtbnfohhg/edit?usp=sharing) reveals the main goals:

- Internal: To build apps for a brand and/or platform.
- External: To build general purpose apps.
- Foundational: To help building design systems and component libraries.

The majority builds internal sytems&mdash;no wonder&mdash;design systems shine when used to create uniform looking products across a portfolio.

A handful of companies create general purpose systems. More precisely they create an internal system and share to the public.

This generosity links to the company size: Google, IBM, Ant, Adobe can afford to open source code worth millions:

> This represents millions of dollars of investment for each company to duplicate work that many other companies are also doing. (https://react-spectrum.adobe.com/react-aria/why.html)

Foundational systems represent a new business model&mdash;[Modulz](https://www.modulz.app/) helps teams create design systems without writing code&mdash;or [institutions](https://bold.bridge.ufsc.br/en/about/) sharing their work for the common good.

We all need designs systems. Yet the term is still unclear.

## Designs systems vs. Component libraries

These terms are often interchanged. The difference is subtle and far reaching.

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">The difference between a component library and a design system is whether or not your components have &#39;className&#39; and &#39;style&#39; props.</p>&mdash; Mark Dalgleish (@markdalgleish) <a href="https://twitter.com/markdalgleish/status/1308330959973027846?ref_src=twsrc%5Etfw">September 22, 2020</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

Design systems are strict. They form a complete system. They don't allow on-the-fly customisation. Modifying a system is possible on a well defined entry point then changes reflect across the site automaticaly.

Component libraries are loose. They offer the basics and let customisation happen at any point, any time.

Design systems are more expensive to create then easier to use. As [Braid's Playroom](https://seek-oss.github.io/braid-design-system/) shows non-devs can create with a design system, too.

## Reach

The reach of a design system varies like its purpose.

Material Design goes full circle. From top-bottom connects designers and their tools with developers of all platforms and technologies. Form Figma to React and native apps everything is in a system.

[Radix](https://radix-ui.com/primitives/docs/overview/introduction) from Modulz is barebones to that level of not offering any styling.

[Spectrum](https://react-spectrum.adobe.com/index.html) from Adobe
