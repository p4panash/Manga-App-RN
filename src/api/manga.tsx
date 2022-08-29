import request from '../utils/request';

const qs = require('qs');

const parseMangaData = (mangaData: any) => {
  const fileName = mangaData.relationships.find(
    (data: any) => data.type === 'cover_art',
  ).attributes.fileName;
  const coverURI = `https://uploads.mangadex.org/covers/${mangaData.id}/${fileName}`;

  const authorName = mangaData.relationships.find(
    (data: any) => data.type === 'author',
  ).attributes.name;

  return {
    id: mangaData.id,
    attributes: mangaData.attributes,
    cover: coverURI,
    author: authorName,
    year: mangaData.year,
  };
};

export const getMangaList = async (offset: Number = 0) => {
  return request({
    url: 'manga',
    params: {
      contentRating: ['safe'],
      offset: offset,
      'order[latestUploadedChapter]': 'desc',
      includes: ['cover_art', 'author'],
    },
    paramsSerialzer: params => {
      return qs.stringify(params);
    },
  }).then(result => {
    const newResult = result.data.map((value: any) => {
      return parseMangaData(value);
    });

    return newResult;
  });
};
