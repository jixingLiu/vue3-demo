import request from '@/utils/request'

// 创建用户
export function addUser(data) {
  return request({
    url: '/basic-api/login',
    method: 'post',
    data
  })
}

