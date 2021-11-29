---
title: 'On design systems — 4'
date: '2022-11-22'
---

Scalable and consistent UIs.

<!--more-->

---

## TLDR

- scalability === growth, but has many facets (network, db, software, ...)
- scalable UI === composable + extensible + usable (learnable, less cognitive load)

  - composable is relative easy, goes down to open and closed APIs
  - extensibility is hard; it was impossible(?) before FP and ADT, but now it might be the silver bullet
  - usability is perhahs, again hard: See Thayer2021TheoryOfRobustAPIKnowledge

- scalability always relates to the API
- an FP/ADT-like-API offers extensibility, and composability

## 1 - Previous:

- consistent UI, based on a design system (design perspective, reduced cognitive load) and scalable across protfolio
- by using software development (API, Framework, prog. language)

### This article

- How a consistent UI scales? Aka how the implementation of a consistent UI - a design system - scales?

## 2 - What is a DS? (from programming, software development, general perspective)

- What is a system? Hickey: = Language (API) + Stack (Protocol/data, Simple system, Apps as services)
- https://www.youtube.com/watch?v=ROor6_NGIWU + Gmail screenshots
- This re-assures the Token + CL + DS / App stack

## 3 - What is scalable?

- scalability = growth (wikipedia, general)
- specific for each case: network, db, storage, etc
- specific for sofware: https://acko.net/blog/on-variance-and-extensibility/

  - IMPORTANT NOTE HERE: **Extensible** software where parts are arbitrarily replaceable IS NOT POSSIBLE => scalability cannot deal with extensibility, ie scalable !== extensible. Extensible is a very very different topic. **NOTE** This got solved since by FP/ADT.

- specific for UI: https://interconnected.org/home/2021/08/12/notation

  - **Composable** === shareable, degradable = parts still work
  - composable === has semantic primitives, and a gramatics (rules to compose primitives), and not too many primitives (efficiently expressive)

  > The value of a product is the number of problems it can solve divided by the amount of complexity the user needs to keep in their head to use it. {HEROKU}

  - HTML is scalable
  - CSS is not: specificity; parent interferes with children

=> scalability in UI = composable + independent components, not interfeering in each others inner workings

### Example

- Button with Link
- Button, Link: composable + independent => scalable

```JSX
<Button><Link/></Button>
<Button default><Link></Button>
<Button><Link underlined/><Button>
<Button inactive><Link></Button> # problem !!! Link should be inactive too
```

=> scalable doesn't mean consistent; consistency must be enforced

## 4 - Scalable and consistent UIs

- Back to API, CL and DS + scalability
  => CL = open API + standalone components => scalable
  => DS = closed API + standalone components => scalable inside the app context, following the app rules
  => every app builds on a DS for consistency, which builds on a CL for scalability

- In other words:
  - App => Rules => DS (closed API, API based on rules)
  - CL => No rules, or API theory for components
  - Tokens => no rules, or API theory for software (functions)

=> On CL, Tokens API theory is needed

### API theory for components

- Are the same as for the software ?
- Does FP / ADT is an API theory?

### API theory or functions / software

- Deno: 0-2, then a props / object
- 0: DS
- 1: variant => leads to algebraic data types (ADT); it's a DB `id` key
- 1+: extensibility (HARD PROBLEM) + cognitive load

```JS
const spacing = edoSpacing('margin', 'all', 'default', Object) // Less cognitive load?
const spacing2 = edoSpacing('margin', {boxModelVariant: 'all', spacingVariant: 'double', returnValueVariant: Object}) // More cognitive load?
```

### FP and ADTs

- mental model
- under research => many unclear explanations
- relates to FP, Typed languages
- handles uncerainity: instead of endless ifs, just a switch
- enables extensibility: <T> describes the data, metadata and the code too (the constructor) so it should be extensible (https://acko.net/blog/on-variance-and-extensibility/)
- deals with polymorphism, which perhaps is extensibility.
- can be implemented with React and TS, ie a DS can be made functional with ADTs (https://jrsinclair.com/articles/2020/algebraic-structure-of-functions-illustrated-with-react-components/)

- https://overreacted.io/algebraic-effects-for-the-rest-of-us/
- https://itnext.io/practical-introduction-to-algebraic-datatypes-adts-in-typescript-1cb6952e4c6d
- https://jrsinclair.com/articles/2020/algebraic-structure-of-functions-illustrated-with-react-components/ !!! VERY IMPORTANT, aka HOW TO MAKE A DS WITH FP AND REACT !!!
- https://blog.reesew.io/algebraic-effects-for-react-developers
- https://en.wikipedia.org/wiki/Algebraic_data_type
- https://www.cs.cornell.edu/courses/cs3110/2013sp/lectures/lec04-types/lec04.html
- https://rescript-lang.org/docs/manual/latest/variant

## 5 - For web specific technology (how to do it with web tech?)

- JSX: Graphs, Functional programming
- CSS-in-JS: No more cascade
- TS: Extensibility Input<T> Process<T> Output<T>
- React + TS = Algebraic Data Types, Effects

## 6 - How it solves real-world problems? (Is it true for real world problems?)

- Edo2 + NFTDEB => edo3, solving ~15 major issues

## 7 - Is it future proof? (check scalability)

- New CSS additions should work (container queries, etc) with edo3 and the theory + implementation above

---

## Another article

---

8 - What is usable?

- Learnable, Semantic, Grammatical, Efficiently expressive, Suggestive, Intentional, Legible: https://interconnected.org/home/2021/08/12/notation
- learning, usage, documentation: https://faculty.washington.edu/ajko/papers/Thayer2021TheoryOfRobustAPIKnowledge.pdf
