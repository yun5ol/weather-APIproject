const weather = document.querySelector(".weather-description");
const weatherText = document.querySelector(".weather-text");
const weatherIcon = document.querySelector(".weatherIcon");
const API_KEY = "d57814b6dcd357d424cc436f744c74cf";
const COORDS = "coords";

function getWeather(lat, lng){
    fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`
        ).then(function(response){
            return response.json();
        }).then(function(json){ // 위치, 기온, 날씨묘사
            const place = json.name;
            const temperature = json.main.temp;
            const weatherDescription = json.weather[0].description;
            const weatherIcon = json.weather[0].icon;
            const weatherIconAdrs = `http://openweathermap.org/img/wn/10d@2x.png`;
            // 위 정보 HTML 표시
            weather.innerText = `${weatherDescription}`;
            weatherText.innerText = `@${place} ${temperature}°C` 
            //1 weatherIcon.setAttribute('src', weatherIconAdrs);
            //1 document.getElementsByClassName("weatherIcon").setAttribute('src', weatherIconAdrs);
            //weatherIcon.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
            //var imgURL = "http://openweathermap.org/img/wn/" + data.weather[0].icon + ".png";
              // 아이콘 표시
            //$('#img').attr("src", imgURL);
        })
}

function saveCoords(coordsObj){
    localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}

// 위치정보 획득에 성공하면 실행하는 함수
function handleGeoSuccess(position){
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coordsObj = {
        latitude : latitude,
        longitude : longitude
    };
    saveCoords(coordsObj); // 로컬스토리지에 저장
    getWeather(latitude, longitude);
}

// 위치정보 획득에 실패하면 실행하는 함수.
function handleGeoError(){
    console.log("Can't access geo location");
}

function askForCoords(){
    navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoError); // 유저의 현재 위치 정보를 요청하고, 성공하면 첫 번째 함수를, 실패하면 두 번째 함수를 실행.
}

// 로컬스토리지에서 위치 정보 가져오기
function loadCoords(){
    const loadedCoords = localStorage.getItem(COORDS);
    if(loadedCoords === null){ // 위치정보 없으면
        askForCoords(); // 위치정보 요청 함수
    } else {
        const parsedCoords = JSON.parse(loadedCoords); // json 형식을 객체 타입으로 변경 후 저장
        getWeather(parsedCoords.latitude, parsedCoords.longitude); // 날씨 요청 함수
    }
}


function init(){
    loadCoords();
}

init();
