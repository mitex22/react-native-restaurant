import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import HomeNavigator from './HomeNavigator';
import { NavigationContainer } from '@react-navigation/native';
import CartNavigator from './CartNavigator';
import InfoScreen from '../screens/InfoScreen';
import { Ionicons } from '@expo/vector-icons';

const TabNavigator = () => {

    const Tabs = createBottomTabNavigator();

    const tabBarTestIdByRoute = {
        HomeTab: 'tab-home-button',
        CartTab: 'tab-cart-button',
        InfoTab: 'tab-info-button',
    };

    return (
        <Tabs.Navigator
            tabBar={({ state, descriptors, navigation }) => (
                <View style={styles.tabBar}>
                    {state.routes.map((route, index) => {
                        const { options } = descriptors[route.key];
                        const isFocused = state.index === index;

                        const onPress = () => {
                            const event = navigation.emit({
                                type: 'tabPress',
                                target: route.key,
                                canPreventDefault: true,
                            });

                            if (!isFocused && !event.defaultPrevented) {
                                navigation.navigate(route.name);
                            }
                        };

                        const iconColor = isFocused ? '#007AFF' : '#8e8e93';
                        const labelColor = isFocused ? '#007AFF' : '#8e8e93';
                        const label = options.title || route.name;

                        return (
                            <Pressable
                                key={route.key}
                                testID={tabBarTestIdByRoute[route.name]}
                                accessibilityRole="button"
                                onPress={onPress}
                                style={styles.tabButton}
                            >
                                {options.tabBarIcon?.({ color: iconColor, size: 20, focused: isFocused })}
                                <Text style={[styles.tabLabel, { color: labelColor }]}>{label}</Text>
                            </Pressable>
                        );
                    })}
                </View>
            )}
        >
            <Tabs.Screen
                name='HomeTab'
                component={HomeNavigator}
                options={
                    {
                        title: 'Home',
                        headerShown: false,
                        tabBarIcon: ({ color, size }) => <Ionicons name="home" size={size} color={color} />
                    }
                }
            />
            <Tabs.Screen
                name='CartTab'
                component={CartNavigator}
                options={
                    {
                        title: 'Cart',
                        headerShown: false,
                        tabBarIcon: ({ color, size }) => <Ionicons name="cart" size={size} color={color} />
                    }
                }
            />
            <Tabs.Screen
                name='InfoTab'
                component={InfoScreen}
                options={
                    {
                        title: 'Info',
                        tabBarIcon: ({ color, size }) => <Ionicons name="information-circle" size={size} color={color} />
                    }
                }
            />
        </Tabs.Navigator>
    )
}

export default TabNavigator

const styles = StyleSheet.create({
    tabBar: {
        flexDirection: 'row',
        borderTopWidth: 1,
        borderTopColor: '#e5e5ea',
        backgroundColor: '#fff',
        paddingTop: 6,
        paddingBottom: 8,
    },
    tabButton: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        gap: 2,
    },
    tabLabel: {
        fontSize: 12,
        fontWeight: '500',
    },
});