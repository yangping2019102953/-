//logs.js


Page({
  data: {
    text1:'',
    text2:'',
    text3:'',
    text4:''
  },
 //input双向绑定
 check1(e) {
  this.setData({text1: e.detail.value})
},
check2(e) {
  this.setData({text2: e.detail.value})
},
  primary1:function(e){
    var str='abc2def4';
    var reg=new RegExp('this.data.text2','g');
     //console.log(" 用户输入内容：" +this.data.text2);
     console.log(" 匹配结果：" +reg.test(str));
    this.setData({
      text4: this.data.text1
      
    })
  }


  
})
