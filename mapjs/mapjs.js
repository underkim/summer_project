//광주광역시 중심
var staticMapContainer = document.getElementById('staticMap'), // 이미지 지도를 표시할 div 
    staticMapOption = {
        center: new kakao.maps.LatLng(35.1634932, 126.8581248), // 이미지 지도의 중심좌표
        level: 9.5// 이미지 지도의 확대 레벨
    };

// 이미지 지도를 표시할 div와 옵션으로 이미지 지도를 생성합니다
var staticMap = new kakao.maps.StaticMap(staticMapContainer, staticMapOption);

//광산구 중심
var staticMapContainer = document.getElementById('staticMap'), // 이미지 지도를 표시할 div
    staticMapOption = {
        center: new kakao.maps.LatLng(35.1651523, 126.752968), // 이미지 지도의 중심좌표
        level: 9// 이미지 지도의 확대 레벨
    };

// 이미지 지도를 표시할 div와 옵션으로 이미지 지도를 생성합니다
var staticMap = new kakao.maps.StaticMap(staticMapContainer, staticMapOption);

//북구 중심
var staticMapContainer = document.getElementById('staticMap'), // 이미지 지도를 표시할 div
    staticMapOption = {
        center: new kakao.maps.LatLng(35.1970887, 126.9265319), // 이미지 지도의 중심좌표
        level: 9// 이미지 지도의 확대 레벨
    };

// 이미지 지도를 표시할 div와 옵션으로 이미지 지도를 생성합니다
var staticMap = new kakao.maps.StaticMap(staticMapContainer, staticMapOption);

//서구 중심
var staticMapContainer = document.getElementById('staticMap'), // 이미지 지도를 표시할 div 
    staticMapOption = {
        center: new kakao.maps.LatLng(35.1414635, 126.856259), // 이미지 지도의 중심좌표
        level: 9// 이미지 지도의 확대 레벨
    };

// 이미지 지도를 표시할 div와 옵션으로 이미지 지도를 생성합니다
var staticMap = new kakao.maps.StaticMap(staticMapContainer, staticMapOption);

//남구 중심
var staticMapContainer = document.getElementById('staticMap'), // 이미지 지도를 표시할 div 
    staticMapOption = {
        center: new kakao.maps.LatLng(35.0928209, 126.8529932), // 이미지 지도의 중심좌표
        level: 9// 이미지 지도의 확대 레벨
    };

// 이미지 지도를 표시할 div와 옵션으로 이미지 지도를 생성합니다
var staticMap = new kakao.maps.StaticMap(staticMapContainer, staticMapOption);

//동구 중심
var staticMapContainer = document.getElementById('staticMap'), // 이미지 지도를 표시할 div
    staticMapOption = {
        center: new kakao.maps.LatLng(35.1206, 126.9527), // 이미지 지도의 중심좌표
        level: 8.5// 이미지 지도의 확대 레벨
    };

// 이미지 지도를 표시할 div와 옵션으로 이미지 지도를 생성합니다
var staticMap = new kakao.maps.StaticMap(staticMapContainer, staticMapOption);

{/* <div id="map" style="width:100%;height:350px;"></div>
<p id="result"></p> */}  //html에 있어야 할 내용들

var mapContainer = document.getElementById('map'), // 지도를 표시할 div 
    mapOption = {
        center: new kakao.maps.LatLng(35.1634932, 126.8581248), // 지도의 중심좌표
        level: 9// 지도의 확대 레벨  
    };

var map = new kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다

