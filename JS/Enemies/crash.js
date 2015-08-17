Crafty.c("Crash", {
    init: function () {
        this.addComponent("2D, DOM, crash, Collision")
        this.bind("spawn", function () {
            this.attr({x: 6 * Settings.poligon, y: 9 * Settings.poligon})
        })
        this.trigger("spawn");
        var directions = [
            {name: 'ErrorUp', x: 0, y: -1},
            {name: 'ErrorRight', x: 1, y: 0},
            {name: 'ErrorLeft', x: -1, y: 0},
            {name: 'ErrorDown', x: 0, y: 1}
        ];
        this.bind("EnterFrame", function () {
            var posx = this.x;
            if (this.x <= 260 && this.y == 180)
            {
                var direction = directions[1];
                this.x += direction.x;
                this.y += direction.y;
            }
            if (this.y >= 20 && posx == 261)
            {
                var direction = directions[0];
                this.y += direction.y;
                this.x += direction.x;
            }

            if (this.x >= 120 && this.y <= 20)
            {
                var direction = directions[2];
                this.x += direction.x;
            }
            if (this.y <= 180 && this.x == 119)
            {
                var direction = directions[3];
                this.y += direction.y;

            }

        })

        this.trigger("EnterFrame");
    },
});