var cel = document.getElementById('celsius');
var fah = document.getElementById('fahrenheit');
var ran = document.getElementById('rankie');
var cen = document.getElementById('centigrade');
var kel = document.getElementById('kelvin');

cel.addEventListener('input',celVal);
fah.addEventListener('input',fehVal);
ran.addEventListener('input',ranVal);
cen.addEventListener('input',cenVal);
kel.addEventListener('input',kelVal);

function celVal(){
    var cTemp = parseFloat (cel.value);
    var fTemp = parseFloat((cTemp * (1.8)) + 32);
    var rTemp = parseFloat((cTemp +273.15) * 1.8);
    var cenTemp = parseFloat(cel.value);
    var kTemp = parseFloat(cTemp + 273.15);
    fah.value = roundNum(fTemp);
    ran.value = roundNum(rTemp);
    cen.value = roundNum(cenTemp);
    kel.value = kTemp;
}

function fehVal(){
    var fTemp = parseFloat (fah.value);
    var cTemp = parseFloat(fTemp - 32) / 1.8;
    var rTemp = parseFloat((cTemp +273.15) * 1.8);
    var cenTemp = parseFloat((fTemp - 32) / 1.8);
    var kTemp = parseFloat((fTemp + 459.67) * 5/9);
    cel.value = roundNum(cTemp);
    ran.value = roundNum(rTemp);
    cen.value = roundNum(cenTemp);
    kel.value = roundNum(kTemp);
}

function ranVal(){
    var rTemp = parseFloat (ran.value);
    var cTemp = parseFloat( (rTemp - 491.67) * 5/9);
    var fTemp = parseFloat(rTemp - 459.67);
    var cenTemp = parseFloat((rTemp - 491.67) * 5/9);
    var kTemp = parseFloat(rTemp * 5/9);
    cel.value = roundNum(cTemp);
    fah.value = roundNum(fTemp);
    cen.value = roundNum(cenTemp);
    kel.value = roundNum(kTemp);
}

function cenVal(){
    var cenTemp = parseFloat (cen.value);
    var fTemp = parseFloat((cenTemp * (1.8)) + 32);
    var rTemp = parseFloat((cenTemp +273.15) * 1.8);
    var cTemp = parseFloat(cen.value);
    var kTemp = parseFloat(cenTemp + 273.15);
    fah.value = roundNum(fTemp);
    ran.value = roundNum(rTemp);
    cel.value = roundNum(cTemp);
    kel.value = roundNum(kTemp);
}

function kelVal(){
    var kTemp = parseFloat (kel.value);
    var fTemp = parseFloat(kTemp * 9/5 - 459.67);
    var rTemp = parseFloat(kTemp * 9/5);
    var cTemp = parseFloat(kTemp - 273.15);
    var cenTemp = parseFloat(kTemp - 273.15);
    fah.value = roundNum(fTemp);
    ran.value = roundNum(rTemp);
    cel.value = roundNum(cTemp);
    cen.value = roundNum(cenTemp);
}

function roundNum(num){
    return Math.round(num*100)/100;
}

