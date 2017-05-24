$(document).ready(function() {
	//eBay API account ID
	var id = "dereks17";
	
	//Construct the eBay API call
	var url = "http://svcs.ebay.com/services/search/FindingService/v1";
    url += "?OPERATION-NAME=findItemsByKeywords";
    url += "&SERVICE-VERSION=1.0.0";
    url += "&SECURITY-APPNAME=" + id;
    url += "&GLOBAL-ID=EBAY-US";
    url += "&RESPONSE-DATA-FORMAT=JSON";
    url += "&callback=_cb_findItemsByKeywords";
    url += "&REST-PAYLOAD";
    url += "&keywords=windham%20nh";
    url += "&paginationInput.entriesPerPage=3";
	
	//Callback function to parse and display results of API call
	function _cb_findItemsByKeywords(root) {
		//All items returned in the result; may be empty list
		var items = root.findItemsByKeywordsResponse[0].searchResult[0].item || [];
		
		//Store the HTML generated to display the results
		var html = [];
		
		//Add styling for table
		html.push('<table width="100%" border="0" cellspacing="0" cellpadding="3"><tbody>');
		
		//Loop through all of the results and add each result to the HTML table
		for(var i = 0; i < items.length; i++) {
			//Get the attributes for the current item
			var item = items[i];
			var title = item.title;
			var pic = item.galleryURL;
			var viewitem = item.viewitemURL;
			
			//Check if the title and item URL are not null before adding to table
			if(title != null && viewitem != null) {
				html.push('<tr><td><img src="' + pic + '" border="0"></td>' + '<td><a href="' + viewitem + '" target="_blank">' + title + '</a></td></tr>');
			}
		}
		
		//Add end of HTML table
		html.push('</tbody></table>');
		
		//Add table to the HTML page
		document.getElementById("results").innerHTML = html.join("");
	}
	
	// Submit the request
	s=document.createElement('script'); // create script element
	s.src= url;
	document.body.appendChild(s);
})