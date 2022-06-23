const app = getApp()
wx.cloud.init({
    env:'cloud1-8g4ppqwy67461611',
    traceUser:true,
})
Page({

    /**
     * 页面的初始数据
     */
    data: {
array:[],
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

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {
        var that = this;
        wx.cloud.database().collection("upload1").get({
            success(res){
                console.log(res.data[0])
                that.setData({
                    ['array['+ 0 + ']'] : res.data[0],
                })
            }
        })
        wx.cloud.database().collection("upload2").get({
            success(res){
                console.log(res.data[0])
                that.setData({
                    ['array['+ 1 + ']'] : res.data[0],
                })
            }
        })
        wx.cloud.database().collection("upload3").get({
            success(res){
                console.log(res.data[0])
                that.setData({
                    ['array['+ 2 + ']'] : res.data[0],
                })
            }
        })
        wx.cloud.database().collection("upload4").get({
            success(res){
                console.log(res.data[0])
                that.setData({
                    ['array['+ 3 + ']'] : res.data[0],
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