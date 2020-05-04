//logs.js
const util = require('../../utils/util.js')

const app = getApp();
const getInf = (str, key) => str.replace(new RegExp(`${key}`, 'g'), `%%${key}%%`).split('%%');

Page({
  data: {
    keyName: null,
    primaryListData: [
      { "id": "1", "text": "今天是5月2号" },
      { "id": "2", "text": "是的，假期已过两天" },
    ], // 内容原始数组 (如果是后台请求的数据，就不需要两个数组了))
    searchDataList: [
      { "id": "1", "text": "今天是5月2号" },
      { "id": "2", "text": "是的，假期已过两天" },
    ], // 用来搜索的复制数组
  },

  // 输入框正在输入
  bindInput: function (e) {
    var that = this;
    that.setData({
      keyName: that.trim(e.detail.value)
    })
    that.searchTap();
  },

  // 搜索关键字
  searchTap: function () {
    var that = this;
    var data = that.data.primaryListData;
    var newData = that.data.searchDataList;
    for (var i = 0; i < data.length; i++) {
      var dic = data[i];
      var newDic = newData[i];
      var text = dic["text"];
      newDic["text"] = getInf(text, that.data.keyName);
    }
    that.setData({
      searchDataList: newData,
    })
  },
  // 去除首尾的空格
  trim: function (s) {
    return s.replace(/(^\s*)|(\s*$)/g, "");
  },

  onLoad: function (e) { },
})