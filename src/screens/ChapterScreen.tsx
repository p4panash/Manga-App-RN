import React from 'react';
import ChapterView from '../components/ChapterList/ChapterView';
import Wrapper from '../components/utils/Wrapper';

const ChapterScreen = ({route}) => {
  const {id} = route.params;

  return (
    <Wrapper>
      <ChapterView chapterID={id} />
    </Wrapper>
  );
};

export default ChapterScreen;
