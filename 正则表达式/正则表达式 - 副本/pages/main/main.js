// pages/main/main.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    text1:'',
    text2:'',
    text3:'',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  //input双向绑定
  inputEdit1(e) {
    this.setData({text1: e.detail.value})
  },
  inputEdit2(e) {
    this.setData({text2: e.detail.value})
  },
  //匹配
  runMain: function (options) {
    var str = this.data.text1;
    var patt1 = new RegExp(this.data.text2);//转到JavaScript RegExp 对象(RegExp是正则表达式（regular expression）的简写)
    //console.log(patt1);
    this.setData({
      text3: str.match(patt1)
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