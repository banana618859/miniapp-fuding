// pages/search/index.js
// "van-tabs": "/dist/tabs/index"
// "van-tabbar-item": "/dist/tabbar-item/index"

Page({

  /**
   * 页面的初始数据
   */
  data: {
    shopUrl: "detail/merchantDetail",
    aallPro: [
        {
            id: 1,
            title: '百佳旺',
            images: '/images/logo.jpg',
            distance: 5,
            deliveryTime: 30
        },
        {
            id: 2,
            title: '天藓水果',
            images: '/images/category/bld.png',
            distance: 5.6,
            deliveryTime: 35
        },{
            id: 3,
            title: '美意蛋糕',
            images: '/images/category/ms.png',
            distance: 7.1,
            deliveryTime: 42
        }
        ,{
            id: 4,
            title: '刘源螺蛳粉',
            images: '/images/category/wc.png',
            distance: 7.3,
            deliveryTime: 44
        }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // var obj =JSON.parse(options.allPro)
    console.log('obj加载完成',this.data.aallPro)
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