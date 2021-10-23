function updateTime() {
    var DT = new Date();
    var h = DT.getHours();
    var m = DT.getMinutes();
    var s = DT.getSeconds();

    document.getElementById("h").innerHTML=h;
    document.getElementById("m").innerHTML=m;
    document.getElementById("s").innerHTML=s;
    
}
setInterval(updateTime, 1000);
console.error("error: you cant hack. wait you just doing it");