import React, {useEffect, useState} from 'react';
import {getMangaList} from '../../api/manga';
import {FlatList} from 'react-native';
import MangaCard from './MangaCard';

const MangaList = () => {
  const [list, setList] = useState([]);

  useEffect(() => {
    getMangaList().then(result => {
      setList(result.data);
    });
  }, []);

  const renderItem = ({item}) => (
    <MangaCard id={item.id} attributes={item.attributes} />
  );

  const fetchNew = () => {
    const offset = list.length;
    getMangaList(offset).then(result => setList([...list, ...result.data]));
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
