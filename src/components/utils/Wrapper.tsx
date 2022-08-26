import React from 'react';
import {View} from 'react-native';

const Wrapper = ({children, otherClass}) => {
  return <View className={`flex-1 ${otherClass}`}>{children}</View>;
};

export default Wrapper;
