import axios from 'axios'


export function request(config){

    const instance = axios.create({
        baseURL : 'http://152.136.185.210:8000/api/z8',
        timeout : 5000
    })

    //2.axios的拦截器
    axios.interceptors.request.use(config =>
        {
            //console.log(config);

            //添加一些特殊要求
            return config
        },
        err => {});


    return instance(config)

}
