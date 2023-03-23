var header = document.querySelector(".header");
var ms = document.getElementById("models");
var m3 = document.getElementById("model3");
var mx = document.getElementById("modelx");
var my = document.getElementById("modely");
var model = document.getElementById("model");
var speed = document.querySelector('.speed');
var mph = document.querySelector('.mph');
var range = document.querySelector('.range');


ms.onclick = function() {
    header.style.backgroundImage = "url(image-1.png)";
    model.innerHTML = "Model S";
    speed.innerHTML = "200 mph";
    range.innerHTML = '405 mi';
    mph.innerHTML = '2.3s';

}
m3.onclick = function() {
    header.style.backgroundImage = "url(image-2.png)";
    model.innerHTML = "Model 3";
    speed.innerHTML = "162 mph";
    range.innerHTML = '272 mi';
    mph.innerHTML = '3.1s';
}
mx.onclick = function() {
    header.style.backgroundImage = "url(image-3.png)";
    model.innerHTML = "Model X";
    speed.innerHTML = "155 mph";
    range.innerHTML = '348 mi';
    mph.innerHTML = '3.8s';
}
my.onclick = function() {
    header.style.backgroundImage = "url(image-4.png)";
    model.innerHTML = "Model Y";
    speed.innerHTML = "155 mph";
    range.innerHTML = '330 mi';
    mph.innerHTML = '3.5s';
}
