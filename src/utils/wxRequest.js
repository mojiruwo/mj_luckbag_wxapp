import wepy from 'wepy';
import util from './util';
import md5 from './md5';
import tip from './tip';
import {
    ACCESS_TOKEN
} from './constant';

const API_SECRET_KEY = 'mjrw';
const TIMESTAMP = util.getCurrentTime();
const SIGN = md5.hex_md5((TIMESTAMP + API_SECRET_KEY).toLowerCase());

const wxRequest = async(params = {}, url) => {
    tip.loading();
    let data = params.query || {};
    let accessToken = wepy.getStorageSync(ACCESS_TOKEN) || {};
    if(accessToken){
        data.access_token = accessToken.access_token;
    }
    data.sign = SIGN;
    data.time = TIMESTAMP;
    let res = await wepy.request({
        url: url,
        method: params.method || 'GET',
        data: data,
        header: { 'Content-Type': 'application/json' }
    });
    tip.loaded();
    return res;
};

module.exports = {
    wxRequest
};
