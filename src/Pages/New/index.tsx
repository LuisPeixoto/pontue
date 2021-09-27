import React from 'react';
import {ScrollView} from 'react-native';
import Button from '../../components/Button';
import DocumentPicker from 'react-native-document-picker';
import {Container, Content, Text} from './styles';
import Icon from 'react-native-vector-icons/Feather';
import Api from '../../services/api';
import {useNavigation} from '@react-navigation/core';

const New: React.FunctionComponent = () => {
  const navigation = useNavigation();

  async function handleCreate() {
    const res = await DocumentPicker.pick({
      type: [DocumentPicker.types.images, DocumentPicker.types.pdf],
    });

    const options = {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    };

    const formtData = new FormData();

    formtData.append('file[]', res[0].uri);

    Api.post(`alunos/redacao/create`, formtData, options)
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log(error);
      });

    navigation.goBack();
  }
  return (
    <Container>
      <ScrollView>
        <Content>
          <Icon name="upload-cloud" color="#B09DD1" size={120} />
          <Text>
            Envie sua redação e receba a correção em até 3 dias úteis.
          </Text>
        </Content>
        <Button
          color="#D10380"
          icon="upload"
          textColor="#fff"
          onPress={handleCreate}>
          Enviar Redação
        </Button>
      </ScrollView>
    </Container>
  );
};

export default New;
