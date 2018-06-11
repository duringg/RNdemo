
import React, { Component } from 'react';
import {
    StyleSheet,
    Dimensions
} from 'react-native';

const { width, height } = Dimensions.get('window');
import { NavigationActions } from 'react-navigation';

//模块声名并导出
export default class NavigationComponent extends Component {
    //构造函数
    constructor(props) {
        super(props);
    }

    getNavigationAction() {
        return NavigationActions;
    }

    navigate(...params) {
        // let {navigate, goBack, dispatch, state} = this.props.navigation
        let { navigate } = this.props.navigation;
        return navigate(...params);
    }

    goBack(...param) {
        let { goBack } = this.props.navigation;
        return goBack(...param);
    }

    dispatch(...param) {
        let { dispatch } = this.props.navigation;
        return dispatch(...param);
    }

    getNavState() {
        let { state } = this.props.navigation;
        return state;
    }

    setParams(params) {
        let { setParams } = this.props.navigation;
        setParams(params);
    }
};
