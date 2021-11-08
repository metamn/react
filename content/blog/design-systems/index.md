---
title: 'Design systems'
date: '2021-11-07'
---

An overview, and a new take.

<!--more-->

---

## TLDR;

Design systems are a paradigm shift in web/app UX/UI design and front-end development.

They bring closer designers and developers, even blurring the line between these roles, to produce consistent and scalable user interfaces.

Companies with resources lead the adoption process. They augment obsolete tools and processes with mind power to achieve consistency and scalability.

Smaller companies can only afford better tools to get the same results with less resources.

## The current landscape

Design systems are new, yet old.

They've been around since 2015 when Google rolled out Material Design.
Yet only big companies can afford to have their own design system today.

The rest builds on freely available component libraries and tries to transform them into their own via heavy customizations.

The end result we all know: similar looking websites and apps all around the internet.

If one goes further &mdash; and tries to roll out unique looking, yet consistent and scalable user interfaces for a progressive audience &mdash; hits the same obstacles as their predecessors.

For Airbnb took several years and interations to come up with a solution which scales.

Why design systems are hard?

They try to introduce systematic approach to a domain previously dominated by human-driven, ad-hoc processes.

## Before design systems

Let's start with Google, a company with dozens of digital assets (mail, maps, search, ads, video, ...) across platforms (web, native).

Before Material Design all these assets were looking almost the same, in the best case, but many times completely different.

This is where a design system comes in. It makes a portfolio of digital assets to look consistent.

Following unconditionally and perfectly the brand design guidelines. Whatever the asset might be, whenever platform it might running on.

## How design systems work

By introducing a systematic approach to reduce the cognitive load on designers.

Let's take for example the buttons. In a simple use case we have 20 variations.

Beside buttons a design deals with the layout, spacing, typography, navigation, responsiveness and co &mdash; all of them more complex than a button.

This means a designer has to keep in her mental model all these information, details, nuances, settings, states presented above &mdash; which is impossible even at Google level with an infinite pool of designers.

---

## You'll need strong motivation

It's been a year since I've started to study design systems, with the ultimate goal to roll my own.

Yes, something like Material UI or Adobe Spectrum taylored for presentational websites, not for web apps.

And yes, one can create presentational websites with existing design systems and component libraries. But the final result &mdash; no matter the customization and theming &mdash; will not be unique-looking.

It will look like just another website: it will use the same basic components &mdash; hero, card, accordion, drawer, badge, chip &mdash; you name it &mdash; with slightly different styling.

It's nothing wrong with that. Not all websites must stand out.

I'm a designer and developer with works featured in online galleries.
One of them is Brutalist Websites &mdash; a showcase of websites created by hand, using custom made components, experimental techniques, challenging the status quo.

> A reaction to the lightness, optimism, and frivolity of today's web design. &mdash; [Brutalist Websites](https://brutalistwebsites.com/)

This is the line I pursue in my career, this is why I need a design system / component library built from scratch. To produce unique looking websites for progressive brands.

## You'll spend lots of time

In the last year I've analyzed tens of existing design systems.

I wrote articles, a mini-book / technical guide on how to roll your own.

I've learnt other languages and stacks to better understand the current theory and best practices.

I've done four iterations on my own design system.

And I've employed it in a couple of real-life applications.

Yet, after a year, I'm at the beginning.

One iteration left, and I'll be able to roll out &mdash; design and develop &mdash; scalable, consistent, unique looking user interfaces in no time.

## You'll be rewarded

In short, the design system / component library I've created is capable of:

1. **Wireframing** &mdash; to sketch up the requirement specifications and get immediate feedback on them.
2. **Mockuping** &mdash; to show real-life components with test data, helping to finalize the information architecture.
3. **Inline content editing** &mdash; to let editors add their content as soon as possible, to find out missing parts and inconsistencies in the original requirement specifications.
4. **Theming** &mdash; to support design trials and errors, iterations and variations. In a fully responsive way, with history and annotated design decisions.
5. **Generating documentation and playground** &mdash; to assure components work in isolation, are tested, and all design system tokens and components are documented.

All these live, inside the browser.

No 3rd parties like Figma, Sketch, Storybook and co.

What you see is what you've already got.

Production-ready code with React, Typescript and CSS-in-JS on top of Nextjs, a headless CMS and GraphQL.

Quite unique workflow. Quite unique results. Quite reduced timeframe and hussle.
