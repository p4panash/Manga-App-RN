import React from 'react';
import {View} from 'react-native';

const Wrapper = ({children}) => {
  return <View className="flex-1 items-center justify-center">{children}</View>;
};

export default Wrapper;
