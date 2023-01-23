const clock = document.querySelector("#clock");

function getClock(){
    const date = new Date();
    const hr = String(date.getHours()).padStart(2,0);
    const min = String(date.getMinutes()).padStart(2,0);
    const sec = String(date.getSeconds()).padStart(2,0);

    clock.innerText = `${hr}:${min}:${sec}`;
    // if(sec < 10){
    //     clock.innerText = `${hr}:${min}:0${sec}`;
    //     // "1".padStart(2, "0")
    //     // start 부분의 padding을 추가하여 길이가 2가 되도록
    // }else{
    //     clock.innerText = `${hr}:${min}:${sec}`;
    // }
}
getClock();
setInterval(getClock, 1000);
// 실행하고자 하는 함수, 호출되는 fucntion 간격을 ms
// 해당 초마다 함수 실행
// setTimeout(sayHello, 5000);
// 해당 함수를 몇 초뒤에 실행할지

