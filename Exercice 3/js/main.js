let sp = document.querySelectorAll('span');
let ms = 0, s = 0, mn = 0, h = 0;
let startButton = document.getElementById('start');
let stopButton = document.getElementById('stop');
let resetButton = document.getElementById('reset');
let t;

function test() {
    for (i=0; i<sp.length; i++) {
        console.log(sp[i].innerHTML);
    }

}

test();



function update_chrono() {
    ms+=1;

    if (ms == 10) {
        ms = 1;
        s+=1;
    }
    if (s == 60) {
        s = 0;
        mn +=1;
    }
    if (mn == 60) {
        mn = 0;
        h+=1;
    }

    sp[0].innerHTML = `${h} h`;
    sp[1].innerHTML = `${mn} mn`;
    sp[2].innerHTML = `${s} s`;
    sp[3].innerHTML = `${ms} ms`;
}

function start() {
    t = setInterval(update_chrono,100);
}

function stop() {
    clearInterval(t);
}

function reset() {
    
    h = 0;
    mn = 0;
    s = 0;
    ms = 0;
    sp[0].innerHTML = `${h} h`;
    sp[1].innerHTML = `${mn} mn`;
    sp[2].innerHTML = `${s} s`;
    sp[3].innerHTML = `${ms} ms`;
    
}