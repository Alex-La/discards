import {
  ApolloClient,
  InMemoryCache,
  NormalizedCacheObject,
  HttpLink,
} from "@apollo/client";

const cache: InMemoryCache = new InMemoryCache();

const client: ApolloClient<NormalizedCacheObject> = new ApolloClient<NormalizedCacheObject>(
  {
    cache,
    link: new HttpLink({
      uri: "/graphql",
      headers: {
        authorization: localStorage.getItem("token"),
      },
    }),
  }
);

export default client;
