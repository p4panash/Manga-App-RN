import React from 'react';
import {ScrollView} from 'react-native';
import DescriptionCard from '../components/DetailsScreen/DescriptionCard';
import DetailsHeader from '../components/DetailsScreen/DetailsHeader';
import Wrapper from '../components/utils/Wrapper';

const DetailsScreen = ({route, navigation}) => {
  const {id, title, cover, attributes, author} = route.params;

  const detailsProps = {
    title: title,
    cover: cover,
    attributes: attributes,
    author: author,
  };

  const description = attributes.description.en;

  return (
    <Wrapper>
      <ScrollView>
        <DetailsHeader {...detailsProps} />
        {description ? <DescriptionCard description={description} /> : null}
      </ScrollView>
    </Wrapper>
  );
};

export default DetailsScreen;
