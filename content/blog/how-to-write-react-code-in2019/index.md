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
        a. Knobs
        b. Responsive design

## Resources

- [There is no official style guide for React](http://metamn.io/react/there-is-no-official-style-guide-for-react/)
- [Identify the right leaders](http://metamn.io/react/identify-the-right-leaders/)
- [Rules of Hooks](https://reactjs.org/docs/hooks-rules.html)
- [Thinking in React](https://reactjs.org/docs/thinking-in-react.html)
- [Lessons learned from 5 years in React](https://www.dropbox.com/s/tsid5bnphznbvjv/Lessons%20learned%20from%205%20years%20in%20React.docx?dl=0)