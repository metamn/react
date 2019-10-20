---
title: 'How to write React code in 2019'
date: '2019-10-20'
---

[Cory House](https://twitter.com/housecor/status/1185222395210153984?s=20) nails it.

<!--more-->

Even if there is [no official style guide](http://metamn.io/react/there-is-no-official-style-guide-for-react/) to write React code &mdash; there are official [guidelines](https://reactjs.org/docs/thinking-in-react.html) and [rules](https://reactjs.org/docs/hooks-rules.html) to follow, and a common sense emerging from [the leaders](Identify the right leaders).

In [Lessons learned from 5 years in React](https://www.dropbox.com/s/tsid5bnphznbvjv/Lessons%20learned%20from%205%20years%20in%20React.docx?dl=0) Cory House collects his wisdom into one single document. I found it deeply resonating with my practice &mdash; and the common sense.

(With his hopefully mutual permission) I'm replicating the document as checkboxes to see those points I've met, and the ones where I might catch up.

You can do the same exercise too by [forking the list](https://github.com/metamn/react/blob/master/content/blog/how-to-write-react-code-in2019/index.md) from the source code of this article.

### Getting familiar with a new project

1. [x] Review package.json first to understand deps, scripts, and config.
2. [x] Draw tree on the whiteboard, or use React dev tools. Helps to visualize state.

### Dev workflow

3. [ ] Quickly nav to component or func: CMD click in JSX (VSCode)
4. [ ] Quickly nav to parent: CMD+SHIFT+F to Search for <ComponentName (VSCode)
5. [ ] Quickly view list of parents: Use React dev tools
6. [ ] Create a component state checklist. Use it for every component. (error, no data, lots of data, long values, full list here)
7. [ ] Debugging? type debugger. console.assert also handy.
8. [ ] Work against mock data and mock API (I like json-server, json-graphql-server)
9. [ ] Centralize mock data for Storybook, tests, and mock API.
10. [x] Pass an object to a function and destructure to create named parameters. Reads more clearly. And can destructure in the function signature too. This keeps the calls in the func short and documents the expected object properties.
11. [x] Storybook driven development – Build and test each component in isolation. Document each state in a separate story. Then use Percy or Chromatic to snapshot.
    
	- [x] Knobs
	
	- [x] Responsive design

### JSX

12. [x] You can only write expressions within a return. This limits what you can do in JSX. Options:

	- [x] Return early. (good for loaders and errors)
	
	- [x] Extract a separate function from render when you want the full power of JavaScript (if/else/switch)

### Performance

13. [x] Do the most convenient thing. It’ll probably be fast enough. Inline func? Fine. Worried about renders? Don’t be. Worried about context performance? Okay, then maybe you’re misusing context (should rarely change). Sure, perf test (set Chrome perf to 6x), but don’t speculate. Degrade ergonomics after establishing a perf issue.
14. [x] Remember, a render != DOM change. With virtual DOM, the diff is in-memory. Flow: render -> reconcile -> commit. If the DOM doesn’t change, there’s likely no perf issue. So stop worrying about needless re-renders. React is smart enough to only change the DOM when needed, so it’s typically fast enough. 
15. [x] Don’t slap useMemo, shouldComponentUpdate, PureComponent everywhere. Only where needed. They have overhead because it’s an extra diff. If they were typically faster, they’d be the default!

### State management

16. [x] Keep state as low as you can. Lift when needed.
17. [x] Avoid state that can be derived. Calc on the fly. Reference objects by id instead of duplicating.
18. [ ] Use _myVar convention to resolve state naming conflicts.
19. [x] Don’t sync state, derive it. Example, calculate full name on the fly by concatenating firstName and lastName in render. Don’t store fullName separately. Doing so risks out of sync issues and requires extra code to keep it in sync.
20. [x] State that changes together, should live together. Reducers help. So does grouping via useState. Consider state machines – they describe valid states, which makes invalid state impossible (as new customer with 5 previous purchases, or an admin with no rights shouldn’t be possible. If separate states, they can get outta sync)
21. [x] Probably don’t need Redux. Lifting state scales nicely and is easy to understand. Prop drilling pain is overblown. Keep prop names the same. Spread props. Pass child. Memoize. Use context and useReducer cover the rare global needs well. Show slides of diff data approaches from my updated Redux course.
22. [ ] Context isn’t just useful for global data. Useful for compound components. Can be useful for performance. 
23. [ ] setLoading(false) in finally to assure it’s called

### Props

24. [x] Require all props at first
25. [x] Destructure props in func signature to shorten calls below. Useful on event handler funcs too. But what about props with dashes in name like aria-label? Well, don’t destructure that by using spread: …otherProps
26. [x] Make your props as specific as possible
27. [x] Standardize naming. onX for eventHandler props. handleX for the func.
28. [x] Centralize your propTypes
29. [x] Document propTypes via JSDoc style comments = autocomplete and docs in Storybook. Can even use markdown!
30. [x] Spread props or pass children to reduce the pain of prop drilling
31. [ ] Prop existence conveys truth. So `<Input required />` is sufficient. 
32. [x] Honor the native API in your reusable component designs. Pass the full event to event handlers, not merely the value. Then you can use a centralized change handler. Honor the native names (onBlur, onChange, etc). Doing so maximizes flexibility and minimizes the learning curve.

### Styling

> Note: Here I have a completely different approach based on `styled-components` best practices and inspired by Material UI.

33. [ ] Mix styling approaches. 

	- [ ] Inline styles for dynamic styles. 

	- [ ] Namespace via CSS modules.
	
	- [ ] Use plain Sass for global styles.
	
	- [ ] CSS in JS remains a hard sell – too many horses in the race. 
	
34. [ ] Use classnames to apply multiple styles
35. [x] Use flexbox and CSS Grid over floating styles
36. [ ] Create abstraction over flexbox to abstract breakpoints for consistency (bootstrap gives ya this) 

### Reusable components

37. [x] 3 keys to easy reuse
38. [ ] Consider dedicating a person/team to this. Why? Speed. Less decision fatigue. Smaller bundles. Consistency = better UX. Less code = fewer bugs.
39. [x] Look for repeated code – opportunity for reuse. Every reuse is a perf enhancement.
40. [ ] DRY out your forms by combining custom hooks, context, and reusable components to create an opinionated custom approach that encapsulates your app’s business rules. These tools are the foundation.
41. [ ] Accept both a simple string and an element. Use React.isValidElement to tell which you’re getting.
42. [ ] Create an “as” prop to specify the top-level element.  
43. [ ] Create a reusable AppLayout using the slot pattern.
44. [ ] Centralize alerts in AppLayout and provide function for showing the alerts via context.
45. [x] Gen custom docs via react-docgen
46. [ ] Consider creating separate mobile and desktop components if they differ significantly. Lazy load the relevant size. 

### Testing

47. [ ] Prefer RTL over Enzyme. Simpler API = pit of success. Encourages a11y. Easy to debug. Can use same queries for Cypress.
48. [ ] JSDOM doesn’t render, so can’t test responsive design there. Use Cypress to test responsive design behavior.
49. [ ] Avoid Jest snapshot tests. They’re brittle, they test implementation details, they’re often poorly named, they all fail when a single line changes, and they’re hard to fix when they fail. Instead, prefer Percy or Chromatic to test visuals
50. [ ] Use the scenario selector pattern to run your app against different data. Automate these tests via Cypress/Selenium
51. [ ] Use Cypress testing library so your Cy selectors match your React Testing library selectors = No need to change code to support Cypress tests!
52. [ ] Cypress driven development – TDD for integration testing. Use Cypress to navigate to the spot you need to test. Use cy.only to call a single test. It should fail first. Make it pass. 

### Dev env

53. [ ] Consider customizing create-react-app (CRA). 

	- [ ] Use react-app-rewired to tweak the config without ejecting 
	- [ ] Customize linting rules. 
	- [ ] Add webpack-bundle-analyzer. Know what’s in your bundle. 
	- [ ] Consider forking at least react scripts. Consider forking CRA. Create a company framework that generates a project with a single dependency: Your react-scripts fork that includes your company’s components, tweaks, dependencies, linting rules, webpack.config, etc.  
	
54. [x] Use Prettier. Convert in one big commit. You’ll look like the hero!
55. [x] Lean on ESLint. Use as a teaching tool. Object shorthand. No var. Disallow certain imports (jquery, lodash, moment). Require triple equals. Don’t form a committee. Assign someone you trust and enable a lot of good stuff. Can always back off later. Add plugins like jsx-a11y/recommended.
56. [x] Require strict propTypes (or TS). I don’t get many type issues. (see link for list)
57. [ ] Use .vsextensions to encourage extensions.
58. [ ] Keep client and server separate. If embedding React in a server-side tech, use Storybook to develop components in isolation.

### Consider a monorepo

59. [ ] Why? Rapid feedback. Continuous integration.
60. [ ] Easy reuse
61. [ ] CI integration tests projects on every PR
62. [ ] Use Lerna, Bolt, Yarn Workspaces, or even simply a relative file reference to your reusable components to manage. I typically use Lerna.

### Learning

63. [x] Have a system for organizing your knowledge. Find a new tool? Technique? Document it. I use GitHub issues here on my reactjsconsulting repo.

## Resources

- [There is no official style guide for React](http://metamn.io/react/there-is-no-official-style-guide-for-react/)
- [Identify the right leaders](http://metamn.io/react/identify-the-right-leaders/)
- [Rules of Hooks](https://reactjs.org/docs/hooks-rules.html)
- [Thinking in React](https://reactjs.org/docs/thinking-in-react.html)
- [Lessons learned from 5 years in React](https://www.dropbox.com/s/tsid5bnphznbvjv/Lessons%20learned%20from%205%20years%20in%20React.docx?dl=0)