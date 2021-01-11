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
