import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeNavigator from './HomeNavigator';
import { NavigationContainer } from '@react-navigation/native';
import CartNavigator from './CartNavigator';
import InfoScreen from '../screens/InfoScreen';
import { Ionicons } from '@expo/vector-icons';

const TabNavigator = () => {

    const Tabs = createBottomTabNavigator();

    return (
        <Tabs.Navigator>
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