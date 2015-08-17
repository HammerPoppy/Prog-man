Crafty.c("Bug", {
    init: function () {
        this.addComponent("2D, DOM, bug")
        this.bind("spawn", function () {
            //var random = (Math.random() * 100);
            /*if (random > 0 && random <= 26) {
                this.attr({x: 1 * Settings.poligon, y: 1 * Settings.poligon})
            }
            if (random > 26 && random <= 51) {
                this.attr({x: 18 * Settings.poligon, y: 1 * Settings.poligon})
            }
            if (random > 51 && random <= 76) {
                this.attr({x: 1 * Settings.poligon, y: 9 * Settings.poligon})
            }
            if (random > 76 && random <= 101) {
                this.attr({x: 18 * Settings.poligon, y: 9 * Settings.poligon})
            }
			*/
			this.attr({x: 18 * Settings.poligon, y: 9 * Settings.poligon})
        })

    this.trigger("spawn");
	var directions=[
				{name: 'BugUp', x : 0, y : -1},
				{name: 'BugRight', x : 1, y :0},
				{name: 'BugLeft', x : -1, y : 0},
				{name: 'BugDown', x : 0, y : 1}
				];
	   this.bind("EnterFrame",function() {
		   if (this.y >=1 * Settings.poligon)
		    {
            var direction = directions[0];
			this.x += direction.x;
            this.y += direction.y;
			}
			if (this.y <=1 * Settings.poligon && this.x >(15 * Settings.poligon))
		{
			var direction = directions[2];
		   this.y += direction.y;
           this.x += direction.x;
		   var z = this.x;
		}
		 if (this.x == 300)
		 {
			this.x += 0;
            this.y += 1;
			
		 }
		})
		
		this.trigger("EnterFrame");
    },
});