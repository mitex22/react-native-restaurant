import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Platform, TouchableOpacity, View, Text, StyleSheet } from 'react-native';
import HomeScreen from '../screens/HomeScreen';
import CategoryScreen from '../screens/CategoryScreen';
import DetailsScreen from '../screens/DetailsScreen';
import { Ionicons } from '@expo/vector-icons';
import { useCartContext } from '../contexts/cart/CartContext';

const HomeNavigator = () => {

    const Stack = createNativeStackNavigator();
    const { total } = useCartContext();

    return (
        <Stack.Navigator screenOptions={({ navigation }) => ({
            headerRight: () => {
                return (
                    <TouchableOpacity onPress={() => navigation.navigate('CartModal')} style={styles.cartButton}>
                        <Ionicons
                            name="cart"
                            size={24}
                            color="black"
                            style={{ padding: Platform.OS === 'ios' ? 6 : 0 }}
                        />
                        {total > 0 && (
                            <View style={styles.badge}>
                                <Text style={styles.badgeText}>{total}</Text>
                            </View>
                        )}
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

const styles = StyleSheet.create({
    cartButton: {
        position: 'relative',
    },
    badge: {
        position: 'absolute',
        right: 2,
        backgroundColor: '#FF3B30',
        borderRadius: 10,
        width: 16,
        height: 16,
        justifyContent: 'center',
        alignItems: 'center',
    },
    badgeText: {
        color: '#fff',
        fontSize: 12,
        fontWeight: 'bold',
    },
});

export default HomeNavigator