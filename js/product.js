$(function(){
    var pageid=1;
    var categoryid=2
    var pagesize;
    var totalCount;
    var pageNum;
    mui('.mui-scroll-wrapper').scroll(
        options = {
            scrollY: true, //是否竖向滚动
            scrollX: false, //是否横向滚动
            startX: 0, //初始化时滚动至x
            startY: 0, //初始化时滚动至y
            indicators: true, //是否显示滚动条
            deceleration:0.0006, //阻尼系数,系数越小滑动越灵敏
            bounce: false //是否启用回弹
           }
    )
    function render(categoryid,pageid){
        $.ajax({
            url:"http://mmb.ittun.com/api/getproductlist",
            type:"GET",
            data:{categoryid:categoryid,pageid:pageid},
            success:function(backdata){
                var producthtml=template("productitem",backdata);
                $('.main').html(producthtml);
                 pagesize=backdata.pagesize;
                 totalCount=backdata.totalCount;
                 pageNum=Math.ceil(totalCount/pagesize);
                //console.log(pagesize+"---"+pageNum+"----"+totalCount);
                var pageArr=[]
                for(var i=1;i<=pageNum;i++){
                    pageArr.push(i);
                }
                console.log(pageArr);
                var datas={data:pageArr};
                var pagehtml=template("pagehitem",datas);
                $('.dropdown-menu').html(pagehtml);
                //pageid=1;
                $('.dropdown .btn-default .text').html(pageid+"/"+pageNum);
            }
        })
    }
    render(2,1);
    $('.previous').click(function(){
        if(pageid>1){
            pageid--;
        }else{
            pageid=1;
            return;
        }
        render(2,pageid);
        mui('.mui-scroll-wrapper').scroll().scrollTo(0,0,100);
    })
    $('.next').click(function(e){
        // alert(1);
        // e.preventDefault();
        if(pageid<pageNum){
            pageid++;
        }else{
            pageid=pageNum;
            return;
        }
        render(2,pageid);
        //return false;
        mui('.mui-scroll-wrapper').scroll().scrollTo(0,0,100);
    })
    $('.dropdown-menu').on("click","li",function(){
        pageid=$(this).children('a').html();
        console.log(pageid);
        render(2,pageid);
        mui('.mui-scroll-wrapper').scroll().scrollTo(0,0,100);
    })
})