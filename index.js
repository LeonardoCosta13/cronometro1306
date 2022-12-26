var sec=0
var min=0
var hr=0

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

    setTimeout(function() {
        document.querySelector("body").style.background = "red";
    }, 350000)

    setTimeout(function() {
        var title = document.querySelector("h2");
        title.innerHTML = "Tempo profecias/cura ultrapassado!";
    }, 350000)
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

// function timerAlert(){
//     if('#watch' < "00:00:05"){
//         document.getElementById("body").style.color = "red";
//     }
// }

// timerAlert()

