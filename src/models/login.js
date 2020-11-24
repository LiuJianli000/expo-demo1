import AsyncStorage from "@react-native-async-storage/async-storage"
import { post } from '../services/api'

export default {
  namespace: 'login',
  state: {
    domain: ''
  },
  reducers: { },
  effects: {
    *login({ payload }, { call }) {
      const res = yield call(post, 'oauth/token', payload)

      if (res?.data) {
        const { token_type, access_token, user } = res.data
        const token = `${token_type} ${access_token}`

        yield AsyncStorage.setItem('token', token)
        yield AsyncStorage.setItem('currentUser', JSON.stringify(user))
      }

      return res
    }
  }
}
