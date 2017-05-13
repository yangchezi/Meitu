//register
$(function(){
    $.ajax({
        url:"../json/banner.json", 
        type:"get",
        success:function(res){
            //login
            $('#login_body').css("backgroundImage","url("+res[5].login+")")
            //register
            $('#register_body').find("img").attr("src",res[6].register)
        }
    })
    $('select').change(function(){
        if($('select').val()=="手机"){
            $(".register_text").attr("placeholder","请输入您的11位"+$('select').val()+"号");
        }else if($('select').val()=="邮箱"){
            $(".register_text").attr("placeholder","请输入您的"+$('select').val()+"地址");
        }else{
            $(".register_text").attr("placeholder","请输入"+$('select').val());
        }
    })
    $('.register_text').blur(function(){
        $(".register_text_warn").css("display","none");
        $(".register_text_warn").animate({"opacity":0,"top":40});
        var val = $(this).val();
        if($('select').val()=="手机"){
            var re1 = /^[1-3]\d{10}$/;
            // console.log(val);
            if(!re1.test(val)){
                $(this).addClass("warn");
            }else{
                $(this).removeClass("warn");
            }
        }else if($('select').val()=="邮箱"){
            var re2 = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
            if(!re2.test(val)){
                $(this).addClass("warn");
            }else{
                $(this).removeClass("warn");
            }
            // console.log("邮箱")
        }else{
            var re3 = /^\w{3,30}$/;
            if(!re3.test(val)){
                $(this).addClass("warn");
            }else{
                $(this).removeClass("warn");
            }
            // console.log("用户名")
        }
    })
    $('.register_text').focus(function(){

        if(/warn/.test($(this).attr("class"))){
            if($('select').val()=="用户名"){
                $(".register_text_warn").html("用户名由3-30位数字字母组成");
            }else if($('select').val()=="邮箱"){
                $(".register_text_warn").html("请输入正确的邮箱格式");
            }else{
                $(".register_text_warn").html("请输入正确的手机号码");
            }
            $(".register_text_warn").css("display","block");
            $(".register_text_warn").animate({"opacity":1,"top":50});
        }
    })

    $('.register_pass').blur(function(){
        $(".register_pass_warn").css("display","none");
        $(".register_pass_warn").animate({"opacity":0,"top":90});
        if($(this).val().length<8){
            $(this).addClass("warn");
        }
        var count = 0;
        if(/[0-9]/.test($(this).val())){
            count++;
        }
        if(/[a-zA-Z]/.test($(this).val())){
            count++;
        }
        if(/[\W]/.test($(this).val())){
            count++;
        }
        if(count<2){
            $(this).addClass("warn");
        }
        if(count>=2 && $(this).val().length>=8){
            $(this).removeClass("warn");
        }
        count = 0;
    })
    $('.register_pass').focus(function(){
        if(/warn/.test($(this).attr("class"))){
            if($(this).val().length<8){
                $(".register_pass_warn").html("密码不能少于8位");
            }else{
                $(".register_pass_warn").html("请输入8-20位字母、数字和符号两种及以上组合");
            }
            $(".register_pass_warn").css("display","block");
            $(".register_pass_warn").animate({"opacity":1,"top":100})
        }
    })
    $('.register_repass').blur(function(){
        $(".register_repass_warn").css("display","none");
        $(".register_repass_warn").animate({"opacity":0,"top":140})
        if($(this).val()==$(".register_pass").val()){
            $(this).removeClass("warn");
        }else{
            $(this).addClass("warn");
        }
    })
    $('.register_repass').focus(function(){
        if(/warn/.test($(this).attr("class"))){
            $(".register_repass_warn").html("两次密码不一致");
            $(".register_repass_warn").css("display","block");
            $(".register_repass_warn").animate({"opacity":1,"top":150})
        }
    })
})