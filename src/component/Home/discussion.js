import React from 'react';
import {View, Text} from 'react-native';
import Post from '../Post';
import NewsHighLight from './NewsHighLight';

const postData = [
  {
    name: 'Michelle Sarah',
    profile: '',
    username: 'michelle',
    timestamp: '20 mins ago',
    following: false,
    post: {
      text: `It real sent your at. Amounted all shy set why followed declared. Repeated of endeavor mr position kindness offering ignorant so up. Simplicity are melancholy preference considered saw companions. Disposal on outweigh do speedily in on. Him ham although thoughts entirely drawings.`,
      likeCount: 200,
      disLikeCount: 10,
      comments: 200,
    },
    tags: ['realstate', 'business'],
    attachments: [
      {
        type: 'photos',
        data: [],
      },
    ],
  },

  {
    name: 'George Mwangi',
    profile: '',
    username: 'george28',
    timestamp: '32 mins ago',
    following: true,
    post: {
      text: `It real sent your at. Amounted all shy set why followed declared. Repeated of endeavor mr position kindness offering ignorant so up. Simplicity are melancholy preference considered saw companions. Disposal on outweigh do speedily in on. Him ham although thoughts entirely drawings.`,
      likeCount: 200,
      disLikeCount: 10,
      comments: 200,
    },
    tags: ['realstate', 'business'],
    attachments: [
      {
        type: 'photos',
        data: [],
      },
    ],
  },
];

class Discussion extends React.Component {
  renderPost = () =>
    postData.map((item, index) => {
      return (
        <React.Fragment>
          <Post data={item} key={index} />
          {index == 1 ? <NewsHighLight key={10} /> : null}
        </React.Fragment>
      );
    });

  render() {
    return (
      <View>
        <Text style={{marginLeft: 20, fontSize: 20, marginBottom: 20}}>
          Discussion
        </Text>
        {this.renderPost()}
      </View>
    );
  }
}

export default Discussion;
