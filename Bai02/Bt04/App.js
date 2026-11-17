import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './components/HomeScreen';
import ListScreen from './components/ListScreen';
import DetailScreen from './components/DetailScreen';
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: { backgroundColor: '#A66B45' },
          headerTintColor: '#FFFFFF',
          headerTitleAlign: 'center',
        }}
      >
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Cookie Shop' }}
        />

        <Stack.Screen
          name="List"
          component={ListScreen}
          options={{ title: 'Danh sách bánh' }}
        />

        <Stack.Screen
          name="Detail"
          component={DetailScreen}
          options={{ title: 'Chi tiết bánh' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
