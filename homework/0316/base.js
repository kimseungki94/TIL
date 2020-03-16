function alert1(){
    var s = document.getElementById("show");
    var showtext = document.getElementById("showtext");
    showtext.innerHTML='오늘의 메뉴 : 햄버거'
    s.innerHTML='<img id="art1" width="400px" height="250px" src="./images/burger.jpg"/>';
}
function alert2(){
    var s = document.getElementById("show");
    var showtext = document.getElementById("showtext");
    showtext.innerHTML='오늘의 메뉴 : 케이크'
    s.innerHTML='<img id="art1" width="400px" height="250px" src="./images/cake.jpg"/>';
}
function alert3(){
    var s = document.getElementById("show");
    var showtext = document.getElementById("showtext");
    showtext.innerHTML='오늘의 메뉴 : 샌드위치'
    s.innerHTML='<img id="art1" width="400px" height="250px" src="./images/sandwich.jpg"/>';
}
function alert4(){
    var s = document.getElementById("show");
    var showtext = document.getElementById("showtext");
    showtext.innerHTML='오늘의 메뉴 : 스테이크'
    s.innerHTML='<img id="art1" width="400px" height="250px" src="./images/steak.jpg"/>';
}
function random(){
    var result = Math.floor(Math.random() * 4) +1;
    console.log(result);
    if(result==1){
        alert1();
    }else if(result==2){
        alert2();
    }else if(result==3){
        alert3();
    }else{
        alert4();
    }
}