import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Platform, TouchableOpacity } from 'react-native';
import HomeScreen from '../screens/HomeScreen';
import CategoryScreen from '../screens/CategoryScreen';
import DetailsScreen from '../screens/DetailsScreen';
import { Ionicons } from '@expo/vector-icons';

const HomeNavigator = () => {

    const Stack = createNativeStackNavigator();

    return (
        <Stack.Navigator screenOptions={({ navigation }) => ({
            headerRight: () => {
                return (
                    <TouchableOpacity onPress={() => navigation.navigate('CartTab')}>
                        <Ionicons
                            name="cart"
                            size={24}
                            color="black"
                            style={{ padding: Platform.OS === 'ios' ? 4 : 0 }}
                        />
                    </TouchableOpacity>
                )
            }
        })}>
            <Stack.Screen name='Home' component={HomeScreen} />
            <Stack.Screen name='Category' component={CategoryScreen} />
            <Stack.Screen name='Details' component={DetailsScreen} />
        </Stack.Navigator>
    )
}

export default HomeNavigator