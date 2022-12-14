import request from '../utils/request';
import {MangaListParams} from '../types';

const qs = require('qs');

const parseMangaData = (mangaData: any) => {
  const fileName = mangaData.relationships.find(
    (data: any) => data.type === 'cover_art',
  ).attributes.fileName;
  const coverURI = `https://uploads.mangadex.org/covers/${mangaData.id}/${fileName}`;

  const authorName = mangaData.relationships.find(
    (data: any) => data.type === 'author',
  )?.attributes?.name;

  return {
    id: mangaData.id,
    attributes: mangaData.attributes,
    cover: coverURI,
    author: authorName,
    year: mangaData.year,
  };
};

const parseChapterData = (chapterData: any) => {
  if (chapterData.attributes.pages === 0) {
    return null;
  }

  return {
    id: chapterData.id,
    chapter: chapterData.attributes.chapter,
    title: chapterData.attributes.title,
    release: chapterData.attributes.publishAt,
  };
};

export const getMangaList = async (offset: Number = 0, query: any = null) => {
  const params: MangaListParams = {
    contentRating: ['safe'],
    offset: offset,
    limit: 6,
    'order[latestUploadedChapter]': 'desc',
    includes: ['cover_art', 'author'],
    'availableTranslatedLanguage[]': 'en',
    hasAvailableChapters: true,
  };
  if (query) {
    params.title = query;
  }

  return request({
    url: 'manga',
    params: params,
    paramsSerialzer: (data: MangaListParams) => {
      return qs.stringify(data);
    },
  }).then(result => {
    const newResult = result.data.map((value: any) => {
      return parseMangaData(value);
    });

    return newResult;
  });
};

export const getChapterList = async (
  mangaID: any,
  offset: Number = 0,
  limit: Number = 100,
) => {
  return request({
    url: `manga/${mangaID}/feed`,
    params: {
      limit: limit,
      offset: offset,
      'translatedLanguage[]': 'en',
      'order[chapter]': 'desc',
    },
  }).then(result => {
    const newResult = result.data.map((value: any) => {
      return parseChapterData(value);
    });

    return newResult.filter((value: Array<String>) => value);
  });
};

export const getChapterPages = async (chapterID: any) => {
  return request({
    url: `at-home/server/${chapterID}`,
  }).then(result => {
    const baseURL = result.baseUrl;
    const hash = result.chapter.hash;
    const newResult = result.chapter.dataSaver.map((value: Object) => {
      return `${baseURL}/data-saver/${hash}/${value}`;
    });

    return newResult;
  });
};
