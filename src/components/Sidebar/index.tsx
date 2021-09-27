import {useNavigation} from '@react-navigation/core';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import React from 'react';
import {StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import {useAuth} from '../../hooks/auth';
import {
  Container,
  Header,
  Content,
  Image,
  Name,
  NickName,
  Info,
  ImageContainer,
} from './styles';
import logoImg from '../../assets/logo.png';

const Sidebar: React.FunctionComponent = ({...props}) => {
  const {signOut} = useAuth();
  const navigation = useNavigation();

  return (
    <Container>
      <Header>
        <ImageContainer>
          <Image style={{resizeMode: 'cover'}} source={logoImg} />
        </ImageContainer>
      </Header>
      <Content>
        <DrawerContentScrollView {...props}>
          <DrawerItem
            label="Nova Redação"
            onPress={() => {
              navigation.navigate('New');
            }}
            pressColor="#ccc"
            labelStyle={styles.text}
            icon={({color, size}) => (
              <Icon name="plus" color="#A5A3A3" size={size} />
            )}
          />
          <DrawerItem
            label="Sair"
            onPress={signOut}
            pressColor="#ccc"
            labelStyle={styles.text}
            icon={({color, size}) => (
              <Icon name="log-out" color="#A5A3A3" size={size} />
            )}
          />
        </DrawerContentScrollView>
      </Content>
    </Container>
  );
};

const styles = StyleSheet.create({
  text: {
    color: '#A5A3A3',
    fontFamily: 'Lato-Regular',
    fontSize: 16,
  },
});

export default Sidebar;
