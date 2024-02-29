import {NativeStackNavigationOptions} from '@react-navigation/native-stack';
import Home from '../Screens/Home';
import MarketData from '../Screens/MarketData';
import Profile from '../Screens/Profile';

namespace Navigation {
  export interface IRenderTabIconsProps {
    route: any;
    focused: boolean;
    color?: string;
    size?: number;
  }

  export enum TabIcons {
    HOME = 'Home',
    MARKET_DATA = 'Market Data',
    PROFILE = 'Profile',
  }

  export type TabsParamList = {
    Home: undefined;
    ['Market Data']: undefined;
    Profile: undefined;
  };

  export type AppScreenParamList = {
    AppTabs: undefined;
  };

  export interface AppScreenStructure<T> {
    id: number;
    name: keyof T;
    component: any;
    options?: NativeStackNavigationOptions;
  }

  export type MainStackProps = {
    stackScreenOptions?: NativeStackNavigationOptions;
    initialRouteName?: keyof Navigation.AppScreenParamList;
  };

  export const AppTabs: AppScreenStructure<TabsParamList>[] = [
    {
      id: 0,
      name: 'Home',
      component: Home,
    },
    {
      id: 1,
      name: 'Market Data',
      component: MarketData,
    },
    {
      id: 2,
      name: 'Profile',
      component: Profile,
    },
  ];

  export const AppScreens: AppScreenStructure<AppScreenParamList>[] = [];
}

export default Navigation;
