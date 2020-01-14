// import { createUploadLink } from 'apollo-upload-client';
// import { InMemoryCache } from 'apollo-cache-inmemory';
// import { setContext } from 'apollo-link-context';
// import { ApolloClient } from 'apollo-client';
// import { ApolloLink } from 'apollo-link';
import cookie from 'react-cookies';
import CONFIG from './Configuration/.env';

const uploadLink = createUploadLink({
  uri: CONFIG.END_POINT
});

const authLink = setContext(async (_, { headers }) => {
  const token = await cookie.load('token');

  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : ''
    }
  };
});

const client = new ApolloClient({
  link: ApolloLink.from([authLink, uploadLink]),
  cache: new InMemoryCache()
});

export default client;
