// pages/active/active.js
var app =getApp()
wx.cloud.init({
    env:'cloud1-8g4ppqwy67461611',
    traceUser:true,
})
const db = wx.cloud.database()
Page({

    /**
     * 页面的初始数据
     */
    data: {
        joinNumber:100,
        class:[],
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {

    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {

    },
    goInfo(e) {
        console.log(e.currentTarget.dataset.id)
        wx.setStorageSync('id', e.currentTarget.dataset.id)
        wx.navigateTo({
          url: './action/action?id='+e.currentTarget.dataset.id,
        })
      },
    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {
        var that = this;
        
        wx.cloud.database().collection("upload4").get({
            success(res){
                console.log(res)
                that.setData({
                    video:res.data
                })
                for (let i = 0; i < res.data.length; i++) {
                    const element = res.data[i].videoClass;
                    console.log(element);
                    that.setData({
                        ['class['+ i + ']'] :element,
                    })
                }
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