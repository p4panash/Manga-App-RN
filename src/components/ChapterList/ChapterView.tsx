import React, {useEffect, useState} from 'react';
import {Dimensions, ScrollView, StyleSheet} from 'react-native';
import {getChapterPages} from '../../api/manga';

import Image from 'react-native-scalable-image';

const ChapterView = ({chapterID}) => {
  const [pages, setPages] = useState([]);

  useEffect(() => {
    getChapterPages(chapterID).then(result => {
      console.log(result);
      setPages(result);
    });
  }, [chapterID]);

  return (
    <ScrollView minimumZoomScale={1} maximumZoomScale={5}>
      {pages.map(value => (
        <Image width={Dimensions.get('window').width} source={{uri: value}} />
      ))}
    </ScrollView>
  );
};

export default ChapterView;
