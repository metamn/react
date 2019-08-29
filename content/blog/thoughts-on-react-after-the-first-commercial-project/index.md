---
title: 'Thoughts on React after the first commercial project'
date: '2019-07-31'
---

It's the future. It's expensive. It's unstable. And all these (will be) manageable.

<!--more-->

## The project

I was commissioned to redesign and rewrite a photo portfolio site by an old client. One of the [requirements](https://github.com/metamn/inu-v2-b#requirements) was to update the old stack and make it future friendly.

I choose to go with React and used the relaxed timeline to get the most out of it.

Up until now I was just playing with small projects to learn parts of the ecosystem &mdash; and I've really enjoyed. Diving seriously into React taught me some interesting lessons.

## 1. React is the future

I've been working with the web in the last decade [pretty extensively](http://metamn.io/beat/on-old-and-new-stacks/).

I've built my own stack and learned frameworks, languages and paradigms like MVC, Ruby, Ruby on Rails, PHP, WordPress, Yii, BEM, Compass, SASS, Bootstrap, Javascript, jQuery, Foundation, Jekyll, Grunt / Gulp / WebPack, Semantic HTML &mdash; you name it.

Among all React is the first paradigm which felt truly _complete_.

By ditching the concept of _web_ in favor of _user interface_ and betting all on a real programming language &mdash; it's the first time:

1. I do programming instead of hacking and tweaking.
2. I do think visually about a design instead of using some abstract things like `url`.
3. I do think purely about the data with GraphQL, fragments instead of being constrained by anything like `REST` or `API`.
4. I enjoy the isolation offered by colocation: all stuff &mdash; data, style, logic, markup, behavior &mdash; in one screen under my fingertips.
5. I feel confident about my code. Since it's pure Javascript (no `HTML`, no `CSS`) I'm sure edge cases can be spotted, tested and made it work.
6. I feel confident that I can do anything I wish for, easier than before.

   - I've generated a requirement specification document from code comments.

   - I've extracted inline comments to a markdown document and added to Storybook to get a complete API documentation.

   - I've created a complete Styleguide powered by a simple component.

7) I see how code syncs itself with the latest developments in both HTML, CSS and Javascript.

   - One of the best moments during the project was when struggling with the slider / carousel and after lots of thinking / refactoring / doing it the _React way_ the final solution implied the usage of the `CSS scroll snap` technique which is a newly added browser feature.

8. I know the framework / community / ecosystem will do the heavy lifting for me to assure web design and development best practices are automatically met; I just need to focus on my job, the common knowledge is given.

Overall I feel all the shit was cut and it's the first time when I really do user interface design and development &mdash; which might happen to work on the good old web. Or anywhere else. It doesn't matter.

## 2. React is expensive

Good things come at cost. Learning and running React was so far the most time-consuming adventure in frameworks.

### 2.1 Learning

React is famous about its steep learning curve. And controversies. No wonder &mdash; there are lots of things to learn and many of them are revolutionary.

To get into React one has to forget _any_ prior web experience and learn the following new paradigms:

