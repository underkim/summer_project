
var popupWindow;

function write_list(name) {

    const data = [{
        name: "이름1",
        location: "장소1",
        picture: "사진1",
    }];
    // data 뽑는 부분
    if (name == "empty") {
        // 초기화
    }
    else if (name == "see") {
        // 볼거
    }
    else if (name == "enjoy") {
        // 놀거
    }
    else if (name == "eat") {
        // 먹거
    }

    document.getElementById("list").innerHTML = "";  // 초기화
    let text = '<ul  id= '+'"'+'btn'+'"'+'>';  //ul 태그


    text +='<li id= '+'"'+'btnmodal'+'"'+" onclick='buttonup();'>"+  data[0]["name"]+ "</li>";

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
    let frontButton1 = document.getElementById("frontButton1");
    let frontButton2 = document.getElementById("frontButton2");
    let frontButton3 = document.getElementById("frontButton3");
    let backButton = document.getElementById("backButton");

    frontButton1.style.visibility = 'hidden';
    frontButton2.style.visibility = 'hidden';
    frontButton3.style.visibility = 'hidden';

    backButton.style.visibility = 'visible';
}

function backTopage() {
    let front = document.getElementById("div_img1");
    let second = document.getElementById("div_img2");
    let list = document.getElementById("list");
    list.style.visibility = 'hidden';
    second.style.visibility = 'visible';
    front.style.visibility = 'hidden';
    write_list("empty");
    let frontButton1 = document.getElementById("frontButton1");
    let frontButton2 = document.getElementById("frontButton2");
    let frontButton3 = document.getElementById("frontButton3");
    let backButton = document.getElementById("backButton");

    frontButton1.style.visibility = 'visible';
    frontButton2.style.visibility = 'visible';
    frontButton3.style.visibility = 'visible';
    backButton.style.visibility = 'hidden';

}


/* ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ*/
// popup() data load;

function dataLoad(value) {
    const data = [{
        name: "이름1",
        location: "장소1",
        picture: "사진1",
    }];


    document.getElementById("something").innerHTML = "";  // 초기화

    let size = data.length;

    for (let i = 0; i < size; i++) {
        if (value == data[i]["name"]) {
            let text = "<h2>";  // 첫 이름
            text += data[0]["name"] + "<br>";
            text += data[0]["location"] + "<br>";
            text += "</h2>";
            document.getElementById("something").innerHTML = text;
        }
    }

}


function buttonup(){
    const modal = document.getElementById("modal")
    modal.style.display = "flex"
}
function modaldown(){
const modal = document.getElementById("modal")
modal.style.display="none";
}
