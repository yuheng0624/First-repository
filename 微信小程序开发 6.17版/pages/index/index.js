
Page({
  data: {
      imgUrl: [
        'http://p1.music.126.net/RHDhAOnxZqGtjxjK2s49vg==/109951165466303909.jpg',
        'http://p1.music.126.net/nZtHrj-Wj76vGFn-0kBqaw==/109951165466309360.jpg',
        'http://p1.music.126.net/H1HiJsIq3cLPsfaDLtxRjw==/109951165466767053.jpg',
        'http://p1.music.126.net/oR_IMlwHAu1j0EwfoIVDYw==/109951165466745785.jpg',
        'http://p1.music.126.net/0jPrUkboZ-rFbzCArv-8aQ==/109951165466351711.jpg',
        'http://p1.music.126.net/Xs1sJ_Q3Top3Psv3qGVzmw==/109951165466227994.jpg'
      ], //轮播图
     
      loginOk:true,
      nickName:"",
      avatarUrl:"",
      modalHidden: true
    },
  
  bindViewTap() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad() {
    if (wx.getUserProfile) {
      this.setData({
        canIUseGetUserProfile: true
      })
    }
  },
  onShow: function () {
    var that = this;
    let ids =  wx.getStorageSync('id')
    wx.cloud.database().collection("upload4").get({
        success(res){
            console.log(res.data)
            that.setData({
                url:res.data
            })
        }
    })
},
  getUserProfile(e) {
    // 推荐使用wx.getUserProfile获取用户信息，开发者每次通过该接口获取用户个人信息均需用户确认，开发者妥善保管用户快速填写的头像昵称，避免重复弹窗
    wx.getUserProfile({
      desc: '展示用户信息', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
      success: (res) => {
        console.log(res)
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    })
  },
  getUserInfo(e) {
    // 不推荐使用getUserInfo获取用户信息，预计自2021年4月13日起，getUserInfo将不再弹出弹窗，并直接返回匿名的用户个人信息
    console.log(e)
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },

  buttonTap: function() {
    this.setData({
      modalHidden: false
    })
  },

  modalCandel: function() {
    // do something
    this.setData({
      modalHidden: false
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
  }
})
