     $document.ready(function(){
     var url = 'http://durham-vboss/mobile/helpdeskservice.asmx/getTicketInfo';
     var soapMessage = '<?xml version="1.0" encoding="utf-8"?><soap12:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap12="http://www.w3.org/2003/05/soap-envelope"><soap12:Body><Login xmlns="http://tempuri.org/"><strUser>username</strUser><strPwd>password</strPwd></soap12:Body></soap12:Envelope>';
     
     $.ajax({
         url: "../_api/SP.WebProxy.invoke",
         type: "POST",
         data: JSON.stringify({
             "requestInfo": {
                 "__metadata": {
                     "type": "SP.WebRequestInfo"
                 },
                     //"Host": "durham-vboss",
                     "Method": "POST",
                     "Url": url,
                 "Body": soapMessage,
                     //"Content-Type": "application/soap+xml; charset=utf-8",
                     //"Content-Length": soapMessage.length,
                 //dataType: "xml",
                     "Headers": {

                     "results": [{

                         "__metadata": {
                             "type": "SP.KeyValue"
                         },
                             "Key": "Accept",
                             "Value": "application/json;odata=verbose",
                             "ValueType": "Edm.String"

                     }]

                 }
             }

         }),
         headers: {
             "Accept": "application/soap+xml; charset=utf-8",                 "Content-Type": "application/json;odata=verbose",
                 "X-RequestDigest": $("#__REQUESTDIGEST").val()
         },

         success: OnSuccessCall,
         error: OnErrorCall

     });

 });
    function OnSuccessCall(response) {
        var xmlStringified=xmlToString(response);
        console.log(xmlStringified);
    }


    function OnErrorCall(response) {
        console.log(response.status + " " + response.statusText);
    }

	function xmlToString(xmlData) { 

    var xmlString;
    //IE
    if (window.ActiveXObject){
        xmlString = xmlData.xml;
    }
    // code for Mozilla, Firefox, Opera, etc.
    else{
        xmlString = (new XMLSerializer()).serializeToString(xmlData);
    }
    return xmlString;
}
