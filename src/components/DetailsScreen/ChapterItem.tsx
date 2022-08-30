import React from 'react';
import {Text, View} from 'react-native';

const ChapterItem = (props: any) => {
  return (
    <View className="my-2 p-2 rounded-lg bg-slate-200 dark:bg-slate-800 flex-row items-center">
      <Text className="text-black dark:text-white">{props.chapter}</Text>
      <Text className="text-black dark:text-white">{props.title}</Text>
      <Text className="text-black dark:text-white">{props.release}</Text>
    </View>
  );
};

export default ChapterItem;
