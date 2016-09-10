
serialize = function(obj) {
	var str = [];
    for(var p in obj)
	    if (obj.hasOwnProperty(p)) {
	      str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
	    }
	 return str.join("&");
}
$(function(){

	$.urlParam = function(name){
		var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
		return results[1] || 0;
	}

	var searchTerm = decodeURIComponent($.urlParam('search'));  
	searchTerm = searchTerm.replace(/\+/g, " ");	

	$.getJSON("http://www.carqueryapi.com/api/0.3/?callback=?", {cmd:"getTrims", keyword: searchTerm}, function(data) {

	   //The 'data' variable contains all response data.
	   var makes = data.Trims;
	   for (var i = 0; i < makes.length; i++)
	   {
	       //You can now do what you like with the response data
	       //console.log(makes[i]);
	       

		   $.ajax({
		        url: "https://api.cognitive.microsoft.com/bing/v5.0/images/search?" + $.param({q: "nano"}),
		        beforeSend: function(xhrObj){
		            // Request headers
		            xhrObj.setRequestHeader("Content-Type","multipart/form-data");
		            xhrObj.setRequestHeader("Ocp-Apim-Subscription-Key","169608d4f34f4c058aa07dc55f67bff3");
		        },
		        type: "POST",
		        // Request body
		        data: "{body}",
		    })
		    .done(function(data) {
		        alert("success");
		        console.log("here");
		    })
		    .fail(function() {
		        alert("error");
		    });
		}
			});
});



