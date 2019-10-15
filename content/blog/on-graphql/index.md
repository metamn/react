---
title: 'On GraphQL'
date: '2019-10-10'
---

Easy to use. Complicated to scale.

<!--more-->

## Definition

GraphQL, according to [GraphQL.org](https://graphql.org/learn/) is three things:

1. A query language
2. A server-side runtime
3. A type system

### Query language

We all know query languages. SQL &mdash; to query relational databases. REST API &mdash; to query data on the backend.

GraphQL is in the same way a query language. It is like REST but built on the more advanced principles of [functional and reactive programming](http://metamn.io/react/is-graphql-functional-and-reactive/).

### Server-side runtime

The UNIX philosophy of *Do one thing and do it well*  [is built into](https://www.youtube.com/watch?v=gb1R-fWP1Yw) GraphQL making it a super simple layer on the server. 

The GraphQL runtime does only one thing: returns results for queries. How results are computed, put together, collected from other services &mdash; the business logic &mdash; is outside of its scope. 

(As a compensation) GraphQL offers extensive connectivity to various backend services like databases, storage engines, serverless functions, authentication, caching to be used in any combination to define how the application works.  

### Type system

What glues together the client-side queries and server-side responses is the GraphQL Schema &mdash; a place where:

- all types are defined together with
- all fields for all types, and
- all single purpose functions (resolvers) associated with each and every field


This is the truth layer &mdash; the *single source of truth* or *Smart Data Objects* as the GraphQL creators [like](https://www.youtube.com/watch?v=gb1R-fWP1Yw) to call it.


### In practice

```js
/* A GraphQL Schema */

/**
 * Data type
 * - Defines a data entity
 */
type Book {
	id: ID
	title: String  /* A field */
	author: Author
}

/**
 * Data type
 * - Defines a data entity
 */
type Author {
	id: ID
	firstName: String  /* A field */
	lastName: String
}

/**
 * Query type
 * - Defines operations on data
 */
type Query {
	book(id: ID): Book  /* A field */
	author(id: ID): Author
}
```

```bash
# Client-side query
#
GET /graphql?query={ 
	book(id: "1") { 
		title, 
		author 
		{ 
			firstName 
		} 
	} 
}
```

```js
/**
 * Server-side, single purpose functions (resolvers)
 */
const resolvers = {
  Query: {
    author: (root, { id }) => find(authors, { id: id }),
  },
  Author: {
    books: (author) => filter(books, { authorId: author.id }),
  },
};
```

```js
/**
 * The result
 */
{
  "title": "Black Hole Blues",
  "author": {
    "firstName": "Janna",
  }
}
```

## The pattern

The most important takeaway for now is the 

> `type` &rarr; `field` &rarr; `function` pattern.

Types have fields and every field has an associated server-side function which returns results.

This pattern is a double-edged sword. It makes application design and development easier but scaling on the server-side harder.

### App design and development &mdash; made easy

The [N+1 selects problem](https://stackoverflow.com/questions/97197/what-is-the-n1-selects-problem-in-orm-object-relational-mapping) is a basic design and development constraint in older paradigms like ORM. It makes the business model to follow ceratin strict technical guidelines which is not natural to default human thinking. 

In GraphQL this issue [is automatically solved](https://www.youtube.com/watch?v=P_yfbQrdzJo&list=PLn2e1F9Rfr6kChXoURShhO3A-4r8FLYsO&index=18).

The original N+1 problem is related to database design. Improperly designed databases can lead to more database queries than optimal reducing considerably the app response time. To circumvent this issue in the object-relational paradigm various normalization techniques are used.

In GraphQL there is no N+1 problem. One can design freely the schema (database) and a middle-layer &mdash; the Dataloader &mdash; takes care of eliminating the N+1 performance issues. 

In practice this means `fields` can be freely added to `types` without worrying about normalization. Thus the business domain can be modeled in a less rigid, more human friendly way using *graphs* which let directly store the relationships between records. 

Writing the associated `functions` to `fields` is again free thinking: just focus on the single purpose of the function of returning the results and forget about redundancy, caching and performance.

The chatty server-side functions (resolvers) which might repeteadly load data from the database are collected, optimized into a single request, and their results cached &mdash; by the GraphQL middle-layer.

### Scaling the Schema &mdash; the hard part

## Resources

- [Introduction to GraphQL](https://graphql.org/learn/)
- [Is GraphQL functional and reactive?](http://metamn.io/react/is-graphql-functional-and-reactive/)
- [GraphQL before GraphQL — Dan Schafer @ GraphQLConf 2019](https://www.youtube.com/watch?v=gb1R-fWP1Yw)
- [The "N+1 selects problem"](https://stackoverflow.com/questions/97197/what-is-the-n1-selects-problem-in-orm-object-relational-mapping)
- [GraphQL Execution Strategies — Andreas Marek @ GraphQL Conf 2019](https://www.youtube.com/watch?v=P_yfbQrdzJo&list=PLn2e1F9Rfr6kChXoURShhO3A-4r8FLYsO&index=18)