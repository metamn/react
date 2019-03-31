---
title: React inspired BEM / SCSS styling
date: '2019-03-31T19:00:00.284Z'
---

New techniques for old problems.

<!--more-->

---

After working a while with React I had to switch back to a classic project: WordPress and plain SCSS with some BEM. The task was to bring an age old codebase to the modern component era.

I was wondering how I could keep that pleasant workflow React offers: components are responsible for their own dependencies and state. They are standalone and self-contained.

I was looking to implement something similar to:

```Javascript
// Component.js

// Imports all dependencies
import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'

...

// Manages state
class Component extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            ...
        }
    }

    changeState(i) {

		...

		this.setState({
            ...
        })
    }

    render() {
        return (
            <Container handleClick={i => this.changeState(i)}>
                ...
            </Container>
        )
    }
}

```

It turned out it is extremely easy to implement something similar with SCSS / BEM:

```css
// button.scss

// Imports all dependencies
@import '../colors/colors.scss';
@import '../link/link.scss';
@import '../border/border.scss';
@import '--primary/button--primary.scss';
@import '--secondary/button--secondary.scss';

@mixin button($variant: primary) {
  @include colors(inverted);
  @include link(not-underlined);
  @include border(rounded);

  // Manages state / variations / deviations
  @if ($variant == primary) {
    @include button--primary;
  }

  @if ($variant == secondary) {
    @include button--secondary;
  }

  ...;
}
```

After hundreds of components written in this way &mdash; a peace of mind is achieved.

Every component is standalone and self-contained.

Imports all necessary stuff required for its internal workings and incorporates all deviations and variations from the default case.
