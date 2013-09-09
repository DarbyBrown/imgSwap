function checkImage(testUrl) {
    var http = jQuery.ajax({
        type: "HEAD",
        url: testUrl,
        async: false
    });

   return http.status == 200;
}


function imgSwap() {

    var images = $('img[data-swap]'); 


    for (var i = 0; i < images.length; i++) {

        var imageFormat = images[i].src.substr(-4);
        var imageName = images[i].src.substr(0, images[i].src.length - 7);
        var sml = imageName + "sml" + imageFormat;
        var med = imageName + "med" + imageFormat;
        var lrg = imageName + "lrg" + imageFormat;


        if (window.devicePixelRatio > 1) { 
            if ($(window).width() > 480 && checkImage(lrg)) {
                imageName = lrg;

            } else {
                imageName = med;
            }

        } else if ($(window).width() > 900 && checkImage(lrg)) {
            imageName = lrg;

        } else if ($(window).width() > 480) {
            imageName = med;
        } else {
            imageName = sml;
        }


        images[i].src = imageName;
    }

}
imgSwap();

$(window).resize(function() { imgSwap(); });