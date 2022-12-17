const API_key = 'bpohWNihq8xBNkoV8mq5zVE%2BD4AxkoP2oiKGo16iEvTzG9%2F%2F97gkzjjpAcCubhbV4BZl6c%2FFZu%2FjjihDGVafUA%3D%3D'
const COORDS = 'coords'

function init() {
  currentCoords();
}

function currentCoords() { 
  navigator.geolocation.getCurrentPosition(getSuccess, getError);
}

// 좌표 얻기 성공
function getSuccess () {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;
  const coordsObj = {
    latitude, 
    longitude
  };
  getWeather(latitude,longitude);
}

// 좌표 얻기 실패
function getError() {
  console.log("위치 파악 실패!");
}

















