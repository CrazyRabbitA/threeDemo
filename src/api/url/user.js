import Util from '../util';
const HTTP_POST_METHOD = 'post';
const HTTP_GET_METHOD = 'get';


// 注册
export function registe(opts) {
    return Util.ajax({
        method: HTTP_POST_METHOD,
        url: '/users',
        opts
    });
}

// 登录
export function login(opts) {
    return Util.ajax({
        method: HTTP_POST_METHOD,
        url: '/users/login',
        opts
    });
}

// 获取用户信息
export function getUserInfo(opts) {
    return Util.ajax({
        method: HTTP_GET_METHOD,
        url: '/user',
        opts
    });
}
