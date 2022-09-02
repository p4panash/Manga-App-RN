import React from 'react';
import {Image, ImageBackground, StyleSheet, Text, View} from 'react-native';
import {DetailsHeaderProps} from '../../types';

const DetailsHeader = ({
  title,
  cover,
  attributes,
  author,
}: DetailsHeaderProps) => {
  const styles = StyleSheet.create({
    cover: {
      width: 150,
      height: 300,
    },
    header: {
      opacity: 0.2,
    },
  });

  return (
    <ImageBackground source={{uri: cover}} imageStyle={styles.header}>
      <View className="p-2 flex-row">
        <View>
          <Image style={styles.cover} source={{uri: cover}} />
        </View>
        <View className="pl-4 flex-1">
          <Text className="font-bold text-xl text-black dark:text-white mb-4 flex-wrap">
            {title}
          </Text>
          <View className="mb-2">
            <Text className="font-bold text-lg text-zinc-600 dark:text-zinc-400">
              Status
            </Text>
            <Text className="text-xs font-bold text-black dark:text-white">
              🕒 {attributes.status}
            </Text>
          </View>
          <View className="mb-2">
            <Text className="font-bold text-lg text-zinc-600 dark:text-zinc-400">
              Author
            </Text>
            <Text className="text-xs font-bold text-black dark:text-white">
              👤 {author}
            </Text>
          </View>
          {attributes.year && (
            <View>
              <Text className="font-bold text-lg text-zinc-600 dark:text-zinc-400">
                Release Date
              </Text>
              <Text className="text-xs font-bold text-black dark:text-white">
                🗓 {attributes.year}
              </Text>
            </View>
          )}
        </View>
      </View>
    </ImageBackground>
  );
};

export default DetailsHeader;
