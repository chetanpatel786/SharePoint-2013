$('body').on('click', '.CustomerAssets', slideup);
$('body').on('click', '#showit', slidedown);

function slideup () {
    $("#assets").hide("slide", {}, 1000, callback);
}


function slidedown () {
	$("#showit").hide("highlight", {}, 1, callout);
}

   
function callout() {
   setTimeout(function () {
        $("#assets").removeAttr("style").hide().fadeIn();
    }, 1);
    $( "#accordion" ).accordion( "option", "active", 0 );
}
// callback function to bring a hidden box back    
function callback() {
    setTimeout(function () {
        $("#showit").removeAttr("style").hide().fadeIn();
    }, 1);
}   

  $(function() {
    $( "#accordion" ).accordion({
      collapsible: true
    });
  });

