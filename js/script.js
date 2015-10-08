$(document).ready(function(){


    //drop down




    //Check to see if the window is top if not then display button
    $(window).scroll(function(){
        if ($(this).scrollTop() > 100) {
            $('#toTop').fadeIn();
        } else {
            $('#toTop').fadeOut();
        }
    });

    //Click event to scroll to top
    $('#toTop').click(function(){
        $('html, body').animate({scrollTop : 0},800);
        return false;
    });



    //touday events
    var timeout;
    $("#events-list .event-owerlay").hover(function () {
            var self = this; 
            timeout = setTimeout(function(){
                $(self).find('.post-panel').removeClass('post-hidden');
                $('#events-list').height('412px');
            },400);
        }, function () { 
             clearTimeout(timeout);           
              $(this).find('.post-panel').addClass('post-hidden');
              $('#events-list').height('100px');            
        });

   


   
    $('#register-form-link').click(function(e) {
        $("#register-form").delay(100).fadeIn(100);
        $("#login-form").fadeOut(100);
        e.preventDefault();
    });



    //form validation
    $('#register-form').validate({
        rules:{
            username:{
                required:true,
                minlength: 2 
            },
            email:{
                required:true,
                email:true
            },
            password:{
                required:true,
                minlength: 5 
            },
            nickname:{
                required:true,
                minlength: 5 
            }

        },
        messages:{
            username:{
                required:"",
                minlength: "" 
            },
            email:{
                required:"",
                email:""
            },
            password:{
                required:"",
                minlength: "" 
            },
            nickname:{
                required:"",
                minlength: "" 
            }

        }
    });



    
    $('#login-form').validate({
        rules:{
            username:"required",            
            password:"required"
        },
        messages:{
            username:"",
            password:""
        }
    });


    $('#restore-ppassword-form').validate({
        rules:{
            username:"required"
        },
        messages:{
            username:"",
        }
    });


    //check if gallerea exist

    if($("#galleria").length !== 0) {
        // Load the classic theme
        Galleria.loadTheme('js/galleria/galleria.classic.min.js');
        // Initialize Galleria
        Galleria.run('#galleria');
    }




    //date paginator
    if($("#paginator").length !== 0) {
        $('#paginator').datepaginator();
    }


    if($("#dp-calendar").length !== 0) {
        $('#dp-calendar').datepicker(
            {language: 'ru'}
        );
    }

    if($(".ellipsis").length !== 0) {
    $(".ellipsis").ellipsis();
    }




});//end dom ready