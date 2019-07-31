---
title: 'Thoughts on React after the first commercial project'
date: '2019-07-31'
---

It's the future. It's expensive. It's unstable. Hopefully all these manageable.

<!--more-->

## Intro

I was commissioned to redesign and rewrite a photo portfolio site by an old client. One of the [requirements](https://github.com/metamn/inu-v2-b#requirements) was to update the old stack and make it future friendly.

I choose React and used the relaxed timeline to get the most out of it.

Up until now I was just playing with small projects and learning parts of the ecosystem &mdash; and I've really enjoyed. Diving seriously into React taught me some interesting lessons.

## 1. React is the future

I've been working with the web in the last decade [pretty extensively](http://metamn.io/beat/on-old-and-new-stacks/).

I've built my own stack and learnt frameworks, languages and paradigms like MVC, Ruby, Ruby on Rails, PHP, WordPress, Yii, BEM, Compass, SASS, Bootstrap, jQuery, Foundation, Jekyll, Grunt / Gulp / WebPack, Semantic HTML &mdash; you name it.

Among all React is the first paradigm which felt _complete_.

By ditching the concept of _web_ in favor of _user interface_ it's the first time:

1. I do programming instead of hacking and tweaking.
2. I do think pure visually about a design instead of using some abstract things like `url`.
3. I do think pure about the data (GraphQL, fragments) instead of being constrained by anything like `REST` or `API`.
4. I feel complete control with the colocation approach: all stuff &mdash; data, style, logic &mdash; in one screen at once under my fingertips. No `MVC`, thanks!
5. I feel confident about my code; since it is pure Javascript (no `HTML`, no `CSS`) I'm sure it can be tested and made it work.
6. I feel confident that I can do anything.

   - For example I've extracted inline comments to a markdown document and added to Storybook as a complete API documentation.

   - I've created a complete Styleguide powered by a simple component.

   - I've done all styling using Javascript variables and structures without hardwiring manually any stuff in CSS which later can cause headache or chaos.

7. It's in sync with the latest.

   - One of the best moments during the project was when I was struggling with a feature and after lots of thinking / refactoring the final solution was in sync with the latest in CSS and HTML.

   - For example the slider / carousel which when done the _React way_ implies the usage of the `CSS scroll snap` technique which is a latest and all-wanted development in CSS / browser technology.

8. I know the framework / community / ecosystem will do the heavy lifting to assure web design and development best practices automatically for me; I just need to focus on my job, the common knowledge is given.

And so on. I feel suddenly all the shit was cut and it's the first time when I really do user interfaces &mdash; which might happen to work on the good old web. Or anywhere else. It doesn't matter.

## 2. React is expensive

Good things come at cost.

### 2.1 Learning

React is famous about its steep learning curve. And controversies. No wonder &mdash; there are lots of things to learn and many of them are revolutionary.

1. [Thinking in React](https://reactjs.org/docs/thinking-in-react.html).
2. [Typechecking](https://reactjs.org/docs/typechecking-with-proptypes.html).
3. Co-located data requirements, [data-driven applications](https://relay.dev/).
4. [CSS-in-JS](https://www.styled-components.com/).
5. [Hooks](https://reactjs.org/docs/hooks-intro.html) and the async data flow.

These are for starters. If you dare please check out the current state of the art, the [Facebook 2019 redesign and rewrite](https://developers.facebook.com/videos/2019/building-the-new-facebookcom-with-react-graphql-and-relay/).

### 2.2 Ecosystem

Every framework / paradigm shift is so huge it lefts room for interpretation, deviation, experimentation. This is called the ecosystem around the new thing.

Ecosystems are chaotic. Individuals, shops pop up and come up with a better or worst solution, plugin, package, module, style guide &mdash; then start evangelizing them and made people stick to it.

Even if there is an official _way_ it is skipped, many times, unfortunately.

I've been actively involved in two such ecosystems, one around WordPress the other around Ruby and Rails. Even if these frameworks are strongly opinionated I've seen many strange cases when people thought themselves smarter than the original creators.

I've heard things like "We can't follow the official way because our company has special needs" &mdash; and saw the wheel reinvented then the result burrying entire teams, products and carriers.

What I've learnt for life is: _Stick to the standards_.

The twist is React has [no official way](http://metamn.io/react/there-is-no-official-style-guide-for-react/). In fact it has ("[Thinking in React](https://reactjs.org/docs/thinking-in-react.html)", "[Rules of Hooks](https://reactjs.org/docs/hooks-rules.html)") but it keeps calling itself _unopinionated_.

I don't know the motivation behind but I understand it. Facebook gave free the world the fantastic React, supports it heavily, nurtures it to be the best tool for UI development. And that's enough. A real bravery and we can't expect more, like the same treatment for all the other parts of the ecosystem.

This lead to:

- Typechecking with Flow was so badly supported opportunists like Microsoft took over with Typescript / VSCode.
- Data driving applications with Relay is again not supported at all which gave Apollo a perfect opportunity to build upon a strong business.
- CSS-in-JS is a complete stepchild and the community had to take over and give back the enjoyment of styling UI. At least I've tried 6-7 frameworks and [only one single survived](https://www.styled-components.com/). What a waste of resources.

### 2.3 Costs

Combing the learning and ecosystem difficulties we can affirm React will be costly.

I've re-written three times my current project to reach a level of confidence. The first two versions were working perfectly, no doubt, but somehow at the end I felt something is missing, something is wrong. _I knew_ the result might work now but it is not sustainable on the long run.

There will be many like me re-writing until it fits all, and there will be others who won't. In the latter case the cost will be immense for the company paying the bills. The benefactor will get something particular, not following the React way, and if by chance the dev team is changed, perhaps the whole codebase has to be rewritten.

React is all about rewrites and migrations, anyway. Currently in the direction of [away from the Facebook stack](https://duckduckgo.com/?q=migrating+code+from+flow+to+typescript&t=canonical&atb=v92-1&ia=web) &mdash; but after the (potentially highly successful) 2019 Facebook rewrite/redesign and Facebook's [wake up](https://medium.com/flow-type/what-the-flow-team-has-been-up-to-54239c62004f) &mdash; back to the Facebook stack.

Not to mention the [Hooks controversy](https://reactjs.org/docs/hooks-intro.html#gradual-adoption-strategy). After five years the core of the language was changed in a way that it makes the old approach unrecognizable for those who started learning React the new way, with function components and hooks. Billions and billions lines of old code can be thrown out.

## 3. React is not stable

strange bugs:

- Storybook broke
- disappearing console warnings
- nightmares of debugging stories

## Summary

Will the future be expensive and unstable? It sounds like the current global affairs, so it might be.

Personally I believe the opposite.

1. I've found in React a real tool for user interface design and development at scale.
2. Clearing the waters and sticking to the upcoming official Facebook stack (React, Relay, Flow) will make code re-usable across projects and teams.
3. Building up personal experience distilled into a framework of re-usable components will cut project execution time back to normal.
