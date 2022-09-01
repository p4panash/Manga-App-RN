import React from 'react';
import Wrapper from '../components/utils/Wrapper';
import MangaList from '../components/manga/MangaList';

const HomeScreen = () => {
  return (
    <Wrapper otherClass={'items-center'}>
      <MangaList />
    </Wrapper>
  );
};

export default HomeScreen;
