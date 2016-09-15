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
});