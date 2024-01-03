let mili = 0;
let sec = 0;
let min = 0;
let hr = 0;

let timer = false;

const start = () => {
    timer = true;
    myFunc();
}
const stop = () => {
    timer = false;
    myFunc();
}
const reset = () => {
    location.reload()
}

const myFunc = () => {
    if (timer == true) {
        mili = mili + 1;
        if (mili == 100) {
            sec = sec + 1;
            mili = 0;
        }
        if (sec == 60) {
            min = min + 1;
            sec = 0;
        }
        if (min == 60) {
            hr = hr + 1;
            min = 0;
        }
        var getSec = sec;
        var getMin = min;
        var getHour = hr;
        if (sec < 10) {
            getSec = "0" + sec;
        }
        if (min < 10) {
            getMin = "0" + min;
        }
        if (hr < 10) {
            getHour = "0" + hr;
        }
        setTimeout("myFunc()", 10);
        document.getElementById('milisec').innerHTML = mili;
        document.getElementById('sec').innerHTML = getSec;
        document.getElementById('min').innerHTML = getMin;
        document.getElementById('hour').innerHTML = getHour;
    }
}
const toggle = document.getElementById('_toggle_light_button_');
const body = document.querySelector('body');
toggle.addEventListener('click',function(){
    this.classList.toggle('bi-moon-stars-fill');
    if(this.classList.toggle('bi-cloud-sun-fill')){
        body.style.background="white";
        body.style.color='black';
        body.style.transition='2s';
    }else{
        body.style.background='black';
        body.style.color='white';
        body.style.transition='2s';
    }
})