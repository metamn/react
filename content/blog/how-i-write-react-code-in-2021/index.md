---
title: 'How I write React code in 2021'
date: '2021-05-29'
---

xxx

<!--more-->

## 1. Generators

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

## 2. Component structure

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
