var scoreId=document.getElementById('score');
var scoreScroll=document.getElementById('scoreScroll');
var scoreSecond=document.getElementById('scoreSecond');
var navToggle=document.getElementById('nav_toggle')
var nav=document.getElementById('nav')
var counter = localStorage.getItem('boxMemCounterClick');
var counterscroll = localStorage.getItem('boxMemCounterScroll')
var counterSecond =  localStorage.getItem('boxMemCounterSecond')
document.addEventListener('click', function(){
    counter++;
    localStorage.setItem('boxMemCounterClick', counter)
    scoreId.textContent='Счет: ' + localStorage.getItem('boxMemCounterClick')
});

document.addEventListener("scroll", function() {
    counterscroll++;
    localStorage.setItem('boxMemCounterScroll', counterscroll)
    scoreScroll.textContent='Счет: ' + localStorage.getItem('boxMemCounterScroll')
});

setInterval(function(){
    counterSecond++;
    localStorage.setItem('boxMemCounterSecond', counterSecond)
    scoreSecond.textContent='Прошло: ' + localStorage.getItem('boxMemCounterSecond')+' Секунд'
}, 1000);

$("#nav_toggle").on("click", function(event) {
    event.preventDefault();

    $(this).toggleClass("active")
    $("#nav").toggleClass("active");
})


let xhttp = new XMLHttpRequest();

xhttp.onreadystatechange = function () {
    if(this.readyState == 4 && this.status == 200){
        myFunction(this.responseText)
    }
}
xhttp.open("GET", "games/snake.html", true);
xhttp.send();
function myFunction(data){
    console.log(data)
}