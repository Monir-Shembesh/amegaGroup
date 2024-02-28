import React from 'react';
import {NativeStackNavigationOptions} from '@react-navigation/native-stack';

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
    ['Controlled Web Socket']: undefined;
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
      component: <></>,
    },
    {
      id: 1,
      name: 'Market Data',
      component: <></>,
    },
    {
      id: 2,
      name: 'Profile',
      component: <></>,
    },
  ];

  export const AppScreens: AppScreenStructure<AppScreenParamList>[] = [
    {
      id: 3,
      name: 'Controlled Web Socket',
      component: <></>,
    },
  ];
}

export default Navigation;
