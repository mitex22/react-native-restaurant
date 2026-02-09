import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CartScreen from '../screens/CartScreen';

const CartNavigator = () => {

    const Stack = createNativeStackNavigator();

    return (
        <Stack.Navigator>
            <Stack.Screen name='Cart' component={CartScreen} />
        </Stack.Navigator>
    )
}

export default CartNavigator