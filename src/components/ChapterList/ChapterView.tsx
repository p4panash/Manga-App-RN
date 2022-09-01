import React, {useEffect, useState} from 'react';
import {FlatList, Image, StyleSheet} from 'react-native';
import {getChapterPages} from '../../api/manga';

const ChapterView = ({chapterID}) => {
  const [pages, setPages] = useState([]);

  const styles = StyleSheet.create({
    cover: {
      flex: 1,
      resizeMode: 'contain',
      aspectRatio: 1,
    },
    header: {
      opacity: 0.2,
    },
  });

  useEffect(() => {
    getChapterPages(chapterID).then(result => {
      setPages(result);
    });
  }, [chapterID]);

  const renderImage = ({item}) => {
    return <Image style={styles.cover} source={{uri: item}} />;
  };

  return <FlatList data={pages} renderItem={renderImage} />;
};

export default ChapterView;
