import React, {useEffect, useState} from 'react';
import {ActivityIndicator, View} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import Card from '../../components/Card';
import {useAuth} from '../../hooks/auth';
import Api from '../../services/api';
import {Container, Title} from './styles';

const Home: React.FunctionComponent = () => {
  const [items, setItems] = useState([]);
  const {user} = useAuth();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getData() {
      try {
        const response = await Api.get(
          '/index/' + (user === 'admin' ? user : 'aluno/' + user),
        );

        const elements = response.data.data;

        const data = [];
        for (let i = 0; i < 10 && i < elements.length; i++) {
          // vai ser exibido no maximo 10 redacoes na pagina incial
          const {created_at, id, numero, aluno, escola} = elements[i];

          const redaction = await Api.get(`/redacao/${id}`);

          const {correcao_id, url} = redaction.data.data.urls[0];

          if (user === 'admin') {
            data.push({
              correcao_id,
              nomeAluno: aluno.nome_completo,
              escola: escola.nome,
              url,
              created_at,
              id,
              numero,
            });
          } else {
            data.push({
              correcao_id,
              nomeAluno: null,
              escola: null,
              url,
              created_at,
              id,
              numero,
            });
          }
        }
        setItems(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }

    getData();
  }, []);

  return (
    <Container>
      {loading ? (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <ActivityIndicator size="large" color="#D10380" />
        </View>
      ) : (
        <FlatList
          style={{padding: 12}}
          data={items}
          keyExtractor={item => item.id}
          renderItem={({item, index}) => (
            <>
              {index === 0 && (
                <View>
                  {user !== 'admin' ? (
                    <Title>Minhas Redações</Title>
                  ) : (
                    <Title>Redações</Title>
                  )}
                </View>
              )}
              <Card
                Thumbnail={item.url}
                date={item.created_at}
                id={item.id}
                nomeAluno={item.nomeAluno}
                escola={item.escola}
                NumeroRedacao={item.numero}
                Status={item.correcao_id ? 'Corrigida' : 'Em correção'}
              />
            </>
          )}
        />
      )}
    </Container>
  );
};

export default Home;
