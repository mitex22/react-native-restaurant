import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import CategoryScreen from '../screens/CategoryScreen';
import DetailsScreen from '../screens/DetailsScreen';

const HomeNavigator = () => {

    const Stack = createNativeStackNavigator();

    return (
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name='Home' component={HomeScreen} />
            <Stack.Screen name='Category' component={CategoryScreen} />
            <Stack.Screen name='Details' component={DetailsScreen} />
        </Stack.Navigator>
    )
}

export default HomeNavigator