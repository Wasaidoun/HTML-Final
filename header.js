const hamburger = document.getElementById('hamburger');
const links = document.getElementsByClassName('links');
/*for(var i = 0; i < hamburgers.length; ++i){
    hamburgers[i].addEventListener('click', function() {
        hamburgers[i].classList.add('active');
        console.log('Hello');
    });
}*/

hamburger.addEventListener('click', function() {
    hamburger.classList.add('active');
    console.log('Hello');
});