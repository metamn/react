---
title: 'Naming and structuring'
date: '2021-01-10'
---

For design systems.

<!--more-->

---

## Hard problem

There are only two hard things in Computer Science: cache invalidation and naming things.

This [cliche](https://skeptics.stackexchange.com/questions/19836/has-phil-karlton-ever-said-there-are-only-two-hard-things-in-computer-science) is so true it doesn't even need quotes.

Naming is hard because it's subjective. However, with time, consensus is possible. After all we've managed to name colors.

## Why naming is important?

Good naming conventions reduce cognitive load and enable interoperability.

### Cognitive load

First, they make easy to _learn_ the system. Then to _use_ the system.

When a system is able to become second nature for its users their attention will spend on improving it, build with it.

Rather than on finding the way&mdash;again and again&mdash;how to do it.

Naming and structuring&mdash;breaks or makes a system.

### Interoperability.

Once a great naming convention pops up&mdash;it's adapted en masse. This leads to the `learn once, use everywhere` phenomena.

## What to name?

In design systems: the folder structure, the component names and the component props.

Folders, components and props form a design system's API.

## The current state

The idea of a [Minimal API Surface Area](https://www.youtube.com/watch?v=4anAwXYqLG8) is on the web development / design systems agenda. With results pouring in.

- [Theme Specification](https://system-ui.com/theme) shows a way to name and structure tokens.
- [CSS Layout](https://csslayout.io/) and [UI Guideline](https://www.uiguideline.com/components) offer decent hints for naming and structuring components.
- [Brent Jackson](https://jxnblk.com/blog/defining-component-apis-in-react/) shares his experinces in naming props.
- [The Deno Style Guide](https://deno.land/manual@v1.6.3/contributing/style_guide) tells us about reducing the number of props.

The list is not complete. It will never be. But it's good enough to take another humble attempt on naming and structuring a design system.

## Folder structure

The attempt to [organize CSS](https://css-tricks.com/methods-organize-css/) failed spectacularly in recent years. OOCSS, SMACSS, Atomic CSS and co&mdash;once a silver bullet&mdash;are long gone now.

The reason of their failure was unnecessary abstraction. They've tried to force external concepts&mdash;from biology in case of Atomic CSS&mdash;on web development.

It turned out organizing CSS doesn't require any additional abstraction. The abstraction is already present, and it is _natural_.

We all know what typography, colors, navigation, layout and forms mean. Let's do not hide these abstractions under obscure folders like atoms, molecules and organism.

In this natural, pure spirit let's see where no abstractions might lead us.

<table>
	<thead>
		<tr>
			<th>Folder</th>
			<th>Contents</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Breakpoints</td>
			<td></td>
		</tr>
		<tr>
			<td>Colors</td>
			<td></td>
		</tr>
		<tr>
			<td>Typography</td>
			<td>
				Fonts<br/>
				Scale</br/>
				Elements<br/>
				Grid<br/>
				...
			</td>
		</tr>
		<tr>
			<td>Decorations</td>
			<td>
				Links<br/>
				Buttons<br/>
				Borders<br/>
				Icons<br/>
				Background images<br/>
				...
			</td>
		</tr>
		<tr>
			<td>Navigation</td>
			<td>
				Menu<br/>
				Pagination</br/>
				Breadcrumbs<br/>
				...
			</td>
		</tr>
		<tr>
			<td>Forms</td>
			<td>
				Button<br/>
				Checkbox</br/>
				Radio<br/>
				Select<br/>
				Chip<br/>
				Input<br/>
				Label<br/>
				...
			</td>
		</tr>
		<tr>
			<td>Layout</td>
			<td>
				Header<br/>
				Footer</br/>
				Sidebar<br/>
				Holy grail<br/>
				Horizontal<br/>
				...
			</td>
		</tr>
		<tr>
			<td>Media</td>
			<td>
				Image<br/>
				Video</br/>
				Audio<br/>
				Canvas<br/>
				SVG<br/>
				WebGL<br/>
				...
			</td>
		</tr>
		<tr>
			<td>Content</td>
			<td>
				Card<br/>
				Table</br/>
				List<br/>
				Carousel<br/>
				Accordion<br/>
				Timeline<br/>
				Tab<br/>
				Avatar</br>
				Hero<br/>
				...
			</td>
		</tr>
		<tr>
			<td>Notifications</td>
			<td>
				Alert<br/>
				Toast</br/>
				...
			</td>
		</tr>
		<tr>
			<td>Overlays</td>
			<td>
				Modal<br/>
				Tooltip</br/>
				Popover<br/>
				...
			</td>
		</tr>
	</tbody>
</table>

The list freely expands when new elements like VR, AR come to the browser.

## Component names

Naming components is as easy as naming folders.

This is true&mdash;unfortunatelly&mdash;only for high level components.

Header, Button, Menu, List. These names are all, again, _natural_.

In reality high level components are composed up from smaller parts (elements) and reflect different states (modifiers).

For example, a Header is composed up from a Title, Subtitle and Description. A Button might be Large and a large button can be red&mdash;Primary, blue&mdash;Secondary or grey&mdash;Disabled. A button can or cannot have an Icon associated.

The elements and modifiers of a component complicates naming to a level hard to manage.

![Buttons](buttons.png)
Source: [BitSrc](https://blog.bitsrc.io/design-systems-react-buttons-with-the-base-variant-pattern-c56a3b394aaf)

### The Base / Variant Pattern (BEM)

It took four years for [AirBnB](https://www.slideshare.net/MajaWichrowska/building-and-rebuilding-the-airbnb-design-system) to solve this problem. They come up with the Base / Variant pattern, which is nothing else than the good old [BEM methodology](http://getbem.com/introduction/).

Applying BEM (Block&mdash;Element&mdash;Modifier) to the Header and Button examples results in the following naming conventions and folder structure:

```bash
# __ denotes Elements
# Elements are components
__Title
__Subtitle
__Description
# Block
# Blocks are components
Header
```

```bash
# -- denotes Modifiers
# Modifiers are style declarations
--Large
--Primary
--Secondary
--Disabled
# __ denotes Elements
__Icon
__Text
# Block
Button
```

Composing up the Header goes:

```jsx
<Header>
  <HeaderTitle />
  <HeaderSubtitle />
  <HeaderDescription />
</Header>
```

Composing the buttons:

```jsx
<Button variant="largePrimary">
  <ButtonIcon variant="hidden"/>
  <ButtonText ...props/>
</Button>
```

Composing the button styles:

```js
// Remember, Modifiers are not components but style declarations
const largePrimary = {
  ...buttonLarge,
  ...buttonPrimary,
}
```

Remove `__` and `--`.

BEM scales well.

It's been around from 2015 and unlike its peers&mdash;OOCSS, SMACSS, SUITCSS, Atomic CSS&mdash;survived the [template-to-component](https://metamn.io/react/a-little-css-history) transition period and proved to be successful at an organization of AirBnB scale.

### The Single Responsibility Principle (SRP)

Since a scalable naming convention is available splitting components into small parts is [encouraged](https://jxnblk.com/blog/defining-component-apis-in-react/).

To illustrate [SRP](https://en.wikipedia.org/wiki/Single-responsibility_principle) let's use Brent Jackson's [Items example](https://jxnblk.com/blog/defining-component-apis-in-react/) where one monolithic component is split into standalone (micro) components&mdash;if one can borrow from [Microservices](https://en.wikipedia.org/wiki/Microservices).

```js
// Instead of this
class Items extends React.Component {
  renderItems ({ items }) {
    return items.map(item => (
      <li key={item.id}>
        {renderItem(item)}
      </li>
    ))
  }
  renderItem (item) {
    return (
      <div>
        {item.name}
      </div>
    )
  }
  render () {
    return (
      <ul>
        {renderItems(this.props)
      </ul>
    )
  }
}

// Do this
const ItemList = ({ items }) =>
  <ul>
    {items.map(item => (
      <li key={item.id}>
        <Item {...item} />
      </li>
    )}
  </ul>

const Item = ({ name }) =>
  <div>{item.name}</div>

class Items extends React.Component {
  render () {
    const { items } = this.props
    return <ItemList items={items} />
  }
}
```

### Rule of Three

SRP tends to increase the number of components affecting developer experience. At a scale of hundreds of components working with the system offers less joy.

A solution, from Jackson, is to use the [rule of three](<https://en.wikipedia.org/wiki/Rule_of_three_(computer_programming)>) when splitting up components to avoid premature optimization.

Taking the examples above and applying the rule of three we have:

- Header: needs splitting into 3 elements
- Button: doesn't need splitting into 2 elements; needs splitting into 4 variants
- Items: needs splitting into 3 elements

## Component props

Structuring folders and naming components follow design patterns. Such exact theory is not available for component props.

What's left is to come up with ideas, rules in the _spirit_ of the existing theory for the previous parts of the API. And combine these with industry's common practices.

The problem to solve is naming props and reducing their numbers.

#### Inconsistency

Poorly written APIs use different names for props sharing the same semantic meaning, or functionality.

As the API grows this phenomena grows&mdash;introducing cognitive load on its users.

```jsx
// Inconsistent prop naming
<Font name="Nimbus Sans">
<Text type="body">
<Button variant="small">
```

What if instead of `name` and `type` only `variant` would be used? That would mean consistency. Accross the entire API.

And less cognitive load: Learn once use it everywhere.

Why `variant`? Because the Component naming part of the API relies on the Base / Variant pattern. No need to reinvent a new term to describe an existing concept.

#### Not following the existing API

Underlying technologies (HTML, CSS, React, Typescript) come with an API. It's great to use that API instead of reinventing new terms.

For example, the HTML API provides an `onclick` prop. It would be nice to call `onClick` all props handling clicks.

Going further, the CSS API provides a `padding` property. It should be used instead of renaming it to `spacing`.

#### Numerosity

Deno&mdash;the upcoming web stack replacing Node&mdash;in its [style guide](https://deno.land/manual@v1.6.3/contributing/style_guide) proposes max. 2 standalone props. The rest, if necessary, should go into an `options` object.

At first, this sounds an impossible idea. Then, one should remember Deno resembles a bright and proven team. They can't really go wrong.

After a quick analysis this `max. 2 props` idea sounds viable. In a design system I'm working on the two most used props are `as` and `variant`.

With these two props a very fast development is possible. Only in special cases other props are required.

Going with `variant`, `as`, `options` is worth a try.

More, it would be ideal. The folder structure, the component name, and these 2+1 props should be enough to _uniquely_ identify an API endpoint.

Such a cognitive load reducement! One-third less to remeber.
