Page({
    //清除历史记录
    cleanhistory: function(e) {
      this.setData({
        history: false, //隐藏历史记录
        historyArray: [], //清空历史记录数组
        newArray: [],
        shoopingtext: "" //清空搜索框
      })
    },
    //搜索
    search: function(e) {
      var searchtext =e.detail.value; //搜索框的值
      wx.setStorageSync('key',searchtext )
      console.log(searchtext);
    },
    search1: function() {
      var that = this;
      let searchtext = wx.getStorageSync('key')
      wx.cloud.database().collection("upload4").orderBy('number','desc').where({videoClass:searchtext}).limit(4).get({
        success(res){
            console.log(res.data)
            that.setData({
                hot:res.data
            })
            wx.setStorageSync('key','' )
        }
    })

    },
      onShow: function () {
       
    },
  })