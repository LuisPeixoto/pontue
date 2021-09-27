import React from 'react';

import {
  Container,
  Content,
  ThumbnailCard,
  Image,
  Info,
  TextCard,
  OpenRedactionText,
  OpenRedaction,
  Edit,
  EditText,
  CodeText,
  ContentInfo,
} from './styles';

import Icon from 'react-native-vector-icons/Feather';
import {useNavigation} from '@react-navigation/core';
import {View} from 'react-native';
import {useAuth} from '../../hooks/auth';

interface DataProps {
  Status: string;
  Thumbnail: string;
  nomeAluno: string;
  escola: string;
  date: string;
  id: string;
  NumeroRedacao: string;
}

const Card: React.FunctionComponent<DataProps> = ({
  Thumbnail,
  date,
  nomeAluno,
  escola,
  id,
  NumeroRedacao,
  Status,
}) => {
  const {user} = useAuth();
  const navigation = useNavigation();
  const formatDate = new Date(date.split(' ')[0]);
  const formattedDate = `${formatDate.getDate()}/${formatDate.getMonth()}/${formatDate.getFullYear()}`;

  return (
    <Container>
      <Content>
        <ThumbnailCard colors={['#D10380', '#3C017C']}>
          <OpenRedaction
            onPress={() => {
              Thumbnail.includes('.pdf')
                ? navigation.navigate('ViewPdf', {url: Thumbnail})
                : navigation.navigate('ViewImage', {url: Thumbnail});
            }}>
            <OpenRedactionText
              style={{
                alignSelf: 'center',
                top: '45%',
                zIndex: 1,
              }}>
              Visualizar
            </OpenRedactionText>
            <Image
              style={{resizeMode: 'cover', opacity: 0.1}}
              blurRadius={2}
              source={{
                uri: Thumbnail,
              }}
            />
          </OpenRedaction>
        </ThumbnailCard>
        <Info>
          <View>
            <ContentInfo>
              <Icon
                name="key"
                size={21}
                color="#d10380"
                style={{marginRight: 10}}
              />
              <CodeText style={{textAlignVertical: 'center'}}>
                {NumeroRedacao}
              </CodeText>
            </ContentInfo>
            {user === 'admin' && (
              <>
                <ContentInfo>
                  <Icon
                    name="user"
                    size={21}
                    color="#888888"
                    style={{marginRight: 10}}
                  />
                  <TextCard style={{textAlignVertical: 'center'}}>
                    {nomeAluno}
                  </TextCard>
                </ContentInfo>
              </>
            )}

            <ContentInfo>
              <Icon
                name="calendar"
                size={21}
                color="#888888"
                style={{marginRight: 10}}
              />
              <TextCard style={{textAlignVertical: 'center'}}>
                {formattedDate}
              </TextCard>
            </ContentInfo>
            <ContentInfo>
              {Status === 'Corrigida' ? (
                <>
                  <Icon
                    name="check"
                    size={21}
                    color="#888888"
                    style={{marginRight: 10}}
                  />
                  <TextCard style={{textAlignVertical: 'center'}}>
                    {Status}
                  </TextCard>
                </>
              ) : (
                <>
                  <Icon
                    name="loader"
                    size={21}
                    color="#888888"
                    style={{marginRight: 10}}
                  />
                  <TextCard style={{textAlignVertical: 'center'}}>
                    {Status}
                  </TextCard>
                </>
              )}
            </ContentInfo>
          </View>
          <Edit
            onPress={() =>
              navigation.navigate('Edit', {
                Thumbnail,
                Date: formattedDate,
                id,
                nomeAluno,
                escola,
                NumeroRedacao,
                Status,
              })
            }>
            <Icon name="edit" size={35} color="#D10380" />
            <EditText>Editar</EditText>
          </Edit>
        </Info>
      </Content>
    </Container>
  );
};

export default Card;
