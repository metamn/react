---
title: 'On design systems — 2'
date: '2021-11-07'
---

Tools and processes.

<!--more-->

---

## TLDR;

Design systems are a paradigm shift in UX/UI design and front-end development targeting native and web applications, sites.

With a systematic approach to the design process, they produce consistent and scalable user interfaces.

Companies with resources lead the adoption process. They do it by augmenting old tools and processes with extensive mind power.

Smaller companies with less resources must innovate to keep up.

## The current landscape

Design systems are new, yet old.

They've been around since 2015 when Google rolled out Material Design.
Still, only big companies can afford to have their own design system today.

The rest builds on open source, freely available component libraries and design systems by employing heavy customizations.
We all know the result: similar looking websites and apps all around the internet.

If one goes further &mdash; and tries to roll out unique looking, yet consistent and scalable user interfaces for a progressive audience &mdash; hits the same obstacles as their predecessors, the big companies.

Same obstacles, less resources.
For Airbnb, it took several years and iterations to come up with a solution which scales.

Design systems are hard.

They introduce a systematic approach to a domain previously ruled by human-driven, ad-hoc processes.

## Before design systems

Google is a company with dozens of digital assets &mdash; email, maps, search, ads, video, ... &mdash; across all platforms &mdash; native, web, desktop.

Before employing a design system these assets were looking more-or-less the same, in the best case, but many times completely different.

Material Design made the entire portfolio to look consistent.

Following unconditionally and perfectly the brand design guidelines. Whatever the asset might be, wherever the platform might be running.

## What a design system does?

It offers a systematic approach to the design process to reduce the cognitive load on designers.

To understand the amount of the cognitive load required to design, let's take for example the buttons. In a simple use case, we have 20 variations.

Aside to buttons, a design deals with dozens of other more complex patterns and components like layout, spacing, typography, navigation, responsiveness, images, animations, accessibility and more.

A designer &mdash; to be able to reason about, modify, or extend a design &mdash; has to keep in her mental model all this information. The details, the nuances, settings, and states.

An impossible task even at Google level with an infinite pool of designers.

Design systems solve this challenge via the _divide et impera_ method.

They separate design into small, independent and manageable parts / layers &mdash; style tokens, components, sections, pages, sites, apps &mdash; and enforce consistency on the entire path, across the entire portfolio.

Each layer is independent, self-contained, and acts as a single source of truth for its own domain.

Each layer builds on the previous layer without the ability to modify it.

For example, tokens &mdash; the base layer &mdash; are atomic, and their single responsibility is to describe style via pure data.

Components build on tokens, but they don't interfere with tokens. They use tokens for styling but they can't add new, custom styles. If a new style element is required &mdash; first it is added to the tokens, then the component is able to use it.

This separation of concerns, augmented with strong human discipline, makes consistency and scalability achievable across thousands of tokens, components and hundreds of sites and apps.

## Tools and processes

The systematic approach brought by design systems left untouched the tools and processes used in creating digital assets.

A typical workflow is the same today as it was before design systems.

Designers use visual, non-programmable tools like Figma, Sketch, Adobe Illustrator etc. to create the layers of a design system.

These tools are visualization tools, not decision-making tools.

When a designer has to make a decision &mdash; to change, extend a design &mdash; again, she has to build a mental model first, even if the model is now smaller due to the design system approach.

The decision made cannot be proven correct in an objective way like we used to have in software development, or in other exact science.

Designing with mental models is error-prone. Introduces continuous uncertainty. And requires human resources to scale.

The other drawback of the visual, non-programmable design tools is the deliverables they produce.

The designer's work needs to be further translated to the target medium by developers. This process is communication-heavy, error-prone again, and far from being real-time.

## Better tools and processes

It's easy to observe: the tools used by the designers introduce scalability, communication and cost issues.

They are the bottleneck in the process of building consistent user interfaces affordable on any scale, even for companies with less resources.

What if the tools in the design process &mdash; in the same way as in the development process &mdash; would be programmable?

What if the outcome of a design process would be a program / data instead of the current visuals-to-be-translated-into-code mess?

That would solve the mental model capacity problem and reduce the design and development process to real-time.

## Design systems as a database

Imagine the design system as a database.

Tokens, components, sections, pages, apps, sites &mdash; all quantifiable, thus correct. All queryable to an arbitrarily small level to fit comfortably into a single person's mental model.

Databases handle billions of entries and help us reason about infinite relationships.
They help us make correct decisions and ensure changes happen in real-time.

Designing with the help of databases sounds like an utopia &mdash; but it can be done today and requires only a minor cultural shift.

## Pair designing

Pair programming is an age-old paradigm.

Two developers sit in the front of a single machine. They collaborate instantly and produce a single output.

Pair designing would be similar. A designer and a developer sit at a single desk and produces a single output.

The designer would still use her own favourite visual tool like Figma.
But the deliverable would not be official. Just a temporary result.

The developer would input the Figma deliverables into a design system built on code, like a database. That would be the final, official deliverable &mdash; a living design system.

## A case study

I'm fortunate enough to both have a computer science degree and design works featured in online galleries.

I'm a developer who designs. An ideal pair designer.

In 2015, I've rolled out my portfolio powered by a living styleguide. There were no design systems at that time &mdash; by the term coined. The rest was/is still the same.

Since then, I'm working in this novel domain. I produce unique looking websites and apps for progressive brands and I need a handcrafted, tailor made, built-from-scratch, completely customizable design system for that.

The investment is considerable.

I've analysed tens of other design systems; wrote articles; a mini-book / technical guide; learnt other languages and stacks to better understand the current theory and best practices; done four complete iterations on the code base; employed the result in a couple of real-life applications.

But today, in short, this custom-made design system / component library offers:

1. **Wireframing** &mdash; To sketch up the requirement specifications and get immediate feedback.
2. **Mockuping** &mdash; To show real-life-like components, helping to finalize the information architecture and data structure.
3. **Inline content editing** &mdash; To let editors add content at an early stage, to find out missing parts and inconsistencies in the original requirement specifications.
4. **Theming** &mdash; To support design trials and errors, iterations and variations, rollbacks. In a fully responsive way, with annotated design decisions.
5. **Living documentation and playground** &mdash; Generated from code, to assure the design system driving the final product works, and all its parts are documented.

All these live, inside the browser.

No 3rd parties like Figma, Sketch, Storybook and co.

What you see is what you've already got.

Production-ready code with React, Typescript and CSS-in-JS.
Statically generated pages using a headless CMS and GraphQL.

Quite unique workflow.
Quite unique results.
Quite reduced production time, cost and hustle.
