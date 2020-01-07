const RequestLib = require('../lib/request')
const CookieLib = require('../lib/cookie')

Page({
  data: {
    content: ''
  },
  onLoad () {
    this.updateContent()
  },

  updateContent() {
    this.setData({
      content: CookieLib.getCookiesStr()
    })
  },

  setCookie1 () {
    CookieLib.setCookie({
      cookie1: 12345,
      cookie2: '12345'
    })
    this.updateContent()
  },

  setCookie2 () {
    CookieLib.setCookie({
      cookie3: {
          value: 12345,
          maxAge: 3600 * 24  // 自定义有效期（这里示例是24小时）
      },
      cookie4: {
          value: '12345',
          expires: 'Wed, 21 Oct 2025 07:28:00 GMT' // 标准GMT格式
      }
    })
    this.updateContent()
  },

  removeCookie () {
    CookieLib.removeCookie('cookie2')
    this.updateContent()
  },

  lunchRequest () {
    RequestLib.requestPro({
      url: 'https://www.baidu.com',
      data: {}
    }).then(() => {
      this.updateContent()
    })
  }


})