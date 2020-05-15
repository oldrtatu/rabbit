import React from 'react';
import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';
import profile from '../../assets/posts/profile.jpg';
import action from '../../assets/posts/more.png';
import like from '../../assets/posts/like.png';
import dislike from '../../assets/posts/dislike.png';
import comment from '../../assets/posts/comment.png';
import share from '../../assets/posts/share.png';
import THEME from '../../config/theme';

const PostHOC = (Component) => {
  return class POST extends React.Component {
    renderPostHeader = () => (
      <View style={postHeader.container}>
        <View style={postHeader.profile}>
          <Image source={profile} style={postHeader.profileImage} />
          <View style={postHeader.details}>
            <Text style={postHeader.name}>{this.props.data.name}</Text>
            <View style={postHeader.userContainer}>
              <Text
                style={
                  postHeader.username
                }>{`@${this.props.data.username}`}</Text>
              <Text style={postHeader.timestamp}>
                {this.props.data.timestamp}
              </Text>
            </View>
          </View>
        </View>

        <TouchableOpacity
          style={[
            postHeader.follow,
            {
              backgroundColor: this.props.data.following
                ? THEME.PRIMARY_COLOR
                : THEME.WHITE,
              borderWidth: this.props.data.following ? 0 : 1,
            },
          ]}>
          <Text
            style={[
              postHeader.followText,
              {
                color: this.props.data.following ? THEME.WHITE : '#000',
              },
            ]}>
            {this.props.data.following ? 'Following' : 'Follow'}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={postHeader.more}>
          <Image source={action} style={postHeader.action} />
        </TouchableOpacity>
      </View>
    );

    renderHashTags = () => (
      <View
        style={{
          flexDirection: 'row',
        }}>
        {this.props.data.tags.map((tag, index) => (
          <Text key={index} style={style.tags}>{`#${tag}`}</Text>
        ))}
      </View>
    );

    renderPostBottom = () => (
      <View style={postBottom.container}>
        <TouchableOpacity style={postBottom.actionContainer}>
          <Text style={postBottom.counts}>89</Text>
          <Image source={like} style={postBottom.postAction} />
        </TouchableOpacity>

        <TouchableOpacity style={postBottom.actionContainer}>
          <Text style={postBottom.counts}>89</Text>
          <Image source={dislike} style={postBottom.postAction} />
        </TouchableOpacity>

        <TouchableOpacity style={postBottom.actionContainer}>
          <Text style={postBottom.counts}>89</Text>
          <Image source={comment} style={postBottom.postAction} />
        </TouchableOpacity>

        <TouchableOpacity style={postBottom.actionContainer}>
          <Image source={share} style={postBottom.postAction} />
        </TouchableOpacity>
      </View>
    );

    render() {
      return (
        <View
          style={{
            marginBottom: 30,
          }}>
          {this.renderPostHeader()}
          <View
            style={{
              backgroundColor: THEME.BACKGROUND_COLOR,
              margin: 20,
              padding: 5,
              paddingVertical: 15,
              borderRadius: 5,
            }}>
            {this.renderHashTags()}
            <Component {...this.props} />
            {this.renderPostBottom()}
          </View>
        </View>
      );
    }
  };
};

const style = StyleSheet.create({
  tags: {
    backgroundColor: THEME.WHITE,
    padding: 5,
    margin: 5,
  },
});

const postBottom = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginTop: 20,
  },
  postAction: {
    width: 20,
    height: 15,
    resizeMode: 'contain',
  },

  actionContainer: {
    flexDirection: 'row',
    backgroundColor: THEME.WHITE,
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 5,
  },
  counts: {
    marginRight: 5,
    textAlignVertical: 'center',
  },
});

const postHeader = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profile: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileImage: {
    width: 50,
    height: 50,
    resizeMode: 'cover',
    borderRadius: 25,
    marginLeft: 20,
  },
  details: {
    marginLeft: 10,
  },
  name: {
    fontSize: 16,
    fontWeight: '600',
  },
  userContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  username: {
    fontSize: 12,
    fontWeight: '200',
    marginRight: 5,
  },
  timestamp: {
    fontSize: 10,
    color: '#D9D9D9',
  },
  action: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
  },

  follow: {
    borderWidth: 1.5,
    borderColor: '#D9D9D9',
    marginLeft: 'auto',
    width: 100,
    height: 30,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  followText: {
    fontSize: 12,
  },
  more: {
    marginRight: 20,
  },
});

export default PostHOC;
