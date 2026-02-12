import { StyleSheet, Text, View } from 'react-native';

const InfoScreen = () => {
    return (
        <View style={styles.container}>
            <Text>Info</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default InfoScreen