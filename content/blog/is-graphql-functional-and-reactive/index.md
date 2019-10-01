---
title: Is GraphQL functional and reactive?
date: '2019-10-01T19:00:00.284Z'
---

GraphQL comes from the same family as React. And React is functional and reactive.

<!--more-->

A quick investigation is necessary. At least one can understand better these new concepts.

## A short history

GraphQL was developed by Facebook at the same time when React was created. Perhaps they are perfect running mates.

As React defined a new era in web frameworks so GraphQL does it with APIs. The list of features on [GraphQL.org](https://graphql.org/) clearly points to a paradigm shift:

- Ask for what you need, get exactly that
- Get many resources in a single request
- Describe what’s possible with a type system
- Evolve your API without versions

Since React is [built on functional reactive programming](http://metamn.io/react/react-is-functional-and-reactive/) one might wonder if this is also true for GraphQL.

## Functional reactive programming

What makes a system functional and reactive is extracted in the list below from Daniel Lew's excellent article [An Introduction to Functional Reactive Programming](https://blog.danlew.net/2017/07/27/an-introduction-to-functional-reactive-programming/).

```
|-------------
| Acronym | Feature     | Description
|---------|-------------|-------------
| R-1     | Isolation   | Components are aware of, and care about their own problems only
| R-2     | Isolation   | Components does not interfere with each other’s inner workings
| R-3     | Async       | Components communicate in an asynchronous way
| F-1     | Composition | Components have clear and stable interfaces
| F-2     | Composition | During execution a component doesn't modify its input parameters
| F-3     | Composition | No external information is used to produce the return value
| F-4     | Composition | No additional operations are performed beside the planned functionality
```

If GraphQL meets these features it can be considered functional and reactive.

## How GraphQL works 

Like every API &mdash; GraphQL is built on three main concepts:

- Client: makes data requests to a backend
- Endpoint: One or more URLs where requests are sent and from where the results are received
- Backend: Processes the requests and returns data

Speaking code:

```bash
# The client sends a data request to the backend
#
# `/graphql` is an endpoint which receives the request ...
# ... and forwards to the backend
#
GET /graphql?query={ book(id: "1") { title, author { firstName } } }
```

```js
/**
 * The backend processes the request using resolvers
 * ... and returns the results
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
 * Finally the client receives the result.
 * 
 * The result has the shape defined by the client at request
 */ 
{
  "title": "Black Hole Blues",
  "author": {
    "firstName": "Janna",
  }
}
```

Abstracting the client, the endpoint and the backend as _components_ they can be verified if fulfill the traits of a functional reactive system. 

## Isolation

GraphQL components are clearly decoupled. They all work in isolation and don't interfere in each other's inner workings.

- The client is free to make requests of any shape to the backend. It is not constrained by expectations coming from the backend. 
- The client needs to know a single URL endpoint. It is not constrained by a list of URL endpoints which can receive requests.
- The client doesn't needs to know about the resolvers and how they work on the backend.

These statements can be further articulated by comparing them to REST APIs &mdash; a paradigm more tightly coupled than GraphQL.

Speaking code the example from the previous chapter can be replicated with REST in the following way:

```bash
# The client sends a data request to the backend
#
# The client needs to know in advance if there is a `/books` endpoint.
#
# More, if it wants to retrieve `authors`, `comments`, ... 
# ... it needs to know in advance if these endpoints exists.
# Like:
# - GET /authors/1
# - GET /comments/1
# - GET /authors/1/comments
# - ... and lots of others for POST, DELETE and co.
#
# In REST the client is tightly coupled to the URL endpoints
#
# `/books` is an endpoint which receives the request
#
GET /books/1
```

```js
/**
 * The backend processes the request using URL handlers
 * 
 * For every resource (`book`) and operation (`get`) ...
 * ... there should be a coresponding URL handler
 * Like:
 *  - app.get('authors', ...)
 *  - app.get('comments', ...)
 *  - ... and lots of others for `put`, `delete`, `post`, `patch`
 * 
 * In REST the URL endpoints are tightly coupled to ...
 * ... the URL handlers on the backend
 * 
 * More, in REST the backend doesn't knows the shape of the results ...
 * ... the client needs.
 * It returns an arbitrary shape the client has to be aware of apriori. 
 * 
 * In REST the client is tightly coupled to the backend.
 * 
 */  
app.get('/books', function (req, res) {
  const id = req.id
  const book = find(books, { id: id })
  const author = find(authors, {id: book.authorID})
  const result = {
	  title: book.title,
	  author: {
		  firstName: author.firstName,
		  lastName: author.lastName
	  }
  }
  res.send(author)
})
```

```js
/**
 * Finally the client receives the result.
 * 
 * The result has a shape defined by the backend ...
 * ... which can be either too few or too many.
 * 
 * In REST the client is tightly coupled to the backend.
 */ 
{
  "title": "Black Hole Blues",
  "author": { 
    "firstName": "Janna",
    "lastName": "Levin"
  }
}
```

## Composition

Let's examine again the two ways of writing code on the backend:

```js
/**
 * GraphQL
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
 * REST
 */ 
app.get('/books', function (req, res) {
  const id = req.id
  const book = find(books, { id: id })
  const author = find(authors, {id: book.authorID})
  const result = {
	  title: book.title,
	  author: {
		  firstName: author.firstName,
		  lastName: author.lastName
	  }
  }
  res.send(author)
})
```

Both of them return the same result. However the first approach seems to be pure functional while the last one procedural.

Both of them seems to satisfy conditions F-1 and F-2: stable interfaces, and input params kept unmodified.

On the other hand only GraphQL seems to satisfy conditions F-3, F-4: Use no external information nor additional operations.

REST uses an external resource in `find(authors, ...)` inside an `app.get('/books', ...` call and performs the additional operation `const result=` when assembling the results. 

## Finally 

This thought-play can be easily called _speculation_. Indeed, it is speculation. It's goal is nothing to do with demonstrating scientifically if GraphQL follows the functional reactive pardigm.

At the end, however, it gives a picture about the paradigm and how GraphQL APIs differ from REST. 

## Resources

- [GraphQL](https://en.wikipedia.org/wiki/GraphQL)
- [React (web framework)](https://en.wikipedia.org/wiki/React_(web_framework))
- [React is functional and reactive](http://metamn.io/react/react-is-functional-and-reactive/)
- [An Introduction to Functional Reactive Programming](https://blog.danlew.net/2017/07/27/an-introduction-to-functional-reactive-programming/)