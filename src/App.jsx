
import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import RootNavigator from './navigation/RootNavigator';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
    return (
        <SafeAreaProvider>

            <StatusBar style="auto" />
            <NavigationContainer>

                {/* <SafeAreaView style={styles.safeArea}> */}
                <RootNavigator />
                {/* </SafeAreaView> */}

            </NavigationContainer>
        </SafeAreaProvider>
    );
}

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
    },
});
