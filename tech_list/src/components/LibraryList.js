import React, {Component} from 'react';
import {connect} from 'react-redux';
import {FlatList} from 'react-native';
import LibraryItem from './LibraryItem';

class LibraryList extends Component {
  renderRow({item}) {
    return <LibraryItem library={item} />;
  }

  render() {
    return (
      <FlatList
        data={this.props.library}
        renderItem={this.renderRow}
        keyExtractor={(item, index) => item.id.toString()}
      />
    );
  }
}

const mapStateToProps = (state) => {
  // console.log(state);
  return {library: state.libraries};
};

export default connect(mapStateToProps)(LibraryList);
