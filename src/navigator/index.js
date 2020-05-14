import {
  createMaterialTopTabNavigator,
  createAppContainer,
} from 'react-navigation';
import TabBar from '../component/TabBar';

const TabNavigator = createMaterialTopTabNavigator(
  {
    feed: {
      screen: () => null,
    },
    profile: {
      screen: () => null,
    },
    inbox: {
      screen: () => null,
    },
  },
  {
    tabBarComponent: TabBar,
  },
);

export default createAppContainer(TabNavigator);
