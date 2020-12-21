---
title: 'My current stack'
date: '2020-12-21'
---

For highly interactive, static websites without API.

<!--more-->

---

React [worth it](http://metamn.io/react/things-ive-learnt-in-2020/) for a list of use cases.

One of these is [interactive design](https://en.wikipedia.org/wiki/Interactive_design) where the result aims for meaningful experiences.

That involves heavy user interactions&mdash;in a different way than apps do. Instead of data input the interaction is continuous through gestures, information transformation, real-time content updates from external sources.

For that scenario my current, highly opinionated, but years in the making stack, follows:

## Typescript

`You'll know when you'll need it` &mdash; [Dan Abramov](https://overreacted.io/) once said and his prophecy came true.

When there is no API there is no single source of truth, there is no data layer.

Typescript to the rescue. It models the business domain and provides a stable, scalable foundation for the UI. The end result is not less than a database with an API.

In plus, as a bonus, everything Typescript runs through a real-time linter to detect semantic and syntactic errors while writing code.

## Emotion

If React then Javascript/Typescript. On all fronts.

Structure and behaviour is already JSX. Presentation, styling should be JSS too instead of CSS.

It's better to have [style objects](https://emotion.sh/docs/object-styles) and functions&mdash;pure Javascript code&mdash;than other constructs written on another language.

From all the major CSS-in-JS libraries Emotion.js is singular in [supporting](https://github.com/osequi/hacks/blob/master/CSS-in-JS.md) props in keyframe animations following the object syntax.

In other words with Emotion one can write anything CSS using Javascript.

## Jest and Testing Library

Interactive design doesn't require end-to-end testing where a flow runs across pages to complete.

Unit testing is good enough. Out-of-the-box tools like Jest, React Testing Library, TS-Jest extended with special libraries for hooks and responsiveness do the job.

## MDX

Storybook still doesn't fully deliver. In ten-out-of-ten projects where used it broke after a promising start. Reasons vary.

MDX together with unit tests are a complete Storybook replacement. Tests verify the scenarios while MDX presents them an easy and always working way.

For standard API documentation there is the great [Better Docs](https://github.com/SoftwareBrothers/better-docs) generator based on JSDoc.

## Next.js

Among frameworks Create React App is the standard. No wonder, it's backed by the creator of React, Facebook.

When generating the site on server side&mdash;Next.js provides the best support.

Interactive design sites present valuable content. That content must be understandable by machines, too. This is where SEO and static rendering comes in picture.

Gatsby was a contender. Their outdated philosophy `move fast and break things` makes the source code of this blog, running on Gatsby, rubbish.

## State

It would be nice to have [XState](https://xstate.js.org/) to reduce concerns around state as Typescript does around code.

The high learning curve is an impediment to that. Finite state machines are a mathematical model of computation. As such, the theory behind is comprehensive.

For a banal [menu animation](https://github.com/davidkpiano/xstate/issues/1702#issuecomment-740139365s) one must be familiar with transient states and guards.
