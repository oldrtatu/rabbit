import * as React from 'react';
import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';
import Tab from './Tab';
import home from '../../assets/tabbar/home.png';
import notification from '../../assets/tabbar/notification.png';
import market from '../../assets/tabbar/market.png';
import message from '../../assets/tabbar/message.png';
import wallet from '../../assets/tabbar/wallet.png';
import THEME from '../../config/theme';

const navs = {
  Home: home,
  Notification: notification,
  Market: market,
  Message: message,
  Wallet: wallet,
};

const TabBar = ({state, descriptors, navigation}) => {
  return (
    <View style={[style.tabBarContainer, {flexDirection: 'row'}]}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity style={style.container}>
            <Image
              source={navs[route.name]}
              style={[style.image, {width: route.name == 'Market' ? 40 : 20}]}
            />
          </TouchableOpacity>
        );

        // return (
        //   <TouchableOpacity
        //     accessibilityRole="button"
        //     accessibilityStates={isFocused ? ['selected'] : []}
        //     accessibilityLabel={options.tabBarAccessibilityLabel}
        //     testID={options.tabBarTestID}
        //     onPress={onPress}
        //     onLongPress={onLongPress}
        //     style={{flex: 1}}>
        //     <Text style={{color: isFocused ? '#673ab7' : '#222'}}>{label}</Text>
        //   </TouchableOpacity>
        // );
      })}
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  image: {
    width: 20,
    height: 60,
    resizeMode: 'contain',
  },
  tabBarContainer: {
    height: 60,
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
    elevation: 20,
    backgroundColor: THEME.WHITE,
  },
});

export default TabBar;
