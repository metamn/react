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

This makes GraphQL lean on the backend. It's just a simple layer returning results for queries. How results are computed, put together is outside of GraphQL's scope. 

(As a compensation) it offers connectivity to various backend services &mdash; databases, storage engines, serverless functions, authentication, caching, ... &mdash; which can be used in any combination to handle the business logic and define how the application works.  

### Type system

What glues together the client-side queries and server-side responses is the GraphQL Schema &mdash; a place where:

- all types,
- all fields on types,
- all functions associated with each and every field

are defined.

### In practice

```js
/**
 * A GraphQL Schema
 */

/* Data type = defines a data entity */
type Book {
	id: ID
	title: String
	author: Author
}

/* Data type = defines a data entity */
type Author {
	firstName: String
	lastName: String
}

/* Query type = defines operations on data */
type Query {
	book(id: ID): Book
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
 * Server-side functions called resolvers
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

## Resources

- [Introduction to GraphQL](https://graphql.org/learn/)
- [Is GraphQL functional and reactive?](http://metamn.io/react/is-graphql-functional-and-reactive/)
- [GraphQL before GraphQL — Dan Schafer @ GraphQLConf 2019](https://www.youtube.com/watch?v=gb1R-fWP1Yw)