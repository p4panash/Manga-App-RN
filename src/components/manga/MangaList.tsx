import React, {useEffect, useState} from 'react';
import {getMangaList} from '../../api/manga';
import {FlatList} from 'react-native';
import MangaCard from './MangaCard';
import SearchBar from '../utils/SearchBar';

const MangaList = () => {
  const [list, setList] = useState([]);
  const [query, setQuery] = useState(null);

  useEffect(() => {
    getMangaList().then(result => {
      setList(result);
    });
  }, []);

  useEffect(() => {
    getMangaList(0, query).then(result => {
      setList(result);
    });
  }, [query]);

  const renderItem = ({item}) => <MangaCard {...item} />;
  const fetchNew = () => {
    const offset = list.length;
    getMangaList(offset, query).then(result => setList([...list, ...result]));
  };

  const search = <SearchBar setQuery={setQuery} />;

  return (
    <FlatList
      numColumns={2}
      data={list}
      renderItem={renderItem}
      keyExtractor={item => item.id}
      onEndReached={() => fetchNew()}
      ListHeaderComponent={search}
      contentContainerStyle={{minWidth: '100%'}}
    />
  );
};

export default MangaList;
