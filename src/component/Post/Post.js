import React from 'react';
import {View, Text} from 'react-native';
import PostHOC from '../general/PostHOC';

class Post extends React.Component {
  render() {
    return (
      <View>
        <Text
          style={{
            textAlign: 'justify',
            padding: 10,
            lineHeight: 22,
          }}>
          {this.props.data.post.text}
        </Text>
      </View>
    );
  }
}

export default PostHOC(Post);
