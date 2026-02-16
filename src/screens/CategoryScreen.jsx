import { StyleSheet, ScrollView } from "react-native";
import Card from "../components/Card";
import { useEffect, useState } from "react";
import * as mealApi from "../api/mealApi";

export default function CategoryScreen({ route, navigation }) {
    const { categoryId } = route.params;

    const [meals, setMeals] = useState([]);

    useEffect(() => {
        const loadMeals = async () => {
            try {
                const data = await mealApi.getAllByCategory(categoryId);
                setMeals(data);
            } catch (error) {
                console.error('Error fetching meals:', error);
            }
        };

        loadMeals();
    }, [categoryId]);

    const mealPressedHandler = (mealId) => {
        navigation.navigate('Details', { mealId });
    };

    return (
        <ScrollView style={styles.container}>
            {meals.map((meal) => (
                <Card
                    key={meal.id}
                    {...meal}
                    onPress={mealPressedHandler}
                />
            ))}
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f8f8f8',
    },
    list: {
        padding: 16,
    },
    center: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 24,
    },
    errorText: {
        fontSize: 16,
        color: '#FF3B30',
    },
    emptyText: {
        fontSize: 16,
        color: '#666',
    },
    addButton: {
        backgroundColor: '#007AFF',
        paddingVertical: 8,
        paddingHorizontal: 16,
        borderRadius: 8,
    },
    addButtonText: {
        color: '#fff',
        fontWeight: '600',
        fontSize: 14,
    },
});
