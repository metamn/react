---
title: "An ideal color tool"
date: "2019-01-08"
---

A quick study on colors for user interfaces. Built bottom up, kept as minimal as possible.

## The basic need

We need at least two colors to have an UI. A text color and the background color.

These can be easily chosen; we just have to be sure their color contrast ratio is good enough to be legible, visible for all kind of audiences, even for those with visual impairments.

Two colors are good enough for a blog.

When more content types are present &mdash; buttons for call to action; multiple visual sections like hero, features, testimonials &mdash; two colors might not be enough.

## A monochromatic palette

With two colors we get additionally another good few color combinations. First an inverted color scheme, then a lot others in between.

These combinations could be well enough for a basic landing page or a simple marketing site.

Hero is set with inverted colors, the button / call to action on hero with the default colors.
Later, less important sections can have in between colors, such as gray in the case of black / white primary colors.

## +1 color

It's so refreshing to break out a monochromatic color scheme with a vivid call to action button. That's why user interfaces tend to be built on more than two colors.

When a new color is added to the two basic colors the need is either to dominate them, or be dominated by them.

A call to action should dominate the existing color scheme by bringing its content forward, closer to the viewer.

A less important content section should sink in the background with a dominated color.

Theory says warm colors dominate, cool colors sink. On the classic color wheel warm colors are on the left: red, orange, yellow &mdash; cool colors on the right: violet, blue, green.

## Color properties

To pick the perfect red for an existing monochromatic color scheme we might need math. There are tons of reds &mdash; based on which criteria one can affirm *that* red is the perfect red for this scheme?

To make colors quantifiable color models and color spaces like RGB or CMYK are used.

Each model describes every color with certain properties like:

- Luminosity - an absolute property
- Temperature - an absolute property
- Saturation - a relative property describing how many `gray` is in the color
- Lightness - a relative property describing how many `white` and `black` is in the color
- Contrast - a relative property to a third color

With these properties the *perfect red* can be reformulated to *a red with the same saturation and lightness as the current color scheme, and, with a 4.5 contrast to the background color*.

Color models can be specially tailored to mediums like print (Pantone, CMYK) or monitor screens (RGB, HSL). And they might present surprises. In CMYK `blue` mixed with `yellow` gives `green`, in RGB gives `gray`.

It's important to choose a suitable color model for screen user interfaces.

## An ideal tool

### 1&mdash;Computable color model

An ideal tool to create a perfect color scheme would first of all come with a computable, programmable color model.

One should be able to use code to generate a consistent color palette, and think about colors in the same way thinks about other programming artifacts like data and algorithms.

### 2&mdash;Preloaded content types

An ideal tool should come preloaded with different content types. For a simple blog, for a simple landing page, for a full product marketing site, and so on.

With them a live test can be performed to see how a color scheme works.

Graphic artists have their own tools like [Adobe Color Wheel](https://color.adobe.com/create/color-wheel/) which might be great to design posters and flyers but surely not intuitive enough to design text based user interfaces.

[Paletton](http://paletton.com/) recognized this flaw and added a feature to preview a palette in a real webpage scenario. However, it's awful.

[Google Color Tool](https://material.io/tools/color/) is far better. It's a good start but gives not enough details.

### 3&mdash;Monochromatic palette generator

Once we've picked up the two primary colors we should be able to see how many additional color pairs we've get with these colors.

Google's Color Tool gives us two hints (Light, Dark) but there is more play here.

### 4&mdash;A special color wheel

Finally we need a color wheel to help us choose warm and cold colors additional to our existing monochromatic scheme.

Paletton has such a fine tune mechanism for the generated palette but not to set the color wheel into a state where only corresponding new colors can be picked up.

## Color Spaces

To make colors quantifiable, computable color models and color spaces like RGB or CMYK are used.

CMYK is specific for print, RGB, HSL is specific for computer monitors.

### RGB vs HSL

RGB is a color model where each color has three main properties: the amount of `red`, `green` and `blue` present in each color. Colors in RGB are created by adding / mixing these three basic colors / properties.

There is a fourth, optional property: alpha transparency, or opacity, defining how transparent a color is.

Notation:

`rgba(red, green, blue, alpha transparency)`

Where:

- Red: the percentage of red in a color, expressed in `%` or [0..255] where 255=100%
- Green: the percentage of green in a color
- Blue: the percentage of a blue in a color
- Alpha transparency: how opaque the color is, in percentage. 0 is fully opaque

In CSS notation:

```CSS
--red: rgba(255, 0, 0, 1);
--red-opaque: rgba(255, 0, 0, .5);
--green: rgba(0, 255, 0, 1);
--blue: rgba(0, 0, 255, 1);
--black: rgba(0, 0, 0, 1);
--white: rgba(255, 255, 255, 1);
```

### HSL

HSL is a color model based on RGB. It is an enhancement of RGB to provide a more intuitive framework to think in colors, to mimic an age old best practice of how painters create and use colors.

In HSL a color has again three main properties as hue, saturation and luminosity. Colors in HSL are created by choosing a basic color (hue) and adding grey (saturation) and white or black (luminosity) to it.

There is a fourth, optional property: alpha transparency, or opacity, defining how transparent a color is.

Notation:

`hsla(hue, saturation, lightness, alpha transparency)`

Where:

- Hue: the color itself, like `red`, `green` or `blue`, expressed as an angle. 0deg = red = 360deg, green = 120deg, blue = 240deg.
- Saturation: the amount of `grey` in a color, in percentage: 0% = the color is fully grey, 100% = no grey at all in the color
- Lightness: The amount of `black` and `white` in a color, in percentage: 0% = the color is full black, 50% = the color is fully the color itself, 100% = the color is full white.
- Alpha transparency: how opaque the color is, in percentage. 0 is fully opaque.

```CSS
--red: hsla(0, 100%, 50%, 1);
--red-opaque: hsla(0, 100%, 50%, 0.5);
--green: hsla(120, 100%, 50%, 1);
--blue: hsla(240, 100%, 50%, 1);
--black: hsla(anything, anything, 0%, 1);
--white: hsla(anything, anything, 100%, 1);
```

With the RGB notation colors don't provide information about their nature and relation to other colors in a palette.

For example `rgb(125, 125, 125)` means `a color with equal part of red, green, and blue`. `rgb(63, 63, 63)` means `a color with half of the red, green, blue of the previous color`.

In HSL `hsl(123, 50%, 75%)` means `a color with 50% grey and 75% white`. `hsl(256, 50%, 75%)` means `another color with the same amount of grey and white`.

With the HSL notation it's easy to form a palette. Choose two colors with the same saturation and lightness as primary colors, then iterate through saturation and lightness to get a set of monochromatic color pairs. Yes, this can be done programatically.

With the RGB notation we don't have such an intuitive way to iterate over colors and still keep them in the same family.


## Resources

- https://en.wikipedia.org/wiki/Color_space
- https://developer.mozilla.org/en-US/docs/Web/CSS/color_value
- https://www.w3schools.com/colors/colors_hsl.asp
- http://metamn.io/colord/
- https://github.com/metamn/color
- [Adobe Color](https://color.adobe.com/create/color-wheel/)
- [Paletton](http://paletton.com/)
- [Google Material Design Color Tool](https://material.io/tools/color)
