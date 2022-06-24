// pages/fenlei/fenlei.js
Page({

    /**
     * 页面的初始数据
     */
    data: {

    },
  //   // modalHidden: true,

    
  // buttonTap: function() {
  //   this.setData({
  //     modalHidden: false
  //   })
  // },

  // modalCandel: function() {
  //   // do something
  //   this.setData({
  //     modalHidden: false
  //   })
  // },

  /**
   *  点击确认
   */
  // modalConfirm: function() {
  //   // do something
  //   this.setData({
  //     modalHidden: true
  //   })
  // },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
      console.log(options);
      wx.setStorageSync('zhuti', options.id)
      this.setData({
        id:options.id
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
      var that = this;
      
      let ids =  wx.getStorageSync('zhuti')
      console.log(ids);
      
        wx.cloud.database().collection("upload4").orderBy('number','desc').where({videoClass:ids}).limit(4).get({
          success(res){
              console.log(res.data)
              that.setData({
                  hot:res.data
              })
          }
      })
      
      
      wx.cloud.database().collection("upload4").get({
        success(res1){
          console.log(res1.data)
          that.setData({
              hot1:res1.data
          })
      }
      })
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