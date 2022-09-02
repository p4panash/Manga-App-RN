import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const ChapterItem = (props: any) => {
  const navigation = useNavigation();

  const styles = StyleSheet.create({
    title: {
      width: 150,
    },
  });

  return (
    <TouchableOpacity
      className="my-2 p-3 rounded-lg bg-slate-200 dark:bg-slate-800"
      onPress={() => {
        // @ts-ignore
        navigation.navigate('ChapterScreen', {
          title: props.title,
          chapter: props.chapter,
          id: props.id,
        });
      }}>
      <View className="flex-row justify-between items-center">
        <Text className="text-lg font-bold text-black dark:text-white">{`Chapter ${
          props.chapter || '0'
        }`}</Text>
        <Text
          style={styles.title}
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
    </TouchableOpacity>
  );
};

export default ChapterItem;
