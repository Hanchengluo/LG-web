/*获取网页参数函数*/
(function($){
  $.getUrlParam = function(name)
  {
  var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
  var r = window.location.search.substr(1).match(reg);
  if (r!=null) return unescape(r[2]); return null;
  }
})(jQuery);

$(document).ready(function(){
  /*顶部导航自适应宽度*/
  var AllLiWidth=0;
  $("#nav li").each(function(){
	  AllLiWidth += $(this).innerWidth();
	  $(this).attr('rel',$(this).innerWidth());
  });
  //自适应宽度
  function adaptive(){
	var PaddingWidth=parseInt(($('#nav').width()-AllLiWidth)/$("#nav").children('li').size());
	$("#nav li").each(function(){
	  $(this).css({'width':parseInt($(this).attr('rel'))+PaddingWidth});
	}); 
  };
  adaptive();
  $(window).resize(function(){
	  adaptive();
  })
  
	
  /*底部导航*/
  var obj=$('#quickNav_logo');
  var tar=$('#quickNav');
  
  obj.click(function(){
	if($(this).hasClass('active')){
	  $('#cover').stop(true,true).fadeOut('fast');
	  tar.find('.hide').stop(true,true).slideUp('fast');
	}else{
	  $('#cover').stop(true,true).fadeIn('fast');
	  tar.find('.hide').stop(true,true).slideDown('fast');
	}
	$(this).toggleClass('active');
  });
  $('#cover').click(function(){
	$(this).stop(true,true).fadeOut('fast');
	obj.removeClass('active');
	tar.find('.hide').stop(true,true).slideUp('fast');
  })
});