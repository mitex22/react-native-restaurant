
import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import RootNavigator from './navigation/RootNavigator';

export default function App() {
    return (
        <SafeAreaProvider>

            <StatusBar style="auto" />

            {/* <SafeAreaView style={styles.safeArea}> */}
                <RootNavigator />
            {/* </SafeAreaView> */}
        </SafeAreaProvider>
    );
}

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
    },
});
