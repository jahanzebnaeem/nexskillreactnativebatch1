import React from 'react';
import {Text, View, Image, Linking} from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

const AlbumDetail = ({album}) => {
  const {thumbnail_image, title, artist, image, url} = album;
  const {
    thumbnailContinerStyle,
    thumbnailStyle,
    headerContiner,
    headerTextStyle,
    imageStyle,
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

      <CardSection>
        <Image style={imageStyle} source={{uri: image}} />
      </CardSection>

      <CardSection>
        <Button onPress={() => Linking.openURL(url)}>Buy Now</Button>
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
  imageStyle: {
    height: 300,
    flex: 1,
    width: null,
  },
};

export default AlbumDetail;
