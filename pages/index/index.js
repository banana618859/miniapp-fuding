//index.js
//获取应用实例
const app = getApp()

Page({
	data: {
		motto: 'Hello World',
		userInfo: {},
		hasUserInfo: false,
        shopUrl: "detail/merchantDetail",
        canIUse: wx.canIUse('button.open-type.getUserInfo'),
        allPro: [
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
            },
            {
                id: 5,
                title: '茵茵甜品',
                images: '/images/category/xc.png',
                distance: 8.0,
                deliveryTime: 47
            },
            {
                id: 6,
                title: '百果园',
                images: '/images/category/xwc.png',
                distance: 8.1,
                deliveryTime: 48
            },{
                id: 7,
                title: '创意蛋糕',
                images: '/images/category/zc.png',
                distance: 8.5,
                deliveryTime: 53
            }
            ,{
                id: 8,
                title: '回头火锅店',
                images: '/images/category/zhc.png',
                distance: 8.8,
                deliveryTime: 55
            }
        ],
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
    gotoSearchPage(){
        var newAllPro = JSON.stringify(this.data.allPro) 
        wx.navigateTo({
          url: '/pages/search/index',
        })
    },
    getData: function(){
        let that = this;
        wx.request({
            url:'https://api.apiopen.top/todayVideo',
            data: {},
            method: 'GET',
            header: { 'content-Type': 'application/json' },
            success: function (res) {
            console.log('getData:',res)
            if (res.statusCode == 200) {
                console.log(res.data);
                // that.setData({
                //     allPro: res.data.result
                // });
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
