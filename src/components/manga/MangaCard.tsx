import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';

const MangaCard = ({id, attributes, cover, author}) => {
  const [loadingCycle, setLoadingCycle] = useState(0);
  const navigation = useNavigation();

  const styles = StyleSheet.create({
    cover: {
      width: 150,
      height: 300,
      marginTop: 3,
      resizeMode: loadingCycle <= 1 ? 'center' : 'cover',
    },
  });

  return (
    <View className="flex-1 basis-1/2 min-h-fit">
      <TouchableOpacity
        className="flex-1 m-1 rounded-lg bg-slate-200 dark:bg-slate-800"
        onPress={() =>
          navigation.navigate('Details', {
            id: id,
            title: attributes.title.en,
            cover: cover,
            attributes: attributes,
            author: author,
          })
        }>
        <View className="flex-1 p-2 items-center">
          <Image
            style={styles.cover}
            source={
              loadingCycle === 0
                ? require('../../images/loading.gif')
                : {uri: cover}
            }
            onLoadEnd={() => setLoadingCycle(loadingCycle + 1)}
          />
          <View className="flex-1 justify-center">
            <Text className="mt-5 font-bold text-black dark:text-white mb-2 w-max text-center">
              {attributes.title.en}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default MangaCard;
