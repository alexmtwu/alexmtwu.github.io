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
    $("#dropdown").css('opacity', '0');
		$("#dropdown").slideToggle(250);
		$('html, body').css('overflow-y', 'auto', 'height', 'auto')
		$("#overlay").hide();
		$("#logo").css('opacity', '1');

	} else {
		$(this).attr('data-click-state', 1)
    $("#dropdown").css('opacity', '1');
		$("#dropdown").slideToggle(250);
		$('html, body').css('overflow-y', 'hidden', 'height', '100%')
		$("#overlay").show();
		$("#logo").css('opacity', '0');


}
});

$("#overlay").on('click',function() {
      $('#hamburger').click();
});
});






// tabs
function openTab(evt, tabClicked) {
    // Declare all variables
    var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // underline = document.getElementsById(line);
    // for (i = 0; i < tablinks.length; i++) {
    //     underline.style.width = tablinks[i].style.width;
    // }


    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(tabClicked).style.display = "block";
    evt.currentTarget.className += " active";
}
