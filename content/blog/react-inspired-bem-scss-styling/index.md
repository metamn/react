---
title: React inspired BEM / SCSS styling
date: '2019-03-31T19:00:00.284Z'
---

New techniques for old problems.

<!--more-->

After working a while with React I had to switch back to a classic project: WordPress and plain SCSS with some BEM.

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
