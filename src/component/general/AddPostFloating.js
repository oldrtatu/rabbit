import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import floating from '../../assets/floating.png';
import THEME from '../../config/theme';

class AddPostFloating extends React.Component {
  render() {
    return (
      <LinearGradient
        start={{x: 0, y: 1}}
        end={{x: 1, y: 0}}
        colors={[THEME.SECONDARY_COLOR, THEME.PRIMARY_COLOR]}
        style={styles.linearGradient}>
        <Image source={floating} style={styles.image} />
      </LinearGradient>
    );
  }
}

const styles = StyleSheet.create({
  linearGradient: {
    width: 80,
    height: 80,
    borderRadius: 40,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 20,
    right: 20,

    borderTopWidth: 0,
    shadowOpacity: 0.16,
    shadowOffset: {
      height: -1,
      width: 0,
    },
    shadowColor: '#000000',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    elevation: 6,
  },
  image: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
  },
});

export default AddPostFloating;
