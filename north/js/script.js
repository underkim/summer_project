function write_list(name) {

    document.getElementById("list").innerHTML = "";  // 초기화
    let text = "<ul>";  //ul 태그


    text += "<li>" + name + "</li>";

    text += "</ul>";

    document.getElementById("list").innerHTML = text;
}

function change_img(name) {
    let front = document.getElementById("div_img1");
    front.style.visibility = 'visible';
    let second = document.getElementById("div_img2");
    second.style.visibility = 'hidden';
    let list = document.getElementById("list");
    list.style.visibility = 'visible';
    write_list(name);
}

function backTopage() {
    let front = document.getElementById("div_img1");
    let second = document.getElementById("div_img2");
    let list = document.getElementById("list");
    list.style.visibility = 'hidden';
    second.style.visibility = 'visible';
    front.style.visibility = 'hidden';
    write_list("empty");
}

function popup(){
    window.open('/north/popup.html','놀러가자', "width = 1000, height = 600, top = 200, left = 400,  location = no");
}