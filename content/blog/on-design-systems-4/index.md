---
title: 'On design systems — 4'
date: '2022-11-22'
---

Scalable and consistent UIs.

<!--more-->

---

## 1 - Previous:

- consistent UI
- based on a design system (design perspective)
- scalable across protfolio
- by using software development (API, Framework, Language)
- plus usable for DX, UX

## 2 - DS from programming perspective

- What is a system? Hickey: = Language (API) + Stack (Tokens, CL, DS)
- https://www.youtube.com/watch?v=ROor6_NGIWU

## 3 - What is scalable?

- scalability = growth (wikipedia, general)
- specific for network, db, storage, etc
- specific for sofware: https://acko.net/blog/on-variance-and-extensibility/

  - IMPORTANT NOTE HERE: **Extensible** software (API) where parts are arbitrarily replaceable IS NOT POSSIBLE => scalability cannot deal with extensibility, ie scalable !== extensible. Extensible is a very very different topic.

- specific for UI: https://interconnected.org/home/2021/08/12/notation

  - **Composable** => shareable, degradable = parts still work
  - composable => has semantic primitives, and a gramatics (rules to compose primitives), and not too many primitives (efficiently expressive)

  > The value of a product is the number of problems it can solve divided by the amount of complexity the user needs to keep in their head to use it.

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
  => DS = closed API + standalone components => scalable inside the app context
  => every app builds on a DS for consistency, which builds on a CL for scalability

## 5 - For web specific technology (how to do it with web tech?)

- JSX: Graphs, Functional programming
- CSS-in-JS: No more cascade
- TS: Extensibility Input<T> Process<T> Output<T>
- React + TS = Algebraic Data Types, Effects

- https://overreacted.io/algebraic-effects-for-the-rest-of-us/
- https://jrsinclair.com/articles/2020/algebraic-structure-of-functions-illustrated-with-react-components/
- https://boxbase.org/entries/2020/aug/10/review-of-simple-essence-of-algebraic-subtyping/
- https://blog.reesew.io/algebraic-effects-for-react-developers
- https://en.wikipedia.org/wiki/Algebraic_data_type
- https://www.cs.cornell.edu/courses/cs3110/2013sp/lectures/lec04-types/lec04.html
- https://rescript-lang.org/docs/manual/latest/variant
- https://itnext.io/practical-introduction-to-algebraic-datatypes-adts-in-typescript-1cb6952e4c6d

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
