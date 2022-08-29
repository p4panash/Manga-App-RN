import request from '../utils/request';

const parseMangaData = (mangaData: any) => {
  const fileName = mangaData.relationships.find(
    (data: any) => data.type === 'cover_art',
  ).attributes.fileName;
  const coverURI = `https://uploads.mangadex.org/covers/${mangaData.id}/${fileName}`;

  return {id: mangaData.id, attributes: mangaData.attributes, cover: coverURI};
};

export const getMangaList = async (offset: Number = 0) => {
  return request({
    url: 'manga',
    params: {
      'contentRating[]': 'safe',
      offset: offset,
      'order[latestUploadedChapter]': 'desc',
      'includes[]': 'cover_art',
    },
  }).then(result => {
    const newResult = result.data.map((value: any) => {
      return parseMangaData(value);
    });

    return newResult;
  });
};
