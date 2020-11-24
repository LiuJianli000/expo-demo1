import AsyncStorage from "@react-native-async-storage/async-storage"
import request from "../utils/request";

// 设置基础 url
let basicUrl
const getDomain = async () => {
  const domain = await AsyncStorage.getItem('domain')
  basicUrl = `https://${domain}`
}
getDomain()

// post 接口请求
export async function post(url, params) {
  return request.post(`${basicUrl}/api/admin/${url}`, {
    ...params
  })
}