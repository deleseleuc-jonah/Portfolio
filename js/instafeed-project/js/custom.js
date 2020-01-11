$(document).ready(function() {


    var userFeed = new Instafeed({
        get: 'user',
        userId: '8576759379',
        limit: 12,
        resolution: 'standard_resolution',
        accessToken: '8576759379.1677ed0.da588e77862a4bfb833f5452e2106e5e',
        sortBy: 'most-recent',
        template: '<div class="col-lg-3 instaimg"><a href="{{image}}" title="{{caption}}" target="_blank"><img src="{{image}}" alt="{{caption}}" class="img-fluid"/></a></div>',
    });


    userFeed.run();

    
    // This will create a single gallery from all elements that have class "gallery-item"
    $('.gallery').magnificPopup({
        type: 'image',
        delegate: 'a',
        gallery: {
            enabled: true
        }
    });


});