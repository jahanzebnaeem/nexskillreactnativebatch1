import React, {Component} from 'react';
import {connect} from 'react-redux';
import {ListView} from 'react-native';
import LibraryItem from './LibraryItem';

class LibraryList extends Component {
  componentDidMount() {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2,
    });

    this.dataSource = ds.cloneWithRows(this.props.library);
  }

  renderRow(library) {
    return <LibraryItem library={library} />;
  }

  render() {
    return <ListView dataSource={this.dataSource} renderRow={this.renderRow} />;
  }
}

const mapStateToProps = (state) => {
  // console.log(state);
  return {library: state.libraries};
};

export default connect(mapStateToProps)(LibraryList);
