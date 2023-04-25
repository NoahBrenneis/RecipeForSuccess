import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

export default function Header() {
    return (
        <View style={styles.header}>
            <Text style={styles.header_text}>Home Page</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        flex: 1, 
        flexDirection: 'column',
        alignSelf: 'stretch', 
        paddingTop: 20,
        paddingBottom: 5,
        backgroundColor: 'red'
    },
    header_text: {
        fontWeight: 'bold',
        fontSize: 24,
        textAlign: 'center'
    }
})
