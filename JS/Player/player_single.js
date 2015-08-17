Crafty.c("player", {
    init: function () {
        this.addComponent("2D, DOM, playerR, Fourway, Collision");
        this.attr({x: 9 * Settings.poligon, y: 5 * Settings.poligon});
        this.fourway(1.6);
        this.collision();


        this.bind("teleport", function () {
            var random = (Math.random() * 100);
            if (random > 0 && random <= 50) {
                this.attr({x: 5 * Settings.poligon, y: 7 * Settings.poligon})
            }
            if (random > 51 && random <= 100) {
                this.attr({x: 14 * Settings.poligon, y: 3 * Settings.poligon})
            }
        })
        this.onHit("JS", function (e) {
            var data = e[0].obj;
            this.trigger("teleport");
            data.destroy();
        });
        this.onHit("Php", function (e) {
            var data = e[0].obj;
            Inc.lives += 1;
            Crafty.trigger("updateLives")
            data.destroy();
        })
        this.onHit("C#", function (e) {
            var data = e[0].obj;
            data.destroy();
        });
        this.onHit("DotNET", function (e) {
            var data = e[0].obj;
            data.destroy();
        });
        this.onHit("Java", function (e) {
            var data = e[0].obj;
            data.destroy();
        });
		/*this.onHit("wall", function() {
			this.fourway(1);
		});*/
		//Столковение с монстром
		/*this.onHit("Bug", function (e) {
            var data = e[0].obj;
            Inc.lives -= 1;
            Crafty.trigger("updateLives")
			if (Inc.lives == 0){
				Crafty.scene("Score");
			}
            data.destroy();
			
        })
		*/
		this.onHit("Crash", function (e) {
            var data = e[0].obj;
            Inc.lives -= 1;
            Crafty.trigger("updateLives")
			if (Inc.lives == 0){
				Crafty.scene("Score");
			}
            data.destroy();
        })
		this.onHit("Error", function (e) {
            var data = e[0].obj;
            Inc.lives -= 1;
            Crafty.trigger("updateLives")
			if (Inc.lives == 0){
				Crafty.scene("Score");
			}
            data.destroy();
        })
		this.onHit("Ddos", function (e) {
            var data = e[0].obj;
            Inc.lives -= Inc.lives;
            Crafty.trigger("updateLives")
			Crafty.scene("Score");
            data.destroy();
        })
		this.onHit("solid", function(e) {
      var object = e[0].obj;
      // left
      if (object.x > this.x && (this.x + Settings.poligon) > object.x) {
        this.x -= this._speed;
        this._speed = 0;
		if (this._movement) {
			this.x -= this._movement.x;
			this.y -= this._movement.y;
		}
			
	    return this;
      }
      // right
      if (object.x < this.x && this.x < (object.x + Settings.poligon)) {
        this.x += this._speed;
        this._speed = 0;
		if (this._movement) {
			this.x -= this._movement.x;
			this.y -= this._movement.y;
		}
			
	    return this;
      }
      // top
      if (object.y < this.y && (this.y + Settings.poligon) > object.y) {
        this.y += this._speed;
        this._speed = 0;
		if (this._movement) {
			this.x -= this._movement.x;
			this.y -= this._movement.y;
		}
			
		return this;
      }
      // bottom
      if (object.y > this.y && this.y < (object.y + Settings.poligon)) {
        this.y -= this._speed;
        this._speed = 0;
		if (this._movement) {
			this.x -= this._movement.x;
			this.y -= this._movement.y;
		}
			
		return this;
      }
	    
		/*Анимация(не работает)
		this.bind("Moved", function(e) {
            if(this.x < e.x) {
                if(!this.isPlaying("walk_left"))
                this.stop().animate("walk_left");
            }
            if(this.x > e.x) {
                if(!this.isPlaying("walk_right"))
                 this.stop().animate("walk_right");
            }
        });
		
		this.animate("walk_left", 3, 2);
		this.animate("walk_right", 4, 2);*/
    });
    }
});