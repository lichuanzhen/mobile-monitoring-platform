/*
 * @Author: lhajh
 * @File: 发同步 actions 时调用此方法
 * @Date: 2018-03-13 16:22:46
 * @Last Modified by: lhajh
 * @Last Modified time: 2018-03-14 10:02:00
 */

const dispatch = ({ commit }, { type, payload }) => {
  commit(type, payload)
}
export default dispatch
