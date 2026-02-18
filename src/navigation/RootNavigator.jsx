import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TabNavigator from "./TabNavigator";
import CartScreen from "../screens/CartScreen";
import CheckoutScreen from "../screens/CheckoutScreen";

const RootNavigator = () => {

    const Stack = createNativeStackNavigator();

    return (
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name='TabNavigator' component={TabNavigator} />
            <Stack.Screen 
                name='CartModal' 
                component={CartScreen} 
                options={{
                    // presentation: 'modal',
                    headerShown: true,
                    title: 'Cart',
                    animation: 'slide_from_right',
                    headerBackTitle: 'Back'
                }}
            />
            <Stack.Screen 
                name='Checkout' 
                component={CheckoutScreen} 
                options={{
                    headerShown: true,
                    title: 'Checkout',
                    animation: 'slide_from_right',
                }}
            />
        </Stack.Navigator>
    )
}

export default RootNavigator