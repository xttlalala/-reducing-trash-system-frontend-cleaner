// miniprogram/pages/crOrder/crOrder.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    finishedList: [],
  },
  gotoOrderDetail(event){
    var id =  event.currentTarget.dataset.id;
    console.log(id);
    wx.navigateTo({
      url: '../crOrderDetail/crOrderDetail?id='+id,
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    var link = app.globalData.http +'/api/cleaner/getCROrders';
    var Token = wx.getStorageSync('token');
    var data = {
      col: "none"
    }
    wx.request({
      url: link,
      header: {
        'Authorization': Token,
        'content-type': 'application/json' // 默认值
      },
      method: 'POST',
      data: data,
      success(res) {
        console.log(res.data);
        if(res.data.code==200){
           that.setData({
          finishedList:res.data.data
        })
        }
       
      }
    });
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