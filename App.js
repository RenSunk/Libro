import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from "./Pages/HomeScreen";
import ListaProducto from "./Pages/ListaProductos";
import CrearEditarProducto from "./Pages/CrearEditarProducto"

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Lista" component={ListaProducto} />
        <Stack.Screen name="CrearEditar" component={CrearEditarProducto} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

