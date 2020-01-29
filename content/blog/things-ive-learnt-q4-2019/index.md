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

## Co-location pays off

```
Component.js - the main file
Component.features.js - the requirements as executable specifications
Component.tests.js - tests
Components.stories.js - Storybook tests
Component.data.js - data types (for special cases)
Component.css.js - styles (for special cases)
Component.md - documentation
Component.api.md - api doc generated from code comments
Component.lang.xx-xx.js - internationalization
...
```

## Split components into independent modules

- Even in a relatively small app (SAAS providing searching/filtering information) the number of components can grow up around 100
- To reduce `/components` complexity we can split it into `/components/saas` and `/components/search` since both of them are standalone (even reusable) modules
- Clear separation means all components inside a module are importing components from the same module only. For example `/saas/pricing` component imports components only from `/saas` and no components from `/search`.

## Cucumber.io is the Github for tests

- https://cucumber.io/
- It hosts and manages your tests as Github does your code

## Refactoring - The rule of 3

- One needs at least 3 use cases before refactoring code / extracting reusable parts / trying to generalize a solution

## shortid - For list keys in React

- https://www.npmjs.com/package/shortid
- Never use `index` from `map` for `key`. Use instead the `shortid` package.
- https://reactjs.org/docs/lists-and-keys.html#keys
- https://medium.com/@robinpokorny/index-as-a-key-is-an-anti-pattern-e0349aece318

## Skeletons and strategies for React hooks

- [Passport.js](http://www.passportjs.org/) offers a nice authentication solution: there is a general workflow where 500+ custom strategies can be inserted.
- This skeleton / strategy pattern was found useful in other scenarios like data fetching (https://github.com/metamn/use-data) and even porting the Passport.js idea to the React frontend (https://github.com/metamn/use-auth)

## JSON form generators are all buggy

- See https://github.com/metamn/react-forms
- Tested `react-jsonschema-form`, `uniforms`, Final Form, Formik and more

## `react-admin` useful only for CRUD resources

- https://marmelab.com/react-admin/
- When you have non-crud resources lots of overwriting is needed and won't worth it

## Bit.dev is the Github for React packages

- https://bit.dev/
- Package any React component and clone it, fork it, pull it, push it like code on Github.
