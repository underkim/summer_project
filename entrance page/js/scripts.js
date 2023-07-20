/*!
* Start Bootstrap - The Big Picture v5.0.6 (https://startbootstrap.com/template/the-big-picture)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-the-big-picture/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project

// 구에 따른 색 변경
// 자바 스크립트로 구현 function
function ani(name) {
    const north = document.getElementById("north");

    north.innerHTML = '<img src="map.png" class="img3"></img>';

    setTimeout('goTo(' + '"' + name + '"' + ')', 1000);
}

function goTo(name) {
    if (name == north) location.href = "../north/north.html";
}