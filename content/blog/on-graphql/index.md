---
title: 'On GraphQL'
date: '2019-09-30'
---

A promising new piece of technology expected to become mainstream in the next years.

<!--more-->

## Overview

GraphQL is a functional, reactive approach to work with APIs. Developed by Facebook it's a perfect running mate for React.

[According to its creator](https://nordicapis.com/is-graphql-moving-toward-ubiquity/) it is expected to become ubiquitos in 2020-2021.

Until then one can tinker well with on client side using Apollo Client and get a fully managed backend service &mdash; [one of its kind at the moment](https://graphql.org/code/#services) &mdash; from Amazon through AppSync.

## Functional and reactive

[GraphQL.org](https://graphql.org/) presents a nice list of features &mdash; some devs might find it irresistible. Apollo goes further and makes a great [comparision](https://blog.apollographql.com/graphql-vs-rest-5d425123e34b) to REST.

##### REST
![Before ...](graphql-1.png)

##### GraphQL
![After ...](graphql-2.png)

The architectural advantages look obvious. However, there is more. By employing decoupling and composition GraphQL follows the reactive functional paradigm of React and fits in the [landscape](https://developers.facebook.com/videos/2019/building-the-new-facebookcom-with-react-graphql-and-relay/) defined by Facebook: data-driven applications. 

Switching from resources, routes and route handlers &mdash; core ideas in REST &mdash; to type, schema and resolvers &mdash; core ideas in GraphQL &mdash; gives the latter a more relaxed way to build APIs.

##### In REST 

1. Operations &mdash; `GET` &mdash; are coupled with data &mdash; `books`:

``` bash
# The operation always returns the same data:
# {
#   "title": "Black Hole Blues",
#   "author": {
#     "firstName": "Janna",
#   }
# }
GET /books/1
```

2. Operations can be called one-by-one:

```bash
GET /books/:id
GET /authors/:id
GET /authors/:id/books
```

3. On backend

    - Each request is handled individually
	- Server environment is needed (`Node.js` in this case)

```js
/**
 * NOTE: this code is only for illustratory purposes
 */
app.get('/books', function (req, res) {
  const id = req.id
  const book = find(book, { id: id })
  res.send(book)
})

app.get('/authors', function (req, res) {
  const id = req.id
  const author = find(author, { id: id })
  res.send(author)
})

app.get('/authors/:id/books', function (req, res) {
  const id = req.id
  const author = find(author, { id: id })
  const books = find(books, {author: author})
  res.send(book)
})
```

##### In GraphQL

1. Operations &mdash; `query` are decoupled from data &mdash; `book`, `author`

```bash
# The operation returns different data ...
# ... depending on the fields specified dynamically
# ... `{ title, author { firstName } }` or
# ... `{title, description, author {firstName, lastName} }`
GET /graphql?query={ book(id: "1") { title, author { firstName } } }
```

2. Operations can be composed inside a single request:

```bash
# Two queries composed into a single request:
# - Query 1: get `book` with id 1
# - Query 2: get the `author` of the book
GET /graphql?query={ book(id: "1") { title, author { firstName } } }
```

3. On backend

    - Resolvers can be composed
    - There is no need for a server, everything is plain JavaScript

```js
const resolvers = {
  Query: {
    author: (root, { id }) => find(authors, { id: id }),
  },
  Author: {
    books: (author) => filter(books, { authorId: author.id }),
  },
};
```

## Resources

- [Is GraphQL Moving Toward Ubiquity?](https://nordicapis.com/is-graphql-moving-toward-ubiquity/)
- [GraphQL Services](https://graphql.org/code/#services)
- [GraphQL vs. REST](https://blog.apollographql.com/graphql-vs-rest-5d425123e34b)
- [Building the New facebook.com with React, GraphQL and Relay](https://developers.facebook.com/videos/2019/building-the-new-facebookcom-with-react-graphql-and-relay/)