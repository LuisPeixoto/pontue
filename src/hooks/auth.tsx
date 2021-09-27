import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import api from '../services/api';
import {Alert} from 'react-native';

interface AuthState {
  token: string;
  user: string;
}

interface SigninCredentials {
  email: string;
  password: string;
}

interface AuthContextData {
  user: string;
  loading: boolean;
  signIn(credentials: SigninCredentials): Promise<void>;
  signOut(): void;
}

export const AuthContext = createContext<AuthContextData>(
  {} as AuthContextData,
);

export const AuthProvider: React.FunctionComponent = ({children}) => {
  const [data, setData] = useState<AuthState>({} as AuthState);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadStorageData(): Promise<void> {
      const [token, user] = await AsyncStorage.multiGet([
        '@Pontue:token',
        '@Pontue:user',
      ]);

      if (token[1] && user[1]) {
        api.defaults.headers.authorization = `Bearer ${token[1]}`;
        setData({token: token[1], user: JSON.parse(user[1])});
      }

      setLoading(false);
    }
    loadStorageData();
  }, []);
  const signIn = useCallback(async ({email, password}) => {
    try {
      const response = await api.post('auth/login', {
        email,
        password,
      });

      const {access_token, aluno_id} = response.data;

      const token = access_token;

      const user = aluno_id || 'admin';

      await AsyncStorage.setItem('@Pontue:token', token);
      await AsyncStorage.setItem('@Pontue:user', JSON.stringify(user));

      setData({token, user});
    } catch (error) {
      Alert.alert(
        'O email e a senha não conferem',
        'Por favor, verifique os dados informados',
        [
          {
            text: 'ok',
          },
        ],
      );
    }
  }, []);

  const signOut = useCallback(async () => {
    await AsyncStorage.removeItem('@Pontue:token');
    await AsyncStorage.removeItem('@Pontue:user');

    setData({} as AuthState);
  }, []);

  return (
    <AuthContext.Provider value={{user: data.user, loading, signIn, signOut}}>
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
}
