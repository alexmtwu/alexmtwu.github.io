$(document).ready(function(){
  var str=[" Do Design.     "," Enjoy Coding.     "," Practice Ceramics.     "];
var pos=0,a=0;
var html="";
  $(".headline").css("letterSpacing","0px");
  function displayText(){

    //console.log("entered");
    //$(".text-change").html(str[pos++]);
    if(pos>2)pos=0;
    console.log(pos);

    console.log(str[pos].length);

        //console.log("entered loop")
        if(a<str[pos].length)
        {
          html+=str[pos].charAt(a);
          $(".text-change").html(html);
          a++;
        }
    else {
      a=0;
      pos++;
      html="";
    }
        //console.log("done");
   }

setTimeout(setInterval(displayText,150),2000);


});
