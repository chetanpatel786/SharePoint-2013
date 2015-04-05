
       var frameEl = document.getElementsByTagName("IFRAME");
    var classEl = document.getElementsByClassName("ms-WPBody noindex");
    var chromeEl = document.getElementsByClassName("ms-webpart-chrome ms-webpart-chrome-vertical");

    $(document).ready(function () {
        for (var j = 0; j < classEl.length; j++) {
            classEl[j].style.width = "100%";
        }
        for (var i = 0; i < frameEl.length; i++) {
            frameEl[i].width = "100%";
        }
        for (var k = 0; k < chromeEl.length; k++) {
            chromeEl[k].style.width = "100%";
        }
    });
