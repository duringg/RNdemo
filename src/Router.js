import {
    Image,
    View
} from 'react-native';
import React, { Component } from 'react';

import HomeScreen from './module/home/HomeScreen';
import Detail from './module/home/Detail';

import Setting from './module/setting/Setting';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
const IMG_HOME = require('./img/tab/aaa.png');
const IMG_HOME_SELECTED = require('./img/tab/aaa1.png');

const renderTabImage = (image) => {
    return (
        <Image
            style={[{ width: Constant.scale(21), height: Constant.scale(21) }]}
            resizeMode="contain"
            source={image}
        />
    )
};

const TabScreen = createBottomTabNavigator(
    {
        HomeScreen: {
            screen: HomeScreen,
            navigationOptions: {
                header: null,
                tabBarLabel: '首页',
                tabBarIcon: ({ focused, tintColor }) => (
                    renderTabImage(!focused ? IMG_HOME : IMG_HOME_SELECTED)
                ),
            }
        },
        Setting: {
            screen: Setting,
            navigationOptions: {
                header: null,
                tabBarLabel: '我的',
                tabBarIcon: ({ focused, tintColor }) => (
                    renderTabImage(!focused ? IMG_HOME : IMG_HOME_SELECTED)
                ),
            }
        },
    },
    {
        tabBarVisible: false,
        tabBarPosition: 'bottom',
        backBehavior: 'none',
        swipeEnabled: false,
        animationEnabled: false,
        lazy: true,
        tabBarOptions: {
            showIcon: true,
            scrollEnabled: false,
            activeTintColor: Constant.colorPrimary,
            inactiveTintColor: Constant.colorTxtDefault,
            style: {
                margin: 0,
                backgroundColor: 'white',
                paddingTop: ISIPHONEX ? 10 : 0,
                height: ISIPHONEX ? 60 : 50,
            },
            tabStyle: {
                borderTopColor: Constant.colorDivider,
                margin: 0,
                padding: 0,
            },
            indicatorStyle: {
                height: 0
            },
            labelStyle: {
                padding: 0,
                margin: 0,
                marginTop: 0,
                fontSize: 12,
                marginBottom: ISIPHONEX ? 10 : 6,
            },
        }
    }
);

class LogoTitle extends React.Component {
    render() {
        return (
            <Text style={{ width: 30, height: 30 }}>Home Screen</Text>
        );
    }
}

const RootStack = createStackNavigator({
    TabScreen: {
        screen: TabScreen
    },
    Detail: {
        screen: Detail,
    },
}, {
        headerMode: 'none',//自定义title
    }
);

export default RootStack