import Axios from "axios"

export default {
  namespace: 'home',
  state: {
    name: 'liu0',
    list: []
  },
  reducers: {
    changeName(state, { payload }) {
      return {
        ...state,
        name: payload.name
      }
    },
    saveList(state, { payload }) {
      return {
        ...state,
        list: payload.data
      }
    }
  },
  effects: {
    *fetch({ payload }, { put }) {
      const res = yield Axios.get('https://www.fastmock.site/mock/e6514194ff79c9dbcf5d721d3dc7b5d1/todo-list/get-list')

      yield put({
        type: 'saveList',
        payload: {
          data: res.data.data.list
        }
      })
    }
  }
}
