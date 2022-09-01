import React, {useEffect, useState} from 'react';
import Wrapper from '../components/utils/Wrapper';
import {View, Text, Button} from 'react-native';
import MangaList from '../components/manga/MangaList';

const HomeScreen = ({navigation}) => {
  return (
    <Wrapper otherClass={'items-center'}>
      <MangaList />
    </Wrapper>
  );
};

export default HomeScreen;
