---
title: 'My current stack'
date: '2020-12-21'
---

For highly interactive, static websites without API.

<!--more-->

---

React [worth it](http://metamn.io/react/things-ive-learnt-in-2020/) for a list of use cases.

One of these is [interactive design](https://en.wikipedia.org/wiki/Interactive_design) where the result aims for meaningful experiences.

That involves heavy user interactions &mdash; in a different way than apps do. Instead of data input the interaction is continuous through gestures, information transformation, real-time content updates from external sources.

For that scenario my current stack is:

## Typescript

`You'll know when you'll need it` &mdash; [Dan Abramov](https://overreacted.io/) once said and his prophecy came true.

When there is no API there is no single source of truth, there is no data layer.

Typescript to the rescue. It models the business domain and provides stable, scalable foundation for the UI. The end result is not less than a database with an API.

In plus, as a bonus, everything Typescript runs through a real-time linter to detect semantic and syntactic errors while writing code.

## Emotion

If React then Java/Typescript. On all fronts.

Structure and behaviour is already JSX. Presentation, styling should be JSS instead of CSS.

It's better to have [style objects](https://emotion.sh/docs/object-styles) and functions&mdash;pure Javascript code&mdash;than other constructs written on another language.

Form all the CSS-in-JS libraries out there only Emotion.js [supports](https://github.com/osequi/hacks/blob/master/CSS-in-JS.md) props in keyframes following the object syntax.

In other words with Emotion one can write anything CSS using Javascript syntax.
