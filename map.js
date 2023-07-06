var mapContainer = document.getElementById('map'), // 지도를 표시할 div 
    mapOption = { 
        center: new kakao.maps.LatLng(35.1458, 126.9232), // 지도의 중심좌표
        level: 6 // 지도의 확대 레벨 숫자가 커질수록 지도가 멀어짐
    };

var map = new kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다

// 마커가 표시될 위치입니다 
var position_sky  = new kakao.maps.LatLng(35.148720, 126.921412); 
var position_zip = new kakao.maps.LatLng(35.149817, 126.925156);

// 마커를 생성합니다
var marker_sky = new kakao.maps.Marker({
    position: position_sky
});

var marker_zip = new kakao.maps.Marker({
    position: position_zip
});

// 마커가 지도 위에 표시되도록 설정합니다
marker_sky.setMap(map);
marker_zip.setMap(map);

// 아래 코드는 지도 위의 마커를 제거하는 코드입니다
// marker.setMap(null);

var infoWindow_sky = new kakao.maps.InfoWindow({
    content: 'Sky Marker' // 마커에 표시할 텍스트 내용
});

var infoWindow_zip = new kakao.maps.InfoWindow({
    content: 'Zip Marker' // 마커에 표시할 텍스트 내용
});

// 마커를 클릭했을 때 인포윈도우를 표시합니다
kakao.maps.event.addListener(marker_sky, 'click', function() {
    if (infoWindow_zip.getMap()) {
        infoWindow_zip.close();
    }
    if (infoWindow_sky.getMap()) {
        infoWindow_sky.close();
    } else {
        infoWindow_sky.open(map, marker_sky);
    }
});

kakao.maps.event.addListener(marker_zip, 'click', function() {
    if (infoWindow_sky.getMap()) {
        infoWindow_sky.close();
    }
    if (infoWindow_zip.getMap()) {
        infoWindow_zip.close();
    } else {
        infoWindow_zip.open(map, marker_zip);
    }
});