1. [Thinking in React](https://reactjs.org/docs/thinking-in-react.html).
2. [Typechecking](https://reactjs.org/docs/typechecking-with-proptypes.html).
3. Co-located data requirements, [data-driven applications](https://relay.dev/).
4. [CSS-in-JS](https://www.styled-components.com/).
5. [Hooks](https://reactjs.org/docs/hooks-intro.html) and the async data flow.

These are for starters. Dare to check out the current state of the art, the [Facebook 2019 redesign and rewrite](https://developers.facebook.com/videos/2019/building-the-new-facebookcom-with-react-graphql-and-relay/).

### 2.2 Ecosystem

Every new framework / paradigm shift is so huge it lefts room for interpretation, deviation, experimentation. This is called the ecosystem around the new thing.

Ecosystems are chaotic. Individuals, shops pop up and come up with a better or not solution, plugin, package, module, style guide &mdash; then start evangelizing their approach and made people stick to it.

Even if there is an _official way_ it is skipped, many times, unfortunately.

I've been actively involved in two such ecosystems, one around WordPress the other around Ruby and Rails. Even if these frameworks are strongly opinionated I've seen many strange cases when people thought themselves smarter than the original creators.

I've heard things like "We can't follow the official guidelines because our company has special needs" &mdash; and saw the wheel reinvented then the result burying entire teams, products and carriers.

What I've learned for life is: _Stick to the standards_.

The twist is React has [no official way](http://metamn.io/react/there-is-no-official-style-guide-for-react/). In fact it has ("[Thinking in React](https://reactjs.org/docs/thinking-in-react.html)", "[Rules of Hooks](https://reactjs.org/docs/hooks-rules.html)") but it keeps calling itself _opinionated_.

I don't know the motivation behind but I understand it. Facebook gave free to the world the fantastic React, supports it heavily, nurtures it to be the best tool for UI development. That should be enough. It's already a real bravery and we can't expect more &mdash; the same treatment for all other parts of the ecosystem.

This ignorance / strategy (?) lead to:

- Typechecking with Flow was so badly supported ~~opportunists like~~ Microsoft took over with Typescript / VSCode.
- Data driving applications with Relay &mdash; again, not properly supported &mdash; was replaced with simple "Do GraphQL Right" by Apollo.
- CSS-in-JS was treated as a stepchild forcing the community to take over and give back the enjoyment of styling UIs. I've tried 6-7 frameworks and [only one single survived](https://www.styled-components.com/). What a waste of resources.

### 2.3 Costs

Combing the learning and ecosystem difficulties we can affirm React will be costly.

I've re-written three times my current project to reach a level of confidence. The first two versions were working perfectly, no doubt, but somehow at the end I felt something is missing, something is wrong. _I knew_ the result might work now but it's not sustainable on the long run, it's not done the React way.

There will be many like me re-writing a project until it fits all, and there will be others who won't. In the latter case the cost will be immense for the company paying the bills. The beneficiary will get something particular, not following _standards_, and if by chance the dev team is changed, perhaps the whole codebase has to be rewritten.

React is all about rewrites and migrations, anyway. Currently in the direction of [away from the Facebook stack](https://duckduckgo.com/?q=migrating+code+from+flow+to+typescript&t=canonical&atb=v92-1&ia=web) &mdash; but after the (potentially highly successful) 2019 Facebook rewrite/redesign and Facebook's [wake up](https://medium.com/flow-type/what-the-flow-team-has-been-up-to-54239c62004f) &mdash; back to the Facebook stack.

I have to mention the [Hooks controversy](https://reactjs.org/docs/hooks-intro.html#gradual-adoption-strategy). After five years the core of the language was changed in a way that it makes the old approach &mdash; classes with boilerplate &mdash; unrecognizable for those who learned React the new way &mdash; with hooks and function components.

Billions and billions lines of old code to be thrown out.

## 3. React is not stable

It was terrifying to feel again something is not right inside the core of a system.

The last time I felt the same was long time ago during MS-DOS times and BASIC, maybe the first years of Windows. Since then all went smooth with PHP, WordPress, Ruby, Rails, and co.

If there was an error message it didn't disappear suddenly next time &mdash; like [it does now](https://github.com/metamn/inu-v2-b/issues/28) in my current project built with the official Create React App.

An error message could be easily googled and perhaps solved. Now one gets [different messages for different browsers](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/Cant_access_lexical_declaration_before_init) making error fixing a bit surreal.

Surreal like a current experience with Storybook where again [errors come and go without explanation](https://github.com/storybookjs/storybook/issues/7583).

These flicks were spotted in mature and even official React projects making the warning stronger against React. The good news is the solution might be on the way and perhaps is called [Reason](https://reasonml.github.io/).

## Summary

Will the future be expensive and unstable? It sounds like the current global affairs, so it might be.

Personally I believe the opposite.

1. I've found in React and the ecosystem around a real tool for user interface design and development at scale.
2. Clearing the waters and sticking to the upcoming official [Facebook stack](https://opensource.facebook.com/#frontend) (React, Redux, Relay, Flow, ReasonML) will make code re-usable across projects and teams. And stable, perhaps, too.
3. Building up personal experience distilled into a framework of re-usable components will cut project execution time back to normal, then less.

## Resources

- [The project](https://github.com/metamn/inu-v2-b)
- [The old stack](http://metamn.io/beat/on-old-and-new-stacks/)
- [The 2019 Facebook.com redesign and rewrite](https://developers.facebook.com/videos/2019/building-the-new-facebookcom-with-react-graphql-and-relay/)
- [There is no official style guide for React](http://metamn.io/react/there-is-no-official-style-guide-for-react/)
- [Now or Never: Migrating 300k LOC from Flow to TypeScript at Quizlet](https://medium.com/tech-quizlet/now-or-never-migrating-300k-loc-from-flow-to-typescript-at-quizlet-d3bae5830a1)
- [What the Flow team has been up to](https://medium.com/flow-type/what-the-flow-team-has-been-up-to-54239c62004f)
- [The Facebook stack](https://opensource.facebook.com/#frontend)
