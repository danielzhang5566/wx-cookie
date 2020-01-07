# wx-cookie

## 介绍
微信小程序没有像浏览器一样内置实现了cookie方案，需要开发者自行模拟。

但小程序提供了 [数据缓存 Storage](https://developers.weixin.qq.com/miniprogram/dev/api/storage/wx.setStorageSync.html) 和 [网络 Network](https://developers.weixin.qq.com/miniprogram/dev/api/network/request/wx.request.html) 这两种能力，通过这两套API，我们可以自行DIY一个cookie方案。

## Demo
本仓库可以使用微信开发工具直接打开，也可以点 [这里](https://developers.weixin.qq.com/s/x4sFASmh7xdq) 导入代码片段。


## 使用
见：`./lib/cookie.js`


