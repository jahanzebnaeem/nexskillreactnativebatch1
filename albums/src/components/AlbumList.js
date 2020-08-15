import React, {Component} from 'react';
import {Text} from 'react-native';
import axios from 'axios';

//const AlbumList = () => {
class AlbumList extends Component {
  componentDidMount() {
    // console.log('This is a life cycle methods');
    axios
      .get('https://rallycoding.herokuapp.com/api/music_albums')
      .then((response) => console.log(response));
  }

  render() {
    return <Text>Album List!!</Text>;
  }
}

export default AlbumList;
