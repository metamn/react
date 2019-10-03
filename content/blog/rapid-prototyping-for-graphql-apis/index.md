---
title: 'Rapid prototyping for GraphQL APIs?'
date: '2019-10-03T03:00:00.284Z'
---

That's nearly impossible today.

<!--more-->


## GraphQL is young

[According to its creator](https://nordicapis.com/is-graphql-moving-toward-ubiquity/) GraphQL is expected to become ubiquitous in 2020-2021. Today is in the phase of being accepted by the large companies.

The official GraphQL page [lists](https://graphql.org/code/#services) only a handful of services ready to build upon. Of them a few are complete solutions &mdash; backends as a service &mdash; and of them a few are production ready.

- Graphcool - is self hosted
- Reindex - looks empty
- Scaphold - closed down
- Tipe - is in beta
- Hasura - has no pricing plans

What's left is Apollo, GraphCMS and AWS AppSync.

Before checking them let's see how an ideal GraphQL backend should look like.

## The ideal GraphQL API service

An ideal solution would offer the following features:

1. Visual Schema designer
2. Automatic database generation based on the schema
3. Automatic resolver generation
4. Automatic lambda function generation for the resolvers
5. Automatic Type / Schema code generation and sync for clients

In other words:

- One should be able to visually design the data structure
- From that design all else is automatically generated: database tables, resolvers, lambda functions, schema, types, boilerplate client code
- On client side, during development, when the schema is modified it is automatically synced with the backend.

That would mean rapid prototyping.

## Apollo and AWS AppSync

Both of them support all requirements except 1.) the visual scheme designer.

In Apollo all tasks imply [manual work](https://www.apollographql.com/docs/tutorial/introduction/). In AWS AppSync + Amplify everything is automated.

No wonder. Their description on GraphQL.org are pretty clear.

> Apollo Engine: A service for monitoring the performance and usage of your GraphQL backend.

> AWS AppSync: Fully managed GraphQL service with realtime subscriptions, offline programming & synchronization, and enterprise security features as well as fine grained authorization controls.

One has to choose AWS AppSync then. Only AWS is suitable for production and enterprise not for rapid prototyping. All plans are paid and every operation is billed.

GraphCMS to the rescue?

## Headless CMS is young (and not enough)

From the [list of developer friendly headless CMS services on JAMStack](https://docs.google.com/spreadsheets/d/1AmrfMT6a-tT9x4nR__RumuCcT6NedxliFf-76Ocv2pQ/edit?usp=sharing) &mdash; including Contentful, GraphCMS, Sanity, TakeShape, Prismic, Kentico &mdash; only a few experiences worth it.

Setting up an account and trying to get a GraphQL endpoint on a free plan was tedious or impossible in many times:

- Contentful - No GraphQL on the free plan
- GraphCMS - Except 5.) Automatic code generation and sync - it offers all other features. However these features seems to be undocumented and very fragile.
- Sanity - A strange, download first approach. Skipped for now.
- TakeShape - The GraphQL endpoint works out of the box. Worth try it further.
- Prismic - GraphQL support has to be asked for / enabled manually by the support team
- WPGraphQL - Works perfect however is tailored to the WordPress data structure. It can be extended of course but WordPress is a specific, not a general purpose CMS.

## Conclusion

Wait for the Headless CMS scene to take off. Otherwise, if needed right now, go with AWS.

## Resources

- [Is GraphQL Moving Toward Ubiquity?](https://nordicapis.com/is-graphql-moving-toward-ubiquity/)
- [GraphQL Services](https://graphql.org/code/#services)
- [Apollo Introduction](https://www.apollographql.com/docs/tutorial/introduction/)
- [A list of developer friendly headless CMS services on JAMStack](https://docs.google.com/spreadsheets/d/1AmrfMT6a-tT9x4nR__RumuCcT6NedxliFf-76Ocv2pQ/edit?usp=sharing)