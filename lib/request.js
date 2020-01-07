/**
 * Request基础库（简单实现）
 *
 * @author WecTeam
 */

const CookieLib = require('./cookie')

// 微信请求api封装
function requestPro({ url, data, header, method = 'GET' }) {
    return new Promise((resolve, reject) => {
        wx.request({
            url,
            data,
            header: Object.assign({}, { 'Cookie': CookieLib.getCookiesStr() }, header), // 请求头
            success (res) {
              let { data : resData, header, statusCode } = res
              let setCookieStr = header['Set-Cookie'] || header['set-cookie'] || ''

              CookieLib.setCookieFromHeader(setCookieStr) // 响应头
              resolve(resData)
            },
            fail (err) {
                reject(err)
            }
          })
    })
}

module.exports = { requestPro }
