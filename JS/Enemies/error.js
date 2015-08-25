Crafty.c("Error", {
    init: function () {
        this.addComponent("2D, DOM, error, Collision");
        this.bind("spawn", function () {
            var random = (Math.random() * 100);
            this.attr({x: 16 * Settings.poligon, y: 7 * Settings.poligon})
        })
        this.trigger("spawn");
        var directions = [
            {name: 'ErrorUp', x: 0, y: -2},
            {name: 'ErrorRight', x: 2, y: 0},
            {name: 'ErrorLeft', x: -2, y: 0},
            {name: 'ErrorDown', x: 0, y: 2}
        ];
        this.bind("EnterFrame", function () {
            var posx = this.x;
            if (this.y > 59 && this.x == 60) {
                var direction = directions[0];
                this.x += direction.x;
                this.y += direction.y;
            }
            if (this.y < 61 && posx <= 319) {
                var direction = directions[1];
                this.y += direction.y;
                this.x += direction.x;
            }

            if (this.x == 320 && this.y < 140) {
                var direction = directions[3];
                this.y += direction.y;
                this.x += direction.x;
            }
            if (this.x >= 60 && this.y == 141 || this.y == 140 || this.y == 142) {
                var direction = directions[2];
                this.y += 0;
                this.x += direction.x;
            }
        })
        this.trigger("EnterFrame");
    },
});
