// 上传文件并获取数据
function upload(){
  var formData = new FormData();
  var fileData = $("#upload")[0].files[0];
  
  $.ajax({ 
    url : '', 
    type : 'POST', 
    data : formData, 
    processData : false, 
    contentType : false,
    beforeSend:function(){
      console.log("正在进行，请稍候");
    },
    success : function(res) { 
      if(res.status===0){
        console.log("成功"+responseStr);
      }else{
        console.log("失败");
      }
    }, 
    error : function(responseStr) { 
      console.log("error");
    } 
  });
}
