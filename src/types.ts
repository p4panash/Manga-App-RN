import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import {ReactElement} from 'react';

export type MangaListParams = {
  contentRating: Array<String>;
  offset: Number;
  limit: Number;
  'order[latestUploadedChapter]': String;
  includes: Array<String>;
  'availableTranslatedLanguage[]': String;
  hasAvailableChapters: Boolean;
  title?: String;
};

export type ChapterListProps = {
  mangaID: String;
  header: ReactElement;
};

export type DescriptionCardProps = {
  description: String;
};

export type DetailsHeaderProps = {
  title: String;
  cover: any;
  author: String;
  attributes: any;
};

export type MangaCardProps = {
  id: String;
  cover: any;
  author: String;
  attributes: any;
};

export type SearchBarProps = {
  setQuery: Function;
};

export type WrapperProps = {
  children: ReactElement;
  otherClass?: String;
};

type DetailScreenParams = {
  id: String;
  title: String;
  cover: String;
  author: String;
  attributes: {
    description: {en: String};
  };
};

type ChapterScreen = {
  title: String;
  chapter: String;
  id: String;
};

export type StackNavigator = {
  Home: undefined;
  Details: DetailScreenParams;
  ChapterScreen: ChapterScreen;
};

export type DetailsScreenProps = NativeStackScreenProps<
  StackNavigator,
  'Details'
>;

export type ChapterScreenProps = NativeStackScreenProps<
  StackNavigator,
  'ChapterScreen'
>;
