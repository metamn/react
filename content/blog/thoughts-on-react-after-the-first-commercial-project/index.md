---
title: 'Thoughts on React after the first commercial project'
date: '2019-07-31'
---

WordPress is here with Gutenberg &mdash; it's time to react.

<!--more-->

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

cacophony, lots of rewrites, the biggest chaos, lots of opportunists (MS, Apollo)

- there is no official styleguide like for wp
- 'we are smarter than wp'

- fortunately there is the react way, and the facebook stack

## 3. React is not stable

strange bugs:

- Storybook broke
- disappearing console warnings
- nightmares of debugging stories

## Sum up:

- first time one can do anything UI
- following best practices (React, CRA, FB stack) and avoiding the hype
- maturization of the ecosystem
  => total satisfaction
