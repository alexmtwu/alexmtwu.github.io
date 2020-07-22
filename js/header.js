// $(document).ready(function(){
//   var str=[" Do Design.     "," Enjoy Coding.     "," Practice Ceramics.     "];
// var pos=0,a=0;
// var html="";
//   $(".headline").css("letterSpacing","0px");
//   function displayText(){
//
//     //console.log("entered");
//     //$(".text-change").html(str[pos++]);
//     if(pos>2)pos=0;
//     console.log(pos);
//
//     console.log(str[pos].length);
//
//         //console.log("entered loop")
//         if(a<str[pos].length)
//         {
//           html+=str[pos].charAt(a);
//           $(".text-change").html(html);
//           a++;
//         }
//     else {
//       a=0;
//       pos++;
//       html="";
//     }
//         //console.log("done");
//    }
//
// setTimeout(setInterval(displayText,150),2000);
//
//
// });
//
//
// $(function(){
//
// 			var $slogans = $("p.slogan").find("strong");
// 			var $holder = $("#holder");
//
// 			//set via JS so they're visible if JS disabled
// 			$slogans.parent().css({position : "absolute", top:"0px", left:"0px"});
//
// 			//settings
// 			var transitionTime = 0.4;
// 			var slogansDelayTime = 2;
//
// 			//internal
// 			var totalSlogans = $slogans.length;
//
// 			var oldSlogan = 0;
// 			var currentSlogan = -1;
//
// 			//initialize
// 			switchSlogan();
//
// 			function switchSlogan(){
//
// 				oldSlogan = currentSlogan;
//
// 				if(currentSlogan < totalSlogans-1){
// 					currentSlogan ++
// 				} else {
// 					currentSlogan = 0;
// 				}
//
// 				TweenLite.to($slogans.eq(oldSlogan), transitionTime, {top:-20, alpha:0, rotationX: 90});
// 				TweenLite.fromTo($slogans.eq(currentSlogan), transitionTime, {top:20, alpha:0, rotationX: -90 }, {top:0, alpha:1, rotationX:0});
//
// 				TweenLite.delayedCall(slogansDelayTime, switchSlogan);
// 			}
//
// 		});


// $(function () {
//   count = 0;
//   wordsArray = [" Do Design."," Enjoy Coding."," Practice Ceramics."];
//   setInterval(function () {
//     count++;
//     $("#text-change").slideToggle(200, function () {
//       $(this).text(wordsArray[count % wordsArray.length]).slideToggle();
//     });
//   }, 2000);
// });

$(function () {

    var wordsArray = [" Do Design."," Enjoy Coding."," Think in Tao.", " Own a Shiba Inu."];
    index = 0;


    function cycle() {
        $('#text-change').html(wordsArray[index]);
        // $('#text-change').css('opacity', '1');
        index++;

        if (index === wordsArray.length) {
            index = 0;
        }
        setTimeout(cycle, 1500);
    }
    cycle();
});
