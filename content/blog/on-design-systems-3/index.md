---
title: 'On design systems — 3'
date: '2021-11-20'
---

Consistent user interfaces in web context. A theory.

<!--more-->

---

## Consistent user interfaces

Consistent &mdash; coherent and uniform &mdash; user interfaces eliminate all visual and logical glitches.

User interfaces, when consistent, _feel_ complete. They have no visible errors, and the experience they provide resembles enjoying an artwork.

Consistent, [by definition](https://www.wordnik.com/words/consistent), is in agreement with itself. It holds true as a group, it's not contradictory. It's marked by an orderly, logical, and aesthetically consistent relation of parts. It's unity and harmony.

Consistent UIs talk about the intent and the mastery of its creators. They persuade. They deliver an important message.

## The current landscape

Until recent years, creating consistent user interfaces were an almost impossible task.

With design systems &mdash; introducing a novel design process &mdash; it became possible.

Design systems ain't a silver bullet. Success isn't guaranteed out of the box. It still requires team discipline and solid mental work. Or, [better tooling](http://metamn.io/react/on-design-systems-2/).

But at least, creating consistent user interfaces is now possible with design systems. Across platforms.

## The contexts

Current tools and processes in UX/UI design and development, even with design systems, produce two separate, independent deliverables.

First, a visual design, not related at all to code. Then the code, the translation of the design to a platform, via code.

This article examines the web context. How to create consistent UIs with web technologies.

## The web context

The core web platform &mdash; we all know very well &mdash; is the browser.

Using technologies like HTML, CSS, Javascript, WebGL, and more, it manages to display interactive information across devices.

Consistent UIs in web context, thus, translates into implementing a design system with HTML, CSS, and Javascript, and run it in the browser.

## The buzzwords

Let's start by mapping up the web buzzwords related to design systems.

![The context](ds-context-black-nologo.png)

The quadrants put design systems into a historical context &mdash; each quadrant representing an era in web development. The historical timeline is depicted counter-clockwise.

The axes put web development into a larger &mdash; software development &mdash; context: APIs and frameworks.

And the buzzwords, in short:

In the beginning &mdash; **Classless HTML** &mdash; there weren't much styling on websites. Hence HTML was not linked to CSS via class names. However this paradigm lately became a [trend](https://css-tricks.com/no-class-css-frameworks/) again due to it's simplicity and scalability.

**CSS Frameworks** are ubiquoitus. Bootstrap, Foundation, Tachyons, Bulma, Tailwind. Perhaps they style 90% or more of all webpages today.

**Component libraries** and **design systems** are new. The line between them is blurry for the novice. But &mdash; it turns out in the next chapters &mdash; this line defines if a UI is consistent or not.

## Consistent user interfaces in web context

It takes a journey from user interfaces to consistent web UIs &mdash; a dozen of steps, some steps depicting an era in front-end development.

For those on the rush there is a big picture. It's enjoyable on larger screens via a click.

![UI](ui.png)

For the rest, there is a breakdown. A step-by-step overview of the process where a consistent UI theory unfolds.

## User interfaces

![UI](ui1.png)

User interfaces display information. A special information: equipped with structure, presentation and behaviour.

Structure and presentation is familiar from graphic and print design. It defines layout and style.

Behaviour is specific to interactive environments like the web.

This dynamic context requires the user interface to handle change &mdash; to behave on change.
Per se, it equips information with a dynamic attribute.

## Web user interfaces

![Web UI](ui2.png)

Web user interfaces rely on a specific technology &mdash; the browser &mdash; to display information.

Browsers:

- Structure information with **HTML**.
- Define style via **CSS**.
- Handle behaviour using **Javascript**.

## Binding

![Binding](ui3.png)

HTML, CSS and Javascript are standalone technologies. To work together &mdash; they need to be merged, bound together.

The way of binding &mdash; the binding methods &mdash; are important. Each method defines an era in front-end development.

### Classless

This paradigm makes no bounds between HTML, CSS and Javascript.
It leaves binding exclusively to the browser.

HTML has no classes, styles attached. Styling comes from a separate CSS file, where all HTML elements are styled by name.

### Class-based binding

The next paradigm connects the separate parts &mdash; HTML, CSS, Javascript &mdash; via class names, a special HTML attribute.

So far this was the longest standing paradigm &mdash; the era of CSS frameworks &mdash; and turned out to be fragile on scaling, composition.

### Props

The latest advancement, which integrates &mdash; binds natively &mdash; all parts: HTML, CSS, Javascript into a single standalone component.

And manages scaling via props.

This era is characterised by component libraries and design systems.

## API

![API](ui4.png)

The acronym stands for Application Programming Interface and comes from general software development theory.

APIs bind together standalone parts of a software system &mdash; in our case HTML, CSS and Javascript &mdash; in a programmable way.

The higher the programmability of the bindings, the better the scalability of the system.

## Template- and Component-based UI frameworks

![Template-based UI framework](ui5.png)
![Component-based UI framework](ui6.png)

**Template-based UI frameworks** use class names as API mechanism to bind together HTML, CSS and Javascript.

The binding is always open. An HTML element can take any number of CSS styles or JavaScript interaction handlers.

This leads to an open API, where everything is possible, even chaotic user interfaces.

**Component-based UI frameworks** use props as API mechanism to bind together HTML, CSS and Javascript into standalone components.

Props, being more advanced than class names, let component frameworks to freely choose if they go with an open or closed API.

## Open and closed APIs

![Open API](ui7.png)
![Closed API](ui8.png)

In **open APIs** parts compose up freely.

There are no constraints and there is unlimited room for experimentation and play.

CSS frameworks and Component libraries offer &mdash; by their nature, and without any other choice &mdash; open APIs.

**Closed APIs** restrict the arbitrary composition of the parts with specific rules.

Systems can not build up freely only by abiding the rules.

Classless HTML frameworks and Design systems embrace this closed API principle.

## CSS frameworks, Component libraries, Design systems

![CSS framework](ui9a.png)
![Component library](ui9.png)
![Design system](ui10.png)

## Non-consistent UI

## Consistent UI
