
var d_l_maode = document.getElementById("d_l_maode");
/* d_l_maode.addEventListener("onclick", function () {
    var body = document.getElementsByTagName("body");
    var title = document.getElementsByTagName("h1");
    var paragraph = document.getElementsByTagName("p");
    body.style.backgroundColor = "black";
}, false);
function reg() {
    var body = document.getElementsByTagName("body");
    var title = document.getElementsByTagName("h1");
    var paragraph = document.getElementsByTagName("p");

    body.style.backgroundColor = "black";
} */
function myFunction() {
    var element = document.body;
    element.classList.toggle("dark");
    var moon = document.getElementById("moon1");
    var sun = document.getElementById("sun1");
    if (element.className == "dark") {
        moon.classList.remove("show");
        moon.classList.toggle("haide");
        sun.classList.remove("haide");
        sun.classList.toggle("show");

    } else if (element.className != "dark") {
        sun.classList.remove("show");
        sun.classList.toggle("haide");
        moon.classList.remove("haide");
        moon.classList.toggle("show");

    }
}