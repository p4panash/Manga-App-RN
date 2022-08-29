import React, {useEffect, useState} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {getMangaCover} from '../../api/manga';

const styles = StyleSheet.create({
  cover: {
    width: 150,
    height: 300,
    marginTop: 3,
  },
});

const MangaCard = ({id, attributes}) => {
  const [cover, setCover] = useState(null);

  useEffect(() => {
    getMangaCover(id).then(result => {
      setCover(result);
    });
  }, [id]);

  return (
    <View className="flex-1 basis-1/2 min-h-fit">
      <View className="flex-1 m-1 rounded-lg dark:bg-slate-800">
        <View className="flex-1 p-2 items-center">
          <Image
            style={cover ? styles.cover : styles.loading}
            source={cover ? {uri: cover} : require('../../images/loading.gif')}
          />
          <View className="flex-1 justify-center">
            <Text className="mt-5 font-bold dark:text-white mb-2 w-max text-center">
              {attributes.title.en}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default MangaCard;
