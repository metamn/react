---
title: 'On function signatures'
date: '2021-05-28'
---

How to define default props and where to destructure them?

<!--more-->

---

This is an interesting topic affecting developer experience: code readability and cognitive load.

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

Associating default props, again, comes with different approaches.

```js
// Associating default props in function signature
function Video({prop1, prop2}: TVideo = video) {...}

// Associating default props in function signature at destructuring
function Video({prop1: 'prop1', prop2: 'prop2'}: TVideo) {...}

// Associating default props in function body
function Video(props: TVideo) {
  const {prop1, prop2} = merge(props, video)
}
```

Which approach is better? Which approach is complete? What makes an approach better than another? A few use cases and criterias help to attempt a shallow comparision.

Let's first focus on where to destructure then how to associate default props.

## Destructuring

### Code duplication (Is inevitable)

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
   // When not all props are needed ...
   // ... this approach contains less duplication
   const {prop1} = props
}
```

The advantage goes to the `function body` approach. It can lead to less duplication.

### Usage info on hover (Is incomplete)

Editors try to offer as much information as possible on hovering, clicking on a function name, or type declaration.

This comes handy when trying to use a function. It gives hints on usage and return value.

Editors vary in capability to display information on hover.
In my experience VSCode performs better in this area than Atom.
Or I might find a better plugin to Atom.
Other editors might perform better than VSCode.

Differences in editor capabilities reduce the importance of this criteria.

For curiosity, and pursuing a better development experience, after playing with various scenarios in VSCode I found:

1. Hover simply returns the function signature, as is, and the function return type.
2. When the return type is not defined it is inferred.
3. The inferred return type hint is more complete than the defined one.
4. `ctrl+hover` return the first 10 lines of the function, as is.

Based on the above there is no difference between the two destructuring approaches.

A hover when destructuring is in function signature gives the same information as a `ctrl+hover` when destructuring is in function body.

In both cases the hint information is incomplete. There is o type information on `prop1`, `prop2`.

## Default props

Default props prevent errors when destructuring props.
