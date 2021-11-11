---
title: 'On design systems — 3'
date: '2021-11-11'
---

Consistent user interfaces in web context.

<!--more-->

---

## The web context

[The DS series on this blog](http://metamn.io/react/on-design-systems/) study consistent and scalable user interfaces with the help of design systems.

Across disciplines &mdash; design and development &mdash; and platforms &mdash; web and native.

Let's focus, for now, to the web platform, and examine consistency using the web's technical terms.

## Two charts

Let's start with visual explanation then elaborate with words.

The first chart maps the buzzwords.

The second chart connects the buzzwords to well-know web technologies like HTML, CSS and Javascript.

### The buzzwords

![The context](ds-context-black.png)

### HTML, CSS, Javascript and the bindings

![The flow](ui.png)

Please click on the image to enjoy it in full size. Or scroll down to see the larger, individual images composing up this big picture.

## And now the words

### User interfaces

User interfaces display information equipped with structure, presentation and behavior.

Structure and presentation is familiar from graphic and print design. It defines layout and style.

Behavior is specific to interactive environments. This dynamic context requires the user interface to handle change—to behave on change.

Per se, it equips information with a dynamic attribute.

![UI](ui1.png)

### Web user interfaces

Web user interfaces rely on a specific technology—the browser—to display information.

Browsers:

- Structure information with HTML.
- Define style via CSS.
- Handle behavior using JavaScript.

![Web UI](ui2.png)

### Binding

HTML, CSS and JavaScript are standalone technologies. To work together they need to bind together.

The way of binding, the binding methods are important. Each method defines an era in web design and development.

- **Classless**, from the beginning, makes no bounds between HTML, CSS and JavaScript. It leaves binding exclusively to the browser.
- **Class-based binding**, a next iteration, connects parts via HTML attributes (class names).
- **Props**, the latest advancement, integrates—binds natively—all parts into a single standalone component. And composes up components via props.

![Binding](ui3.png)

### API

The acronym stands for Application Programming Interface.

Systems exposing APIs are programmable.

The higher the programmability the better the system.

At the beginning, in the classless era programming the web was difficult.

Now with components the web is fully programmable like any other software environment.

![API](ui4.png)

### Template-based UI framework

Template-based UI frameworks (still) bind HTML, CSS and JavaScript via class names or other HTML attributes.

This binding method is open. Parts combine freely without constraints.

A HTML element can take any number of CSS styles or JavaScript interaction handlers.

This leads to an open API. Where everything is possible, even chaotic user interfaces.

![Template-based UI framework](ui5.png)

### Component-based UI framework

Component-based UI frameworks natively bind HTML, CSS and JavaScript into standalone components.

Then compose up components into larger systems via props.

Arbitrary composition leads to an open API.

Constraints-based composition leads to a closed API.

Component frameworks, unlike Template-based frameworks are free to choose which way to go.

![Component-based UI framework](ui6.png)

### Open API

n an open API parts compose up freely.

There is unlimited room for experimentation and play.

CSS frameworks and Component libraries embrace this technique.

CSS frameworks have no choice, they are open by nature. Component libraries made this choice explicit.

![Open API](ui7.png)

### Closed API

Closed APIs restrict the composition of the building blocks to specific rules.

Systems can't build up freely but following a purpose and direction.

Design systems embrace the closed API principle.

![Closed API](ui8.png)

### Component library

![Component library](ui9.png)

### Design system

![Design system](ui10.png)

### Non-consistent UI

### Consistent UI
