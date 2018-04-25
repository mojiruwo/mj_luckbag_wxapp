import {
    wxRequest
} from '../utils/wxRequest';

//const hostUrl = 'http://fudai.hjx.com';
const hostUrl = 'https://luckbag.mojiruwo.top';

// 微信的jscode换取sessionKey
const wxJsCode2Session = (params) => wxRequest(params, hostUrl + '/api/v1/Luckbag/registerUser');
const user2session = (params) => wxRequest(params, hostUrl + '/api/v1/Luckbag/registerUser');
// 检验用户登录信息
const checkLogin = (params) => wxRequest(params, hostUrl + '/api/v1/Luckbag/registerUser');
const getAccessToken = (params) => wxRequest(params, hostUrl + '/api/Commoninterface/getAccessToken');

// 获取用户福包记录
const getBagList = (params) => wxRequest(params, hostUrl + '/api/v1/Luckbag/getBagList');

// 发送手机验证码
const sendSms = (params) => wxRequest(params, hostUrl + '/api/v1/Sms/send');
// 用户注册
const registerUser = (params) => wxRequest(params, hostUrl + '/api/v1/Luckbag/registerUser');
// 合成接口
const composeBag = (params) => wxRequest(params, hostUrl + '/api/v1/Luckbag/composeBag');
const receiveMoney = (params) => wxRequest(params, hostUrl + '/api/v1/Luckbag/receiveMoney');
module.exports = {
    wxJsCode2Session,
    user2session,
    checkLogin,
    getAccessToken,
    getBagList,
    sendSms,
    registerUser,
    composeBag,
    receiveMoney
};
