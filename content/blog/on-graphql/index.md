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

We all know query languages. SQL to query relational databases. REST API to query data on the backend.

GraphQL is in the same way a query language for data on the backend. Perhaps more advanced by embracing the principles of [functional and reactive programming](http://metamn.io/react/is-graphql-functional-and-reactive/).

### Server-side runtime

Do one thing and do it well &mdash; the philosophy of UNIX [is built into](https://www.youtube.com/watch?v=gb1R-fWP1Yw) GraphQL making it a super simple layer on the backend. 

The server-side runtime does only one thing: returns results for queries. How results are computed, put together &mdash; the business logic &mdash; is outside of its scope. 

(As a compensation) GraphQL offers connectivity to various backend services like databases, storage engines, serverless functions, authentication, caching to be used in any combination to define how the application works.  

### Type system

What glues together the client-side queries and server-side responses is the GraphQL Schema &mdash; a place where:

- all types, and
- all fields on types, and
- all single purpose functions (resolvers) associated with each and every field

are defined.

This is the truth layer &mdash; *Single source of truth* or *Smart Data Objects* as the GraphQL creators [like](https://www.youtube.com/watch?v=gb1R-fWP1Yw) to call it.


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

The most important takeaway in GraphQL is the 

> `type` &rarr; `field` &rarr; `function` 

pattern.

Every field has an associated function, a single purpose function which returns results

## Resources

- [Introduction to GraphQL](https://graphql.org/learn/)
- [Is GraphQL functional and reactive?](http://metamn.io/react/is-graphql-functional-and-reactive/)
- [GraphQL before GraphQL — Dan Schafer @ GraphQLConf 2019](https://www.youtube.com/watch?v=gb1R-fWP1Yw)