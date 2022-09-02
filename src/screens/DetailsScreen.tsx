import React from 'react';
import {Text, View} from 'react-native';
import ChapterList from '../components/DetailsScreen/ChapterList';
import DescriptionCard from '../components/DetailsScreen/DescriptionCard';
import DetailsHeader from '../components/DetailsScreen/DetailsHeader';
import Wrapper from '../components/utils/Wrapper';
import {DetailsScreenProps} from '../types';

const DetailsScreen = ({route}: DetailsScreenProps) => {
  const {id, title, cover, attributes, author} = route.params;
  const detailsProps = {
    title: title,
    cover: cover,
    attributes: attributes,
    author: author,
  };

  const description = attributes.description.en;

  const listHeader = (
    <>
      <DetailsHeader {...detailsProps} />
      {description ? <DescriptionCard description={description} /> : null}
      <View className="mx-2 mt-2 justify-start">
        <Text className="text-black dark:text-white text-lg font-bold">
          Chapter List
        </Text>
      </View>
    </>
  );

  return (
    <Wrapper>
      <ChapterList mangaID={id} header={listHeader} />
    </Wrapper>
  );
};

export default DetailsScreen;
