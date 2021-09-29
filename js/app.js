"use strict";

const overlayDiv = document.querySelector("#overlay");
const openMenuBtn = document.querySelector("#trigger-overlay");

window.addEventListener("load", onPageLoaded, false);
window.addEventListener("pageshow", onPageShown, false);

/*https://code.falk-m.de/loading/* */
/* special event handler for ios Safari */
function onPageShown(evt) {
  // check if the page has been loaded from cache entirely
  if (evt.persisted) {
    // emulate the page loaded event
    onPageLoaded();
  }
}

function onPageLoaded() {
  let loadingscreen = document.getElementById("loadingscreen");

  setTimeout(function () {
    loadingscreen.style.animation = "fadeOut 2s";
    loadingscreen.style.animationDelay = "1s";
    loadingscreen.style.animationFillMode = "forwards";
  }, 2000);

  setTimeout(function () {
    let hiddenTags = document.querySelectorAll(".hiddenElems");
    hiddenTags.forEach(function (item) {
      item.style.display = "block";
      item.setAttribute("class", "loaded");
    });
    loadingscreen.remove();
  }, 3000);
}

function openMenu() {
  console.log("OpenMenu pressed");
  overlayDiv.classList.add("active");
  overlayDiv.classList.add("open");
  openMenuBtn.setAttribute("onclick", "closeMenu();");
  document.querySelector(".menu").style.marginTop = "0px";
  document.querySelector(".menu").style.paddingBottom = "30px";
}
function closeMenu() {
  overlayDiv.classList.remove("open");
  overlayDiv.classList.remove("active");
  openMenuBtn.setAttribute("onclick", "openMenu();");
  document.querySelector(".menu").style.marginTop = "-60px";
  document.querySelector(".menu").style.paddingBottom = "15px";
}

function loadImages(){
  const mubelekImage = document.querySelector('#mubelekImage');
  mubelekImage.style.backgroundImage = "url(../img/selectedImages/0001.jpg)"
}


//Get the button
var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}