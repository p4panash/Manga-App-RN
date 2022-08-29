import React, {useEffect, useState} from 'react';
import {getMangaList} from '../../api/manga';
import {FlatList} from 'react-native';
import MangaCard from './MangaCard';

const MangaList = () => {
  const [list, setList] = useState([]);

  useEffect(() => {
    getMangaList().then(result => {
      setList(result);
    });
  }, []);

  const renderItem = ({item}) => (
    <MangaCard id={item.id} attributes={item.attributes} cover={item.cover} />
  );

  const fetchNew = () => {
    const offset = list.length;
    getMangaList(offset).then(result => setList([...list, ...result]));
  };

  return (
    <FlatList
      numColumns={2}
      data={list}
      renderItem={renderItem}
      keyExtractor={item => item.id}
      onEndReached={() => fetchNew()}
    />
  );
};

export default MangaList;
