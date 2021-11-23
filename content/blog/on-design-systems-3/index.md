---
title: 'On design systems — 3'
date: '2021-11-20'
---

Consistent user interfaces in web context.

<!--more-->

---

## Consistent user interfaces

Consistent &mdash; coherent and uniform &mdash; user interfaces eliminate all visual and logical glitches.

User interfaces, when consistent, _feel_ complete. They have no visible errors, and the experience they provide resembles enjoying an artwork.

Consistent, [by definition](https://www.wordnik.com/words/consistent), is in agreement with itself. It holds true as a group, it's not contradictory. It's marked by an orderly, logical, and aesthetically consistent relation of parts. It's unity and harmony.

Consistent UIs talk about the intent and the mastery of its creators. They persuade. They deliver an important message.

## The current landscape

Until recent years, creating &mdash; designing and developing &mdash; consistent user interfaces were an almost impossible task.

With [design systems thinking](http://metamn.io/react/on-design-systems-2/) &mdash; by introducing a novel design process &mdash; now it is possible to _design_ consistently.

The question is still open for the implementation part. Can consistently-designed UIs be implemented in the same consistent way, preserving the original consistency, without distorting it with coding?

The design / development separation exists because current UX/UI design tools and processes, even following the design systems paradigm, produce visual deliverables, which later must be translated to code &mdash; implemented on target platforms, in a specific context.

This article examines the translation in the web context.

How to develop consistent UIs with web technologies? How to implement a consistently designed UI on the web platform?

## The web context

The web platform &mdash; we all know very well &mdash; is the browser.

By using technologies like HTML, CSS, and Javascript &mdash; it manages to display interactive information across different devices and operating systems.

Developing consistent UIs in web context, thus, translates into implementing a design system with HTML, CSS, and Javascript &mdash; and running it in the browser.

## The historical context

Web front-end development has a long history. Through decades, it evolved from one paradigm to another.

Let's put design systems into this historical context.

![The context](ds-context-black-nologo.png)

- Each quadrant represents an era in web development.

- The historical timeline is depicted counter-clockwise.

- The axes connect web development to general software development terms and theory: APIs and frameworks.

And the story, in short, follows.

In the beginning &mdash; **Classless HTML** &mdash; there wasn't much styling and interactivity on websites. HTML was not linked to CSS and Javascript via class names &mdash; hence the name.

**CSS Frameworks** are the longest reigning paradigm. They are ubiquitous. Perhaps they are responsible for styling 90% or more of all webpages today. CSS frameworks are all household names: Bootstrap, Foundation, Tachyons, Bulma, Tailwind &mdash; just to name a few of them.

**Component libraries** and **design systems** are new. The line between them is blurry &mdash; for the novice &mdash; but very important in making a UI consistent or not.

## The journey

It takes a journey from the term `user interface` to `consistent web user interface`.

For those on the run, there is a big picture. It's enjoyable on larger screens via a click.

![UI](ui.png)

For the rest, there is a breakdown. A step-by-step guide where at the end a consistent UI approach unfolds.

## User interfaces

![UI](ui1.png)

User interfaces display a certain type of information. Information equipped with structure, presentation and behaviour.

Structure and presentation is familiar from graphic and print design. It defines layout and style.

Behaviour is specific to interactive environments like the web. This dynamic context requires the user interface to handle change &mdash; to behave on change.
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

The way of binding &mdash; the binding methods &mdash; are important. Each method defines a paradigm, an era in front-end development.

#### Classless

This paradigm makes no explicit bounds between HTML, CSS and Javascript.

HTML has no classes, thus styles and behaviour attached. Styling comes from a separate CSS file, behaviour comes from a separate JavaScript file, and everything is bound together via naming conventions.

Naming conventions are the last thing to scale.

#### Class-based binding

The next paradigm connects the separate parts &mdash; HTML, CSS, Javascript &mdash; via class names, a special HTML attribute.

In spite of being the longest reigning paradigm &mdash; CSS frameworks &mdash; are [fragile](https://www.oreilly.com/library/view/enduring-css/9781787282803/ch02.html) in scaling, composition.

#### Props

The latest advancement specific for component libraries and design systems &mdash; integrate, bind natively all parts of the displayable information &mdash; structure, style, behaviour &mdash; into a single standalone component.

Scaling and composition now relates to one single item &mdash; the component &mdash; vs. three items &mdash; HTML, CSS, and JavaScript &mdash; as it were before.

## API

![API](ui4.png)

The acronym stands for Application Programming Interface and comes from general software development theory.

APIs bind together standalone parts of a software system &mdash; in our case HTML, CSS and Javascript &mdash; in a programmable way.

The higher the programmability of the bindings &mdash; based on API &mdash; the better the quality and scalability of the system.

## Template- and Component-based UI frameworks

![Template-based UI framework](ui5.png)
![Component-based UI framework](ui6.png)

**Template-based UI frameworks** use class names as an API mechanism to bind together HTML, CSS and Javascript.

The binding is always open. An HTML element can take any number of CSS styles or JavaScript interaction handlers.

This leads to an open API, where everything is possible, even chaotic user interfaces.

**Component-based UI frameworks** use props as an API mechanism to bind together components.

Props-based binding gives a choice. Either go with an open, or a closed API.

## Open and closed APIs

![Open API](ui7.png)
![Closed API](ui8.png)

In **open APIs**, parts compose up freely.

There are no constraints on how parts bind together, and there is unlimited room for experimentation and play.

CSS frameworks &mdash; by their nature &mdash; and Component libraries &mdash; by choice &mdash; offer open APIs.

**Closed APIs** restrict the arbitrary composition of the parts with specific rules.

Systems can not build up freely, only by following the rules.

Classless HTML frameworks &mdash; by their nature &mdash; and design systems &mdash; by choice &mdash; embrace the closed API principle.

## Consistent and non-consistent UIs

![CSS framework](ui9a.png)
![Component library](ui9.png)
![Design system](ui10.png)

API-type and framework-type &mdash; combined &mdash; defines if a paradigm will produce consistent user interfaces, or not.

**CSS frameworks** are Template-based UI frameworks with class-based API bindings resulting, involuntarily and by definition, in an open-ended API.

Guaranteeing consistency in such an environment is possible, but perhaps only on a small scale, with considerable efforts.

**Component libraries** are Component-based UI frameworks with props-based API bindings who choose the open-ended approach.

Again, guaranteeing consistency is possible, with effort.

**Design systems** &mdash; Component-based UI frameworks &mdash; choose the constraints-based API approach to deliver consistency.

## Finally

Creating consistent user interfaces in web context is possible.

To achieve this feature, one should move away from hacking &mdash; binding with class names &mdash; to programming &mdash; binding with props.

And to move from non-programming languages &mdash; HTML, CSS &mdash; to programming languages &mdash; components built on JSX, CSS-in-JS.

Once everything is programmable, it becomes standard, classic software development.

Where well-known, battle-tested theory and practice &mdash; API, Framework &mdash; apply, and where consistency and scalability is solved.

## Resources

1. [Consistent — Definitions](https://www.wordnik.com/words/consistent)
2. [On design systems — 2: Tools and processes](http://metamn.io/react/on-design-systems-2/)
3. [The Problems of CSS at Scale](https://www.oreilly.com/library/view/enduring-css/9781787282803/ch02.html)
