'use strict'

require('../css/e_class_detail.scss');

var $ = require('../../lib/jquery/dist/jquery.min.js');
$(function(){
	  // 导航颜色
		$('.my-nav-tabs>li:eq(3)>a').css({'color':'#3b75eb'});
		// 课程目录导航切换
		navComponent();
		function navComponent(){
			$(".tab-component-nav>ul>li").on("click",function(){
				var objThis = $(this);
				if(!objThis.hasClass("tab-component-nav-act")){
					objThis.parent().find(".tab-component-nav-act").removeClass("tab-component-nav-act");			
					objThis.addClass("tab-component-nav-act");
					objThis.parent().parent().parent().find(".tab-component-item-act").removeClass("tab-component-item-act");
					objThis.parent().parent().parent().find(".tab-component-item").eq(objThis.index()).addClass("tab-component-item-act");
				}
			});
		}
})
