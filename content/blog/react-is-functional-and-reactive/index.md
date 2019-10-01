---
title: React is functional and reactive
date: '2019-10-01'
---

React follows the reactive, functional programming paradigm. A shift from the old proactive, imperative approach.

<!--more-->

## The context

Both paradigms solve the same problem — to build modular, interactive applications — in different ways.

The old way implemented modularity through tight-coupling and interaction in a synchronous way. The new way implements modularity with loose-coupling and interaction in an asynchrounous way.

Modularity and interaction can be expressed with other terms like composition and coupling — to further clear up the picture. Composition is about how the components of the system can add up to form a whole, while coupling is about how they communicate with each other.

[Reactive functional programming](https://blog.danlew.net/2017/07/27/an-introduction-to-functional-reactive-programming/) deals with composition the functional programming way and deals with coupling the reactive programming way.

## Composition

Composing up a system from smaller parts is best possible when the underlying components behave predictably:

1. They have clear and stable interfaces — input params and return values — which can be easily combined.
2. During execution, while input params are transformed into return values

    2.1. The process doesn't modify the input params

    2.2. No external information is used beside input params to produce the return value
    
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
   * - `props` are protected by React so they can't be easily distorted
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

When side effects are not avoidable at least they have to be implemented in a way to not distort the original application flow &mdash; [to stay resilient](https://overreacted.io/writing-resilient-components/#writing-resilient-components).

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

## Resources

- [An Introduction to Functional Reactive Programming](https://blog.danlew.net/2017/07/27/an-introduction-to-functional-reactive-programming/)
- [Writing Resilient Components](https://overreacted.io/writing-resilient-components/#writing-resilient-components)