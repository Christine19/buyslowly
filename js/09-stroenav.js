$(function () {
    // 内容滚动
    mui('.mui-scroll-wrapper').scroll();
    // 发送ajax请求
    $.ajax({
    url:'http://m.manmanbuy.com/HzSite.aspx',
    data:{},
    type:'GET',
    success:function (backData) {
    console.log(backData);
    var result=template('friendslink',backData)
    $('.friends').html(result);
    }
    })
})