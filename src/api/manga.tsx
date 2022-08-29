import request from '../utils/request';

export const getMangaList = async (offset: Number = 0) => {
  return request({
    url: 'manga',
    params: {
      'contentRating[]': 'safe',
      offset: offset,
      'order[latestUploadedChapter]': 'desc',
    },
  });
};

export const getMangaCoverID = async (mangaID: Number) => {
  return request({
    url: 'cover',
    params: {
      'manga[]': mangaID,
    },
  }).then(result => {
    const id = result.data[0]?.id;
    return id;
  });
};

export const getMangaFileNameCover = async (coverId: Number) => {
  return request({
    url: `cover/${coverId}`,
  }).then(result => {
    return result.data.attributes.fileName;
  });
};

export const getMangaCover = async (mangaID: Number) => {
  const coverID = await getMangaCoverID(mangaID);
  const filename = await getMangaFileNameCover(coverID);

  return `https://uploads.mangadex.org/covers/${mangaID}/${filename}`;
};
