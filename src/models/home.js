export default {
  namespace: 'home',
  state: {
    name: 'liu0'
  },
  reducers: {
    changeName(state, { payload }) {
      return {
        ...state,
        name: payload.name
      }
    }
  },
  effects: {
    *asyncOp({ payload }, { put }) {
      yield put({
        type: 'changeName',
        payload: {
          name: payload.name
        }
      })
    }
  }
}
