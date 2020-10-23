// pages/order/order.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    winWidth: 0,
    winHeight: 0,
    currentTab: 0,
    allOrder:[
      {
        id: 1,
        shopImg: '../../images/category/ms.png',
        shopName: '刘源螺蛳粉',
        orderStatus: '已送达',
        shopStatus: false,
        totalPrice: 15.0
      },
      {
        id: 2,
        shopImg: '../../images/logo.jpg',
        shopName: '隆江猪脚饭',
        orderStatus: '已送达',
        shopStatus: true,
        totalPrice: 38.0
      },
      {
        id: 3,
        shopImg: '../../images/category/sg.png',
        shopName: '三鲜快餐店',
        orderStatus: '已送达',
        shopStatus: true,
        totalPrice: 26.0
      }
    ],
    allWaitCommentOrder:[
      {
        id: 1,
        shopImg: '../../images/category/sg.png',
        shopName: '三鲜快餐店',
        orderStatus: '已送达',
        shopStatus: true,
        totalPrice: 26.0
      },
      {
        id: 2,
        shopImg: '../../images/category/ms.png',
        shopName: '刘源螺蛳粉',
        orderStatus: '已送达',
        shopStatus: false,
        totalPrice: 15.0
      }
    ],
    allQuitOrder:[
      {
        id: 1,
        shopImg: '../../images/logo.jpg',
        shopName: '隆江猪脚饭',
        orderStatus: '已送达',
        shopStatus: true,
        totalPrice: 38.0
      },
      {
        id: 2,
        shopImg: '../../images/category/sg.png',
        shopName: '三鲜快餐店',
        orderStatus: '已送达',
        shopStatus: true,
        totalPrice: 26.0
      }
    ]
  },
  onLoad: function() {

      var that = this;

      /**
       * 获取当前设备的宽高
       */
      wx.getSystemInfo( {

          success: function( res ) {
              that.setData( {
                  winWidth: res.windowWidth,
                  winHeight: res.windowHeight
              });
          }

      });
  },
    
  //  tab切换逻辑
  swichNav: function( e ) {

      var that = this;

      if( this.data.currentTab === e.target.dataset.current ) {
          return false;
      } else {
          that.setData( {
              currentTab: e.target.dataset.current
          })
      }
  },

  bindChange: function( e ) {

      var that = this;
      that.setData( { currentTab: e.detail.current });

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