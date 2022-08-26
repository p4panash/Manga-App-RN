import React from 'react';
import {Text, Button} from 'react-native';
import Wrapper from '../components/utils/Wrapper';

const DetailsScreen = ({route, navigation}) => {
  const {itemId, otherParam} = route.params;

  return (
    <Wrapper>
      <Text>Details Screen</Text>
      <Text>itemId: {JSON.stringify(itemId)}</Text>
      <Text>otherParam: {JSON.stringify(otherParam)}</Text>
      <Button
        title="Go to Details... again"
        onPress={() =>
          navigation.push('Details', {
            itemId: Math.floor(Math.random() * 100),
          })
        }
      />
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </Wrapper>
  );
};

export default DetailsScreen;
