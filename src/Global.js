/**
 * Created by lao.jianfeng on 2017/4/20.
 */

import {
    Dimensions,
    Platform,
    StyleSheet,
} from 'react-native';

/**
 * 全局常量
 */

// UI设计以iPhone6宽度为标准模板 () 6p:414
const UI_STANDARD = 375;
//iPhone X
const ISIPHONEX = Dimensions.get('window').width == 375 && Dimensions.get('window').height == 812

function scaleFontSizeFunc(size) {
    if (Platform.OS == 'ios' && Dimensions.get('window').width == 320) {
        //iphone 5s
        return size - 1;
    }
    return size;
}
class Constant {
    //长度自适应
    static scale(width) {
        return Dimensions.get('window').width / UI_STANDARD * width;
    }

    static scaleFontSize(size) {
        return scaleFontSizeFunc(size);
    }

    //字体
    static fontSizeXSmall = scaleFontSizeFunc(10);//超小号字体
    static fontSizeSmall = scaleFontSizeFunc(12);//小号
    static fontSizeNormal = scaleFontSizeFunc(14);//默认
    static fontSizeBig = scaleFontSizeFunc(16);//默认
    static fontSizeCaption = scaleFontSizeFunc(18);//标题
    static fontSizeLarge = scaleFontSizeFunc(20);//大号
    static fontSizeHeader = scaleFontSizeFunc(24);//头部
    static fontSizeSuperLarge = scaleFontSizeFunc(25);//超大头部
    //颜色
    static colorDefault = '#FFFFFF';
    static colorBackgroundDefault = '#F1F1F1'; //背景颜色
    static colorPrimary = '#0089af';
    static colorRed = '#ff3333';
    static colorPrimaryTap = '#cc2b17';
    static colorDivider = '#ddd8d8';//分隔线
    static colorHit = '#cbc';//输入框placehoder文字颜色
    static colorLightGray = '#dddddddd';
    static colorDisable = '#888';//不可点击 颜色
    static colorTransparent = '#00000000'; //背景透明
    static colorTranslucence = '#00000088';
    static colorTxtInputPlaceholder = '#b2b2b2';
    static colorOrange = '#FFA000'

    //字体颜色
    static colorTxtDefault = '#333333';
    // 默认灰色
    static colorTxtGrayDefault = '#808080';
    // 默认分割线
    static colorDividerDefault = '#E5E5E5';


    static colorTextLogin = '#FF9999'; // 登录 启动页
    static colorButtonLogin = '#F93D4F'; // 登录  注册按钮
    static colorTextVerify = '#FFFF99'; // 验证码文字

    static colorTxtPrimary = '#0089af';   //主体文字 颜色
    static colorTxtTitle = '#333333';     //主要文字颜色，如标题
    static colorTxtContent = '#808080';     //内容文字颜色，如商品文字
    static colorTxtAlert = '#999999';     //辅助文字颜色，如提醒类文字
    static colorTxtGreen = '#2cb95e';     //绿色字体

    static colorSelected = '#0089af';
    //分割线尺寸
    static sizeDividerNormal = StyleSheet.hairlineWidth;//分隔线大小
    static sizeDividerLarge = 1;
    static sizeMarginDefault = 15;

    static sizeHeader = (Platform.OS === 'ios' && ISIPHONEX) ? 84 : Platform.OS === 'ios' ? 64 : 50;
    static sizeHeaderMarginTop = Platform.OS === 'ios' ? ISIPHONEX ? 35 : 20 : 0
    static sizeHeaderContent = Platform.OS === 'ios' ? 44 : 50;
    static strCheckPrice = "点击查看价格";

    static isAndroid = Platform.OS === 'android'

    static offShelfStatusColor = 'rgba(225,225,225,0.9)';
}

//import Api from './util/Api';

global.Constant = Constant;
global.DF = Constant;
global.ISIPHONEX = ISIPHONEX;
