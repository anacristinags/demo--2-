import HomeView from './home/HomeView';
import RelatorioView from './relatorio/RelatorioView';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={defaultOptions}>
        <Stack.Screen name="home" component={HomeView} options={homeOptions} />
        <Stack.Screen
          name="relatorio"
          component={RelatorioView}
          options={relatorioOptions}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const defaultOptions = {
  headerStyle: {
    backgroundColor: '#5F9EA0',
  },
  headerTintColor: 'white',
};

const homeOptions = {
  title: 'Home',
};

const relatorioOptions = {
  title: 'Relatório de Notas',
};
