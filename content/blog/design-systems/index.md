---
title: 'Design systems'
date: '2021-11-07'
---

An overview, and a novel take.

<!--more-->

---

## TLDR;

Design systems are a paradigm shift in web/app UX/UI design and front-end development.

With a systematic approach to the design process they produce consistent and scalable user interfaces.

Companies with resources lead the adoption process. They do it by augmenting old tools and processes with extensive mind power.

Smaller companies with less resources need to innovate to keep up.

## The current landscape

Design systems are new, yet old.

They've been around since 2015 when Google rolled out Material Design.
Still only big companies can afford to have their own design system today.

The rest builds on open source, freely available component libraries and design systems by employing heavy customizations.
We all know the result: similar looking websites and apps all around the internet.

If one goes further &mdash; and tries to roll out unique looking, yet consistent and scalable user interfaces for a progressive audience &mdash; hits the same obstacles as their predecessors, the big companies.

Same obstacles, less resources.
For Airbnb it took several years and interations to come up with a solution which scales.

Design systems are hard.

They introduce systematic approach to a domain previously dominated by human-driven, ad-hoc processes.

## Before design systems

Google is a company with dozens of digital assets &mdash; email, maps, search, ads, video, ... &mdash; across all platforms &mdash; native, web, desktop.

Before employing a design system these assets were looking more-or-less the same, in the best case, but many times completely different.

Material Design made the portfolio to look consistent.

Following unconditionally and perfectly the brand design guidelines. Whatever the asset might be, whenever the platform running on.

## What a design systems does?

It offers a systematic approach to the design process to reduce the cognitive load on designers.

To understand the amount of the cognitive load required to design, let's take for example the buttons. In a simple use case we have 20 variations.

Aside buttons, a design deals with dozens of other more complex patterns and components like layout, spacing, typography, navigation, responsiveness, images, animations, accessibility and more.

A designer &mdash; to be able to reason about, modify, or extend a design &mdash; has to keep in her mental model all these information, details, nuances, settings, and states.

An impossible task even at Google level with an infinite pool of designers.

Design systems solve this challenge via the _divide et impera_ method.

They separate design into small, independent and manageable parts / layers &mdash; style tokens, components, sections, pages, sites, apps &mdash; and enforce consistency on the entire path, across the entire portfolio.

Each layer is independent, self-contained, and acts as a single source of truth for its domain.

Each layer builds on the previous layer without the ability to modify it.

For example, tokens &mdash; the base layer &mdash; are atomic, and their single responsibility is to describe style via pure data.

Components build on tokens but they don't interfere with tokens. They use tokens for styling but they can't add new, custom styles. If a new style element is required &mdash; first it is added to the tokens, then the component is able to use it.

This separation of concerns, augmented with strong human discipline makes consistency and scalability achievable across thousands of tokens, components and hundreds of sites and apps.

## Tools and processes

The systematic approach brought by design systems left untouched the tools and processes used in creating digital assets.

A typical workflow is the same today as it was before design systems.

Designers use visual, non-programmable tools like Figma, Sketch, Adobe Illustrator etc. to create the layers of a design system.

These tools are visualization tools, not decision making tools.

When a designer has to make a decision &mdash; to change, extend a design &mdash; again, she has to build a mental model first, even if the model is now smaller due to the design system approach.

The decision made cannot be proven correct in an objective way like we used to have in software development, or in other exact science.

Designing with mental models is error-prone. Introduces continuous uncertainity. And requires human resources to scale.

The other drawback of the visual, non-programmable design tools is the deliverables they produce.

The designer's work needs to be further translated to the target medium by developers. This process is communication-heavy, error-prone again, and far from being real-time.

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
