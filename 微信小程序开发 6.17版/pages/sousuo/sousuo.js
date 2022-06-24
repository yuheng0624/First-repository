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
      var searchtext = this.data.shoopingtext; //搜索框的值
      var sss = true;
      if (searchtext != "") {
        //将搜索框的值赋给历史数组
        this.data.historyArray.push(searchtext);
        //模糊查询 循环查询数组中的title字段
        for (var index in this.data.shoopingarray) {
          var num = this.data.shoopingarray[index].title.indexOf(searchtext);
          let temp = 'shoopingarray[' + index + '].status';
          if (num != -1) { //不匹配的不显示
            this.setData({
              [temp]: 1,
            })
            sss = false //隐藏未找到提示
          }
        }
        this.setData({
          history: false, //隐藏历史记录
          noneview: sss, //隐藏未找到提示
          shoppinglist: true, //显示商品列表
          newArray: this.data.historyArray //给新历史记录数组赋值
        })
      } else {
        this.setData({
          noneview: true, //显示未找到提示
          shoppinglist: false, //隐藏商品列表
          history: false, //隐藏历史记录
        })
      }
    },
    data: {
      shoopingtext: "", //搜索框的值
      history: false, //显示历史记录
      noneview: false, //显示未找到提示
      shoppinglist: false, //显示商品列表
      historyArray: [], //历史记录数组,
      newArray: [], //添加历史记录数组
      shoopingarray: [{ //商品
        id: 0,
        images: "https://img2.baidu.com/it/u=2221294260,2415676932&fm=253&fmt=auto&app=138&f=JPEG?w=667&h=500",
        title: "金茂长沙国际物联开发社区",
        money: "12000元/月",
        sold: "78套",
        status: 0
      }, {
        id: 1,
        images: "https://img2.baidu.com/it/u=798498913,2532056575&fm=253&fmt=auto&app=138&f=JPEG?w=799&h=500",
        title: "湖南望城才子城小区",
        money: "10000元/月",
        sold: "34套",
        status: 0
      }],
      job:[],
      jobList:[],
      id:'',
      isClick:false,
      jobStorage:[],
      jobId:''
    },
    jumpage4:function(){
      wx.switchTab({
        url:'/pages/transaction/transaction',
      })
      },
    //搜索框的值
    shoppinginput: function(e) {
      //当删除input的值为空时
      if (e.detail.value == "") {
        this.setData({
          history: true, //显示历史记录
          shoppinglist: false //隐藏商品列表
        });
        //所有商品列表的状态改为0
        for (var index in this.data.shoopingarray) {
          let temp = 'shoopingarray[' + index + '].status';
          this.setData({
            [temp]: 0,
          })
        }
      }
      this.setData({
        shoopingtext: e.detail.value
      })
    },
    //点击历史记录赋值给搜索框
    textfz: function(e) {
      this.setData({
        shoopingtext: e.target.dataset.text
      })
    },
    getPhoneNumber(e){
      console.log(e);
          },
          getUserInfo(e){
              console.log(e);  
          },
          
    haveSave(e){
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