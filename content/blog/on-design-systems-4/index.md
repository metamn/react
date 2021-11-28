---
title: 'On design systems — 4'
date: '2022-11-22'
---

1 - Previous:

- consistent UI
- based on a design system (design perspective)
- scalable across protfolio
- by using software development (API, Framework, Language)
- plus usable for DX, UX

2 - DS from programming perspective

- What is a system? Hickey: = Language (API) + Stack (Tokens, CL, DS)

3 - What is scalable?

- variance, extensibility: https://acko.net/blog/on-variance-and-extensibility/
- Composable, Shareable, Degradable: https://interconnected.org/home/2021/08/12/notation

4 - What is usable?

- Learnable, Semantic, Grammatical, Efficiently expressive, Suggestive, Intentional, Legible: https://interconnected.org/home/2021/08/12/notation
- learning, usage, documentation: https://faculty.washington.edu/ajko/papers/Thayer2021TheoryOfRobustAPIKnowledge.pdf

5 - For web specific technology (how to do it with web tech?)

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

6 - How it solves real-world problems? (Is it true for real world problems?)

- Edo2 + NFTDEB => edo3, solving ~15 major issues

7 - Is it future proof? (check scalability)

- New CSS additions should work (container queries, etc) with edo3 and the theory + implementation above
