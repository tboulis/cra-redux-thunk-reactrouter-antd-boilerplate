import axios from 'axios';

const agent = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  }
});

let unauthorised = null;

const send = ({ method, url, data, params, token }) => {
  const headers = token ? {
    'Authorization': `${ token }`
  } : { };
  return agent.request({
    method,
    // NOTE: FF was decoding |. This is why we encode the URL again here.
    url: encodeURI(url),
    headers,
    data,
    params
  }).catch((error) => {
    console.log(error);
    const response = JSON.parse(JSON.stringify(error)).response.data;
    // eslint-disable-next-line no-console
    console.error('Failed to send.', response.message);
    if (response) {
      throw new Error(JSON.stringify(response.message));
    } else {
      // Something happened while setting up the request.
      throw new Error('General error!');
    }
  });
};

const bindUnauthorised = (cb) => {
  if (unauthorised) {
    agent.interceptors.response.eject(unauthorised);
  }
  unauthorised = agent.interceptors.response.use((response) => {
    return response;
  }, (error) => {
    if (error.response && error.response.status === 401 &&
      !error.response.request.responseURL.endsWith('updatepassword')) {
      cb(error);
    }
    return Promise.reject(error);
  });
};

export {
  bindUnauthorised,
  send
};
