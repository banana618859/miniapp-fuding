// pages/search/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    shopUrl: "detail/merchantDetail",
    allPro: [
      {
          title: '百佳旺',
          images: '/images/logo.jpg',
          distance: 5,
          deliveryTime: 30
      },
      {
          title: '天藓水果',
          images: '/images/category/bld.png',
          distance: 5.6,
          deliveryTime: 35
      },{
          title: '美意蛋糕',
          images: '/images/category/ms.png',
          distance: 7.1,
          deliveryTime: 42
      }
      ,{
          title: '刘源螺蛳粉',
          images: '/images/category/wc.png',
          distance: 7.3,
          deliveryTime: 44
      },
      {
          title: '茵茵甜品',
          images: '/images/category/xc.png',
          distance: 8.0,
          deliveryTime: 47
      },
      {
          title: '百果园',
          images: '/images/category/xwc.png',
          distance: 8.1,
          deliveryTime: 48
      },{
          title: '创意蛋糕',
          images: '/images/category/zc.png',
          distance: 8.5,
          deliveryTime: 53
      }
      ,{
          title: '回头火锅店',
          images: '/images/category/zhc.png',
          distance: 8.8,
          deliveryTime: 55
      }
  ],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // var obj =JSON.parse(options.allPro)
    console.log('obj加载完成')
    //  testObj:本js文件中的对象
    // this.setData({
    //   allPro: obj
    // })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})