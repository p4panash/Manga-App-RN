import React, {useEffect, useState} from 'react';
import {getMangaList} from '../../api/manga';
import {FlatList, ScrollView, View} from 'react-native';
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

  return (
    <FlatList
      numColumns={2}
      data={list}
      renderItem={renderItem}
      keyExtractor={item => item.id}
    />
  );
};

export default MangaList;
