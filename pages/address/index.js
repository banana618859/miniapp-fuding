// pages/address/index.js
var QQMapWX = require('../../utils/qqmap-wx-jssdk.js');
var qqmapsdk;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    allAddress:[
      {
        id:1,
        name: '何柳',
        phone: '13631338859',
        address: '广州市天河区柯木塱地铁站...'
      },
      {
        id: 2,
        name: '何柳',
        phone: '13631338859',
        address: '广州市黄埔区甜梦创意园...'
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 实例化腾讯地图API核心类

    // qqmapsdk = new QQMapWX({
    //   key: 'EQ3BZ-I5MHX-63Q47-73COP-CF765-6IBOR' // 必填1

    // });
    this.getData()
    wx.setNavigationBarTitle({
      title: '收货地址'
    })
  },
  gotoEditAddress: function(e){
    var obj = JSON.stringify(e.target.dataset);
    console.log('gotoEditAddress',e,obj)
    wx.navigateTo({
      url: '/pages/addressEdit/index?obj='+ obj
    })
  },
  getData: function(){
    wx.request({
      url:'https://book.feelyou.top/search/%E9%9B%AA%E6%BC%A0',
      data: {},
      method: 'GET',
      header: { 'content-Type': 'application/json' },
      success: function (res) {
        console.log('getData:',res)
        if (res.statusCode == 200) {
          console.log(res.data);
        }
      }
    })
  },
  getRealAddress: function(){
    wx.getSetting({
      success: (result)=>{

        // 2. 获取权限状态  主要发现一些属性名很怪异的时候 使用[]形式获取属性值
        const scopeAddress = result.authSetting["scope.address"];
        console.log('scopeAddress:',scopeAddress)
        if(scopeAddress === true||scopeAddress ===undefined){
          wx.chooseAddress({
            success: (result1)=>{
              console.log(result1);
            }
          });
        }else{
          // 3.用户拒绝了授权 先诱导用户打开授权
          wx.openSetting({
            success: (result2)=>{
              // console.log(result2);
              // 调用获取收货地址
              wx.chooseAddress({
                success: (result3)=>{
                  console.log(result3);
                }
              });
            }
          });
        }
      }
    }); 
  },
  getMyAddress: function(){
    
    //获取当前经纬度

    wx.getLocation({

      type: 'wgs84',

      success(res) {
          //使用腾讯地图的reverseGeocoder方法获取地址信息

          qqmapsdk.reverseGeocoder({

              location: {

                  latitude: res.latitude,//纬度

                  longitude: res.longitude//经度
              },

              success: function (addressRes) {

                  const address=addressRes.result.formatted_addresses.recommend;//当前位置信息
                  console.log('address:',address)
              }
          });
      }
    })
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