---
title: 'After five months — Storybook'
date: '2019-05-08T03:00:00.284Z'
---

Shiny new features on the way!

<!--more-->

---

**This is the first post in a series of three.**

A hiatus can introduce pain in restarting work on old projects. Frameworks change quickly. Now let's see how the React ecosystem handles this.

I have [React](/after-five-months-react), [Gatsby](/after-five-months-gatsby) and Storybook projects to update and work on them again.

---

### Storybook

It had a major update from `v4.x` to `v5.0`. Updates ending in 0 are usually unstable. I rather would wait for let's say `v5.0.12` or `v5.1`.

Updating the Storybook package for [MR-UI](http://metamn.io/mr-ui) was easy. Kudos to the SB team! It took secs.

Cleaning up the old code took a few hours. Some addons had to be reconfigured, others became core features. The process was enjoyable since it was trimming code and make it more elegant, readable.

The result? Not sure. The old Storybook was more flexible on theming and with some tweaks produced a more enjoyable experience.

![The old Storybook](old-storybook.png)

The new Storybook officially supports theming which is more restrictive. Less tweaking more uniform looking.

![The new Storybook](new-storybook.png)

Which is not a problem. With major upgrades no one can expect unofficial tweaks will be supported. And probably the strength of Storybook doesn't lie in it's theming support.

What really pleased me is [Storybook Docs](https://medium.com/storybookjs/storybook-docs-sneak-peak-5be78445094a). Which is still in ... `v0.0`. With little patience, however, we will probably have a proper Design System tool based on stories. Wow! I'll wait for it.

**Verdict**

As expected, a lot can happen in five months. I've lost customizations done with hard-labor but got some shiny new features I've always wanted.

### Resources

- [Storybook Docs](https://medium.com/storybookjs/storybook-docs-sneak-peak-5be78445094a)
