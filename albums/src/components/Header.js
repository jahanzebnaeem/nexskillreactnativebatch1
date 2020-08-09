import React from 'react';
import {Text, View} from 'react-native';

const Header = (props) => {
  const {textStyle, viewStyle} = styles;

  return (
    <View style={viewStyle}>
      <Text style={textStyle}>{props.headerText}</Text>
    </View>
  );
};

const styles = {
  viewStyle: {
    backgroundColor: '#f8f8f8',
    height: 70,
    paddingTop: 35,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    elevataion: 2,
    position: 'relative',
  },
  textStyle: {
    fontSize: 20,
  },
};

export default Header;
