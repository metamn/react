---
title: 'A little CSS history'
date: '2021-01-09'
---

All the buzzwords in a single post.

<!--more-->

---

## Jxnblk

Brent Jackson&mdash;Jxnblk&mdash;is a popular figure in the CSS frameworks and design systems landscape.

His [Two Steps Forward, One Step Back](https://jxnblk.com/blog/two-steps-forward/) article offers clues how to classify&mdash;and understand the purpose of&mdash;these tools.

The article offers a little history. It goes from the first frameworks to today's latest CSS-in-JS solutions.

## Classification

Jxnblk classifies CSS frameworks by their usage and API shape.

### Usage

Defines how CSS connects to HTML:

- In **Template-based UI frameworks** like Rails, PHP, plain HTML they connect via the `class` or `style` HTML attribute.
- In **Component-based UI frameworks** like React, Vue, Web components they connect via props.

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

### API shape

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

## Buzzwords

- **Utility / Atomic / Functional CSS** frameworks are: Tailwind, Bootstrap, Tachyons et all. They classify as _template-based_ and _open-ended_.
- **CSS-in-JS** frameworks are: Styled components, Emotion, Material UI et all. They classify as _component-based_.

## Constraints-based CSS-in-JS

To achieve the constraints-based state with a CSS-in-JS framework developers should disable the usage of `style` and `className` props on components.
