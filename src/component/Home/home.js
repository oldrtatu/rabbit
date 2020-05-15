import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import Header from './header';
import Market from './Market';
import THEME from '../../config/theme';
import Discussion from './discussion';
import AddPostFloating from '../general/AddPostFloating';

class Home extends React.Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: THEME.WHITE,
          position: 'relative',
        }}>
        <ScrollView
          style={{
            flex: 1,
          }}>
          <Header />
          <Market />
          <Discussion />
        </ScrollView>
        <AddPostFloating />
      </View>
    );
  }
}

export default Home;
