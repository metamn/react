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

## Interactive design

> Interactive design is a user-oriented field of study that focuses on meaningful communication of media through cyclical and collaborative processes between people and technology. [Wikipedia](https://en.wikipedia.org/wiki/Interactive_design)

This definition is vague. Its principles clears the picture:

- Interactive design deals with meaningful content.
- Interacting with content is again meaningful.
- Content is changing continuously upon interaction.
- Content is updated, retrieved, transformed continously from external sources.

On web interactive design is young. Started as storytelling today it goes as [interactive articles](https://idyll-lang.org/), [explorable explanations](https://explorabl.es/), or [data-driven journalism](https://pudding.cool/). [Amelia Wattenberger](https://wattenberger.com/) leads the pack.

In short, interactive design deals with a stream of content and lets users explore it in meaningful, playful ways.

Comparing to apps interaction is through gestures&mdash;new, creative ways&mdash;versus classic input boxes.
