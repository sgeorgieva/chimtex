import 'jquery';

$(document).ready(function() { 
	//fix mobile navbar
    $('.navbar-toggle').on('click', function() {
      $('body > header > div.container-fluid.image')
        .toggleClass('image image2')
            .css('background-color', 'transparent', 'height', '0');  
    });
    //adding class article to menu
	$(function(){
	    var current_page_URL = location.href;
	    $("a").each(function() {
	        if ($(this).attr("href") !== "#") {
	            var target_URL = $(this).prop("href");
	            if (target_URL == current_page_URL) {
	                $('.nav li a').removeClass('menu');
	                $(this).addClass('active');
	                return false;
	            }
	        }
	    });
    });
    //adding new padding to class breadcrumb
     $(function(){
        var current_page_URL = location.href;
        $("a").each(function() {
            if ($(this).attr("href") == "contacts.html") {
                var target_URL = $(this).prop("href");
                if (target_URL == current_page_URL) {
                    $('.breadcrumb').css('padding', '15px 0');
                    // $(this).addClass('active');
                    return false;
                }
            }
        });
    });
    //fix footer
	function resize() {
        if ($(window).width() < 768) {
            $('.nopadding').removeClass('nopadding');
        }
        else {
            $('body > footer > div.container-fluid.navy > div > div').addClass('nopadding');
        }
    }
    $(document).ready( function() {
        $(window).resize(resize);
        resize();
    });   
}); 