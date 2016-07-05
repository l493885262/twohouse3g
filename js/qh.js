$(function () {
    $(window).scroll(function () {
        listHeight();
    });
    $(window).resize(function () {
        listHeight();
    });
    listHeight();
});
function listHeight() {//高度计算
    var h = $(window).height();
    var headerSub = $(".dt_daoh").outerHeight(true);  
    var mapLeftBtn = $(".dt_jh").outerHeight(true);
    var addAutoHeight = h - (headerSub + mapLeftBtn);
    $(".dt_lplb").height(addAutoHeight);//列表高度
  $(".dt_dchu").css("height",h - headerSub);//列表高度        
	var w = $(window).width();
	var rightH= $(".dt_list").outerWidth(true);
	$("#container").width(w-rightH);
}
function setle(name,curr,n){
     for(i=1;i<=n;i++){
	    var menu=document.getElementById(name+i);
		var cont=document.getElementById(name+'_'+i);
		cont.style.display=i==curr?"block":"none";
		menu.className=i==curr?"ion":"";
	   }
}

function rmfy(name,curr,n){
     for(i=1;i<=n;i++){
	    var menu=document.getElementById(name+i);
		var cont=document.getElementById(name+'_'+i);
		cont.style.display=i==curr?"block":"none";
		menu.className=i==curr?"active":"";
	   }
}


$(function(){

$(".fy_ljbm").click(function(){
	if($(this).attr("esfId")){
		$("#esfIdInput").val($(this).attr("esfId"));
	}
	$("#userVerify").val('');
	$("#userName").val('');
	$("#userTel").val('');
	$("#tan_zs").show();
});
	function checkPhone(phone){ 
		if(!(/^1[3|4|5|7|8]\d{9}$/.test(phone))){ 
			return false;
		} 
		return true;
	}
	var verifyButClk = false;
	$("#getVerify").bind("click",function(){
		if(!sendmsgcontro){
			var userTel = $.trim($("#userTel").val());
			if(checkPhone(userTel)){
				$.post(verifyUrl,{phone:userTel},function(data){
					if(data.status != 1){
						layer.msg('发送失败');
					}
				});
				CountDown(this);
				sendmsgcontro = true;
			}
			else{
				layer.msg("手机号格式不正确！");
			}
		}
		return false;
	});
	$("#yuyueSubmit").bind("click",function(){
		var parma = {};
		parma.username = $.trim($("#userName").val());
		if(!parma.username || parma.username.length > 4){
			layer.msg("请输入您的真实姓名，方便我们更好的为您服务！");
			return false;
		}
		parma.phone = $.trim($("#userTel").val());
		if(!checkPhone(parma.phone)){
			layer.msg("手机号格式不正确！");
			return false;
		}
		parma.userVerify = $.trim($("#userVerify").val());
		if(parma.userVerify.length != 4){
			layer.msg("请输入正确的验证码");
			return false;
		}
		parma.esfId = $.trim($("#esfIdInput").val());
		if(parseInt(parma.esfId) > 0){
			$.post(yuyueUrl,parma,function(data){
				if(data.status != 1){
					layer.msg(data.tips);
				}
				else{
					$("#tan_zs").hide();
					layer.msg('预约成功，等待工作人员审核！');
				}
			});	
		}
		else{
			layer.msg("未知错误");
			return false;
		}
	});

$("#box_zs").click(function(){
$("#tan_zs").hide();
})

	$(".xq_xial").each(function(){
		var s=$(this);
		var z=parseInt(s.css("z-index"));
		var dt=$(this).children("dt");
		var dd=$(this).children("dd");
		var _show=function(){dd.slideDown(200);dt.addClass("cur");s.css("z-index",z+1);};   //展开效果
		var _hide=function(){dd.slideUp(200);dt.removeClass("cur");s.css("z-index",z);};    //关闭效果
		dt.click(function(){dd.is(":hidden")?_show():_hide();});
		dd.find("a").click(function(){dt.html($(this).html());_hide();});     //选择效果（如需要传值，可自定义参数，在此处返回对应的“value”值 ）
		$("body").click(function(i){ !$(i.target).parents(".xq_xial").first().is(s) ? _hide():"";});
	})
})

<!--收藏-->



$(function() {
 var flag=0;
$('.art-footl').click(function() {
	var pd = $(this).find("img").eq(0).hasClass('active');//true就说明是未收藏的状态  false反之
	var hand = pd ? 'add' : 'delete';
	var type = collectType;
	var dataid = $(this).attr("data");
	var _this = $(this);
	$.post(collectUrl,{hand:hand,type:type,dataid:dataid},function(data){
		if(data.status == 3){
			window.location.href = "http://www.berui.com/user/index.php/user/login";
		}
		else{
			if(pd){
				_this.find("img").eq(0).removeClass("active");
				_this.find("img").eq(1).addClass("active");
			}
			else{
				_this.find("img").eq(1).removeClass("active");
				_this.find("img").eq(0).addClass("active");
			}
		}
	});
 });
});




