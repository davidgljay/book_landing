(function($) {
    "use strict"; // Start of use strict

	const path = window.location.pathname;
    const link = document.querySelector( `.navbar-default li a[href="${path}"]` );

    $(link).addClass('active');

    $('#contactForm').submit(function(e){
        e.preventDefault();
        $.ajax({
            url: 'https://hook.us1.make.com/hoxxkds733b1orwxowtdwuxg6m3gy4lo',
            type: 'post',
            data:$('#organizingForm').serialize(),
            success:function(){
                $('#organizingArea').hide()
                $('#organizingThanks').show()
                console.log('success')
            }
        });
    });

})(jQuery); // End of use strict
