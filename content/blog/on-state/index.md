---
title: 'On state'
date: '2019-10-05'
---

Everything in React rolls around the concept of state. 

<!--more-->

## The concept

State was unknown in proactive programming. Now it is surfacing as the central element of reactive programming.

In Dan Lew's [seminal article](https://blog.danlew.net/2017/07/27/an-introduction-to-functional-reactive-programming/) about Functional Reactive Programming the concept of state is fully explained and put further in context. Please read it first. It's pure joy.

### Proactive programming &mdash; No state

![Proactive](proactive.png)

In proactive programming a component directly calls public methods of other components &mdash; and the passive components are not aware of these calls. They don't do accounting for what is happening inside them &mdash; they have no state. 

The caller component is responsible to interpret the results of the call. The passive component has one single responsibility: to make the publicly callable methods available to the external world.

### Reactive programming &mdash; With state

![Reactive](reactive.png)

In reactive programming everything is different. Each component owns its own state and modifies it on request. No component can directly modify the state of another component. 

The caller component has to ask the receiver component to perform an operation which might modify the receiver component's internal state, then wait for &mdash; subscribe to &mdash; the results.

This kind of isolation brings greater composability &mdash; essential to build large scale systems and complex, interactive user interfaces.

### How it works

```
|============|==================|=================|==============|
| Paradigm   | Step 1           | Step 2          | Step 3       |
|============|==================|=================|==============|
| Reactive   | The switcher     | The bulb        | The bulb     |
|            | emits request    | receives        | changes its  |
|            | for state change | the request     | own state    |
|------------|------------------|-----------------|--------------|
| Imperative | The bulb         | The switcher    |              |
|            | exposes a state  | calls the state |              |
|            | change function  | change function |              |
|            |                  | of the bulb     |              |
|================================================================|
```

## State in React

State is so important in React it is marked first in the list of features:

> React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes. &mdash; [https://reactjs.org/](https://reactjs.org/)

More, when hooks were introduced they were immediately related to state: 

> Hooks are a new addition in React 16.8. They let you use state and other React features without writing a class. &mdash; [Introducing Hooks](https://reactjs.org/docs/hooks-intro.html)

React has to offer built-in mechanisms to deal with state &mdash; to support one of its main core features. And yes it does with `useState` and `useReducer`. 

None of these are powerful enough to handle complex scenarios like global shared state &mdash; leaving to the ecosystem to come up with  alternatives like:

- [Redux](https://redux.js.org/), [MobX](https://mobx.js.org/) &mdash; Global, shared state services for large applications.
- [Apollo GraphQL](https://www.apollographql.com/docs/react/essentials/local-state/) &mdash; State management bundled with data management from a proven provider.
- [XState](https://css-tricks.com/finite-state-machines-with-react/) &mdash; Finite state machines and state charts to manage state and make it error prone.

Every day a new state [library](https://twitter.com/DavidKPiano/status/1180174113954029570) or [approach](https://twitter.com/dai_shi/status/1178106720108679168) is popping up. There is no holy grail which one to use &mdash; everybody makes its own bet.

When in doubt important is to follow the React way: *'Don’t overthink it`*. Which in this case translates to: *'Use only when you need it'*.

Learn the different techniques and combine them by need.

```
|================|=============================|===========================================
| Implementation | When to use                 | State type | Notes                       |
|================|=============================|===========================================
| useState       | Simple states               | Local      |                             |
|----------------|-----------------------------|------------|-----------------------------|
| useReducer     | Complex state logic         | Local      | With `useContext` ~= Redux  |
|----------------|-----------------------------|------------|-----------------------------|
| useMachine     | Complex state logic         | Local      | - Use for component design  |
| (XState)       | Fool-proof states           |            | - Autogenerate tests        |
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