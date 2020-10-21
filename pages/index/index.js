//index.js
//获取应用实例
const app = getApp()

Page({
	data: {
        allPro: [],
		motto: 'Hello World',
		userInfo: {},
		hasUserInfo: false,
        merchantDetailUrl: "detail/merchantDetail",
		canIUse: wx.canIUse('button.open-type.getUserInfo'),
        imageUrl: '/images/logo.jpg',
		imageUrl0: '/images/logo0.jpg',
		bld: '/images/category/bld.png',
		ms: '/images/category/ms.png',
		sg: '/images/category/sg.png',
		wc: '/images/category/wc.png',
		xc: '/images/category/xc.png',
		xwc: '/images/category/xwc.png',
		zc: '/images/category/zc.png',
		zhc: '/images/category/zhc.png',

	},
	//事件处理函数
	bindViewTap: function() {
		wx.navigateTo({
		    url: '../logs/logs'
		})
	},
	onReady:function(){
        this.getData();
    // const _this = this;
    // wx.getLocation({
    //   type: 'wgs84',
    //   success(res) {
	// 			console.log('localtion:',res)
    //     const latitude = res.latitude
    //     const longitude = res.longitude
    //   }
    // })
  },
    // index 页面被加载
	onLoad: function () {
        
        // 是否已授权并获得用户数据
		// if (app.globalData.userInfo) {
        //     this.setData({
        //         userInfo: app.globalData.userInfo,
        //         hasUserInfo: true
        //     })
		// } 
        // else if (this.data.canIUse){
        //     // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
        //     // 所以此处加入 callback 以防止这种情况
        //     app.userInfoReadyCallback = res => {
        //         this.setData({
        //             userInfo: res.userInfo,
        //             hasUserInfo: true
        //         })
        //     }
		// } 
        // else {
        //     // 在没有 open-type=getUserInfo 版本的兼容处理
        //     wx.getUserInfo({
        //         success: res => {
        //             app.globalData.userInfo = res.userInfo;
        //             this.setData({
        //                 userInfo: res.userInfo,
        //                 hasUserInfo: true
        //             })
        //         }
        //     })
		// }
    },
    getData: function(){
        let that = this;
        wx.request({
            url:'https://book.feelyou.top/search/%E9%9B%AA%E6%BC%A0',
            data: {},
            method: 'GET',
            header: { 'content-Type': 'application/json' },
            success: function (res) {
            console.log('getData:',res)
            if (res.statusCode == 200) {
                console.log(res.data);
                that.setData({
                    allPro: res.data
                });
            }
            }
        })
    },
	getUserInfo: function(e) {
		console.log(e)
		app.globalData.userInfo = e.detail.userInfo
		this.setData({
		    userInfo: e.detail.userInfo,
		    hasUserInfo: true
		})
	}
})
