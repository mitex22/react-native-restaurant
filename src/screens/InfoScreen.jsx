import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const InfoScreen = () => {
    return (
        <ScrollView style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.restaurantName}>Tasty Bites</Text>
                <Text style={styles.tagline}>Fresh & Delicious Food</Text>
            </View>

            <View style={styles.section}>
                <Text style={styles.sectionTitle}>About Us</Text>
                <Text style={styles.aboutText}>
                    Welcome to Tasty Bites! We've been serving the community with fresh,
                    delicious food since 2015. Our commitment is to provide quality meals
                    made with the finest ingredients, prepared by our talented chefs who
                    pour their passion into every dish.
                </Text>
                <Text style={styles.aboutText}>
                    Whether you're craving a juicy burger, authentic pizza, or a refreshing
                    salad, we've got something to satisfy every appetite. We take pride in
                    our fast delivery service and consistently excellent customer experience.
                </Text>
            </View>

            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Location</Text>
                <TouchableOpacity style={styles.infoRow}>
                    <View style={styles.iconContainer}>
                        <Ionicons name="location-outline" size={22} color="#007AFF" />
                    </View>
                    <View style={styles.infoContent}>
                        <Text style={styles.infoLabel}>Address</Text>
                        <Text style={styles.infoValue}>123 Main Street</Text>
                        <Text style={styles.infoValue}>Downtown, City 12345</Text>
                        <Text style={styles.infoLink}>View on Map →</Text>
                    </View>
                </TouchableOpacity>
            </View>

            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Hours of Operation</Text>
                <View style={styles.hoursContainer}>
                    <View style={styles.hoursRow}>
                        <Text style={styles.dayText}>Monday - Thursday</Text>
                        <Text style={styles.timeText}>11:00 AM - 10:00 PM</Text>
                    </View>
                    <View style={styles.hoursRow}>
                        <Text style={styles.dayText}>Friday - Saturday</Text>
                        <Text style={styles.timeText}>11:00 AM - 11:00 PM</Text>
                    </View>
                    <View style={styles.hoursRow}>
                        <Text style={styles.dayText}>Sunday</Text>
                        <Text style={styles.timeText}>12:00 PM - 9:00 PM</Text>
                    </View>
                </View>
            </View>

            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Contact</Text>
                <TouchableOpacity style={styles.infoRow}>
                    <View style={styles.iconContainer}>
                        <Ionicons name="call-outline" size={22} color="#007AFF" />
                    </View>
                    <View style={styles.infoContent}>
                        <Text style={styles.infoLabel}>Phone</Text>
                        <Text style={styles.infoValue}>(555) 123-4567</Text>
                        <Text style={styles.infoLink}>Tap to Call →</Text>
                    </View>
                </TouchableOpacity>

                <View style={styles.infoRow}>
                    <View style={styles.iconContainer}>
                        <Ionicons name="mail-outline" size={22} color="#007AFF" />
                    </View>
                    <View style={styles.infoContent}>
                        <Text style={styles.infoLabel}>Email</Text>
                        <Text style={styles.infoValue}>hello@tastybites.com</Text>
                    </View>
                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f8f8f8',
    },
    header: {
        backgroundColor: '#007AFF',
        padding: 24,
        alignItems: 'center',
    },
    restaurantName: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#fff',
        marginBottom: 4,
    },
    tagline: {
        fontSize: 16,
        color: '#fff',
        opacity: 0.9,
    },
    section: {
        backgroundColor: '#fff',
        marginTop: 16,
        padding: 16,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: '600',
        color: '#333',
        marginBottom: 12,
    },
    aboutText: {
        fontSize: 15,
        color: '#666',
        lineHeight: 22,
        marginBottom: 12,
    },
    infoRow: {
        flexDirection: 'row',
        paddingVertical: 12,
    },
    iconContainer: {
        width: 40,
        alignItems: 'center',
        paddingTop: 2,
    },
    infoContent: {
        flex: 1,
    },
    infoLabel: {
        fontSize: 13,
        color: '#999',
        marginBottom: 2,
    },
    infoValue: {
        fontSize: 15,
        color: '#333',
    },
    infoLink: {
        fontSize: 13,
        color: '#007AFF',
        marginTop: 4,
    },
    hoursContainer: {
        borderRadius: 10,
        padding: 12,
    },
    hoursRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 8,
    },
    dayText: {
        fontSize: 15,
        color: '#333',
    },
    timeText: {
        fontSize: 15,
        color: '#666',
    },
    bottomPadding: {
        height: 24,
    },
});


export default InfoScreen