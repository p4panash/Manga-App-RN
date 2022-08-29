import React from 'react';
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

  return (
    <Wrapper>
      <DetailsHeader {...detailsProps} />
    </Wrapper>
  );
};

export default DetailsScreen;
