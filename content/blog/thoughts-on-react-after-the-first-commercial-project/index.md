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

- I do programming instead of hacking and tweaking.
- I do think pure visually about a design instead of using some abstract things like `url`.
- I feel complete control with the `colocation` approach: all stuff &mdash; data, style, logic &mdash; in one screen at once under my fingertips.
- I feel confident about my code; since it is pure Javascript (no HTML, no CSS) I'm sure it can be tested and made it work.
- I feel confident that I can do anything.

      	- For example I've extracted inline comments to a markdown document and added to Storybook as a complete API documentation.

      	- I've created a complete Styleguide powered by a simple component.

      	- I've done all styling using Javascript variables and structures without hardwiring manually any stuff in CSS which later can cause headache or chaos.

- I know the framework / community / ecosystem will do the heavy lifting to assure web design and development best practices automatically for me; I just need to focus on my job, the common knowledge is given.

And so on. One of the best moments during the project was when I was struggling with a feature and after lots of thinking / refactoring the final solution was in sync with the latest in CSS and HTML.

For example the slider / carousel which when done the _React way_ implies the usage of the `CSS scroll snap` technique which is a latest and all-wanted development in CSS / browser technology.
