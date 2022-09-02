import React from 'react';
import ChapterView from '../components/ChapterList/ChapterView';
import Wrapper from '../components/utils/Wrapper';
import {ChapterScreenProps} from '../types';

const ChapterScreen = ({route}: ChapterScreenProps) => {
  const {id} = route.params;

  return (
    <Wrapper>
      <ChapterView chapterID={id} />
    </Wrapper>
  );
};

export default ChapterScreen;