// 다각형을 구성하는 좌표 배열입니다. 이 좌표들을 이어서 다각형을 표시합니다
var polygonPath = [
    new kakao.maps.LatLng(35.1158328, 126.9987369),
    new kakao.maps.LatLng(35.1141189, 126.9996303),
    new kakao.maps.LatLng(35.1108509, 126.9893743),
    new kakao.maps.LatLng(35.1059182, 126.9862844),
    new kakao.maps.LatLng(35.1013658, 126.9884249),
    new kakao.maps.LatLng(35.0994698, 126.9874807),
    new kakao.maps.LatLng(35.0952564, 126.988854),
    new kakao.maps.LatLng(35.091845, 126.9790416),
    new kakao.maps.LatLng(35.0920389, 126.9740658),
    new kakao.maps.LatLng(35.0904232, 126.9718544),
    new kakao.maps.LatLng(35.0894538, 126.9663258),
    new kakao.maps.LatLng(35.0792926, 126.9593807),
    new kakao.maps.LatLng(35.0787306, 126.9576641),
    new kakao.maps.LatLng(35.0749203, 126.9548074),
    new kakao.maps.LatLng(35.0729513, 126.9495578),
    new kakao.maps.LatLng(35.0736596, 126.9438113),
    new kakao.maps.LatLng(35.072668, 126.9422882),
    new kakao.maps.LatLng(35.0738013, 126.9411458),
    new kakao.maps.LatLng(35.0745945, 126.9324569),
    new kakao.maps.LatLng(35.0778126, 126.9326912),
    new kakao.maps.LatLng(35.0805605, 126.9277735),
    new kakao.maps.LatLng(35.0843677, 126.9265805),
    new kakao.maps.LatLng(35.0880121, 126.9247514),
    new kakao.maps.LatLng(35.0921119, 126.9200591),
    new kakao.maps.LatLng(35.09811711730112, 126.92093580788557),
    new kakao.maps.LatLng(35.098837751905585, 126.92023319071946),
    new kakao.maps.LatLng(35.099413164365814, 126.91803911034499),
    new kakao.maps.LatLng(35.102874534029766, 126.91821113482462),
    new kakao.maps.LatLng(35.102874534029766, 126.91821113482462),
    new kakao.maps.LatLng(35.10618889827516, 126.91434690956783),
    new kakao.maps.LatLng(35.10957834514819, 126.9147821217439),
    new kakao.maps.LatLng(35.11217278026037, 126.9126733135715),
    new kakao.maps.LatLng(35.11347206032368, 126.9145148004445),
    new kakao.maps.LatLng(35.1157866, 126.9129388),
    new kakao.maps.LatLng(35.11708030133808, 126.91854797926848),
    new kakao.maps.LatLng(35.11809064956828, 126.91977562511094),
    new kakao.maps.LatLng(35.12487217328191, 126.92485952542215),
    new kakao.maps.LatLng(35.12660634530129, 126.93082628973809),
    new kakao.maps.LatLng(35.130498181537966, 126.92721203339058),
    new kakao.maps.LatLng(35.13338147778448, 126.92565392652959),
    new kakao.maps.LatLng(35.15197351479084, 126.9079775598102),
    new kakao.maps.LatLng(35.156159330695196, 126.9127141369066),
    new kakao.maps.LatLng(35.1643834025049, 126.91797398186073),
    new kakao.maps.LatLng(35.162944903954184, 126.92359520038939),
    new kakao.maps.LatLng(35.159917971487154, 126.92623220261223),
    new kakao.maps.LatLng(35.161941569336015, 126.93413308667215),
    new kakao.maps.LatLng(35.159059079074225, 126.93764760256771),
    new kakao.maps.LatLng(35.158773732698094, 126.94396974450997),
    new kakao.maps.LatLng(35.15488073668192, 126.94590402076531),
    new kakao.maps.LatLng(35.15387366197649, 126.95169943733997),
    new kakao.maps.LatLng(35.150125220852125, 126.9548622802774),
    new kakao.maps.LatLng(35.14543747598989, 126.9531090649715),
    new kakao.maps.LatLng(35.14320147729025, 126.95153016732804),
    new kakao.maps.LatLng(35.14031807692024, 126.95398984778572),
    new kakao.maps.LatLng(35.14060941946798, 126.96241704394642),
    new kakao.maps.LatLng(35.13628439749107, 126.96768585328205),
    new kakao.maps.LatLng(35.13744112569723, 126.9820815794064),
    new kakao.maps.LatLng(35.12244343284667, 126.99121247782918),
    new kakao.maps.LatLng(35.123597425187675, 126.9957762250243),
    new kakao.maps.LatLng(35.12085730277738, 127.00332405444232),
    new kakao.maps.LatLng(35.11638656107836, 126.99823384973973),
];

// 지도에 표시할 다각형을 생성합니다
var polygon = new kakao.maps.Polygon({
    path: polygonPath, // 그려질 다각형의 좌표 배열입니다
    strokeWeight: 3, // 선의 두께입니다
    strokeColor: '#2355ce', // 선의 색깔입니다
    strokeOpacity: 0.8, // 선의 불투명도 입니다 1에서 0 사이의 값이며 0에 가까울수록 투명합니다
    strokeStyle: 'solid', // 선의 스타일입니다
});

// 지도에 다각형을 표시합니다
polygon.setMap(map);

// 다각형에 마우스오버 이벤트가 발생했을 때 변경할 채우기 옵션입니다
var mouseoverOption = {
    fillColor: '#EFFFED', // 채우기 색깔입니다
    fillOpacity: 0 // 채우기 불투명도 입니다        
};

// 다각형에 마우스아웃 이벤트가 발생했을 때 변경할 채우기 옵션입니다
var mouseoutOption = {
    fillColor: '#A2FF99', // 채우기 색깔입니다 
    fillOpacity: 0 // 채우기 불투명도 입니다        
};

// 다각형에 마우스오버 이벤트를 등록합니다
kakao.maps.event.addListener(polygon, 'mouseover', function () {

    // 다각형의 채우기 옵션을 변경합니다
    polygon.setOptions(mouseoverOption);

});

kakao.maps.event.addListener(polygon, 'mouseout', function () {

    // 다각형의 채우기 옵션을 변경합니다
    polygon.setOptions(mouseoutOption);

});

// 다각형에 마우스다운 이벤트를 등록합니다
var downCount = 0;
kakao.maps.event.addListener(polygon, 'mousedown', function () {
    console.log(event);
    var resultDiv = document.getElementById('result');
    resultDiv.innerHTML = '다각형에 mousedown 이벤트가 발생했습니다!' + (++downCount);
}); 