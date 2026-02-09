import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeNavigator from './HomeNavigator';
import { NavigationContainer } from '@react-navigation/native';
import CartNavigator from './CartNavigator';

const RootNavigator = () => {

    const Tabs = createBottomTabNavigator();

    return (
        <NavigationContainer>
            <Tabs.Navigator>
                <Tabs.Screen name='HomeTab' component={HomeNavigator} />
                <Tabs.Screen name='CartTab' component={CartNavigator} />
            </Tabs.Navigator>
        </NavigationContainer>
    )
}

export default RootNavigator