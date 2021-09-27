import React, {useCallback, useRef} from 'react';
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  View,
  ScrollView,
  TextInput,
  Alert,
} from 'react-native';
import logoImg from '../../assets/logo.png';
import Input from '../../components/Input';
import Button from '../../components/Button';
import {Form} from '@unform/mobile';
import {FormHandles} from '@unform/core';

import getValidationErrors from '../../utils/getValidationErrors';

import {Container, Content, Title} from './styles';
import {useNavigation} from '@react-navigation/native';
import * as Yup from 'yup';
import {useAuth} from '../../hooks/auth';

interface SignInFormData {
  email: string;
  password: string;
}

const SignIn: React.FunctionComponent = () => {
  const formRef = useRef<FormHandles>(null);

  const {signIn} = useAuth();
  const passwordInputRef = useRef<TextInput>(null);

  const handleSignIn = useCallback(
    async (data: SignInFormData) => {
      try {
        formRef.current?.setErrors({});
        const schema = Yup.object().shape({
          email: Yup.string().required('Email obrigatório').email(),
          password: Yup.string().min(8, 'Senha obrigatória'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        await signIn({
          email: data.email,
          password: data.password,
        });
      } catch (error) {
        if (error instanceof Yup.ValidationError) {
          const errors = getValidationErrors(error);
          formRef.current?.setErrors(errors);
          Alert.alert(
            'Erro na autenticacão',
            'Ocorreu um erro ao fazer login, cheque as credencias',
          );
        }
      }
    },
    [signIn],
  );
  return (
    <Container>
      <KeyboardAvoidingView
        style={{flex: 1}}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        enabled>
        <ScrollView
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={{flex: 1}}>
          <Content>
            <Image source={logoImg} />
            <View>
              <Title>Mantenha-se conectado</Title>
            </View>
            <Form ref={formRef} onSubmit={handleSignIn}>
              <Input
                name="email"
                autoCorrect={false}
                autoCapitalize="none"
                keyboardType="email-address"
                icon="mail"
                placeholder="E-mail"
                returnKeyType="next"
                onSubmitEditing={() => {
                  passwordInputRef.current?.focus();
                }}
              />
              <Input
                ref={passwordInputRef}
                name="password"
                secureTextEntry
                icon="lock"
                placeholder="Senha"
                returnKeyType="send"
                onSubmitEditing={() => {
                  formRef.current?.submitForm();
                }}
              />
            </Form>
            <Button
              color="#D10380"
              textColor="#fff"
              icon="log-in"
              onPress={() => {
                formRef.current?.submitForm();
              }}>
              Entrar
            </Button>
          </Content>
        </ScrollView>
      </KeyboardAvoidingView>
    </Container>
  );
};

export default SignIn;
