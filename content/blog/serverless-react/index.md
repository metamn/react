---
title: 'Serverless React'
date: '2019-05-13T03:00:00.284Z'
---

TbD.

<!--more-->

1. React w. Relay: lots of tries, one works kinda: https://github.com/metamn/react-relay
2. Playing with AWS

- http://serverless-stack.com / notes-app-api ... testing the API online fails
- https://github.com/metamn/react-aws: works. Amplify, without CRA
- https://github.com/metamn/react-aws-2: Works. Amplify, with CRA, without backend (AppSync)
- https://github.com/aws-samples/aws-mobile-appsync-events-starter-react: Works. AppSync, CRA, Apollo, Routing, no Amplify I guess

3. AppSync w. Amplify

- https://github.com/metamn/react-relay-appsync works, check v1 branch

4. GraphQL client

- With Relay is not working: https://github.com/metamn/react-relay-appsync

With Relay seems to be complicated. The AppSync backend needs to be adapted and I don't know how.
The frontend is also more complicated.

A query looks like:

```Javascript
<QueryRenderer
      environment={environment}
      query={graphql`
        query ListPeople(
          $filter: TablePersonFilterInput
          $limit: Int
          $nextToken: String
        ) {
          listPeople(filter: $filter, limit: $limit, nextToken: $nextToken) {
            items {
              id
              name
              email
            }
            nextToken
          }
        }
      `}
      variables={{}}
      render={({ error, props }) => {
        if (error) {
          return <div>Error!</div>;
        }
        if (!props) {
          return <div>Loading...</div>;
        }
        return <div>User ID: {props.items}</div>;
      }}
    />
);
```

When with AppSync's default GraphQL client:

```Javascript
function App() {
  const [data, setData] = useState({ hits: [] });

  useEffect(async () => {
    const result = await API.graphql(graphqlOperation(queries.listBlogs));

    setData(result.data);
    console.log(result.data);
  }, []);

  return "check the console";
}
```
