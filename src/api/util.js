import axios from 'axios';

const domain = 'http://guchi.fun:7001/api/v1';
// const domain = 'http://localhost:7001/api/v1';



export default {
    ajax(params) {
        console.log(params);
        if (params.method === 'post') {
            const data = {
                method: params.method,
                url: `${domain}${params.url}`,
                data: params.opts
            }
            if (localStorage.getItem('token')) {
                data.headers = {'token': localStorage.getItem('token')};
            }
            return axios(data);

        } else if (params.method === 'get') {
            console.log('get');
            console.log(localStorage.getItem('token'));
            console.log(params);
            let paramsData = params.opts || {};
            const data = {
                method: params.method,
                url: `${domain}${params.url}`,
                params: paramsData
            }
            if (localStorage.getItem('token')) {
                data.headers = {'token': localStorage.getItem('token')};
            }
            return axios(data);

        }

    }
}
