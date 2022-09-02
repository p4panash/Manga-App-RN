import React, {useEffect, useState} from 'react';
import {FlatList} from 'react-native';
import {getChapterList} from '../../api/manga';
import {ChapterListProps} from '../../types';
import ChapterItem from './ChapterItem';

const ChapterList = ({mangaID, header}: ChapterListProps) => {
  const [list, setList] = useState<Array<any>>([]);

  useEffect(() => {
    getChapterList(mangaID).then(result => {
      setList(result);
    });
  }, [mangaID]);

  const renderItem = ({item}: any) => <ChapterItem {...item} />;

  const fetchNew = () => {
    const offset = list.length;
    getChapterList(mangaID, offset).then(result =>
      setList([...list, ...result]),
    );
  };

  return (
    <>
      <FlatList
        data={list}
        renderItem={renderItem}
        keyExtractor={(item: any) => item.id}
        onEndReached={() => fetchNew()}
        ListHeaderComponent={header}
      />
    </>
  );
};

export default ChapterList;
