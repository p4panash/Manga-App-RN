import React, {useEffect, useState} from 'react';
import {FlatList, Image, ScrollView, StyleSheet} from 'react-native';
import {getChapterPages} from '../../api/manga';

const ChapterView = ({chapterID}) => {
  const [pages, setPages] = useState([]);

  const styles = StyleSheet.create({
    cover: {
      flex: 1,
      resizeMode: 'contain',
      aspectRatio: 1,
    },
  });

  useEffect(() => {
    getChapterPages(chapterID).then(result => {
      setPages(result);
    });
  }, [chapterID]);

  return (
    <ScrollView minimumZoomScale={1} maximumZoomScale={5}>
      {pages.map(value => (
        <Image style={styles.cover} source={{uri: value}} />
      ))}
    </ScrollView>
  );
};

export default ChapterView;
