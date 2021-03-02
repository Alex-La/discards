import OfflineLink from "apollo-link-offline";
import {
  ApolloClient,
  InMemoryCache,
  NormalizedCacheObject,
  HttpLink,
  ApolloLink,
} from "@apollo/client";

const httpLink = new HttpLink({
  uri: "/graphql",
  headers: {
    authorization: localStorage.getItem("token"),
  },
});

const offlineLink = new OfflineLink({
  storage: localStorage,
});

export const cache: InMemoryCache = new InMemoryCache();

export const client: ApolloClient<NormalizedCacheObject> = new ApolloClient<NormalizedCacheObject>(
  {
    link: ApolloLink.from([offlineLink, httpLink]),
    cache,
    defaultOptions: {
      watchQuery: {
        fetchPolicy: "cache-and-network",
        errorPolicy: "all",
      },
      query: {
        fetchPolicy: "cache-first",
        errorPolicy: "all",
      },
      mutate: {
        errorPolicy: "all",
      },
    },
  }
);
