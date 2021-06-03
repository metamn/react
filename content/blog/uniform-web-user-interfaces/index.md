---
title: 'Uniform web user interfaces'
date: '2021-06-01'
---

A short study.

<!--more-->

## The need

Uniform user interfaces eliminate visual and logical glitches providing a seamless user experience.

An user interface, when it is uniform it _feels_ complete. Not only has no visible errors but the experience it provides resembles enjoying an artwork.

Uniform UIs talk about the intent and the mastery of its creators. They persuade. They deliver an important message.

## The current landscape

Few user interfaces are uniform today.

If we take newspapers &mdash; the business segment living off by how successful they present and deliver content &mdash; the experience they provide is not seamless.

Please open Financial Times, Bloomberg, The Spectator, South China Morning Post, The Washington Post, Le Monde Diplomatique &mdash; you name it &mdash; in a desktop browser, with a regular 1920 x 1080 pixel resolution.

Unless zoomed to 150-170% the experience is poor. Once the site design is adjusted manually by the user &mdash; it becomes infinitely enjoyable.

A good question is why these sites don't come in full screen / at maximum usability by default.

Is it technically impossible? Don't they have the resources? The necessary will perhaps?

## The technical aspect

I can answer the first question, for sure. Yes, it is possible to make perfect websites.

The journey is long, the technologies are young. The process takes discipline and grit.

The theory is simple. It takes a couple of minutes and a few concepts to master &mdash; then ready to roll uniform UIs.

## The theory

The following sections present this theory in a compact manner. The narrative is built on a knowledge graph to ensure logical integrity and completeness.

Relevant parts of the knowledge graph are displayed alongside each slide. The textual content is kept short and precise.

## User interfaces

User interfaces display information enhanced with structure, presentation style and behavior.

Structure and presentation is familiar from graphic and print design. It defines layout, typography and style.

Behavior is specific to interactive environments. This dynamic context requires the user interface to handle change &mdash; to behave on change.

## Web user interfaces

Web user interfaces rely on a specific technology &mdash; the browser &mdash; to display information.

The browser, on its own, uses diverse technologies to deal with structure (HTML), presentation (CSS), and behavior (JavaScript).

These technologies are standalone yet result in web sites and apps when combined.

## Binding

The method of binding HTML, CSS and JavaScript together is important.

Every method defines an era in web design and development.

**Classless** (No binding), from the beginning, makes no bounds between HTML, CSS and JavaScript. It leaves content as is, with little manual styling.

**Class-based** binding, a next iteration, connects the parts via HTML attributes (class names, class ids, data attributes). This paradigm is programmable and successful. Google, Facebook, Twitter and everything else was built on it.

**Props**, the web component model, the third iteration, integrates natively all separate parts &mdash; HTML, CSS, JavaScript &mdash; into a single standalone component. And composes up components via props.

Web components represent a shift of a similar magnitude like the previous shift from classless to class-based binding.

Components make uniform user interfaces possible more than ever.

## API

The acronym stands for Application Programming Interface.

All programmable systems expose an API &mdash; a general software artifact with common theory behind. APIs are important. They scale.

Class and prop-based user interfaces are programmable. They expose an API and they scale.

It turns out with scale some APIs / UIs lose their uniformity. Namely, open APIs tend to produce non-uniform UIs, closed APIs guarantee uniform UIs.

Open APIs let developers bind freely, arbitrarily the structure, presentation and behavior. Close APIs impose constraints over the binding assuring integrity and uniformity.

As bindings, the type of the API is important. Defines common concepts / paradigms like CSS frameworks, component libraries, and design systems.

## CSS frameworks

They sport class-based bindings and an open API approach.

Class-based bindings make CSS frameworks semi-programmable. HTML and CSS are not programming languages, JavaScript is the only programming language in this stack.

The open API approach makes CSS frameworks likely produce non-uniform user interfaces.

Developers can freely assign artifacts offered by a CSS framework to any HTML element.

This approach doesn't scale. It requires developers to keep the entire design in a mental model and make sure the model won't break. Few humans are capable of performing such tasks.

In spite of being primitive constructs, CSS frameworks are popular and widespread. Atomic CSS, Bootstrap, Foundation, Semantic UI, Tachyons, Tailwind, Bulma &mdash; just to name a few of them.

Their popularity comes from the status quo. During decades they were the only standard to build on.

## Component libraries

They are prop-based and follow the open API approach.

Prop-based bindings make component libraries fully programmable.

They mix HTML, CSS into JavaScript resulting in a single component written in a programming language. Components are not limited anymore by a markup or style language, constructs inferior to programming languages.

The open API approach makes component libraries not necessarily producing uniform user interfaces.

Again, developers can assign any number of props in any combination to components, which doesn't scale for the same reasons as presented above: Integrity and uniformity is not programmed but left to the developer to handle with a mental model.

## Design systems

They are prop-based with a closed API.

They are fully programmable and produce uniform user interfaces.

They restrict the developer to mistreat the system. Developers must follow strict rules to preserve integrity and uniformity when building up the user interface.

Changing, extending a design system is only possible at specific entry points. Instead of ...
