$(function() {
	$(".preloader-wrapper").hide();
    $(".wrapper").css("opacity", "0.8");
    $(".content").css("opacity", "1");
    $('.container').vegas({
        slides: [
            { src: 'img/1.jpg' },
            { src: 'img/2.jpg' },
            { src: 'img/3.jpg' }
        ],
        animation: [ 'kenburnsUp', 'kenburnsDown', 'kenburnsLeft', 'kenburnsRight' ],
        preload: true
    });
    $('select').material_select();

   /* <div class="row">
        <div class="col s12 m6 l6">
          <div class="card horizontal">
            <div class="card-image">
              <img src="http://lorempixel.com/100/190/nature/6">
            </div>
            <div class="card-stacked">
              <div class="card-content">
                <p>I am a very simple card. I am good at containing small bits of information.</p>
              </div>
              <div class="card-action">
                <a href="#">This is a link</a>
              </div>
            </div>
          </div>
        </div>
    </div>*/

    $.ajax({
      url: "https://api.cognitive.microsoft.com/bing/v5.0/news/search?" + $.param({q: "car launch", count: "5"}),
      beforeSend: function(xhrObj){
          // Request headers
          xhrObj.setRequestHeader("Ocp-Apim-Subscription-Key","169608d4f34f4c058aa07dc55f67bff3");
      },
      type: "GET",
      // Request body
      data: "{body}",
    })
    .done(function(data) {
      var value = data.value;
      for( i=0; i<value.length; i++) {
        console.log(value[i].name+value[i].image.thumbnail.contentUrl);   
        $('.bing-news').append('<div class="row">\
        <div class="col s12 m12 <l12></l12>">\
          <div class="card sticky-action small">\
            <div class="card-image waves-effect waves-block waves-light">\
              <img class="activator" src="'+value[i].image.thumbnail.contentUrl+'">\
            </div>\
              <div class="card-content">\
                <p>'+value[i].name+'</p>\
                <span class="card-title activator grey-text text-darken-4">'+value[i].name+'<i class="material-icons right">more_vert</i></span>\
              </div>\
              <div class="card-action">\
                  <a target="_blank" href="'+value[i].url+'">READ MORE</a>\
            </div>\
              <div class="card-reveal">\
                  <span class="card-title grey-text text-darken-4">'+value[i].name+'<i class="material-icons right">close</i></span>\
                  <p>'+value[i].description+'</p>\
              </div>\
          </div>\
        </div>\
        </div>');
      }
      
    })
    .fail(function() {
      alert("error");
    });
      
    
});