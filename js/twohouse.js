$(function() {
	//条件搜索导航切换
	$(".c-menu li").click(function() {
		var index=$(this).index();
		if ($(this).hasClass("active")) {
			gbc ();
		}else{
			$(this).addClass('active').siblings().removeClass('active');
			$(".c-com").show().children().eq(index).show().siblings().hide();
			$(".pop").show();
		};		
	});
	$(".pop").click(function() {
		gbc ();
	});;
	//设置区域模块高度
	$(".c-menu li").first().click(function() {
	$(".c-region").find('dl').height($(".c-region").height())

	});;
	//区域--展示
	$(".c-region").find('h3').click(function() {
		$(this).parent().addClass('active').siblings().removeClass('active');
	});
	//区域--选择
	$(".c-region").find('dd').click(function() {

		$(this).addClass('active').siblings().removeClass('active').parents("li").siblings().find('dd').removeClass('active');
		var _html=$(this).html();
		$(".c-menu li").first().children('span').html(_html);
		gbc();
	});
	//其他--选择
	$(".other-a li").click(function() {
		$(this).toggleClass('active');
	});
	$(".other-b li,.other-c li").click(function() {
		$(this).toggleClass('active').siblings().removeClass('active');
	});
	//其他--清空
	$(".c-btn input[type='button']").click(function() {
		$(".c-other").find('li').removeClass('active');
	});
	//总价--输入价格区间

	//总价与户型--选择
	$(".c-total li,.c-type li").click(function() {
		$(this).addClass('active').siblings().removeClass('active');
		var index = $(this).parent().parent().index();
		var _html = $(this).html();
		$(".c-menu li").eq(index).children().html(_html);
		gbc ()
	});
	//其他--确认
	$(".c-btn input[type='submit']").click(function() {
		gbc ()
	});
	//点击选择关闭搜索内容模块
	function gbc () {
		$(".c-com,.pop").hide();
		$(".c-menu li").removeClass('active');
	}
	//
	$(".sec-btn").click(function() {
		var vala=parseInt($(".sec-a").val());
		var valb=parseInt($(".sec-b").val());
		if (vala>=valb) {
			layer.open({
			    content: '价格区间输入有误！',
			    // style: 'background-color:#09C1FF; color:#fff; border:none;',
			    time: 2
			}) 
			return false;
		}else{
			gbc ();
			$(".c-menu li").eq(1).children().html(vala+"-"+valb);
		};
	});
	// 图片懒加载
	picLazyLoad({
      className: "lazyload"
    });
//
});

