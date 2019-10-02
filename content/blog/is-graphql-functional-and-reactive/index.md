---
title: 'Is GraphQL functional and reactive?'
date: '2019-10-02'
---

GraphQL comes from the same family as React. And React is functional and reactive.

<!--more-->

A quick investigation is necessary.

## A short history

GraphQL was developed by Facebook at the same time when React was created. Perhaps they were meant to be perfect running mates.

Both of them define a new era in their own domain: React in web frameworks and GraphQL in APIs. 

The list of features on [GraphQL.org](https://graphql.org/) clearly points to a paradigm shift:

- Ask for what you need, get exactly that
- Get many resources in a single request
- Describe what’s possible with a type system
- Evolve your API without versions

React [managed](http://metamn.io/react/react-follows-the-functional-reactive-programming-paradigm/) to change the status quo by embracing functional reactive programming. One might wonder if GraphQL choose the same approach.

## Functional reactive programming

What makes a system functional and reactive is extracted in the list below from Daniel Lew's excellent article [An Introduction to Functional Reactive Programming](https://blog.danlew.net/2017/07/27/an-introduction-to-functional-reactive-programming/).

Acronym R stands for reactive, F for functional programming.

```
|---------|-------------|-------------------------------------------------------------------------|
| Acronym | Feature     | Description                                                             |
|---------|-------------|-------------------------------------------------------------------------|
| R-1     | Isolation   | Components are aware of, and care about their own problems only         |
| R-2     | Isolation   | Components does not interfere with each other’s inner workings          |
| R-3     | Async       | Components communicate in an asynchronously                             |
| F-1     | Composition | Components have clear and stable interfaces                             |
| F-2     | Composition | During execution a component doesn't modify its input parameters        |
| F-3     | Composition | No external information is used to produce the return value             |
| F-4     | Composition | No additional operations are performed beside the planned functionality |
```

If GraphQL meets these features it can be considered functional and reactive.

## How GraphQL works 

Like every API &mdash; GraphQL is built on three main concepts:

- **Client**: makes data requests to a backend
- **Endpoint**: One or more URLs where requests are sent and from where the results are received
- **Backend**: Processes the requests and returns data

Speaking in code (GraphQL):

```bash
# The client sends a data request to the backend
#
GET /graphql?query={ book(id: "1") { title, author { firstName } } }
#
# `/graphql` is an endpoint which receives the request ...
# ... and forwards to the backend
#
# `{ title, author { firstName } }` is the shape of data ...
# ... the clients wants to receive
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

Calling the client, the endpoint and the backend as _components_ of the GraphQL system it can be verified if they fulfill the traits of a functional reactive system. 

## Isolation

GraphQL components are (clearly) decoupled. They all work in isolation and don't interfere in each other's inner workings.

These statements can be further articulated with another example using REST, the predecessor of GraphQL. 

Speaking code, again, the original example above in REST is:

```bash
# The client sends a data request to the backend
#
GET /books/1
#
# `/books` is an endpoint which receives the request
# The client needs to know in advance if there is a `/books` endpoint.
#
# More, if it wants to retrieve `authors`, `comments`, ... 
# ... it needs to know in advance if these endpoints exists.
# Like:
# - GET /authors/1
# - GET /comments/1
# - GET /authors/1/comments
# - ... and lots of others for POST, DELETE and REST verbs.
#
# 🢥 In REST the client is tightly coupled ...
# ... to the URL endpoints
```

```js
/**
 * The backend processes the request using URL handlers
 * 
 * For every resource (`book`, `author`, ...) and 
 * operation (`get`, `delete') there should be 
 * a corresponding URL handler
 * 
 * Like:
 *  - app.get('books', ...)
 *  - app.get('authors', ...)
 *  - app.get('comments', ...)
 *  - ... and lots of others for `put`, `delete`, `post`, `patch`
 * 
 * 🢥 In REST the URL endpoints are tightly coupled to ...
 * ... the URL handlers on the backend
 */  
app.get('/books', function (req, res) {
  const id = req.id
  const book = find(books, { id: id })
  const author = find(authors, {id: book.authorID})
  /**
  * The shape of the return data needs to be assembled.
  * And it is done arbitrarily.
  * The client has no influence about the shape returned.
  */ 
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
 * The result has a shape defined by the backend
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

### Wrapping up

```bash
# REST
#
# - All three components have a quasi 1-to-1 relationship
# - They are all tightly coupled (The list can't be reduced)
#
|------------------------------------------------------------|
| Client requests | URL Endpoints | URL Handlers             |
|-----------------|---------------|--------------------------|
| GET /books/1    | /books        | app.get('books', ...)    |
| GET /authors/1  | /authors      | app.get('authors', ...)  |
| GET /comments/1 | /comments     | app.get('comments', ...) |
| DELETE /books/1 | /books        | app.delete('books', ...) |
|------------------------------------------------------------|
```

```bash
# GraphQL
#
|---------------------------------------------------------------------------|
| Client requests                       | URL Endpoints | URL handlers      |
|---------------------------------------|---------------|-------------------| 
| GET /graphql?query={book(id: "1")}    | /graphql      | resolvers = {...} |
| GET /graphql?query={author(id: "1")}  | /graphql      | resolvers = {...} |
| GET /graphql?query={comment(id: "1")} | /graphql      | resolvers = {...} |
| GET /graphql?mutation={book(id: "1")} | /graphql      | resolvers = {...} |
|---------------------------------------------------------------------------|
#
# - All components above can be further reduced
# - Which makes them loosely coupled
#
| GET /graphql?<OPERATION>={<PARAMS>}    | /graphql      | resolvers = {...} |
```

Or, illustrated with a diagram:

```bash
# REST
#
|-----------------|         |-----------|         |-----------------------------|
| Client          |         | Endpoints |         | Handlers                    |
|-----------------|         |-----------|         |-----------------------------|
| GET /books/1    | <-----> | /books    | <-----> | app.get('books', ...)       |
| GET /authors/1  | <-----> | /authors  | <-----> | app.get('authors', ...)     |       
| GET /comments/1 | <-----> | /comments | <-----> | app.get('comments', ...)    |
| DELETE /books/1 | <-----> | /books    | <-----> | app.delete('books', ...)    |
|-----------------|         |-----------|         |-----------------------------|

# GraphQL
#
|---------------------------------|         |----------|         |-------------------|
| Client                          |         | Endpoint |         | Resolvers         |
|---------------------------------|         |----------|         |-------------------|
| GET /graphql?query={...}        |         |          |         |                   |
| GET /graphql?mutation={...}     | <-----> | /graphql | <-----> | resolvers = {...} |       
| GET /graphql?subscription={...} |         |          |         |                   |
|---------------------------------|         |----------|         |-------------------|
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

The first approach seem to be pure functional while the second procedural.

Both of them seem to satisfy conditions F-1 and F-2: stable interfaces, and input parameters kept unmodified.

Only GraphQL seem to satisfy conditions F-3, F-4: Use no external information nor additional operations.

REST uses an external resource (`authors`) and performs an additional operation (`const result=`) during execution.


## Finally 

This thought-play can be easily called _speculation_ by a rigorous reader. 

For example the code for `app.get('/books', ...)` can be written to be fully functional.
However this is the way you'll find it written in majority of REST APIs. 

The goal of this document was never to demonstrate scientifically GraphQL follows the functional reactive pardigm.

The goal was to check if GraphQL can be interpreted using the paradigm.

At the end the reader has to decide in what measure this exercise was successful. 

Until then &mdash; I hope &mdash; one can have a nice overview of the paradigm, and a glimpse on how GraphQL APIs differ from REST.

## Resources

- [GraphQL](https://en.wikipedia.org/wiki/GraphQL)
- [React (web framework)](https://en.wikipedia.org/wiki/React_(web_framework))
- [React follows the functional reactive programming paradigm](http://metamn.io/react/react-follows-the-functional-reactive-programming-paradigm/)
- [An Introduction to Functional Reactive Programming](https://blog.danlew.net/2017/07/27/an-introduction-to-functional-reactive-programming/)