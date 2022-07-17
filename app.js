function openNav() {
  document.getElementById("sideNav").style.width = "250px";
  document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
  document.getElementById("firstSec").style.backgroundColor = "rgba(0,0,0,0.005)";
}

function closeNav() {
  document.getElementById("sideNav").style.width = "0";
  document.body.style.backgroundColor = "white";
  document.getElementById("firstSec").style.backgroundColor = "white";
}

function featureDropdown() {
  document.getElementById("featuresDropdown").classList.toggle("show");
  document.getElementById("companyDropdown").classList.remove("show4");
}

function companyDropdown() {
  document.getElementById("companyDropdown").classList.toggle("show4");
  document.getElementById("featuresDropdown").classList.remove("show");
}

function featureDropdown2() {
  document.getElementById("featuresDropdown2").classList.toggle("show2");
  document.getElementById("companyDropdown2").classList.remove("show3");
}

function companyDropdown2() {
  document.getElementById("companyDropdown2").classList.toggle("show3");
  document.getElementById("featuresDropdown2").classList.remove("show2");
}

function remove() {
  document.getElementById("featuresDropdown").classList.remove("show");
  document.getElementById("companyDropdown").classList.remove("show4");
}

window.onclick = function(event) {
    if (!event.target.matches('.featureClass')) {
        var dropdowns = document.getElementById("featuresDropdown");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains("show")) {
                openDropdown.classList.remove("show");
            }
        }
    }
}

function remove(event) {
    if (!event.target.matches('.companyClass')) {
        var dropdowns = document.getElementById("companyDropdown");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains("show")) {
                openDropdown.classList.remove("show");
            }
        }
    }
}