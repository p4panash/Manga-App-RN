import React, {useEffect, useState} from 'react';
import {FlatList, Text, View} from 'react-native';
import {getChapterList} from '../../api/manga';
import ChapterItem from './ChapterItem';

const ChapterList = ({mangaID, header}) => {
  const [list, setList] = useState([]);

  useEffect(() => {
    getChapterList(mangaID).then(result => {
      setList(result);
    });
  }, [mangaID]);

  const renderItem = ({item}) => <ChapterItem {...item} />;

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
        keyExtractor={item => item.id}
        onEndReached={() => fetchNew()}
        ListHeaderComponent={header}
      />
    </>
  );
};

export default ChapterList;
