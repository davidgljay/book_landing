(function($) {
    "use strict"; // Start of use strict

	const path = window.location.pathname;
    const link = document.querySelector( `.navbar-default li a[href="${path}"]` );

    $(link).addClass('active');

    $('#organizingForm').submit(function(e){
        e.preventDefault();
        const body = {
            form: $('#organizingForm').serializeArray().reduce((obj, item) => { obj[item.name] = item.value; return obj; }, {}),  
            subject: "New Submission on Relationality Book Site"
        }
        $.ajax({
            url: 'https://faas-nyc1-2ef2e6cc.doserverless.co/api/v1/web/fn-8e8c4968-55c0-47b4-a2c2-0a18affc3f51/emailer/send',
            type: 'post',
            contentType:'application/json',
            data:JSON.stringify(body),
            success:function(){
                $('#organizingArea').hide()
                $('#organizingThanks').show()
            }
        });
    });

})(jQuery); // End of use strict
