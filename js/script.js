$(function() {
    $('.container').vegas({
        slides: [
            { src: 'img/1.jpg' },
            { src: 'img/2.jpg' },
            { src: 'img/3.jpg' }
        ],
        animation: [ 'kenburnsUp', 'kenburnsDown', 'kenburnsLeft', 'kenburnsRight' ]
    });
});