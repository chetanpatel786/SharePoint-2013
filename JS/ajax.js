

 $(document).ready(function() {
 //$("#tester").empty();
 
 var pending=$.map(BOSSWS_GetPendingTicketList(), function(el){return el;})
 var stringified=JSON.stringify(BOSSWS_GetPendingTicketList());
alert(stringified);
var tester= document.getElementById("tester");
for(var i=0; i<pending.length; i++){
var div = document.createElement("div");
        div.innerHTML = (pending[i]);
        tester.appendChild(div);
}
});
/*$(document).ready(function () {
     $.support.cors = true;
    // alert("ajax.js loaded");
    //BOSSWS_LoginUser();
	  BOSSWS_GetTicketInfo(256);

	  BOSSWS_getSessionUserInfo("FullName");
	 //BOSSWS_Logout();

});*/



