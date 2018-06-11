import React from 'react';
import {
    View,
    Text,
    TouchableOpacity
} from 'react-native';
import NavigationComponent from '../NavigationComponent';

export default class HomeScreen extends NavigationComponent {
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

                <Text>Home Screen</Text>
                <TouchableOpacity onPress={() => {
                    this.navigate('Detail')
                }}>
                    <Text>Home Screen to Detail</Text>
                </TouchableOpacity>
            </View>
        );
    }
}