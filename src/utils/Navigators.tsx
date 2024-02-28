import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Navigation from '../modules/Navigation';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';

// Main Bottom Tab Navigator
const renderTabIcon = ({route, focused}: Navigation.IRenderTabIconsProps) => {
  let iconName = 'home';
  const iconColor = focused ? 'red' : 'blue';
  const fontSize = 25;

  switch (route.name) {
    case Navigation.TabIcons.HOME:
      //   iconName = 'test;
      break;
    case Navigation.TabIcons.MARKET_DATA:
      break;
    case Navigation.TabIcons.PROFILE:
      break;
    default:
      break;
  }

  //   return <Icon name={iconName} size={fontSize} color={iconColor} />;
};

// Main Stack Navigator
const NavTree = createNativeStackNavigator<Navigation.AppScreenParamList>();
const AppTabs = createBottomTabNavigator<Navigation.TabsParamList>();

export const TabScreens = () => {
  return (
    <AppTabs.Navigator
      initialRouteName={'Home'}
      backBehavior="none"
      screenOptions={({route}) => ({
        // tabBarIcon: ({focused}) => renderTabIcon({route, focused}),
        // tabBarLabel: ({focused}) => {
        //   return <NavigationTabLabel route={route} focused={focused} />;
        // },
        headerShown: false,
      })}>
      {/* if we do not intend to render tabs conditionally
        then we can just use .map() on AppTabs and display tabs dinamically */}
      <AppTabs.Screen
        key={Navigation.AppTabs[0].id}
        name={Navigation.AppTabs[0].name}
        component={Navigation.AppTabs[0].component}
      />
      <AppTabs.Screen
        key={Navigation.AppTabs[1].id}
        name={Navigation.AppTabs[1].name}
        component={Navigation.AppTabs[1].component}
      />
      <AppTabs.Screen
        key={Navigation.AppTabs[2].id}
        name={Navigation.AppTabs[2].name}
        component={Navigation.AppTabs[2].component}
      />
    </AppTabs.Navigator>
  );
};

export const AppScreens = ({initialRouteName}: Navigation.MainStackProps) => {
  return (
    <NavTree.Navigator initialRouteName={initialRouteName}>
      {/* tabs */}
      <NavTree.Screen
        key={'app-tabs'}
        name={'AppTabs'}
        component={TabScreens}
        options={{headerShown: false}}
      />
      {/* all the other app screens on a more flattened level */}
      {Navigation.AppScreens.map(screen => (
        <NavTree.Screen
          key={screen.id}
          name={screen.name as keyof Navigation.AppScreenParamList}
          component={screen.component}
          options={screen.options}
        />
      ))}
    </NavTree.Navigator>
  );
};

export const AppNavigator = (
  initialRouteName: keyof Navigation.AppScreenParamList,
) => {
  return (
    <NavigationContainer>
      <AppScreens initialRouteName={initialRouteName} />
    </NavigationContainer>
  );
};
