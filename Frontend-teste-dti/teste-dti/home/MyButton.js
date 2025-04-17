import { Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function MyButton({
  title = '?',
  color = '#24CBAF',
  textColor = '#708090',
  style,
  onPress,
}) {
  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: color }, style]}
      onPress={onPress}>
      <Text style={[styles.text, { color: textColor }]}>
        {title.toUpperCase()}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#E0FFFF',
    borderRadius: 13,
    padding: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#708090',
    fontFamily: 'Roboto',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
