
import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import RootNavigator from './navigation/RootNavigator';
import { NavigationContainer } from '@react-navigation/native';
import CartProvider from './contexts/cart/CartProvider';

export default function App() {
    return (
        <SafeAreaProvider>

            <NavigationContainer>
                
                <StatusBar style="auto" />
                <CartProvider>

                    {/* <SafeAreaView style={styles.safeArea}> */}
                    <RootNavigator />
                    {/* </SafeAreaView> */}

                </CartProvider>

            </NavigationContainer>

        </SafeAreaProvider>
    );
}

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
    },
});
