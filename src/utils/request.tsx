import axios from 'axios';

const client = axios.create({
  baseURL: 'https://api.mangadex.org/',
});

const request = async (options: any) => {
  const onSuccess = (response: any) => {
    return response.data;
  };

  const onError = (error: any) => {
    return Promise.reject(error.response || error.message);
  };

  return client(options).then(onSuccess).catch(onError);
};

export default request;
