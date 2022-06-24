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
        joinNumber:100
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        console.log(options.id); 
        let ids =  wx.getStorageSync('id')
        this.setData({
            ids:ids
        })
    },
    clink:function(e){
        let ids =  wx.getStorageSync('id')
        console.log('设备',e);
        wx.switchTab({
          url: '/pages/fabu/fabu',
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
        let ids =  wx.getStorageSync('id')
        wx.cloud.database().collection("upload4").orderBy('number','desc').where({videoClass:ids}).limit(2).get({
            success(res){
                console.log(res.data)
                that.setData({
                    hot:res.data
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