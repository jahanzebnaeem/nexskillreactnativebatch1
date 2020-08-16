import React from 'react';
import {Text, View, Image} from 'react-native';
import Card from './Card';
import CardSection from './CardSection';

const AlbumDetail = ({album}) => {
  const {thumbnail_image, title, artist} = album;
  const {
    thumbnailContinerStyle,
    thumbnailStyle,
    headerContiner,
    headerTextStyle,
  } = styles;

  return (
    <Card>
      <CardSection>
        <View style={thumbnailContinerStyle}>
          <Image style={thumbnailStyle} source={{uri: thumbnail_image}} />
        </View>
        <View style={headerContiner}>
          <Text style={headerTextStyle}>{title}</Text>
          <Text>{artist}</Text>
        </View>
      </CardSection>
    </Card>
  );
};

const styles = {
  headerContiner: {
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  headerTextStyle: {
    fontSize: 18,
  },
  thumbnailStyle: {
    width: 50,
    height: 50,
  },
  thumbnailContinerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10,
  },
};

export default AlbumDetail;
