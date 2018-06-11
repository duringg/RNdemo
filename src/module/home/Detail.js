import React from 'react';
import {
    View,
    Text,
    TouchableOpacity
} from 'react-native';
import NavigationComponent from '../NavigationComponent';

import { inject, observer } from 'mobx-react/native';
import { toJS } from 'mobx';
@inject(stores => ({
    user: stores.user,
}))
@observer
export default class Detail extends NavigationComponent {
    render() {
        const { values } = this.props.user;
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Detail Screen</Text>
                <TouchableOpacity onPress={() => {
                    this.goBack()
                }}>
                    <Text>go back</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {
                    this.props.user.setUsername('BBB')
                }}>
                    <Text>{values.username}</Text>
                </TouchableOpacity>
            </View>
        );
    }
}