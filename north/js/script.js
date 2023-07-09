

var test =
{
    name: "fk",
    location: "loc",
    parking: "par",
    picture: "pic",
    explain: "exp",

}

window.onload = function write_list() {

    let text = "<ul list-style:none;>";


    text += "<li>" + test.name + "</li>";

    text += "</ul>";

    document.getElementById("list").innerHTML = text;
}

function change_img() {
    let front = document.getElementById("div_img1");
    front.style.visibility = 'visible';
    let second = document.getElementById("div_img2");
    second.style.visibility = 'hidden';
    let list = document.getElementById("list");
    list.style.visibility = 'visible';
}