<!--周边配套-->
            var origin_type = 1;
            
                $(function(){
            
                    var mapSiderBar = {
            
                        closed : function(){
            
                            $('.xq2-warp .xq2-right').hide();
            
                            $('.xq2-warp .o-btn').show();
            
                            $('.xq2-warp .xq2-left').css({
            
                                'margin-right' : 0
            
                            })
            
                
            
                        },
            
                        opend : function(){
            
                            $('.xq2-warp .xq2-right').show();
            
                            $('.xq2-warp .o-btn').hide();
            
                            $('.xq2-warp .xq2-left').css({
            
                                'margin-right' : '243px'
            
                            })
            
                        }
            
                    }
            
                    
            
                    $('.s-btn').click(function(){
            
                        mapSiderBar.closed();
            
                    });
            
                    $('.o-btn').click(function(){
            
                        mapSiderBar.opend()
            
                    });
            
                    
            
                    $('.xq2-line .m-lines').each(function(index, element) {
            
                        $(this).find('p:lt(3)').show()
            
                    });
            
                    
            
                    $('.s-down-btn').click(function(){
            
                        $(this).parent().siblings().find('p').show();
            
                        $(this).hide().siblings().show()
            
                    });
            
                    $('.s-up-btn').click(function(){
            
                        $(this).parent().siblings().find('p:gt(2)').hide();
            
                        $(this).hide().siblings().show()
            
                    })		
                });
								

	$(function(){
		 $(".xq2_fyzp img").click(function(){
			 var _clickid = $(this).attr("data");
			 //var firstpic = $(".picmidmid ul li").first().find("img");
			 $(".picmidmid ul li").find("img").removeClass("selectpic");
			 $("#pic1").attr("curindex",_clickid - 1);
			var firstpic = $("#img_"+_clickid);
			var firstsrc = firstpic.attr("bigimg");
			var firsttxt = firstpic.attr("text");
			$("#pic1").attr("src", firstsrc);
			firstpic.addClass("selectpic");
			$(".picshowtxt_right").text(firsttxt);
		 $("#xq2_zs").show();
		 })
		 
		 
	})
	
$(function(){
	$(".dt_yinx").click(function(){
$(".dt_dchu").hide();
$(".dt_yinx").hide();
})
		
		 
		 $(".dt_ygb").click(function(){
			$(".dt_dchu").hide();
            $(".dt_yinx").hide();
		 })
	})
	
		 $(function(){
		 $(".xq2_fyzp img").click(function(){
		 $("#xq2_zs").show();
		 })
		 
		 $("p#hide_xc").click(function(){
			 $(this).parents("#xq2_zs").hide();
		 })
	})
	

	$(function(){
		 $(".xq2_fyzp2 li p").click(function(){
		 $("#xq3_zs").show();
		 })
		 
		 $("p#hide_xc").click(function(){
			 $(this).parents("#xq3_zs").hide();
		 })
	})



	
	
		
	

//
//		$(function(){
//		 $("#rightlist ul li").live('click',function(){
//			var _esfId = $(this).attr("data");
//			$.post(esfInfoUrl,{esfId:_esfId},function(data){
//				if(data.status == 1){
//					var pics = "";
//					var imgs = "";
//					if(data.data.pics.length > 0){
//						for(i=0;i<data.data.pics.length;i++){							
//							pics += '<li '+(i == 0 ? 'class="thistitle"' : '') + '></li>';
//							imgs += '<li><a href="'+data.data.esfUrl+'" target="_blank"><img src="'+data.data.pics[i].picAddress+'" /></a></li>';
//						}
//					}
//					$("#esfImgItem").empty();
//					$("#esfImgItem").append(pics);
//					$("#esfImg").empty();
//					$("#esfImg").append(imgs);
//					$("#esfTitle").empty();
//					$("#esfTitle").text(data.data.esfTitle);
//					$("#esfPrice").text(data.data.price+'万');
//					$("#esfHuxing").text(data.data.zuhe);
//					$("#esfBuildingarea").text(data.data.buildingArea+'平米');
//
//					$("#esfFloor").html('<em>楼层：</em>'+data.data.floor+'层/共'+data.data.buildInfo.allFloor);
//					$("#esfBuildYear").html('<em>建造年代：</em>'+data.data.villageInfo.buildingYears);
//					$("#esfDianti").html('<em>电梯：</em>'+data.data.buildInfo.elevator);
//					$("#esfTihu").html('<em>梯户配比：</em>'+data.data.buildInfo.elevatorHouse);
//					$("#esfChaoxiang").html('<em>朝向：</em>'+data.data.chaoxiang);
//					$("#esfHushu").html('<em>楼面户数：</em>'+data.data.buildInfo.hushu);
//					$("#esfZhuangxiu").html('<em>装修：</em>'+data.data.decorateText);
//					$("#esfMiaoshu").html(data.data.remarks);
//					$("#seeMore").attr("href",data.data.esfUrl);
//					$(".dt_yinx").show();	
//					$(".dt_dchu").show();
//				}
//				return false;
//			});
//		 })	
//		 
//		 		 $(".dt_yinx .dt_ygb").click(function(){
//	
//		 $(".dt_yinx").hide();
//		 })	 
//	
//	})
//	

	/*列表页消失*/
function set(name,curr,n){
     for(i=1;i<=n;i++){
	    var menu=document.getElementById(name+i);
		var cont=document.getElementById(name+'_'+i);
		cont.style.display=i==curr?"block":"none";
		menu.className=i==curr?"ion":"";
	   }
}

/*列表页消失*/
var wait=60;
var sendmsgcontro=false;
function CountDown(o) {
	if (wait == 0) {
		o.removeAttribute("disabled"); 
		o.style.backgroundColor='#e72520';
		o.text="获取验证码";
		wait = 60;
		sendmsgcontro = false;
	} else {
		o.setAttribute("disabled", true);
		o.style.backgroundColor='#ccc';
		o.style.color='#fff';
		o.style.border='1px solid #fff';
		o.text="重新发送(" + wait + ")";
		wait--;
	    timer=setTimeout(function() {
			CountDown(o)
		},
		1000)
	}
}	

$(function(){
	
})	


	
