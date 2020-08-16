import React, {Component} from 'react';
import {View} from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';

//const AlbumList = () => {
class AlbumList extends Component {
  state = {album: []};

  componentDidMount() {
    // console.log('This is a life cycle methods');
    axios
      .get('https://rallycoding.herokuapp.com/api/music_albums')
      .then((response) => this.setState({album: response.data}));
  }

  renderAlbum() {
    return this.state.album.map((album) => (
      <AlbumDetail key={album.title} album={album} />
    ));
  }

  render() {
    console.log(this.state);
    return <View>{this.renderAlbum()}</View>;
  }
}

export default AlbumList;
