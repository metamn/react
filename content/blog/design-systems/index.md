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

Smaller companies with less resources can keep up with innovative tools and processes.

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

Design systems took on the problem via the _divide et impera_ method.

They separate design into small, independent and manageable parts &mdash; style tokens, components, sections, pages, sites, apps &mdash; and enforce consistency on the entire path.

Tokens are atomic, they describe style via pure data.

Components build on tokens but they don't interfere with tokens in the sense they don't add any other, custom style. If a new style element is required &mdash; first it is added to the tokens, then the component is able to use it.

And the list goes. Section compose up from components but they don't create new ones. The same way pages compose up from sections without the chance to create new sections.

By separation of concerns and human discipline companies with resources managed to achieve consistency and scalability across thousands of tokens, components and hundreds of sites and apps.

## Current tools and processes

The systematic approach brought by design systems left untouched the tools and processes used in creating digital assets.

A typical workflow is the same today as it was before design systems.

Designers use a visual, non-programmable tool like Figma, Sketch, Adobe Illustrator etc. to create the layers of a design system.

Due to their tools' simplicity &mdash; they have to build, again, a mental model, even if that model is now small, divided into comprehensible parts.

A mental model is error-prone in contrast with a software model where consistency is assured via automated tests and other proven techniques.

Scaling a company's mental model capacity is only possible by adding more human resources.

More, the outcome of a designer's work needs to be translated to the target medium by developers. This process is communication-heavy, error-prone, and far from being real-time.

## Better tools and processes

It's easy to observe: the visual, non-programmable tools are the bottleneck in the process.

What if all tools in the design and development process would be programmable?

What if the outcome of a design process would be a program / data instead of the current visual-to-be-translated-into-code mess?

That would solve the mental model capacity problem and reduce the whole process to real-time.

Imagine the design system as a database.

Tokens, components, sections, pages are all quantifiable &mdash; thus correct &mdash; and queryable &mdash; thus small enough to fit into a single person's mental model.

A database is capable to handle unlimited entries and reason about their more-than-unlimited relationships.

A change in a database is immediate, real-time, and definitive for all its clients.

Sounds like an utopia &mdash; but it can be done today, now with a little cultural shift.

## Pair designing

Pair programming as an age old paradigm. Two developers sit in front of a single machine. They collaborate instantly and produce a single output.

Pair designing &mdash; when a designer and a developer sit in a front of machine &mdash; would transform a design system into a database, and it's singular output to pure code.

More exactly, a designer still would use her own favourite tool like Figma.
But the Figma deliverable would not be unofficial, just a temporary result.

A developer first should import the Figma deliverables into a design system built on code. Her output, a living design system, would be the official design system deliverable.

## A case study

I'm fortunate enough to have a computer science degree and works created &mdash; designed and developed &mdash; by me featured in online galleries.

In 2015 I've rolled out my portfolio site powered by a living styleguide. Since then I'm working in this novel domain.

It's been a year since I've started to study and work exclusively on design systems, with the ultimate goal to roll my own.

Yes, something like Material UI or Adobe Spectrum taylored for presentational websites, not for web apps.

I produce unique looking websites for progressive brands and I need a handcrafted, tailor made , built-from-scratch design system / component library for that.

During the process I've analyzed tens of existing design systems. I wrote articles, a mini-book / technical guide on how to roll your own.

I've learnt other languages and stacks to better understand the current theory and best practices.

I've done four iterations on my own design system. And I've employed it in a couple of real-life applications.

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
