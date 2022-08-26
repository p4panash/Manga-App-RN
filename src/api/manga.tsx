import request from '../utils/request';

export const getMangaList = async () => {
  return request({
    url: 'manga',
    params: {
      'contentRating[]': 'safe',
    },
  });
};
