import React from 'react';
import Wrapper from '../components/utils/Wrapper';
import {View, Text, Button} from 'react-native';

const HomeScreen = ({navigation}) => {
  return (
    <Wrapper>
      <Text className="dark:text-white">Home Screen</Text>
      <Button
        title="Go To Details"
        onPress={() =>
          navigation.navigate('Details', {
            itemId: 86,
            otherParam: 'anything you want here',
          })
        }
      />
    </Wrapper>
  );
};

export default HomeScreen;
