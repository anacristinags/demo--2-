import { View, Text, StyleSheet, Image } from 'react-native';

export default function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.text}>Bem Vindo, Carlos!</Text>
      <Image style={styles.img} source={require('../assets/dtidigital.png')} />
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    alignItems: 'center',
    backgroundColor: '#48D1CC',
    padding: 15,
    elevation: 11,
    gap: 10,
  },
  text: {
    fontSize: 30,
    fontWeight: 'bold',
    fontFamily: 'Roboto',
    color: 'white',
  },
  img: {
    width: 120,
    height: 120,
    borderRadius: 100,
  },
});
