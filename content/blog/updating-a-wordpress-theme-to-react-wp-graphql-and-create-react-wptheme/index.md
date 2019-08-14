---
title: 'Updating a WordPress theme to React, WPGraphQL and create-react-wptheme'
date: '2019-08-14T03:00:00.284Z'
---

Headless as simple as possible.

<!--more-->

What if you have to update an old WordPress theme to React? And your only option is to upload a new theme in the WordPress dashboard?

No static site generation with [Gatsby](https://www.gatsbyjs.org/) and no server side rendering with [Next](https://nextjs.org/).

What left is [create-react-app](https://create-react-app.dev/) to build a Single Page Application. More exactly [create-react-wptheme](https://github.com/devloco/create-react-wptheme) which adapts `create-react-app` to WordPress.

## create-react-wptheme

The `create-react-wptheme` experience is very smooth. So smooth there is nothing to learn about. You can use the same commands to develop and deploy like when you create a regular React app.

Big kudos to [@devloco](https://github.com/devloco), the unknown code artist.

## WPGraphQL

[WPGraphQL](https://www.wpgraphql.com/) and the accompanying [WPGraphiQL](https://github.com/wp-graphql/wp-graphiql) IDE are fantastic tools.

They help you to replace [WordPress template files and tags](https://developer.wordpress.org/themes/basics/template-hierarchy/) and the most part of the [WordPress API](https://developer.wordpress.org/reference/).

You won't need none of them. You won't write PHP code anymore and all theme files will be generated for you except `functions.php` in case you'll want to extend `WPGraphQL` by any chance.

The documentation for creating themes with GraphQL is in the `WPGraphiQL` plugin. Which is also serving as a live testbed to query data from the database.

![wp-graphiql-screenshot.png](wp-graphiql-screenshot.png)

It feels refreshing to read the docs next to the live code editor. It's all in one screen &mdash; without the need to fire up webpages. Not to mention I've found the GraphQL API documentation more useful than the original WordPress documentation. Better navigation, less verbose but straight to the point for a quick lookup and even for a deep dive.

![wp-graphiql-apidocs.png](wp-graphiql-apidocs.png)

vs.

![wp-api-screenshot.png](wp-api-screenshot.png)

Another big advantage of WPGraphQL is the complete [Advanced Custom Fields](https://www.wpgraphql.com/acf/) and [Gutenberg](https://docs.wpgraphql.com/extensions/wpgraphql-gutenberg) integration &mdash; among the others like WooCommerce.

It's amazing how fast WPGraphQL managed to abstract away everything PHP to offer new ways to consume and manage WordPress content. Thanks for the community, [it's leader and Gatsby](https://wptavern.com/jason-bahl-joins-the-gatsby-team-to-work-on-wpgraphql-full-time) for supporting further developments.

## Summary

Due to these two fantastic open source contributions WordPress is now ready for simple React theming using the Single Page Application (SPA) paradigm.

SPAs don't [really](https://github.com/metamn/inu-v2-b/issues/32) support multiple URLs and are ideal for small projects like marketing sites, portfolios.

When more needed &mdash; real URLS, server side rendering, static site generation &mdash; one has to simply replace `create-react-wptheme` with another service like Gatsby or Next.

All existing React and WPGraphQL code stays the same and it can be reused.
