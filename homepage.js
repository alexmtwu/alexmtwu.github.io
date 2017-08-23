// hamburger
$(document).ready(function(){
    $(".hamburger").click(function(){
        $(this).toggleClass('open');
    });
});



// dropdown
$(document).ready(function(){
$('#hamburger').on('click',function(){

	if($(this).attr('data-click-state') == 1) {
		$(this).attr('data-click-state', 0)
		$("#dropdown").slideToggle(180);
		$('html, body').css('overflow-y', 'auto', 'height', 'auto')
		$("#overlay").hide();
		$("#logo").css('opacity', '1');
		// $(".nav-bg").css('box-shadow','0px 2px 40px 0px rgba(0,0,0,0.08)')

	} else {
		$(this).attr('data-click-state', 1)
		$("#dropdown").slideToggle(180);
		$('html, body').css('overflow-y', 'hidden', 'height', '100%')
		$("#overlay").show();
		$("#logo").css('opacity', '0');
		// $(".nav-bg").css('box-shadow','0px 0px 0px 0px rgba(0,0,0,0)')
}

});
});




// $(document).ready(function(){
// $('#hamburger').click(hamburger)
// });
//
// function hamburger() {
// 	if($(this).attr('data-click-state') == 1) {
// 	$(this).attr('data-click-state', 1)
// 	$("#dropdown").slideToggle(250);
// 	$('html, body').css('overflow', 'auto', 'height', 'auto')
// 	$("#overlay").hide();
// 	} else {
// 	$(this).attr('data-click-state', 0)
// 	$("#dropdown").slideToggle(250);
// 	$('html, body').css('overflow', 'hidden', 'height', '100%')
// 	$("#overlay").show();
// 	}
// }

//
//
// $(document).ready(function(){
// $('#overlay').on('click',function(){
//
// 	$("#dropdown").slideToggle(250);
// 	$('html, body').css('overflow', 'auto', 'height', 'auto')
// 	$("#overlay").hide();
// 	$('.hamburger').toggleClass('open');
// });
// });



// $(document).ready(function(){
// $('.logo').on('click',function(){
// 	$('#hamburger').toggle(fn1, fn2);
// });
// });
//
// function fn2() {
// 	$("#dropdown").slideToggle(250);
// 	$('html, body').css('overflow', 'auto', 'height', 'auto')
// 	$("#overlay").hide();
// 	}
//
// function fn1() {
// 	$("#dropdown").slideToggle(250);
// 	$('html, body').css('overflow', 'hidden', 'height', '100%')
// 	$("#overlay").show();
// 	}



// $('#toggled').toggle(fn1, fn2);
// $('#clear').click(function() {
//         $('#toggled').unbind('click').toggle(fn1, fn2);
// });
