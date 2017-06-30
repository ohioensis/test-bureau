        $(document).ready(function(){
    	$("#menu").on("click","a", function (event) {
        	event.preventDefault();

        	var id  = $(this).attr('href'),
        
        	top = $(id).offset().top;

        $('body,html').animate({scrollTop: top}, 750);

    });

});

        $(document).ready(function(){
    	$("#header-nav").on("click","a", function (event) {
        	event.preventDefault();

        	var id  = $(this).attr('href'),
        
        	top = $(id).offset().top;

        $('body,html').animate({scrollTop: top}, 1000);

    });

});

        $(document).ready(function(){
    	$("#about").on("click","a", function (event) {
        	event.preventDefault();

        	var id  = $(this).attr('href'),
        
        	top = $(id).offset().top;

        $('body,html').animate({scrollTop: top}, 2500);

    });

});

                $(document).ready(function(){
    	$("#page-footer").on("click","a", function (event) {
        	event.preventDefault();

        	var id  = $(this).attr('href'),
        
        	top = $(id).offset().top;

        $('body,html').animate({scrollTop: top}, 1500);

    });

});