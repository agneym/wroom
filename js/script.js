$(function() {
	$(".preloader-wrapper").hide();
    $(".content").css("opacity", "1");
    $(".wrapper").css("opacity", "0.8");
    $('.container').vegas({
        slides: [
            { src: 'img/1.jpg' },
            { src: 'img/2.jpg' },
            { src: 'img/3.jpg' }
        ],
        animation: [ 'kenburnsUp', 'kenburnsDown', 'kenburnsLeft', 'kenburnsRight' ],
        preload: true
    });
});