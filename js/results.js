serialize = function(obj) {
    var str = [];
    for(var p in obj)
        if (obj.hasOwnProperty(p)) {
          str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
        }
     return str.join("&");
}
$(function() {

    var par = "";

    $.urlParam = function(name){
        var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
        return results[1] || 0;
    }

    var searchTerm = decodeURIComponent($.urlParam('model'));  
    searchTerm = searchTerm.replace(/\+/g, " ");

     

    $.getJSON("https://www.carqueryapi.com/api/0.3/?callback=?", {cmd:"getModel", model: searchTerm}, function(data) {

       //The 'data' variable contains all response data.
       var makes = data;
       for (var i = 0; i < makes.length; i++) {
            par = (makes[i].make_display+" "+makes[i].model_name+" "+makes[i].model_trim+" "+makes[i].model_year).replace(/" "/g, "+");
            $.ajax({
              url: "https://api.cognitive.microsoft.com/bing/v5.0/images/search?" + $.param({q: par, count: "5"}),
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
              var value = data.value;
              for( i=0; i<value.length; i++) {
                $('.carousel').append("<a class=\"carousel-item\" href=\"#one!\"><img src='"+value[i].contentUrl+"'></a>");
                
              }
              $('.carousel').carousel({full_width: true});
          })
          .fail(function() {
              alert("error");
          });
          for (var key in makes[i]) {
            if (makes[i].hasOwnProperty(key)) {
              $('.parameters').append("<tr><td>"+key.replace('model'," ").replace(/_/g," ").toUpperCase() + "</td><td>" + makes[i][key] + "</td></tr>");
            }
          }
      }
    });

    
});