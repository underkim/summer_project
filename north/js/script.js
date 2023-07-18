
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
    front.style.visibility = 'hidden';
    let second = document.getElementById("div_img2");
    second.style.visibility = 'visible';
    let list = document.getElementById("list");
    list.style.visibility = 'visible';
    let backButton = document.getElementById("backButton");
    backButton.style.visibility = 'visible';
    let category = document.getElementById('cate_button');
    category.style.visibility = 'hidden';
    write_list(name);
    let frontButton1 = document.getElementById("frontButton1");
    let frontButton2 = document.getElementById("frontButton2");
    let frontButton3 = document.getElementById("frontButton3");

    frontButton1.style.visibility = 'hidden';
    frontButton2.style.visibility = 'hidden';
    frontButton3.style.visibility = 'hidden';
}

function backTopage() {
    let front = document.getElementById("div_img1");
    let second = document.getElementById("div_img2");
    let list = document.getElementById("list");
    let backButton = document.getElementById("backButton");
    let category = document.getElementById('cate_button');
    list.style.visibility = 'hidden';
    second.style.visibility = 'hidden';
    front.style.visibility = 'visible';
    backButton.style.visibility = 'hidden';
    category.style.visibility = 'visible';
    write_list("empty");
    let frontButton1 = document.getElementById("frontButton1");
    let frontButton2 = document.getElementById("frontButton2");
    let frontButton3 = document.getElementById("frontButton3");

    frontButton1.style.visibility = 'visible';
    frontButton2.style.visibility = 'visible';
    frontButton3.style.visibility = 'visible';

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

var arr = [];
arr[0] = 'north.png';
arr[1] = 'south.png';
arr[2] = 'location.png';
let i =0;
function changeimg()
{
    if(i>=arr.length){
        i=0;
     } 
    document.getElementById("img").src = arr[i];
     i++;
     
}

