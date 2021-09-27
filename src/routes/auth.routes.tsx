import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import SignIn from '../Pages/SignIn';
// import SignUp from '../Pages/SignUp/Index';
// import Welcome from '../Pages/Welcome';

const Auth = createStackNavigator();

const AuThRoutes: React.FunctionComponent = () => (
  <>
    <Auth.Navigator
      initialRouteName="SignIn"
      screenOptions={{headerShown: false}}>
      <Auth.Screen name="SignIn" component={SignIn} />
    </Auth.Navigator>
  </>
);

export default AuThRoutes;
