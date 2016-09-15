
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
      menuWidth: 500, 
      edge: 'right', 
      closeOnClick: true 
    });

	$.getJSON("https://www.carqueryapi.com/api/0.3/?callback=?", {cmd:"getTrims", keyword: searchTerm}, function(data) {
		$('.loading').hide();
	   //The 'data' variable contains all response data.
	   var makes = data.Trims;
	   var FJS = FilterJS(data.Trims, '.content', {
			  template: '#template',
			  criterias: [ {field:  'model_year', ele: '#cq-year', type: 'range', event:'change',all:'any'},
			  			   {field: 'model_body', ele: '#cq-body', event: 'change', all:'any'},
			  			   {field: 'model_engine_position', ele: '#cq-engine-position',event: 'change',all:'any'},
			  			   {field: 'model_engine_type', ele: '#cq-engine-type',event: 'change',all:'any'},
			  			   {field: 'model_engine_fuel', ele: '#cq-fuel-type',event: 'change',all:'any'},
			  			   {field: 'model_drive', ele: 'cq-drive', event: 'change',all:'any'},
			  			   {field:  'model_seats', ele: 'cq-seats', event:'change',all:'any'},
			 ],
			  search: { ele: '#search'},
			  callbacks: {
			    afterFilter: function(result){
			      console.log("here");
			     }
   }
		});
	});
});



