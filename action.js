$(document).ready(function() {
	//eBay API account ID
	var id = "dereks17";

	//Set the correct app ID to make API calls
	$.ebay.appid = id;
	
	//eBay API call to find items with "ipod nano 4gb" in title
	$.ebay.call("FindItems",
            {QueryKeywords: "ipod nano 4gb"}, 
            function (response) {
              alert(response.Item.length + " items found");
            });
})