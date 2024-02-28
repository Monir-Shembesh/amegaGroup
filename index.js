/**
 * @format
 */
import React from 'react';
import {AppRegistry, Text, TextInput} from 'react-native';
import App from './App';
import {name as AmegaMobile} from './app.json';
import {SafeAreaProvider} from 'react-native-safe-area-context';

// disable system font scaling for text component
Text.defaultProps = Text.defaultProps || {};
Text.defaultProps.allowFontScaling = false;
// disable system font scaling for text input component
TextInput.defaultProps = TextInput.defaultProps || {};
TextInput.defaultProps.allowFontScaling = false;
// end of custom system overrides

const RootApp = () => (
  <SafeAreaProvider>
    <App />
  </SafeAreaProvider>
);

AppRegistry.registerComponent(AmegaMobile, () => RootApp);
