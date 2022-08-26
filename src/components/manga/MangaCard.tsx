import React from 'react';
import {View, Text} from 'react-native';

const MangaCard = ({id, attributes}) => {
  return (
    <View className="basis-1/2">
      <View className="m-1 rounded-md dark:bg-slate-800">
        <View className="p-1">
          <Text className="font-bold dark:text-white mb-2">
            {attributes.title.en}
          </Text>
          <Text className="dark:text-white">{attributes.description.en}</Text>
        </View>
      </View>
    </View>
  );
};

export default MangaCard;
