Page({
  data: {
    match_str:'',
    regexp:'',
    text3:'',

  },
 //input双向绑定
 check1(e) {
  this.setData({match_str: e.detail.value})
},
check2(e) {
  this.setData({regexp: e.detail.value})
},
  primary1:function(options){
    var str = this.data.match_str;
    var reg=new RegExp(this.data.regexp,'g');
     console.log(this.data.match_str);
     console.log(this.data.regexp);
     console.log(str.search(reg));
    this.setData({
     text3: str.match(reg)
     })
  }



  
})
