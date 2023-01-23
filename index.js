let sec=0
let min=0
let hr=0

var interval

function twoDigits(digit){
    if(digit<10){
        return('0'+digit)
    }else{
        return(digit)
    }
}

function start(){
    watch()
    interval= setInterval(watch,1000)

}

function sinalizar(){
    setTimeout(function() {
        document.querySelector("body").style.background = "red";
        var title = document.querySelector("h2");
        title.innerHTML = "Tempo de louvor encerrado!!!";
   
    }, 10000)

}

function pause(){
    clearInterval(interval)

}

function stop(){
    clearInterval(interval)
    sec=0
    min=0
    document.getElementById('watch').innerText='00:00:00'

}

function watch(){
    sec++
    if(sec==60){
        min++
        sec=0
        if(min==60){
            min=0
            hr++
        }
    }
    document.getElementById('watch').innerText=twoDigits(hr)+':'+twoDigits(min)+':'+twoDigits(sec)
}

// Relogio

const elementoHora = document.querySelector("#hora");
const elementoMinuto = document.querySelector("#minutos");
const elementoSegundo = document.querySelector("#segundos");
const elementoAmPm = document.querySelector("#ampm");

function atualizaRelogio() {
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let ampm = "AM"

    if(h > 12) {
        h = h - 12;
        ampm = "PM"
    }

    h = h < 10 ? "0" + h : h; //Faz aparecer um numero 0 se o numero for menor que 10
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;

    elementoHora.innerText = h;
    elementoMinuto.innerText = m;
    elementoSegundo.innerText = s;
    elementoAmPm.innerText = ampm;
    setTimeout(() => {
        atualizaRelogio();
    }, 1000)

}

atualizaRelogio();



