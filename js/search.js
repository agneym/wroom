
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
	$('select').material_select();
	var searchTerm = decodeURIComponent($.urlParam('search'));  
	searchTerm = searchTerm.replace(/\+/g, " ");	
	$('.header').text(searchTerm.toUpperCase());

	$(".button-collapse").sideNav();

	 $('.button-collapse').sideNav({
      menuWidth: 300, 
      edge: 'right', 
      closeOnClick: true 
    });

	$.getJSON("https://www.carqueryapi.com/api/0.3/?callback=?", {cmd:"getTrims", keyword: searchTerm}, function(data) {

	   //The 'data' variable contains all response data.
	   var makes = data.Trims;
	   for (var i = 0; i < makes.length; i++)
	   {
	       $(".content").append("<li class=\"flow-text\"><a href=\"results.html?model="+makes[i].model_id+"\">"+makes[i].make_display+" "+makes[i].model_name+" "+makes[i].model_trim+" "+makes[i].model_year+"</a><hr></li>");
	   }
	});
});



