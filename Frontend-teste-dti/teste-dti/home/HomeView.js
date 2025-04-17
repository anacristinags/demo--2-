import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  Alert,
  ScrollView,
  Text,
} from 'react-native';
import Header from './Header';
import MyButton from './MyButton';

const API_URL = 'http://192.168.18.8:8080/demo';

export default function HomeView({ navigation }) {
  const [nome, setNome] = useState('');
  const [notas, setNotas] = useState(['', '', '', '', '']);
  const [frequencia, setFrequencia] = useState('');

  const editarNota = (value, index) => {
    let val = value.replace(',', '.');
    if (
      val === '' ||
      (!isNaN(val) && parseFloat(val) >= 0 && parseFloat(val) <= 10)
    ) {
      const novasNotas = [...notas];
      novasNotas[index] = val;
      setNotas(novasNotas);
    }
  };

  const adicionarAluno = async () => {
    if (!nome || notas.some((n) => n === '') || frequencia === '') {
      Alert.alert('Erro', 'Preencha todos os campos!');
      return;
    }

    const aluno = {
      nome,
      notas: notas.map((n) => parseFloat(n)),
      frequencia: parseFloat(frequencia),
    };

    try {
      const response = await fetch(`${API_URL}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(aluno),
      });

      if (response.ok) {
        Alert.alert('Sucesso', 'Aluno adicionado!');
        setNome('');
        setNotas(['', '', '', '', '']);
        setFrequencia('');
      } else {
        Alert.alert('Erro', 'Não foi possível adicionar o aluno.');
      }
    } catch (error) {
      Alert.alert('Erro', 'Falha na comunicação com o servidor.');
    }
  };

  const reiniciar = async () => {
    try {
      await fetch(`${API_URL}/reiniciar`, { method: 'POST' });
      Alert.alert('Sucesso', 'Sistema reiniciado!');
    } catch (error) {
      Alert.alert('Erro', 'Erro ao reiniciar sistema.');
    }
  };

  return (
    <ScrollView style={styles.container}>
      <Header />

      <Text style={styles.label}>Nome:</Text>
      <TextInput
        style={styles.input}
        value={nome}
        onChangeText={setNome}
        placeholder="Digite o nome"
      />

      {notas.map((nota, index) => (
        <View key={index}>
          <Text style={styles.label}>Disciplina {index + 1}:</Text>
          <TextInput
            style={styles.input}
            value={nota}
            onChangeText={(val) => editarNota(val, index)}
            keyboardType="numeric"
            placeholder="Nota de 0 a 10"
          />
        </View>
      ))}

      <Text style={styles.label}>Frequência de presença (%):</Text>
      <TextInput
        style={styles.input}
        value={frequencia}
        onChangeText={(val) => {
          let v = val.replace(',', '.');
          if (
            v === '' ||
            (!isNaN(v) && parseFloat(v) >= 0 && parseFloat(v) <= 100)
          ) {
            setFrequencia(v);
          }
        }}
        keyboardType="numeric"
        placeholder="0 a 100"
      />

      <View style={styles.buttons}>
        <MyButton
          title="Adicionar Aluno"
          color="#E0FFFF"
          onPress={adicionarAluno}
          style={styles.btn}
        />
        <MyButton
          title="Gerar Relatório"
          color="#E0FFFF"
          onPress={() => navigation.navigate('relatorio')}
          style={styles.btn}
        />
        <MyButton
          title="Reiniciar"
          color="#FA8072"
          textColor="white"
          onPress={reiniciar}
          style={styles.btn}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    gap: 10,
  },
  label: {
    marginTop: 4,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#444',
    marginBottom: 4,
  },
  input: {
    backgroundColor: '#F0FFFF',
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
  },
  buttons: {
    justifyContent: 'space-evenly',
    flex: 1,
    padding: 20,
  },
  btn: {
    marginVertical: 10,
  },
});
