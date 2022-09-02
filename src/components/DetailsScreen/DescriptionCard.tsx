import React, {useState} from 'react';
import {Text, useColorScheme, View, TouchableOpacity} from 'react-native';
import Markdown from 'react-native-easy-markdown';
import {DescriptionCardProps} from '../../types';

const DescriptionCard = ({description}: DescriptionCardProps) => {
  const scheme = useColorScheme();
  const [toggled, setToggled] = useState(false);

  const liteDescription =
    description.length > 200
      ? `${description.substring(0, 200)}...`
      : description;

  return (
    <View className="mt-2">
      <View className="mx-2 flex-row justify-between items-center">
        <Text className="text-black dark:text-white text-lg font-bold">
          Description
        </Text>
        {description.length > 200 ? (
          <Text
            className="font-bold text-orange-600"
            onPress={() => setToggled(!toggled)}>{`See ${
            toggled ? 'less' : 'more'
          }`}</Text>
        ) : null}
      </View>
      <TouchableOpacity
        className="mt-2 p-3 rounded-lg bg-slate-200 dark:bg-slate-800"
        onPress={() => description.length > 200 && setToggled(!toggled)}>
        <Markdown
          markdownStyles={{
            text: {color: scheme === 'dark' ? 'white' : 'black'},
          }}>
          {toggled ? description : liteDescription}
        </Markdown>
      </TouchableOpacity>
    </View>
  );
};

export default DescriptionCard;
