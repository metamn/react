---
title: 'How I write React code in 2021'
date: '2021-05-29'
---

Optimized for less cognitive load.

<!--more-->

## Generators

To make code look uniform I use generators.

Instead of manually creating project files, folders &mdash; and writing boilerplate code &mdash; I generate them.

For VSCode I use [VSCode Folder Templates](https://github.com/Huuums/vscode-folder-templates). In a project where team members use different editors we go for a command line generator like [New Component](https://github.com/osequi/new-component).

The generator generates all files a component needs: the main component file, test and documentation files, style and data declarations, or anything else specific to the project.

Inside every file the generator generates boilerplate code. The final result is uniform, and is ready in seconds vs. minutes when code and structure duplicates by hand.

A simple component generator example:

```js
// [FTName].tsx
import React from "react";
import { TComponent, component } from "@components";
import { edoStyle } from "@tokens";
import { defaultsDeep } from "lodash";

export interface T[FTName] extends TComponent<null> {}

export const [FTName | lowerCase]: T[FTName] = {
  ...component
};


export function [FTName](props: T[FTName]) {
  const props2 = defaultsDeep({...props}, [FTName | lowerCase]);
  const {className} = props2;

  const style = edoStyle(className, "[FTName]");

  return <p {...style}>[FTName]</p>;
}
```

```js
// index.ts
export * from './[FTName]'
```

After generating a `Button` component the result becomes:

```js
// Button.tsx
import React from 'react'
import { TComponent, component } from '@components'
import { edoStyle } from '@tokens'
import { defaultsDeep } from 'lodash'

export interface TButton extends TComponent<null> {}

export const button: TButton = {
  ...component,
}

export function Button(props: TButton) {
  const props2 = defaultsDeep({ ...props }, button)
  const { className } = props2

  const style = edoStyle(className, 'Button')

  return <p {...style}>Button</p>
}
```

```js
// index.ts
export * from './Button'
```

## Component structure

To make code understandable I keep it simple and slim.
Less code, less cognitive load &mdash; leads to better maintenance.

I focus not only on small code size but predictable structure.

Every component has three sections:

- Imports
- Type and data definitions
- Component code

```js
// Button.tsx

/**
 * Imports
 */
import React from 'react'
import { TComponent, component } from '@components'
import { edoStyle } from '@tokens'
import { defaultsDeep } from 'lodash'

/**
 * Type and data definitions
 */
export interface TButton extends TComponent<null> {}

export const button: TButton = {
  ...component,
}

export const buttonQuery = `` // GraphQL

/**
 * Component code
 */
export function Button(props: TButton) {
  const props2 = defaultsDeep({ ...props }, button)
  const { className } = props2

  const style = edoStyle(className, 'Button')

  return <p {...style}>Button</p>
}
```

## Imports

[Absolute imports and module path aliases](https://nextjs.org/docs/advanced-features/module-path-aliases) is a Typescript feature making project imports better comprehensible and easier to write.

In `tsconfig.json` one can set up aliases, `paths` pointing to common folders in the project.

```json
{
  "compilerOptions": {
    "paths": {
      "@data": ["data/"],
      "@apps/*": ["apps/*"],
      "@components": ["components"],
      "@tokens": ["tokens/"]
    }
  }
}
```

Then in components, project-related `imports` use these aliases vs. relative paths.

`import { edoStyle } from '@tokens'` is easier to write than `import { edoStyle } from '../../design-system/tokens'`.

Sparing attention with little tricks add up. The less attention needed for non-creative code the more attention stays available for writing _real_ code.

## Type and data definitions

Programming is about transformation. The problem comes in, it gets solved, and the solution goes out.

It's good practice to start the component code with defining the problem in terms of data.

For that we have PropTypes, TypeScript and optionally, when the data comes from an API, GraphQL or JSON.

In any case I use type definitions.

Even when the data comes from the API.
At first it seems definition duplication but the scope differs.

Type definitions assure the transformations (the functions) won't break.
Data definitions assure the front-end is in sync with the back-end.

When no data comes from the API type definitions help to lay out a front-end API.

Yes, front-end needs an API too. Otherwise how do you build a design system, or component library, with dozens of components and tokens with no back-end?

### Single-responsibility Principle

In addition, type definitions make sure the component is minimal, follows the [Single-responsibility Principle](https://en.wikipedia.org/wiki/Single-responsibility_principle).

More than one type definitions inside a component is a code smell. It means the component should split. It does more than a well-defined singular task.

```js
// This is a code smell.
// `project`, `projects` should merge into a single interface.

export interface TProjectSlugPage extends TComponent<null> {
  seo: TSeo;
  project: TProjects;
  error: TError;
}

export interface TProjectList {
  projects: TProjects;
}
```

## Default values and function signatures

There are ways to define component props and associate default values to them.

A common approach is to destructure props in the function signature. Another approach is to destructure them in the function body.

```js
// Destructuring in function signature
function Video({prop1, prop2}: TVideo) {...}

// Destructuring in function body
function Video(props: TVideo) {
  const {prop1, prop2} = props
}
```

Which approach is better? It turns out there is no _best_ approach.
After all, it boils down to personal taste, use case or school of thought.

What makes an approach better than another? Criterias help to attempt a shallow comparision.

### Code duplication is inevitable

Assuming type definitions are always in place:

```js
interface TVideo {
   prop1: string,
   prop2: string
}

// Duplication in function signature
function Video({prop1, prop2}: TVideo)

// Duplication in function body
function Video(props: TVideo) {
   const {prop1, prop2} = props
   // If not all props are destructured, this approach contains less duplication
   const {prop1} = props
}
```

The advantage goes to the `function body` approach.

### Usage info on hover

Editors try to offer as much information as possible on hovering a function name, or type declaration.

This comes handy when trying to use a function. It gives hints on usage and return value.

Editors vary in capability to display information on hover.
In my experience VSCode performs better in this area than Atom. Or I might not found a better plugin to Atom.

After playing with various scenarios in VSCode I found:

```js
// Gives the prop list information on hover
function Video({prop1, prop2}: TVideo) {..}

// Gives no information on hover
function Video(props: TVideo) {..}

// When a function return type is present the information on hover disappears
// On `ctrl+hover` slightly better information is displayed, but still incomplete
function Video({prop1, prop2}: TVideo): JSXElement {..}
```

## Functional abstraction

React plays the [functional and reactive](http://metamn.io/react/the-reactive-fuctional-nature-of-react/) game.

It borrows often from Clojure/ClojureScript, a language built on a grand abstraction.

![The Grand Abstraction](the-grand-abstraction.png)
_From Alex Miller's screencast [Clojure Enemy of the State](https://youtu.be/qe60zwUAOqE)_

The idea is to transform initial data into a series of sequences and apply standard code upon the sequences.

This is how Clojure solves problems. Divides a problem into subproblems &mdash; small sequences &mdash; and applies standard problem solving techniques on each sequence.

They key is standard code / standard problem solving technique.

Clojure offers a vast standard library capable to manipulate all kind of sequences. The task of a developer reduces to _use_ the library vs. writing her own code. This way the solution is better: approved, used and reused by a community vs the brainchild of a single individual.

I use the same approach in writing React component functions.

I start with the data (props), then create sequences from props, where I apply &mdash; ideally &mdash; standard functions.

```jsx
export function Video(props: TVideo) {
  /**
   * Start with the data
   */
  const props2 = defaultsDeep({ ...props }, video)
  const { className, hosted, served } = props2

  /**
   * Chopped sequences: `hosted`, `served`
   * Apply function on sequences
   */
  const url = getVideoUrl(hosted, served)
  if (!url) return null

  /**
   * Chopped sequence: `className`
   * Apply function on sequence
   */
  const style = edoStyle(className, 'Video')

  /**
   * When all the subproblems are solved ...
   * ... return the result
   */
  return <ReactPlayer url={url} {...style} />
}
```

It's nothing extraordinary in the code above. It looks natural, and should look natural.

The advantage shows in time. A standard library grows along the projects offering reliability and faster development time for its users.

On another hand this technique offers uniform thinking across a team. It reduces cognitive load both for newcomers and long-term maintainers.

## Functional style

A key approach in functional programming is to create atomic sequences / subproblems and atomic solutions for them.

An atomic problem / solution is not further reduceable. It is pure, it exists in a canonical state.

Practice shows systems compose up better when the underlying constructs, components are atomic / pure.

In the example above both `defaultsDeep`, `getVideoUrl`, `edoStyle` and `ReactPlayer` are atomic. They can't be further reduced. And they return predictable results which compose up nicely.

If we look deeper, let's say into the `getVideoUrl` code, we should see pure / atomic code, again.

```js
export function getVideoUrl(hosted, served): string[] | string | null {
  if (!hosted && !served) return null
  return hosted && hosted?.videoUrl
    ? getHostedUrl(hosted)
    : getServedUrl(served)
}
```

And so on.

```js
export function getHostedUrl(hosted): string | null {
  return hosted?.videoUrl
    ? canPlayUrl(hosted?.videoUrl)
      ? hosted?.videoUrl
      : null
    : null
}
```

## Functional programming with Ramda

[Functional programming](https://github.com/MostlyAdequate/mostly-adequate-guide) is not a silver bullet. And it's hard to learn when one is coming from object-oriented, imperative programming &mdash; as majority of us do.

Understanding its principles and applying its style is often enough in a React environment. A short learning assures immediate better code.

I often find myself in front of a problem more complex than mapping and reducing data.
In such cases I appeal to [Ramda](https://ramdajs.com/), a functional library for JavaScript.

Ramda is transparent to React. No matter if you write `getVideoUrl` with Ramda or JavaScript. React can't sense the difference.

The difference is in the cognitive load of the developer.

Writing slightly complex algorithms in the imperative way I found to take a larger toll on my attention and patience than writing the same algorithm with Ramda.

With Ramda I think more about the problem &mdash; in time, in depth &mdash; and write less code.

The end result feels compact. Even if I use only a small subset of the functional programming toolset &mdash; immutable data, curried functions, and compositions.

## Summing up

Unlike its counterparts &mdash; Elm, Ruby on Rails &mdash; React is a less-opinionated framework.

It leaves what to optimize for on the developer.

I choose to optimize for simplicity &mdash; as less cognitive load as possible.

Why? React sitting in the middle, between the user interface and the back-end, requires multiple domain knowledge. HTML, CSS, GraphQL, REST API, Design Systems / Component Libraries.

A lightweight approach on React spares attention for the other domains.
When React is a simple glue I can focus on the other parts of the stack.

## Resources

- [VSCode Folder Templates](https://github.com/Huuums/vscode-folder-templates)
- [New Component](https://github.com/osequi/new-component)
- [Absolute Imports and Module path aliases](https://nextjs.org/docs/advanced-features/module-path-aliases)
- [Single-responsibility Principle](https://en.wikipedia.org/wiki/Single-responsibility_principle)
- [The reactive, functional nature of React](http://metamn.io/react/the-reactive-fuctional-nature-of-react/)
- [Clojure Enemy of the State](https://youtu.be/qe60zwUAOqE)
- [Professor Frisby's Mostly Adequate Guide to Functional Programming](https://github.com/MostlyAdequate/mostly-adequate-guide)
- [Ramda JS](https://ramdajs.com/)
