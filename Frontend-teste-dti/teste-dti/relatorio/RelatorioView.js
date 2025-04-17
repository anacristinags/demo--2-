import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Alert } from 'react-native';

const API_URL = 'http://192.168.18.8:8080/demo';

export default function RelatorioView() {
  const [relatorio, setRelatorio] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchRelatorio();
  }, []);

  const fetchRelatorio = async () => {
    try {
      const resposta = await fetch(`${API_URL}/quantidade`);
      const qtd = await resposta.json();

      if (qtd < 2) {
        Alert.alert(
          'Atenção',
          'Cadastre no mínimo 2 alunos para gerar o relatório.'
        );
        setLoading(false);
        return;
      }

      const res = await fetch(`${API_URL}/relatorio`);
      const data = await res.json();
      setRelatorio(data);
    } catch (error) {
      Alert.alert('Erro', 'Não foi possível acessar o relatório.');
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <Text style={styles.loading}>Carregando relatório...</Text>;
  }

  if (!relatorio) {
    return (
      <Text style={styles.loading}>Nenhum dado de relatório disponível.</Text>
    );
  }

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Tabela de Notas</Text>

      <View style={styles.table}>
        <View style={styles.row}>
          <Text style={styles.headerCell}>Aluno</Text>
          {[1, 2, 3, 4, 5].map((i) => (
            <Text key={i} style={styles.headerCell}>
              D{i}
            </Text>
          ))}
          <Text style={styles.headerCell}>Freq.</Text>
        </View>

        {relatorio.alunos.map((aluno, idx) => (
          <View key={idx} style={styles.row}>
            <Text style={styles.cell}>{aluno.nome}</Text>
            {aluno.notas.map((nota, i) => (
              <Text key={i} style={styles.cell}>
                {nota.toFixed(1)}
              </Text>
            ))}
            <Text style={styles.cell}>{aluno.frequencia.toFixed(1)}%</Text>
          </View>
        ))}
      </View>

      <Text style={styles.title}>Média da Turma por Disciplina</Text>
      <View style={styles.row}>
        {relatorio.mediaDisciplinas.map((media, i) => (
          <Text key={i} style={styles.cell}>
            D{i + 1}: {media.toFixed(1)}
          </Text>
        ))}
      </View>

      <Text style={styles.title}>Alunos com média acima da turma:</Text>
      {relatorio.acimaDaMedia.length > 0 ? (
        relatorio.acimaDaMedia.map((nome, i) => (
          <Text key={i} style={styles.cell}>
            {nome}
          </Text>
        ))
      ) : (
        <Text style={styles.cell}> </Text>
      )}

      <Text style={styles.title}>Alunos com frequência abaixo de 75%:</Text>
      {relatorio.frequenciaBaixa.length > 0 ? (
        relatorio.frequenciaBaixa.map((nome, i) => (
          <Text key={i} style={styles.cell}>
            {nome}
          </Text>
        ))
      ) : (
        <Text style={styles.cell}> </Text>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
    color: '#2F4F4F',
  },
  table: {
    borderWidth: 1,
    borderColor: '#ccc',
    marginBottom: 20,
  },
  row: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: '#eee',
  },
  headerCell: {
    flex: 1,
    fontWeight: 'bold',
    padding: 8,
    backgroundColor: '#B0E0E6',
    textAlign: 'center',
  },
  cell: {
    flex: 1,
    padding: 8,
    color: '#333',
    textAlign: 'center',
  },
  loading: {
    padding: 20,
    fontSize: 18,
    textAlign: 'center',
  },
});
