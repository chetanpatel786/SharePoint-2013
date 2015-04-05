  $(document).ready(function() {
  	$('#rootwizard').bootstrapWizard({onTabShow: function(tab, navigation, index) {
		var $total = navigation.find('li').length;
		var $current = index+1;
		var $percent = ($current/$total) * 100;
		$('#rootwizard').find('.bar').css({width:$percent+'%'});
	}});


    GetAssets();

});

function GetAssets()
{
        //The Web Service method we are calling, to read list items we use 'GetListItems'
        var method = "GetListItems";
        
        //The display name of the list we are reading data from
        var list = "Dummy Assets";

        //We need to identify the fields we want to return. In this instance, we want the Name (Title),
        //Blog, and Picture fields from the Speakers list. You can see here that we are using the internal field names.
        //The display name field for the Speaker's name is "Name" and the internal name is "Title". You can see it can 
        //quickly become confusing if your Display Names are completely differnt from your internal names. 
        //For whatever list you want to read from, be sure to specify the fields you want returned. 
        var fieldsToRead =     "<ViewFields>" +
                                "<FieldRef Name='Title' />" +
                                "<FieldRef Name='Item_x0020_Type' />" +
                            "</ViewFields>";
                            
        //this is that wonderful CAML query I was talking about earlier. This simple query returns
        //ALL rows by saying "give me all the rows where the ID field is not equal to 0". I then 
        //tell the query to sort the rows by the Title field. FYI: a blank query ALSO returns
        //all rows, but I like to use the below query because it helps me know that I MEANT to 
        //return all the rows and didn't just forget to write a query :)
        var query = "<Query>" +
                        "<Where>" +
                            "<Neq>" +
                                "<FieldRef Name='ID'/><Value Type='Number'>0</Value>" + 
                            "</Neq>" +
                        "</Where>" +
                        "<OrderBy>" + 
                            "<FieldRef Name='Title'/>" +
                        "</OrderBy>" +
                    "</Query>";
                    
         var array= [];

        //Here is our SPServices Call where we pass in the variables that we set above
        $().SPServices({
                operation: method,
                async: false,  //if you set this to true, you may get faster performance, but your order may not be accurate.
                listName: list,
                CAMLViewFields: fieldsToRead,
                  CAMLQuery: query,
                      //this basically means "do the following code when the call is complete"
                    completefunc: function (xData, Status) { 
                        //this code iterates through every row of data returned from the web service call
                        $(xData.responseXML).SPFilterNode("z:row").each(function() { 
                            //here is where we are reading the field values and putting them in JavaScript variables
                            //notice that when we read a field value there is an "ows_" in front of the internal field name.
                            //this is a SharePoint Web Service quirk that you need to keep in mind. 
                            //so to read a field it is ALWAYS $(this).attr("ows_<internal field name>");
                            
                            //get the title field (Speaker's Name)
                            var name = ($(this).attr("ows_Title"));
                            
							var itemType= ($(this).attr("ows_Item_x0020_Type"));
                            array.push(name,itemType);
                        });
                        return(array);                
                    }
        });

}
