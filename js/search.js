
serialize = function(obj) {
	var str = [];
    for(var p in obj)
	    if (obj.hasOwnProperty(p)) {
	      str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
	    }
	 return str.join("&");
}
var urlParams;
(window.onpopstate = function () {
    var match,
        pl     = /\+/g,  // Regex for replacing addition symbol with a space
        search = /([^&=]+)=?([^&]*)/g,
        decode = function (s) { return decodeURIComponent(s.replace(pl, " ")); },
        query  = window.location.search.substring(1);

    urlParams = {};
    while (match = search.exec(query))
       urlParams[decode(match[1])] = decode(match[2]);
})();
for (var property in urlParams) {
    if (urlParams.hasOwnProperty(property)) {
        // do stuff
		if(urlParams[property]=="any")
		{
			console.log(property);
			delete urlParams[property];
		}	
    }
}

urlParams.cmd="getTrims";

$(function(){

	$.urlParam = function(name){
		var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
		if(results!=null)
			return results[1] || 0;
		else return null;
	}
		
	$('select').material_select();
	
	var searchTerm = decodeURIComponent($.urlParam('keyword')); 
	searchTerm = searchTerm.replace(/\+/g, " ");	
	if(searchTerm!="null")
		$('.header').text(searchTerm.toUpperCase());

	$(".button-collapse").sideNav();

	 $('.button-collapse').sideNav({
      menuWidth: 500, 
      edge: 'right', 
      closeOnClick: true 
    });

	$.getJSON("https://www.carqueryapi.com/api/0.3/?callback=?", urlParams, function(data) {
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


