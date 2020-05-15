import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import avatar from '../../assets/avatar.jpg';
import news from '../../assets/news.png';
import search from '../../assets/search.png';
import THEME from '../../config/theme';

const Header = () => (
  <View style={style.container}>
    <Image source={avatar} style={style.profile} />
    <Text style={style.appName}>Rabbit</Text>
    <View style={style.subContainer}>
      <Image source={news} style={style.rightAction} />
      <Image source={search} style={style.rightAction} />
    </View>
  </View>
);

const style = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
    paddingTop: 10,
  },
  profile: {
    width: 40,
    height: 40,
    borderWidth: 2,
    borderColor: THEME.PRIMARY_COLOR,
    borderRadius: 20,
    resizeMode: 'cover',
    marginLeft: 20,
  },
  rightAction: {
    width: 20,
    height: 20,
    marginRight: 20,
  },
  subContainer: {
    flexDirection: 'row',
    marginLeft: 'auto',
  },
  appName: {
    marginLeft: 'auto',
    fontSize: 16,
    fontWeight: '700',
  },
});

export default Header;
