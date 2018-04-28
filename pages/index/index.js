//index.js
//获取应用实例
const app = getApp()
Page({
  data: {
    imgUrls: [
      '../../../utils/img/slider-1.jpg',
      '../../../utils/img/slider-2.jpg',
      '../../../utils/img/slider-3.jpg'
    ],
    iconInfo:[
      { url: '../../../utils/img/1.jpg', text: '简明', map:'goLine'},
      { url: '../../../utils/img/2.jpg', text: '多维 ', map:'goBar' },
      { url: '../../../utils/img/3.jpg', text: '趋势', map: 'goBar'  },
      { url: '../../../utils/img/4.jpg', text: '高效', map: 'goBar' },
    ],
    indicatorDots: false,
    autoplay: true,
    interval: 5000,
    duration: 1000
  },
  getMore: function (){
    console.log('sdsdsd');
    wx.navigateTo({
      url: '../data/data'
    })
  },
    goLine: function () {
    console.log('line');
    wx.navigateTo({
      url: '../line/line'
    })
  },
  goBar: function () {
    console.log('bar');
    wx.navigateTo({
      url: '../bar/index'
    })
  }
})
