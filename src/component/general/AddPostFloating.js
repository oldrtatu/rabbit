import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

class AddPostFloating extends React.Component {
  render() {
    return (
      <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        colors={['#4c669f', '#3b5998', '#192f6a']}
        style={styles.linearGradient}>
        <Text style={styles.buttonText}>Sign in with Facebook</Text>
      </LinearGradient>
    );
  }
}

const styles = StyleSheet.create({
  linearGradient: {},
  buttonText: {},
});

export default AddPostFloating;
