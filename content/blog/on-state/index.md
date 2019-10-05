---
title: 'On state'
date: '2019-10-05'
---

Everything in React rolls around the concept of state.

<!--more-->

A term coming from the reactive programming nature of React.

## The concept

The concept is not new. It was hidden in proactive programming and now it is surfacing as the central element of reactive programming.

In Dan Lew's [seminal article](https://blog.danlew.net/2017/07/27/an-introduction-to-functional-reactive-programming/) the concept is fully explained and put further in context. Please read it first.

### Proactive &mdash; no state

![Proactive](proactive.png)

In proactive programming a component directly modifies the state of another component &mdash; and the passive component doesn't even knows about it. In fact, the passive component has no state at all. Strictly, it has state, but it doesn't needs to know about, it is not responsible for it.

### Reactive &mdash; with state

![Reactive](reactive.png)

In reactive programming everything is different. Each component owns its own state and modifies it on request. No component can directly modify the state of another component.

### Summing up

```
|============|==================|=================|==============|
| Paradigm   | Step 1           | Step 2          | Step 3       |
|============|==================|=================|==============|
| Reactive   | Component #1     | Component #2    | Component #2 |
|            | emits request    | receives        | changes its  |
|            | for state change | the request     | own state    |
|------------|------------------|-----------------|--------------|
| Imperative | Component #2     | Component #1    |              |
|            | exposes a state  | calls the state |              |
|            | change function  | change function |              |
|            |                  | of Component #2 |              |
|================================================================|
```

## State in React

State is so important in React it is marked first among its features.

> React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes. &mdash; [https://reactjs.org/](https://reactjs.org/)

Even [hooks](https://reactjs.org/docs/hooks-reference.html) start with state. 

Speaking hooks React offers two of them to manage state. `useState` and `useReducer`.

None of them is powerful enough but the ecosystem gives plenty of alternatives.

- [Redux](https://redux.js.org/), [MobX](https://mobx.js.org/) - scalable state for large applications
- [Apollo GraphQL](https://www.apollographql.com/docs/react/essentials/local-state/) - state managed together with date
- [XState](https://css-tricks.com/finite-state-machines-with-react/) - Finite state manachines and statecharts to manage state and make it error prone.

Every day a new state [library](https://twitter.com/DavidKPiano/status/1180174113954029570) or [approach](https://twitter.com/dai_shi/status/1178106720108679168) is popping up. There is no holy grail &mdash; everybody makes its own bet.

```
|================|=============================|===========================================
| Implementation | When to use                 | State type | Notes                       |
|================|=============================|===========================================
| useState       | Simple states               | Local      |                             |
|----------------|-----------------------------|------------|-----------------------------|
| useReducer     | Complex state logic         | Local      | With `useContext` ~= Redux  |
|----------------|-----------------------------|------------|-----------------------------|
| useMachine     | Complex state logic         | Local      | - Use for component design  |
|                | Fool-proof states           |            | - Autogenerate tests        |
|----------------|-----------------------------|------------|-----------------------------|
| Redux, MobX    | When none above are enough  | Global     |                             |
|================|=============================|============|=============================|
```

## Resources

- [An Introduction to Functional Reactive Programming](https://blog.danlew.net/2017/07/27/an-introduction-to-functional-reactive-programming/)
- [React State with Hooks: useReducer, useState, useContext](https://www.robinwieruch.de/react-state-usereducer-usestate-usecontext/)
- [Application State Management with React](https://kentcdodds.com/blog/application-state-management-with-react)
- [React's useReducer vs Redux](https://www.robinwieruch.de/redux-vs-usereducer/)
- [Finite State Machines with React](https://css-tricks.com/finite-state-machines-with-react/)
- [Gatsby: Move page component state & side effect handling to xstate](https://github.com/gatsbyjs/gatsby/pull/11897)
- [Model-Based Testing in React with State Machines](https://css-tricks.com/model-based-testing-in-react-with-state-machines/)
- [Learn how to work with your local data in Apollo Client](https://www.apollographql.com/docs/react/essentials/local-state/)