import React from 'react';
import {ActivityIndicator, StatusBar, View} from 'react-native';
import {useAuth} from '../hooks/auth';
import AppRoutes from './app.routes';
import AuthRoutes from './auth.routes';

const Routes: React.FunctionComponent = () => {
  const {user, loading} = useAuth();

  if (loading) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          backgroundColor: '#fff',
          alignItems: 'center',
        }}>
        <StatusBar barStyle="dark-content" backgroundColor="#fff" />
        <ActivityIndicator size="large" color="#D10380" />
      </View>
    );
  }
  return user ? (
    <>
      <AppRoutes />
    </>
  ) : (
    <AuthRoutes />
  );
};

export default Routes;
