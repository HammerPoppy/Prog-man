Crafty.c("score", {
    init: function () {
        Crafty.e("2D, DOM, scorepanel").attr({x: 0 * Settings.poligon, y: 11 * Settings.poligon});//ÐšÐ°Ñ€Ñ‚Ð¸Ð½ÐºÐ° Ð¿Ð°Ð½ÐµÐ»Ð¸ Ñ Ð´Ð°Ð½Ð½Ñ‹Ð¼Ð¸

        var scoreDisplay = Crafty.e("2D, DOM, Text")

        scoreDisplay.text("Score:" + Inc.score).attr({x: 1.7 * Settings.poligon, y: 11.8 * Settings.poligon});
        //ÐžÑ‚Ð¾Ð±Ñ€Ð°Ð¶Ð°ÐµÑ‚ "Score: Ñ…Ñ…Ñ…" *Ñ…Ñ…Ñ…-Ð½ÐµÐºÐ¾Ðµ Ñ‡Ð¸ÑÐ»Ð¾
        Crafty.bind("updateScore", function () {
            scoreDisplay.text("Score:" + Inc.score);
        });
        setInterval(function () {
            //if((Inc.score%74)==0 && Inc.score!=0){   //Для добавления жизней при определенном количестве очков
            //    Inc.lives += 1;
            //    Crafty.trigger("updateLives");
            //}
            Inc.score += 1;
            Crafty.trigger("updateScore");
        }, 1000);

        var livesDisplayText = Crafty.e("2D, DOM, Text").text("x" + Inc.lives)//Ð¢ÐµÐºÑÑ‚Ð¾Ð²Ð°Ñ Ñ‡Ð°ÑÑ‚ÑŒ Ð¾Ñ‚Ð¾Ð±Ñ€Ð°Ð¶ÐµÐ½Ð¸Ñ Ð¶Ð¸Ð·Ð½ÐµÐ¹
                .attr({x: 15.85 * Settings.poligon, y: 11.8 * Settings.poligon});
        Crafty.bind("updateLives", function () {//Ð?Ð²ÐµÐ½Ñ‚ Ð´Ð»Ñ Ð¾Ð±Ð½Ð¾Ð²Ð»ÐµÐ½Ð¸Ñ Ð·Ð½Ð°Ñ‡ÐµÐ½Ð¸Ñ (Ð½ÐµÐ¿Ñ€Ð¾Ð²ÐµÑ€ÐµÐ½Ð½Ð¾)
            livesDisplayText.text("x" + Inc.lives)
        });
        Crafty.e("2D, DOM, live").attr({x: 14.7 * Settings.poligon, y: 12 * Settings.poligon});//ÐœÐµÐ´Ð¸Ð° Ñ‡Ð°ÑÑ‚ÑŒ Ð¾Ñ‚Ð¾Ð±Ñ€Ð°Ð¶ÐµÐ½Ð¸Ñ Ð¶Ð¸Ð·Ð½ÐµÐ¹ (ÑÐ¿Ñ€Ð°Ð¹Ñ‚ Ð¶Ð¸Ð·Ð½ÐµÐ¹)
    }
});