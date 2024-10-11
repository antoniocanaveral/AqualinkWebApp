import axios from 'axios';
import { getItem } from '../../utility/localStorageControl';


const API_ENDPOINT = `${process.env.REACT_APP_API_ENDPOINT}/api/v1`;

const authHeader = (useInitialToken, unSecure) => {
  const h = {'Content-Type': 'application/json'};
  if(!unSecure) {
    h['Authorization'] = `${useInitialToken ? 'INITIAL' : 'CURRENT'}`;
  }
  return h;
};

const client = axios.create({
  baseURL: API_ENDPOINT
});

class DataService {
  static get(path = '', useInitialToken = false, unSecure = false) {
    return client({
      method: 'GET',
      url: path,
      headers: authHeader(useInitialToken, unSecure),
    });
  }

  static post(path = '', data = {}, optionalHeader = {}, useInitialToken = false, unSecure = false) {
    return client({
      method: 'POST',
      url: path,
      data,
      headers: { ...authHeader(useInitialToken, unSecure), ...optionalHeader },
    });
  }

  static patch(path = '', data = {}, useInitialToken = false, unSecure = false) {
    return client({
      method: 'PATCH',
      url: path,
      data: JSON.stringify(data),
      headers: { ...authHeader(useInitialToken, unSecure) },
    });
  }

  static put(path = '', data = {}, useInitialToken = false, unSecure = false) {
    return client({
      method: 'PUT',
      url: path,
      data: JSON.stringify(data),
      headers: { ...authHeader(useInitialToken, unSecure) },
    });
  }

  static delete(path = '', data = {}, useInitialToken = false, unSecure = false) {
    return client({
      method: 'DELETE',
      url: path,
      data: JSON.stringify(data),
      headers: { ...authHeader(useInitialToken, unSecure) },
    });
  }
}

/**
 * axios interceptors runs before and after a request, letting the developer modify req,req more
 * For more details on axios interceptor see https://github.com/axios/axios#interceptors
 */
client.interceptors.request.use((config) => {
  // do something before executing the request
  // For example tag along the bearer access token to request header or set a cookie
  const requestConfig = config;
  const { headers } = config;
  if(headers.Authorization) {
    const tokenName = headers.Authorization === 'INITIAL' ? 'access_token_initial' : 'access_token';
    requestConfig.headers = { ...headers, Authorization: `Bearer ${getItem(tokenName)}` };
  }
  return requestConfig;
});

client.interceptors.response.use(
  (response) => { console.log("--->2"); return response;},
  (error) => {
    /**
     * Do something in case the response returns an error code [3**, 4**, 5**] etc
     * For example, on token expiration retrieve a new access token, retry a failed request etc
     */
    console.log("--->3");
    console.log( JSON.stringify(error) );
    const { response } = error;
    const originalRequest = error.config;
    if (response) {
      if(response.status === 401) {
        return Promise.reject({
          withError: true,
          invalidTokenError: true,
          networkError: false,
          error
        });
      } else if(response.status === 504) {
        return Promise.reject({
          withError: true,
          invalidTokenError: false,
          networkError: true,
          error
        });
      } else if (response.status === 500 || response.status === 400) {
        // do something here
        return Promise.reject({
          withError: true,
          invalidTokenError: false,
          networkError: false,
          error
        });
      } else {
        return originalRequest;
      }
    }
    return Promise.reject(error);
  },
);
export { DataService };
