---
title: 'How I write React code in 2021'
date: '2021-05-29'
---

xxx

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
- Type and data requirements
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
 * Type and data requirements
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

## Type and data requirements

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
// `projects` should be merged into a single interface.
export interface TProjectSlugPage extends TComponent<null> {
  seo: TSeo;
  project: TProjects;
  error: TError;
}

export interface TProjectList {
  projects: TProjects;
}
```

## Default values

- imports
- type definition
- default value
- gql
- main function
  - props
  - transformations
  - rendering
- functions file
  - ramda

## 3. Default values

- function signature
- merging

## 4. Functional abstraction

- data (immutable)
- transformations (pure)
- rule of three

## 5. Simple rendering

- no logic
- no complex props

## 6. Testing

- tsx
- ts

## 7. Documentation

- API doc
- Better docs
- Custom docs

## Resources

- [VSCode Folder Templates](https://github.com/Huuums/vscode-folder-templates)
- [New Component](https://github.com/osequi/new-component)
- [Absolute Imports and Module path aliases](https://nextjs.org/docs/advanced-features/module-path-aliases)
- [Single-responsibility Principle](https://en.wikipedia.org/wiki/Single-responsibility_principle)
