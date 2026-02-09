import { StyleSheet, Text, View } from 'react-native';

const CartScreen = () => {
    return (
        <View style={styles.container}>
            <Text>Cart</Text>
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


export default CartScreen