---
title: 'React follows the functional reactive programming paradigm'
date: '2019-10-01'
---

That's a shift from the old proactive, imperative approach.

<!--more-->

## The context

Both paradigms solve the same problem — to build modular, interactive applications — in different ways.

The old way implemented modularity through tight-coupling and interaction synchronously. The new way implements modularity with loose-coupling and interaction asynchronously.

Modularity and interaction abstracted to composition and coupling can further elucidate the picture. Composition is about how the components of the system can add up to form a whole, while coupling is about how they communicate with each other.

[Functional reactive programming](https://blog.danlew.net/2017/07/27/an-introduction-to-functional-reactive-programming/) deals with composition the functional programming way and with coupling the reactive programming way.

## Composition

Composing up a system from smaller parts is best possible when the underlying components behave predictably:

1. They have clear and stable interfaces — input parameters and return values — which can be easily combined.
2. During execution, while input parameters are transformed into return values

    2.1. The process doesn't modify the input parameters

    2.2. No external information is used beside input parameters to produce the return value
    
	2.3. No additional operations are performed beside the planned functionality

### Pure functions

Such components in functional programming are called _pure functions_.

```js
/**
 * A pure component example
 */
const PureComponent = props => {
  /**
   * ✅ Clear interfaces:
   * - props are input params, JSX is the return value
   * ✅ Input params are not modified
   * ✅ No external information is used beside input params to produce the return value
   * ✅ No additional operations are performed beside the planned functionality
   */
  return <div>Pure component props: {JSON.stringify(props)}</div>;
};
```

### Impure functions

Having only pure functions in a complex system is almost impossible. Therefore the concept of impure functions and side effects is introduced.

```js
/**
 * An impure component example with side effects
 */
const ImpureComponent = props => {
  /**
   * ✅ Clear interfaces:
   * - props are input params, JSX is the return value
   * ✅ Input params are not modified
   * - props are protected by React so they can't be easily distorted
   */

  /**
   * Side effect #1
   *
   * ❌ External information is used beside input params to produce the return value
   */
  const external = "External info";

  /**
   * Side effect #2
   *
   * ❌ Additional operations are performed beside the planned functionality
   */
  console.log("props:" + JSON.stringify(props));

  return (
    <ul>
      <li>Impure component props: {JSON.stringify(props)}</li>
      <li>External info in return value: {external}</li>
    </ul>
  );
};
```

### Side effects, managed

When side effects are not avoidable they have to be made [resilient](https://overreacted.io/writing-resilient-components/#writing-resilient-components) &mdash; not distorting the original application flow.

```js
/**
 * Side effects managed through useEffect
 */
const SideEffectsWithUseEffect = props => {
  /**
   * ✅ The `external` side effect is wrapped into a state
   * ✅ Later it can be managed via `useEffect` which makes it resilient 
   */
  const [external, setExternal] = useState("Initial value ...");

  /**
   * ✅ By using `useEffect` the rendering of the component is not suspended, the flow is not distorted.
   * ✅ First the component is rendered with the default value
   * ✅ After 3 seconds React automatically updates the component with the new value.
   * (The 3s delay added makes the effect visible on UI)
   */
  useEffect(() => {
    /**
     * Manages the side effect
     */
    const timer = setTimeout(function() {
      setExternal("Initial value replaced with useEffect");
    }, 3000);

    /**
     * Cleans up the side effect
     *
     * @link https://reactjs.org/docs/hooks-effect.html
     */
    return () => clearTimeout(timer);
  }, []);
  
  /**
   * ✅ The `console.log` additional operation side effect is wrapped into the `useEffect` hook
   * ✅ The Effect Hook lets you perform side effects in function components
   */
  useEffect(() => {
	  console.log("props:" + JSON.stringify(props))
	}, [props]);

  return (
    <ul>
      <li>Component props: {JSON.stringify(props)}</li>
      <li>External info in return value with useEffect: {external}</li>
    </ul>
  );
};
```

## Coupling

Coupling deals with the communication between the components of a system. To make a system scale communication has to be in the same effective as composition.

Reactive programming achieves this through:

1. Isolation:

	1.1 Components are aware of, and care about their own problems only

	1.2 Components does not interfere with each other's inner workings

2. Asynchronous communication:

	2.1 Components subscribe to events
	
	2.2 They react when an event happens
	
	2.3 They return an observable &mdash; which emits events other components can subscribe to.

### Isolation 

In React isolation is about the local state &mdash; components can update only their own state and can't modify other component's state.

### Asynchronous communication

In React asynchronous communication is all about hooks. Components communicate with each other and the surrounding ecosystem &mdash; the local data store, the local cache store, the database &mdash; via the hooks mechanism.

```
|-----------------|-------------------|
| Hook            | Ecosystem         |
|-----------------| ------------------|
| useContext      | Local data store  |
| useMemo         | Local cache store |
| useCallback     | Other components  |
| useQuery,       |                   |
| useMutation,    |                   |
| useSubscription | GraphQL database  |
|-------------------------------------|
```

## Wrapping up

Using reactive and functional programming concepts React and its building blocks &mdash; props, state, hooks, side effects, pure components &mdash; can be put in a general context.

A general context which is a great help when mapping up the big picture.

```
|================|                            |================|
| Component 1    |                            | Component 2    |
|================|                            |================|
| Props          |                            | Props          |
|----------------|                            |----------------|
| Local state    |                            | Local state    |
|----------------|                            |----------------|
|                | <-------- Hooks -------->  |                |
|                | <-------- Hooks -------->  |                |
| Side effects   | <-------- Hooks -------->  | Side effects   |
|                | <-------- Hooks -------->  |                |
|                | <-------- Hooks -------->  |                |
|----------------|                            |----------------|
| Return JSX     |                            | Return JSX     |
|================|                            |================|

     ^                 ^                ^                ^
     |                 |                |                |
     | Hooks           | Hooks          | Hooks          | Hooks
     |                 |                |                |
|----------|     |-----------|     |----------|     |-----------|
| State    |     | Data      |     | Cache    |     | UI        |
| store    |     | store     |     | store    |     | Events    |
|----------|     |-----------|     |----------|     |-----------|
```

## Resources

- [An Introduction to Functional Reactive Programming](https://blog.danlew.net/2017/07/27/an-introduction-to-functional-reactive-programming/)
- [Writing Resilient Components](https://overreacted.io/writing-resilient-components/#writing-resilient-components)