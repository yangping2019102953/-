//logs.js
const util = require('../../utils/util.js')

Page({   
  data:{   
    test1:'',
    test2:'',
    result:'' 
   },
   check1:function(e) 
   {
     this.setData({
       text1: e.detail.value
     })
   },
   check2:function(e) 
   {
     this.setData({
       text2: e.detail.value
     })
   },

   check3:function(e){   
     var str=this.data.test1;
     var reg=new RegExp('text2','g');
     var result=str.match(reg);
         if(result!=null)
         {
          this.setData({         
            result: result   
            })    
         }
        else{      
          this.setData({         
            result:'匹配错误'     
            })    
           }  
          }
        
          })
          




         
            
          
            
          
           
              
           

