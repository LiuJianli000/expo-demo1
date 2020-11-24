import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage'

// const codeMessage = {
//   200: '服务器成功返回请求的数据。',
//   201: '新建或修改数据成功。',
//   202: '一个请求已经进入后台排队（异步任务）。',
//   204: '删除数据成功。',
//   400: '发出的请求有错误，服务器没有进行新建或修改数据的操作。',
//   401: '用户没有权限（令牌、用户名、密码错误）。',
//   403: '用户得到授权，但是访问是被禁止的。',
//   404: '发出的请求针对的是不存在的记录，服务器没有进行操作。',
//   406: '请求的格式不可得。',
//   410: '请求的资源被永久删除，且不会再得到的。',
//   422: '当创建一个对象时，发生一个验证错误。',
//   500: '服务器发生错误，请检查服务器。',
//   502: '网关错误。',
//   503: '服务不可用，服务器暂时过载或维护。',
//   504: '网关超时。',
// }

// let request = axios.create({
//   baseURL: `https://${domain}`, //请求url
//   timeout: 3000, //超时处理
//   withCredentials: false, //是否跨域
// })

axios.interceptors.request.use(function (config) {
  //在请求发出之前进行一些操作，比如请求头携带内容
  const token = AsyncStorage.getItem('token')
  
  config.headers['Content-Type'] = 'application/json, text/plain';

  if (token) {
    config.headers['authorization'] = token
  }
  
  return config;
}, function (error) {
  //Do something with request error
  return error;
});

//添加一个响应拦截器
axios.interceptors.response.use(function (res) {
  // 写一下操作，比如token过期处理
  // if (res.data.statusCode == 401) {
  //   alert('暂无权限，请重新登录!');
  //   return false;
  // }
  return res;
}, function (error) {
  return error;
})

export default axios
