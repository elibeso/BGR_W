            
    /* Logo Header Web */

    jQuery(function(){
        jQuery(window).scroll(function(){
            if(jQuery(this).scrollTop() > 100) {
                 jQuery('header .logo')
                    .css({
                        'height':'50px',
                        '-webkit-transition':'all 0.5s ease',
                        '-moz-transition':'all 0.5s ease',
                        '-ms-transition':'all 0.5s ease',
                        '-o-transition':'all 0.5s ease',
                        'transition':'all 0.5s ease'
                    })
                    .attr('src','../../images/logo-drop.svg');
                    }
            if(jQuery(this).scrollTop() < 100) {
                jQuery('header .logo')
                    .css({
                        'height':'110px',
                        '-webkit-transition':'all 0.5s ease',
                        '-moz-transition':'all 0.5s ease',
                        '-ms-transition':'all 0.5s ease',
                        '-o-transition':'all 0.5s ease',
                        'transition':'all 0.5s ease'
                    })    
                .attr('src','../../images/logo-drop.svg');
                }
            });
        });

    
 

            
  /* Header Web */

  $(document).ready(function() {
    var scroll = $(window).scrollTop();
    $('#posicion').text(scroll);
    $(window).scroll(function(event) {
        var scroll = $(window).scrollTop();
        $('#posicion').text(scroll);
        /*Cambia el color del div cuando es distinto a 0*/
        if(scroll>100){
            $('header .dropdown-header').css({
                'top':'11px',
                'left':'65px',
                '-webkit-transition':'all 0.5s ease',
                '-moz-transition':'all 0.5s ease',
                '-ms-transition':'all 0.5s ease',
                '-o-transition':'all 0.5s ease',
                'transition':'all 0.5s ease',
            });
            $('header .sec-buttons').css({
                'display':'block',
            });
        }else{
            $('header .dropdown-header').css({
                'top':'45px',
                'left':'150px',
                '-webkit-transition':'all 0.5s ease',
                '-moz-transition':'all 0.5s ease',
                '-ms-transition':'all 0.5s ease',
                '-o-transition':'all 0.5s ease',
                'transition':'all 0.5s ease',
            });
            $('header .sec-buttons').css({
                'display':'none',
            });
        }
    });
});


    /* Header Web */

    $(document).ready(function() {
        var scroll = $(window).scrollTop();
        $('#posicion').text(scroll);
        $(window).scroll(function(event) {
            var scroll = $(window).scrollTop();
            $('#posicion').text(scroll);
            /*Cambia el color del div cuando es distinto a 0*/
            if(scroll>100){
                $('.header-web').css({
                    'background-color':'#003057',
                    'padding':'10px 50px',
                    '-webkit-transition':'all 0.5s ease',
                    '-moz-transition':'all 0.5s ease',
                    '-ms-transition':'all 0.5s ease',
                    '-o-transition':'all 0.5s ease',
                    'transition':'all 0.5s ease',
                });
            }else{
                $('.header-web').css({
                    'background-color':'transparent',
                    'padding':'30px 50px',
                    '-webkit-transition':'all 0.5s ease',
                    '-moz-transition':'all 0.5s ease',
                    '-ms-transition':'all 0.5s ease',
                    '-o-transition':'all 0.5s ease',
                    'transition':'all 0.5s ease',
                });
            }
        });
    });

    /* Header Mobil */

    $(document).ready(function() {
        var scroll = $(window).scrollTop();
        $('#posicion').text(scroll);
        $(window).scroll(function(event) {
            var scroll = $(window).scrollTop();
            $('#posicion').text(scroll);
            /*Cambia el color del div cuando es distinto a 0*/
            if(scroll>100){
                $('.header-mobil').css({
                    'background-color':'#003057',
                    'padding':'10px 20px 10px 0px',
                    '-webkit-transition':'all 0.5s ease',
                    '-moz-transition':'all 0.5s ease',
                    '-ms-transition':'all 0.5s ease',
                    '-o-transition':'all 0.5s ease',
                    'transition':'all 0.5s ease',
                });
            }else{
                $('.header-mobil').css({
                    'background-color':'transparent',
                    'padding':'20px 20px 20px 0px',
                    '-webkit-transition':'all 0.5s ease',
                    '-moz-transition':'all 0.5s ease',
                    '-ms-transition':'all 0.5s ease',
                    '-o-transition':'all 0.5s ease',
                    'transition':'all 0.5s ease',
                });
            }
        });
    });

    $(document).ready(function() {
        var scroll = $(window).scrollTop();
        $('#posicion').text(scroll);
        $(window).scroll(function(event) {
            var scroll = $(window).scrollTop();
            $('#posicion').text(scroll);
            /*Cambia el color del div cuando es distinto a 0*/
            if(scroll>100){
                $('header .menu').css({
                    'padding-top':'2px',
                    '-webkit-transition':'all 0.5s ease',
                    '-moz-transition':'all 0.5s ease',
                    '-ms-transition':'all 0.5s ease',
                    '-o-transition':'all 0.5s ease',
                    'transition':'all 0.5s ease',
                });
            }else{
                $('header .menu').css({
                    'padding-top':'10px',
                    '-webkit-transition':'all 0.5s ease',
                    '-moz-transition':'all 0.5s ease',
                    '-ms-transition':'all 0.5s ease',
                    '-o-transition':'all 0.5s ease',
                    'transition':'all 0.5s ease',
                });
            }
        });
    });

    $(document).ready(function() {
        var scroll = $(window).scrollTop();
        $('#posicion').text(scroll);
        $(window).scroll(function(event) {
            var scroll = $(window).scrollTop();
            $('#posicion').text(scroll);
            /*Cambia el color del div cuando es distinto a 0*/
            if(scroll>100){
                $('header .sec-buttons').css({
                    'padding-top':'2px',
                    '-webkit-transition':'all 0.5s ease',
                    '-moz-transition':'all 0.5s ease',
                    '-ms-transition':'all 0.5s ease',
                    '-o-transition':'all 0.5s ease',
                    'transition':'all 0.5s ease',
                });
            }else{
                $('header .sec-buttons').css({
                    'padding-top':'10px',
                    '-webkit-transition':'all 0.5s ease',
                    '-moz-transition':'all 0.5s ease',
                    '-ms-transition':'all 0.5s ease',
                    '-o-transition':'all 0.5s ease',
                    'transition':'all 0.5s ease',
                });
            }
        });
    });


 /** Menu Lateral ****/
        function openNav() {
            document.getElementById("mySidenav").style.width = "100%";
        }

        function closeNav() {
            document.getElementById("mySidenav").style.width = "0";
        }

        $("#sendForm input").on("focusout", function() {
                $(this).parsley().validate();
                // If the form is valid, will proceed with submission.
                if ($(this).parsley().isValid()) {
                    $(".sendit").removeAttr('disabled')
                }
                event.preventDefault();
            })
            //SEND FORM TO GDOCS
        var form = document.getElementById('sendForm');
        form.addEventListener("submit", e => {
            e.preventDefault();
            fetch(form.action, {
                method: "POST",
                body: new FormData(document.getElementById("sendForm")),
            }).then(
                response => response.json()
            ).then((html) => {
                // you can put any JS code here
                $(".mensaje").addClass("mensaje-view")
                $("#sendForm").addClass("d-none")
            });
        });

        $(".showForm").click(function() {
            $(".registerform.d-none").removeClass("d-none")
        })
        $(".cerrar-form").click(function() {
            $(".registerform").addClass("d-none")
        })
 
 /*******send from movil**********/

$("#sendForm-mobil input").on("focusout", function() {
    $(this).parsley().validate();
                // If the form is valid, will proceed with submission.
    if ($(this).parsley().isValid()) {
        $(".sendit").removeAttr('disabled')
    }
    event.preventDefault();
})
            //SEND FORM TO GDOCS
var form = document.getElementById('sendForm-mobil');
form.addEventListener("submit", e => {
    e.preventDefault();
    fetch(form.action, {
        method: "POST",
        body: new FormData(document.getElementById("sendForm-mobil")),
    }).then(
    response => response.json()
    ).then((html) => {
                // you can put any JS code here
        $(".mensaje").addClass("mensaje-view")
        $("#sendForm-mobil").addClass("d-none")
                //alert('success')

    });
});

