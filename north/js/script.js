
function left_img() {

    const first = document.getElementById("first");
    const second = document.getElementById("second");

    first.style.visibility = "none";
    second.style.visibility = "hidden";
}
function right_img() {

    let first = document.getElementById("first");
    let second = document.getElementById("second");

    second.innerHTML = first.innerHTML;
    first.innerHTML = '<div class="col"</div>';
}

// 
window.onload = function () {
    var el = document.getElementById("choice");
    el.onclick = left_img;
}