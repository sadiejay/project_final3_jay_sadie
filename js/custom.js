// custom JS
var adImg = document.getElementById('img--js');
//defines variable with img
var onImgClick = function () {
    var welcome = document.getElementById('img--js');
    welcome.textContent = 'Join Us!';
};
// defines funtion with elecment and intended result

adImg.addEventListener('click', onImgClick);
// adds Event Listener to start function
