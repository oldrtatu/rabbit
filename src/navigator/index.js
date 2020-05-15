import * as React from 'react';
import {Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/Home';
import TabBar from '../component/TabBar/TabBar';

function SettingsScreen() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Settings!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator tabBar={(props) => <TabBar {...props} />}>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Notification" component={SettingsScreen} />
        <Tab.Screen name="Market" component={SettingsScreen} />
        <Tab.Screen name="Message" component={SettingsScreen} />
        <Tab.Screen name="Wallet" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
