var Settings = {
    width: 20, //Ширина и высота в "блоках" 16х16
    heigth: 14,
    poligon: 20,
    lives: 3,
    score: 0,
    timeToBon: 10
};

var Inc = {//Это я сделал переменную, по типу как Settings, но чтобы в ней можно было изменять значения не боясь перезаписи.
    //Я создал ее, ведь не нашел лучше способа доступатся к данным и перезаписывать их из разных частей кода (разных документов)
    lives: Settings.lives,
    score: Settings.score,
};
window.onload = function () {
    Crafty.init(Settings.width * Settings.poligon, Settings.heigth * Settings.poligon);
    Crafty.scene("loading");
};