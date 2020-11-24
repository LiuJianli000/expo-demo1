import AsyncStorage from "@react-native-async-storage/async-storage"
import Axios from "axios"

export default {
  namespace: 'login',
  state: {
    domain: ''
  },
  reducers: { },
  effects: {
    *login({ payload }, { put }) {
      const domain = yield AsyncStorage.getItem('domain')
      // console.log(domain)
      // console.log(payload)
      
      const res = yield Axios.post(`https://${domain}/api/admin/oauth/token`, {
        ...payload,
      })

      console.log(res.data.token_type)
    }
  }
}
