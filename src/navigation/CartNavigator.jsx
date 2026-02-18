import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CartScreen from '../screens/CartScreen';
import CheckoutScreen from '../screens/CheckoutScreen';

const CartNavigator = () => {

    const Stack = createNativeStackNavigator();

    return (
        <Stack.Navigator>
            <Stack.Screen name='Cart' component={CartScreen} />
            <Stack.Screen name='Checkout' component={CheckoutScreen} />
        </Stack.Navigator>
    )
}

export default CartNavigator