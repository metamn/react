---
title: 'A little CSS history'
date: '2021-01-08'
---

All the buzzwords in a single post.

<!--more-->

---

## Jxnblk

Brent Jackson&mdash;Jxnblk&mdash;is a popular figure in the CSS frameworks and design systems landscape.

His [Two Steps Forward, One Step Back](https://jxnblk.com/blog/two-steps-forward/) article offers clues how to classify&mdash;and understand the purpose of&mdash;these tools.

The article is a journey in CSS history. It goes from the first CSS frameworks to the latest CSS-in-JS solutions used in design systems.

## Classification

Jxnblk classifies CSS frameworks by their **usage**, and **API** shape.

### Usage

Defines how CSS connects to HTML:

- In **Template-based UI frameworks** like Rails, PHP, plain HTML&mdash;they connect via the `class` or `style` HTML attribute.
- In **Component-based UI frameworks** like React, Vue, Web components&mdash;they connect via props.

```js
// Template based
<div class="p3 bold white bg-blue">I'm sorry</div>
```

```js
// Component based
<Box padding={3} fontWeight="bold" color="white" bg="blue">
  Hello
</Box>
```

### API

- **Open-ended** - Free to extend the API anytime, anywhere by anybody.
- **Constraints-based** - The API extends following a standard procedure executed by developers.

```js
// Open-ended

// Add anything to the API on the fly
.newAPIEntry {
	border: 1px solid
}
<div class="newAPIEntry p3 bold white bg-blue">
  I'm sorry
</div>
```

```js
// Constraints-based

// The API needs modification to understand the new 'border' prop.

<Box border="solid" padding={3} fontWeight="bold" color="white" bg="blue">
  Hello
</Box>
```

## Examples

- Tailwind, Bootstrap, Tachyons et all are **Utility / Atomic / Functional CSS** frameworks. They classify as _template-based_ and _open-ended_.
- Styled components, Emotion, Material UI et all are **CSS-in-JS** frameworks. They classify as _component-based_ and both _open-ended_ and _constraints-based_.

## Design systems and component libraries

A CSS-in-JS framework becomes constraints-based when the usage of `style` and `className` props on components is disabled.

This feature breaks the landscape into design systems (constraints-based) and component libraries (open-ended).
