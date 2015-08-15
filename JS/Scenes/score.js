Crafty.scene("Score", function() {
	Crafty.background("#000");
    	Crafty.e("2D, DOM, Text").attr({w: 100, h: 20, x: 150, y: 120})
    	.text("You died. <br/>Your score: " + Inc.score)
	.css({"text-align": "center"});
    	/*window.onclick(function() {
		Crafty.scene("main");
	})*/
	setTimeout(function() {
        	Crafty.scene("game");
    	}, 5000);
});
