import React from 'react';
import {Text, View} from 'react-native';

const ChapterItem = (props: any) => {
  return (
    <View className="my-2 p-3 rounded-lg bg-slate-200 dark:bg-slate-800 ">
      <View className="flex-row justify-between items-center">
        <Text className="text-lg font-bold text-black dark:text-white">{`Chapter ${
          props.chapter || '0'
        }`}</Text>
        <Text
          style={{width: 150}}
          numberOfLines={1}
          ellipsizeMode="tail"
          className="text-black dark:text-white text-right">
          {props.title}
        </Text>
      </View>
      <View className="mt-2 flex-row justify-between items-center">
        <Text>🇬🇧</Text>
        <View className="flex-row">
          <Text>🗓</Text>
          <Text className="max-w-sm text-black dark:text-white">
            {props.release.substring(0, 10)}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default ChapterItem;
