import React from 'react';
import {Text, View} from 'react-native';

const ChapterItem = (props: any) => {
  return (
    <View className="my-2 p-3 rounded-lg bg-slate-200 dark:bg-slate-800 ">
      <View className="flex-row justify-between items-center">
        <Text className="text-lg font-bold text-black dark:text-white">{`Chapter ${
          props.chapter || '0'
        }`}</Text>
        <Text className="text-black dark:text-white">{props.title}</Text>
      </View>
      <Text className="mt-1 text-black dark:text-white self-end">
        {props.release.substring(0, 10)}
      </Text>
    </View>
  );
};

export default ChapterItem;
