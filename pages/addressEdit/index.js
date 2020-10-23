// pages/addressEdit/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentAddress:{
      name: '',
      phone: '',
      address: ''
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var obj =JSON.parse(options.obj)
    console.log('obj:',obj)
    //  testObj:本js文件中的对象
    this.setData({
      currentAddress: obj
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },
  sureChange: function(){
		wx.showToast({
			title: '修改成功',
			icon: 'success',
			duration: 2000
		});
		// 返回上一页
		setTimeout(()=>{
			wx.navigateBack({
				delta: 1
			})
		},2100)
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