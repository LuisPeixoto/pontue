import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../Pages/Home';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Sidebar from '../components/Sidebar';
import logoImg from '../assets/logo.png';

import {Logo, Menu, Add, AddText} from './styles';

import Icon from 'react-native-vector-icons/Feather';
import {useNavigation} from '@react-navigation/core';
import Edit from '../Pages/Edit';
import New from '../Pages/New';
import ViewPdf from '../Pages/ViewPdf';
import ViewImage from '../Pages/ViewImage';

const App = createStackNavigator();

const AppRoutes: React.FunctionComponent = () => {
  const navigation = useNavigation();
  return (
    <>
      <App.Navigator
        screenOptions={{
          headerTitleAlign: 'center',
          headerTintColor: 'white',
          headerStyle: {
            elevation: 4,
            shadowColor: '#000',
            shadowOpacity: 4,
            backgroundColor: '#fff',
          },
        }}>
        <App.Screen
          name="Home"
          component={Home}
          options={{
            headerTitle: () => <Logo source={logoImg} />,
            headerLeft: () => (
              <Menu
                onPress={() => {
                  navigation.openDrawer();
                }}>
                <Icon name="menu" color="#D10380" size={30} />
              </Menu>
            ),

            headerRight: () => (
              <Add
                onPress={() => {
                  navigation.navigate('New');
                }}>
                <Icon name="plus" color="#D10380" size={30} />
              </Add>
            ),
          }}
        />

        <App.Screen
          name="Edit"
          component={Edit}
          options={{
            headerTitle: () => <Logo source={logoImg} />,
            headerTintColor: '#D10380',
          }}
        />

        <App.Screen
          name="ViewPdf"
          component={ViewPdf}
          options={{
            headerTitle: () => <Logo source={logoImg} />,
            headerTintColor: '#D10380',
          }}
        />

        <App.Screen
          name="ViewImage"
          component={ViewImage}
          options={{
            headerTitle: () => <Logo source={logoImg} />,
            headerTintColor: '#D10380',
          }}
        />

        <App.Screen
          name="New"
          component={New}
          options={{
            headerTitle: () => <Logo source={logoImg} />,
            headerTintColor: '#D10380',
          }}
        />
      </App.Navigator>
    </>
  );
};

const AppDrawer: React.FunctionComponent = () => {
  const AppDrawer = createDrawerNavigator();
  return (
    <AppDrawer.Navigator
      initialRouteName="Root"
      drawerContent={props => <Sidebar {...props} />}>
      <AppDrawer.Screen
        name="Root  "
        component={AppRoutes}
        options={{headerShown: false}}
      />
    </AppDrawer.Navigator>
  );
};

export default AppDrawer;
