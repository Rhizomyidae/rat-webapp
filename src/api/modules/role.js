export default ({ request }) => ({
  /**
   * @description 角色列表
   * @description http://127.0.0.1/project/11/interface/api/215
   */
  ROLE_ALL (query = {}) {
    return request({
      url: '/api/role/index',
      method: 'post',
      data: query
    })
  },
  /**
   * @description 角色创建
   * @description http://127.0.0.1/project/11/interface/api/220
   */
  ROLE_CREATE (data) {
    return request({
      url: '/api/role/create',
      method: 'put',
      data
    })
  },
  /**
   * @description 角色详情
   * @description http://127.0.0.1/project/11/interface/api/230
   */
  ROLE_DETAIL (id) {
    return request({
      url: '/api/role/update',
      method: 'post',
      data: {
        id
      }
    })
  },
  /**
   * @description 角色编辑
   * @description http://127.0.0.1/project/11/interface/api/230
   */
  ROLE_UPDATE (data) {
    return request({
      url: '/api/role/update',
      method: 'put',
      data
    })
  },
  /**
   * @description 角色删除
   * @description http://127.0.0.1/project/11/interface/api/225
   */
  ROLE_DELETE (id) {
    return request({
      url: '/api/role/delete',
      method: 'delete',
      data: {
        id
      }
    })
  }
})
