// 存放所有新增的实例
let optionArr = [];

// 工具栏渲染
draw_Pie(
  'tool-pie',
  false,
  '饼图',
  ['a', 'b', 'c', 'd'],
  [
    { value: 1, name: 'a' },
    { value: 2, name: 'b' },
    { value: 3, name: 'c' },
    { value: 4, name: 'd' }
  ]
);

// 设置工具可拖动
$( ".tool-item" ).draggable({
  appendTo: "body",
  helper: "clone"
});

// 删除实例
function deleteChart(_id){
  const MSG = confirm("确认删除？");
  if (MSG){
    $(`#${_id}`).remove();
  }
}

// 拖动到 View 中创建
$( "#droppable" ).droppable({
  drop: function( event, ui ) {
    // 产生随机 ID
    let randomId = `view-${Date.parse(new Date())}-${Math.floor(Math.random()*1000000)}`;

    // 判断种类
    switch(ui.draggable.context.id){
      // 饼图
      case 'tool-pie':
        //ui-widget-content (className => 加边框)
        const TEMP = `<div id='${randomId}' class='view-item tool-item ui-widget-content'></div>`;
        $( this ).append(TEMP);
        
        // 画图
        draw_Pie(
          randomId,
          false,
          '饼图',
          ['a', 'b', 'c', 'd'],
          [
            { value: 1, name: 'a' },
            { value: 2, name: 'b' },
            { value: 3, name: 'c' },
            { value: 4, name: 'd' }
          ]
        );

        // 设置可缩放
        $( `#${randomId}` ).resizable({
          start: function(event, ui) {
            for(let i=0;i<optionArr.length;i++){
              if(ui.element[0].id == optionArr[i]._zr.dom.id){
                // 缩放时当前实例可自适应
                window.onresize = function() {
                  optionArr[i].resize();
                };
                break;
              }
            }
          }
        }); 

        // 移动到某块实例上时显示删除按钮
        $( `#${randomId}` ).hover(() => {
          $( `#${randomId} img` ).stop().toggle(100);
        });

        break;

      // case '':
      //   xxx
      //   break;

      default:
        console.log('error!');
    }

    // 增加删除按钮
    const DELETE_IMG = `<img class='tool-item-img' onclick='deleteChart("${randomId}")' src='./image/delete.png'>`;
    $( `#${randomId}` ).append(DELETE_IMG);
    
    // 设置只可在view中移动
    $( `#${randomId}` ).draggable({ containment: "parent", cursor: "move" });
  }
});