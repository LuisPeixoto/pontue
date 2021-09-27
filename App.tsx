import 'react-native-gesture-handler';

import React, {useState, useEffect} from 'react';

import {View, StatusBar, LogBox, Text} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import Routes from './src/routes';
import AppProvider from './src/hooks';

LogBox.ignoreLogs(['Reanimated 2']);

const App: React.FunctionComponent = () => {
  return (
    <NavigationContainer>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />

      <AppProvider>
        <View style={{flex: 1, backgroundColor: '#fff'}}>
          <Routes />
        </View>
      </AppProvider>
    </NavigationContainer>
  );
};

export default App;
