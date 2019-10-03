---
title: 'Rapid prototyping for GraphQL APIs?'
date: '2019-10-04'
---

That's nearly impossible.

<!--more-->


## GraphQL is young

[According to its creator](https://nordicapis.com/is-graphql-moving-toward-ubiquity/) GraphQL is expected to become ubiquitos in 2020-2021. Today is in the phase of being accepted by the large companies.

The official GraphQL page [lists](https://graphql.org/code/#services) only a handful of services ready to build upon. Of them a few are complete solutions &mdash; backends as a service &mdash; and of them a few are production ready.

- Graphcool - is self hosted
- Reindex - looks empty
- Scaphold - closed down
- Tipe - is in beta
- Hasura - has no pricing plans

What's left is Apollo, GraphCMS and AWS AppSync.

Before checking them let's see how an ideal GraphQL backend should look like.

## The ideal GraphQL API service

An ideal GraphQL solution would offer the following features:

1. Visual Schema designer
2. Automatic database generation based on the schema
3. Automatic resolver generation
4. Automatic lambda function generation for the resolvers
5. Automatic Type / Schema code generation and sync for clients

In other words:

1. One should be able to visually design the data structure
2. From that design all else is automatically generated: database tables, resolvers, lambda functions, schema, types, boilerplate client code
3. On client side, during develpoment, when the schema is modified it is automatically synced with the backend.

## Headless CMS is not enough

## Resources

- [Is GraphQL Moving Toward Ubiquity?](https://nordicapis.com/is-graphql-moving-toward-ubiquity/)
- [GraphQL Services](https://graphql.org/code/#services)