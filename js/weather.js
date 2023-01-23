// js는 position을 통해 user의 위치를 전달해줌
const API_KEY = "69f0e263d1d7fa770e17297d7d73fba6";

function onGeoOk(position){ // api, lat, lng 은 항상 있어야하는 변수
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    console.log("You live in ", lat, lng);
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`;
    console.log(url);
    fetch(url).then((response) => response.json())
    .then((data) =>{
        const city = document.querySelector("#weather span:first-child");
        const weather = document.querySelector("#weather span:last-child");
        city.innerText = data.name;
        weather.innerText = `${data.weather[0].main}, ${Math.round(data.main.temp)}`
    });
    // 내가 url로 갈 필요없이 js가 request를 함
}
function onGeoError(){

}
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
// argument: 모든게 잘 됐을 떄 실행함수, 에러발생시 실행 함수