import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {Alert, ScrollView} from 'react-native';
import Button from '../../components/Button';
import CardEdit from '../../components/CardEdit';
import Api from '../../services/api';
import {Container} from './styles';
import DocumentPicker from 'react-native-document-picker';

const Edit: React.FunctionComponent = ({route}) => {
  const navigation = useNavigation();

  const {Thumbnail, Date, id, nomeAluno, escola, NumeroRedacao, Status} =
    route.params;

  async function handleUpdate() {
    const res = await DocumentPicker.pick({
      type: [DocumentPicker.types.images, DocumentPicker.types.pdf],
    });

    const options = {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    };

    const formtData = new FormData();

    formtData.append('file', res[0].uri);
    formtData.append('urls', id);

    Api.post(`/redacao/${id}/update`, formtData, options)
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log(error);
      });
  }

  function handleDelete() {
    Alert.alert('Tem certeza?', 'Você deseja excluir essa redação?', [
      {
        text: 'Sim',
        onPress: () => {
          Api.delete(`/redacao/${id}/delete`)
            .then(response => {
              navigation.goBack();
              console.log(response);
            })
            .catch(error => {
              console.log(error);
            });
        },
      },
      {
        text: 'Cancelar',
        onPress: () => {},
        style: 'cancel',
      },
    ]);
  }

  return (
    <Container>
      <ScrollView style={{padding: 12}}>
        <CardEdit
          Thumbnail={Thumbnail}
          Status={Status}
          Date={Date}
          NomeAluno={nomeAluno}
          Escola={escola}
          NumeroRedacao={NumeroRedacao}
        />
        <Button
          color="#D10380"
          textColor="#fff"
          icon="upload"
          onPress={handleUpdate}>
          Atualizar
        </Button>

        <Button
          color="#C80707"
          icon="delete"
          textColor="#fff"
          onPress={handleDelete}>
          Excluir
        </Button>
      </ScrollView>
    </Container>
  );
};

export default Edit;
