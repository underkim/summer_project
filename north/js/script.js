import data from "../data.js"


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

function write_list()
{
const li = document.createElement("li");
li.setAttribute('id', data.test.name);

const textNode = document.createTextNode(data.test.name);
li.appendChild(textNode);


document
    .getElementById('listUp')
    .appendChild(li);
}

