/*
 * @Todo: 请补充模块描述
 *
 * @Author: grayson<grayson.gao@bvox.com>
 * @Date: 2024-10-08 10:44:59
 *
 * Copyright © 2019-2024 bvox.com. All Rights Reserved.
 */

export default {
  setConsName (state, consName) {
    state.consName = consName
  },
  setField (state, field) {
    state.field = field
  },
  setErrorCode (state, errorCode) {
    state.errorCode = errorCode
  },
  setData (state, data) {
    state[state.field] = data
  }
}
