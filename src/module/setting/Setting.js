import React from 'react';
import { View, Text } from 'react-native';
import NavigationComponent from '../NavigationComponent';

export default class Setting extends NavigationComponent {
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Setting Screen</Text>
            </View>
        );
    }
}