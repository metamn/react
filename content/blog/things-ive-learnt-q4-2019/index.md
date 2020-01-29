---
title: "Things I've learnt — Q4 2019"
date: '2020-01-28'
---

## Mirage - Mocking APIs

- https://miragejs.com/
- Build complete frontend features, even if your API doesn't exist.

## TLA+, Alloy - Verify requirements with formal methods

- https://www.hillelwayne.com/post/business-case-formal-methods/
- Test requirements for bugs and incompleteness before anything else

## TypeScript is not a sound type system

- https://blog.logrocket.com/is-typescript-worth-it/
- A sound type system is one that ensures your program does not get into invalid states.
- Typescript is entirely upfront about the fact that 100% soundness is not a goal

## Parallelized Decision Making

- https://arkwright.github.io/parallelized-decision-making.html
- Doing Things In Serial Is Slower Than Doing Them In Parallel

## Event sourcing and microservices are hard

- https://arkwright.github.io/event-sourcing.html
- But don’t dive in, because you’ll probably drown
- Incorporate this pattern into a portion of your project — get your feet wet.

## Immutable.js - Functional Javascript from Facebook

- https://www.freecodecamp.org/news/immutable-js-is-intimidating-heres-how-to-get-started-2db1770466d6/
- A library used by Facebook to replace native Javascript constructs (array, object, ...) with functional counterparts (list, map)

## QuickCheck: Property Based Testing in Javascript (aka auto-generated test inputs covering [hundreds of] edge cases)

- https://www.youtube.com/watch?v=_2tK9G7rKQQ&t=1006s
- https://marmelab.com/blog/2019/04/18/property-based-testing-js.html
- Property based testing is a technique widely used in the Haskell community, using a tool such as QuickCheck. The idea consists in automatically generating inputs for testing a function.

## Expo supports all platforms

- https://www.youtube.com/watch?v=ykBxY01j_rA
- Build for web, deploy everywhere native

## Executable requirement specifications

- http://agilemodeling.com/essays/executableSpecifications.htm
- https://cucumber.io/

## UI Before API

- https://overreacted.io/what-are-the-react-team-principles/

## Proptypes should be immutable

- Proptypes can be chained up (the parent imports the children proptypes and default props) in React but makes Storybook crash randomly
- With import proptypes lose their immutability, their structure becomes dynamic (depending on children proptypes) instead of being static (hand written; children proptypes copy/pasted into parent proptypes)
- Neither approach is ok => there is a need for a data layer (`Component.data.js`) which imports children proptypes and generates static proptypes for the parent

## AirBnb custom Proptypes

- https://github.com/airbnb/prop-types
- extends the standard Proptypes with new validators

## Describing data and services (API) with standards is in infancy

- We saw at "Proptypes should be immutable" that we need a data layer independent of the Proptypes syntax (or even TypeScript or anything else)
- For that a standard approach (JSON-LD, Schema.org) should be used like https://json-schema.org/, https://en.wikipedia.org/wiki/Overview_of_RESTful_API_Description_Languages, https://www.markus-lanthaler.com/hydra/
- More, not just data but also the services should be described with machine-readable standards: https://www.sciencedirect.com/science/article/pii/S1877050918316302
- Which is not yet possible:

> Although there has been a vast amount of effort in the semantic web services field, the approaches did not gain too much adoption outside of academia, mainly due to lack of concrete incentives and steep learning curves.
