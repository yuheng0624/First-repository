Page({

    /**
     * 页面的初始数据
     */
    data: {
      loginOk:true,
      nickName:"",
      avatarUrl:"",
      modalHidden: true,
    },
    // jumpage5:function(){
    //   wx.navigateTo({
    //     url:'/pages/fabu/fabu',
    //   })
    //   },
    //   jumpage6:function(){
    //     wx.navigateTo({
    //       url:'/pages/home/home',
    //     })
    //     }, 
  
    // 页面加载的时候，将load页面传过来的值获取过来
    onLoad: function (options) {
      console.log("这里的options",options);
      this.setData({
        nickName:options.nickName,
        avatarUrl:options.avatarUrl
      })
    },
  
    //小程序声明周期的可见性函数里面来控制显示
    onShow(){
      let userInfo = wx.getStorageSync('userInfo')
      console.log("我的缓存信息",userInfo);
      if(userInfo){
        this.setData({
          loginOk:true,
          nickName:userInfo.nickName,   //从缓存中拿数据
          avatarUrl:userInfo.avatarUrl
        })
      }else{
        this.setData({
          loginOk:false
        })
      }
      var that = this;
    wx.cloud.database().collection("upload4").get({
        success(res){
            console.log(res.data)
            that.setData({
                url:res.data
            })
        }
    })
    },
  
    //点击登录
    // load(){
    //   wx.navigateTo({
    //     url: '/pages/load/load',
    //   })
    // },
  
    //退出登录
    exit(){
      wx.showModal({
        content:"确定退出吗"
      }).then(res=>{
        if(res.confirm){
        console.log("用户点击了确定");
        this.setData({
          loginOk:false
        })
        //清空登录的缓存
        wx.setStorageSync('userInfo', null)
        }else if(res.cancel){
          console.log("用户点击了取消");
        }
      })
    },
  
    buttonTap: function() {
      this.setData({
        modalHidden: false
      })
    },
  
    /**
     * 点击取消
     */
    modalCandel: function() {
      // do something
      this.setData({
        modalHidden: true
      })
    },
  
    /**
     *  点击确认
     */
    modalConfirm: function() {
      // do something
      this.setData({
        modalHidden: true
      })
    },
    getUserProfile(e) {
        // 推荐使用wx.getUserProfile获取用户信息，开发者每次通过该接口获取用户个人信息均需用户确认，开发者妥善保管用户快速填写的头像昵称，避免重复弹窗
        wx.getUserProfile({
          desc: '展示用户信息', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
          
          success: (res) => {
            console.log(res.userInfo)
            wx.setStorageSync('userInfo', res.userInfo)
            let userInfo = wx.getStorageSync('userInfo')
            var taht = this;
            if(userInfo){
                taht.setData({
                  loginOk:true,
                  nickName:userInfo.nickName,   //从缓存中拿数据
                  avatarUrl:userInfo.avatarUrl
                })
              }else{
                that.setData({
                  loginOk:false
                })
              }
            // 获取用户openid
            wx.cloud.callFunction({
              name:'get_openid',
            }).then(resu=>{
    
              console.log('openid', resu)//res就将appid和openid返回了
                //做一些后续操作，不用考虑代码的异步执行问题。
              console.log('openid:', resu.result.openid);
              // app.globalData._openid = resu.result.openid
              wx.setStorageSync('_openid', resu.result.openid)
            let _openid = wx.getStorageSync('_openid')
              console.log(_openid)
            })
            
        }
    })
}
  
  })