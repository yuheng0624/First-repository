// pages/fabu/fabu.js
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
        user_information:'',
        // user_name:'',
        home_photo:'',
        video:'',
        items:["蚊香","秋梨膏","胭脂","筷子"],
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
      console.log(options);
    let ids = wx.getStorageSync('id')
    this.setData({
      ids:ids
    })
      
  },
    chooseImage:function(e){
        console.log('form发生了submit事件，携带数据为：', e.detail.value) 
          var user = e.detail.value;
          var that = this;
          let photo = wx.getStorageSync('home_photo')
          let video = wx.getStorageSync('video')
          let videoClass1 =wx.getStorageSync('id')
          console.log("wo"+videoClass1);
          if (videoClass1!=0) {
            that.setData({
              ids:videoClass1
            })
            wx.cloud.database().collection("upload4").add({
              data:{
                  home_photo:photo,
                  video:video,
                  text:user.text,
                  number:0,
                  active_name:videoClass1,
                  videoClass:videoClass1
              },
              success(res){
                  console.log(res)
                  wx.showToast({
                    title: '发布成功',
                  })
                  wx.setStorageSync('id', '')
                  wx.switchTab({
                    url: '/pages/index/index',
                  })
              }
          })
          }else{
            wx.cloud.database().collection("upload4").add({
              data:{
                  home_photo:photo,
                  video:video,
                  text:user.text,
                  number:0,
                  active_name:videoClass1,
                  videoClass:user.videoClass
              },
              success(res){
                  console.log(res)
                  wx.setStorageSync('id', '')
                  wx.showToast({
                    title: '发布成功',
                  })
                 
                  wx.switchTab({
                    url: '/pages/index/index',
                  })
              }
          })
          }
          
      },
      onShow: function () {
      
      },
          uploadPhoto: function() {
            wx.chooseImage({
              // count:1,
              // sizeType:'compressed',
              sourceType:['album', 'camera'],
              success:res=>{
                // console.log(res.tempFilePaths[0])
                var photoTempPath = res.tempFilePaths[0]
                this.uploadPhotoToDatabase(photoTempPath)
              }
            })
          }, 
          uploadPhotoToDatabase: function(photoTempPath) {
              console.log(photoTempPath)
              let that = this;
            wx.showLoading({
              title:"正在上传......"
            })
            wx.cloud.uploadFile({
              cloudPath:"photo/"+Date.now()+".jpg",
              filePath:photoTempPath,
              success(res) {
                console.log(res.fileID)
                wx.setStorageSync('home_photo', res.fileID)
                wx.hideLoading()
                wx.showToast({
                  title:"上传成功！",
                  duration:2000
                })
                that.setData({
                  home_photo:res.fileID
                })
              },
              fail(res) {
                console.log(res)
                wx.hideLoading()
                wx.showToast({
                  title:"上传失败，请检查网络！",
                  icon:"none",
                  duration:2000
                })
              }
            })    
          },
      
          //第一步：选择要上传的视频
        chooseVideo(){
          let that = this
          wx.chooseVideo({
            sourceType: ['album','camera'],
            maxDuration: 60,
            camera: 'back',
            success(res) {
              //console.log(res.tempFilePath);
              console.log("----------",res.tempFilePath);
              wx.showLoading({
                title: '上传中',
               })
            //调用uploadImg(tempFile)函数，实现图片上传功能
              that.uploadVideo(res.tempFilePath)
            }
          })
        },
        //第二步：上传所选视频到云存储
        uploadVideo(tempFile){
          console.log("要上传视频的临时路径",tempFile)
          let timestamp = (new Date()).valueOf()
          wx.cloud.uploadFile({
            cloudPath:'video/' +timestamp+'.mp4',  //云存储的路径，开发者自定义
            filePath: tempFile,           // 文件路径
          }).then(res => {
            console.log("上传成功",res.fileID)
            wx.setStorageSync('video', res.fileID)
            wx.showToast({
              title: '上传成功',
              icon:"success",
              duration:2000
            })
            let that = this
             setTimeout(function(){
              that.setData({
                video: res.fileID
               })
          },2000)
          })
          .catch(err => {
            console.log("上传失败",err);
          })
        }
})