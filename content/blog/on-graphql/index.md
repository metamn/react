---
title: 'On GraphQL'
date: '2019-10-10'
---

xxx 

<!--more-->

## Definition

GraphQL, according to [GraphQL.org](https://graphql.org/learn/) is three things:

1. A query language
2. A server-side runtime
3. A type system

### Query language

We all know query languages: SQL for example, which queries relational databases. With APIs we've learnt another query language &mdash; REST, CRUD &mdash; which queries data on the backend.

GraphQL is in the same way a query language. Perhaps a more advanced one assembling the traits of [functional and reactive systems](http://metamn.io/react/is-graphql-functional-and-reactive/).

### Server-side runtime

The creators of GraphQL implemented the [UNIX philosophy](https://www.youtube.com/watch?v=gb1R-fWP1Yw) in their creation: do one thing and do it well.

This makes GraphQL lean on the backend. It's just a simple layer returning results for queries. All else &mdash; databases, storage engines, serverless functions, authentication, caching ... is left to be managed by these respective services and GraphQL can connect to them all, in any combination.

### Type system




## Resources

- [Introduction to GraphQL](https://graphql.org/learn/)
- [Is GraphQL functional and reactive?](http://metamn.io/react/is-graphql-functional-and-reactive/)
- [GraphQL before GraphQL — Dan Schafer @ GraphQLConf 2019](https://www.youtube.com/watch?v=gb1R-fWP1Yw)