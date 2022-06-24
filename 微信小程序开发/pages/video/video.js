// pages/video/video.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        job:[],
      jobList:[],
      id:'',
      isClick:false,
      jobStorage:[],
      jobId:''

    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
      console.log(options);
      wx.setStorageSync('key1', options.id)
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
    onShow: function (e) {
      var that = this;
      let video = wx.getStorageSync('key1')
      console.log(video);
      wx.cloud.database().collection("upload4").get({
          success(res){
            console.log(res);
            for (let i = 0; i < res.data.length; i++) {
              const element = res.data[i].video;
              if (video==element) {
                if (res.data[i].collection==true) {
                  that.setData({
                    text:"已收藏"
                  })
                }else{
                  that.setData({
                    text:"收藏"
                  })
                }
                break
              }
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

    },

           
    haveSave(e){
      var that = this;
      let video = wx.getStorageSync('key1')
      console.log(video);
      wx.cloud.database().collection("upload4").get({
          success(res){
            console.log(res);
            for (let i = 0; i < res.data.length; i++) {
              const element = res.data[i].video;
              if (video==element) {
                if (res.data[i].collection==false) {
                  that.setData({
                collection:true, 
                text:"已收藏"  
              })
              wx.cloud.database().collection("upload4").doc(res.data[i]._id).update({
                data:{
                  collection:true
                }
               }).then(res=>{
                console.log(res)
                wx.showToast({
                  title: '收藏成功',
                })
               })
                }else{
                  that.setData({
                    collection:false  ,
                    text:"收藏"
                  })
                  wx.cloud.database().collection("upload4").doc(res.data[i]._id).update({
                    data:{
                      collection:false
                    }
                   }).then(res=>{
                    console.log(res)
                    wx.showToast({
                      title: '取消收藏',
                    })
                   })
                }
               
              break
            }
            }
            }
          })
        if(!this.data.isClick == true){
          let jobData = this.data.jobStorage;
          jobData.push({
            jobid:jobData.length,
            id:this.data.job.id 
          })
          wx.setStorageSync('jobData', jobData);
          wx.showToast({
            title: '已收藏',
          });
         
        }else{
          wx.showToast({
            title: '已取消收藏',
          })
        }
        this.setData({
          isClick:!this.data.isClick
        })
      },
  
      haveSave2(e){
          if(!this.data.isClick == true){
            let jobData = this.data.jobStorage;
            jobData.push({
              jobid:jobData.length,
              id:this.data.job.id
            })
            wx.setStorageSync('jobData', jobData);
            wx.showToast({
              title: '已点赞',
            });
          }else{
            wx.showToast({
              title: '已取消点赞',
            })
          }
          this.setData({
            isClick:!this.data.isClick
          })
        },
    
})