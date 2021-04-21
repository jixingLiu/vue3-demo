import request from '@/utils/request'

// 上传图片
export function uploadImage(data) {
  return request({
    url: '/users',
    method: 'post',
    'headers[Content-Type]': 'multipart/form-data',
    data
  })
}
