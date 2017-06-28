'use strict'

require('../css/e_class.scss');
var $ = require('../../lib/jquery/dist/jquery.min.js');
// 导航颜色
$(function(){
	$('.my-nav-tabs>li:eq(3)>a').css({'color':'#3b75eb'});
})