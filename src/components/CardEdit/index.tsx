import React from 'react';

import {
  Container,
  Content,
  ThumbnailCard,
  Image,
  Info,
  InfoText,
  OpenRedactionText,
  OpenRedaction,
} from './styles';

import {useNavigation} from '@react-navigation/core';
import {useAuth} from '../../hooks/auth';

interface DateProps {
  Status: string;
  Date: string;
  NumeroRedacao: string;
  Thumbnail: string;
  NomeAluno: string;
  Escola: string;
}

const CardEdit: React.FunctionComponent<DateProps> = ({
  Thumbnail,
  Date,
  NomeAluno,
  Escola,
  NumeroRedacao,
  Status,
}) => {
  const navigation = useNavigation();
  const {user} = useAuth();

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
          {user === 'admin' && (
            <>
              <InfoText style={{textAlignVertical: 'center'}}>
                Nome Aluno: {NomeAluno}
              </InfoText>

              <InfoText style={{textAlignVertical: 'center'}}>
                Escola: {Escola}
              </InfoText>
            </>
          )}

          <InfoText style={{textAlignVertical: 'center'}}>
            Numero da redação: {NumeroRedacao}
          </InfoText>
          <InfoText style={{textAlignVertical: 'center'}}>
            Enviado em: {Date}
          </InfoText>
          <InfoText style={{textAlignVertical: 'center'}}>
            Status: {Status}
          </InfoText>
        </Info>
      </Content>
    </Container>
  );
};

export default CardEdit;
