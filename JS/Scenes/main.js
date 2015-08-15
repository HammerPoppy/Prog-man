/* global Crafty */

Crafty.scene("main", function () {

    Crafty.background('#000018'); //Цвет Заднего фона


    Crafty.e("score");
    Crafty.e("map");
    Crafty.e("player");
    Crafty.bind("spawnBonus", function () {
        setTimeout(function(){
            var randomBonus = Math.random() * (5 - 0) + 0;
            if (randomBonus >= 0 && randomBonus < 1) {
                var c = Crafty.e("C#");
                c.trigger("cSpawn");
            }
            if (randomBonus >= 1 && randomBonus < 2) {
                var dotNET = Crafty.e("DotNET");
                dotNET.trigger("dotNETSpawn");
            }
            if (randomBonus >= 2 && randomBonus < 3) {
                var JS = Crafty.e("JS");
                JS.trigger("jsSpawn");
            }
            if (randomBonus >= 3 && randomBonus < 4) {
                var Java = Crafty.e("Java");
                Java.trigger("javaSpawn");
            }
            if (randomBonus >= 4 && randomBonus <= 5) {
                var php = Crafty.e("Php");
                php.trigger("phpSpawn");
            }
        }, (Settings.timeToBon * 1000));
    });
    
    Crafty.trigger("spawnBonus");

    Crafty.e("Bug");
    Crafty.e("Error");
    Crafty.e("Crash");
    Crafty.e("Ddos");
});