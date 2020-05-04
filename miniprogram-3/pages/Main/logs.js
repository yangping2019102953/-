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
    //var reg =  new RegExp("str");
    
    var str="adc";
    var reg=new RegExp(this.data.text2);
    console.log(" 结果：" +reg.test(str));
     //console.log(" 用户输入内容：" +this.data.text2);
   
    //console.log(this.data.text2);
    
    // this.setData({
    //   text4: reg  
    // })
  }



  
})
