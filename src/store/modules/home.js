/*
 * @Author: lhajh
 * @File: 所有的 state 存放处
 * @Date: 2018-03-14 09:38:22
 * @Last Modified by: lhajh
 * @Last Modified time: 2018-10-23 14:58:19
 */

import * as types from '../mutation-type.js'

export const state = {
  userInfo: {}
}

export const mutations = {
  [types.CHANGE_USER_INFO] (state, payload) {
    state.userInfo = payload
  }

}
