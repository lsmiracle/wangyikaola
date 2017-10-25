$(function(){
	
	$(".shouji").hover(function(){
		$(this).parent().next().toggleClass("active");
	});
	
	$(".dropdown").hover(function(){
		$(this).find(".dropdown-menu").toggleClass("active");
	});
 /* $("daohang").hover(function(){
		$(this).find("a").toggleClass("textcolor");
	});*/
	
  for(var i=0;i<=4;i++){
  	 $($(".saoma ul li")[i]).hover(function(){
  	 	let index = $(this).index();
  	 	if(index>0){
  	 		$(".saoma img").css("display","none");
  	 	    $($(".saoma img")[index-1]).css("display","block");
  	 	}else{
  	 		$(".saoma img").css("display","none");
  	 	}
  	 })
  }
  
})
