
/**
 * 饼图 (pie)
 * @param { String }  ID           渲染到某元素的id
 * @param { Boolean } flag         显示方式 (false为简化图表 => 隐藏title, 介绍等)
 * @param { String }  title        标题
 * @param { Array }   legend_data  分类
 * @param { Array }   series_data  数据
 */
function draw_Pie(ID, flag, title, legend_data, series_data){
  let option = {
    title : {
      show: flag,
      text: title,
      x: 'center',
      y: 'bottom'
    },
    tooltip : {
      show: flag,
      trigger: 'item',
      formatter: "{b} : {c} ({d}%)"
    },
    legend: {
      show: flag,
      orient: 'vertical',
      left: 'left',
      data: legend_data
    },
    series : [
      {
        type: 'pie',
        radius : flag ? '55%' : '80%',
        center: flag ? ['50%', '60%'] : ['50%', '50%'],
        data: series_data,
        itemStyle: {
          emphasis: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        },
        labelLine: { show: flag },
        label: { show: flag }
      }
    ]
  };

  // 实例初始化
  let myChart = echarts.init(document.getElementById(ID));

  // 若不是左侧的工具实例，添加到全局数组中( 缩放时让其自适应 )
  if(ID != 'tool-pie'){
    optionArr.push(myChart);
  }
  
  myChart.setOption(option);
}