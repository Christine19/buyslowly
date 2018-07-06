$(function(){
    mui('.mui-scroll-wrapper').scroll({
	deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
   });

  
 })
 $(function(){
    setTimeout(function() {
                    mui(".mui-scroll-wrapper").pullRefresh().endPulldownToRefresh();
                }, 1000);
    mui.init(
        {
        pullRefresh : {
          container:".mui-scroll-wrapper",
          down : {
            style:'circle',
            auto: true, //页面刷新自动启动下拉刷新
            callback: function() {
                //下拉后，要做的事件， 就是这个回调函数的功能
               
            }
          }
        }
      }
    );

   
 })

(function() {
    $('.mui-pagination').on('tap', 'a', function() {
        $(this).addClass("mui-active").parent().siblings().removeClass("mui-active");
         alert(this);
    });
   
}); 

      