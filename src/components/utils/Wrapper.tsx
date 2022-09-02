import React from 'react';
import {View} from 'react-native';
import {WrapperProps} from '../../types';

const Wrapper = ({children, otherClass = ''}: WrapperProps) => {
  return <View className={`flex-1 ${otherClass}`}>{children}</View>;
};

export default Wrapper;
