// 上传文件并获取数据

console.log('upload')

// 上传
function upload(){
  var formData = new FormData();
  var fileData = $("#upload")[0].files[0];
  console.log(fileData);
  
  $.ajax({ 
    url : 'http://192.168.1.101:8080/springbootdemo/file/upload', 
    type : 'POST', 
    data : formData, 
    processData : false, 
    contentType : false,
    beforeSend:function(){
      console.log("正在进行，请稍候");
    },
    success : function(responseStr) { 
      if(responseStr.status===0){
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