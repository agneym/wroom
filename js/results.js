$(function(){
	$.urlParam = function(name){
		var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
		return results[1] || 0;
	}
	var searchTerm = decodeURIComponent($.urlParam('search'));  
	searchTerm = searchTerm.replace(/\+/g, " ");
	console.log(searchTerm);

	var carquery = new CarQuery();
	carquery.init();

	var searchArgs =
     ({
     	search_input_id:               searchTerm
        ,search_results_id:             "cq-search-results"
        ,search_result_id:              "cq-search-result"
     });
     carquery.initSearchInterface(searchArgs);
     carquery.search();
});

