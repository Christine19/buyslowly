$(function(){
    $.ajax({
        url:"http://mmb.ittun.com/api/getcategorytitle",
        data:{},
        type:"GET",
        success:function(backdata){
           var drophtml=template("dropdownmenu",backdata);
           $('.list').html(drophtml); 
           $('.list').on('click','.dropdown-toggle',function(){
            var id=$(this).data("id");
            console.log(id);
           render(id);
            $(this).children('span').toggleClass("mui-icon-arrowup"); 
            //$(this).children('span').removeClass("mui-icon-arrowdown").addClass("mui-icon-arrowup"); 
        })
        function render(id){
            $.ajax({
                url:"http://mmb.ittun.com/api/getcategory",
                data:{titleid:id},
                type:"GET",
                success:function(backdata){
                  var seccatehtml=template("seccateitem",backdata);
                  var target=".ul1"+id;
                 $(target).html(seccatehtml);
                 //$('.seccategory').attr("top",(82/75)*(id+1)+"rem");
                
                }
            })
        }
        }
    })
    

})