Crafty.c("BugR", {
    init: function () {
        this.addComponent("2D, DOM, bug, Collision")
        this.bind("spawn", function () {
            //var random = (Math.random() * 100);
            var random = (Math.random() * 100);
            if (random >= 0 && random <= 50) {
                this.attr({x: 18 * Settings.poligon, y: 9 * Settings.poligon})
            }
            if (random > 50 && random <= 100) {
                this.attr({x: 18 * Settings.poligon, y: 1 * Settings.poligon})
            }
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
            if (this.x == 360 && this.y >= 20)
            {
                var direction = directions[0];
                this.x += direction.x;
                this.y += direction.y;
            }
            if (this.y == 19 && posx >= 300)
            {
                var direction = directions[2];
                this.y += direction.y;
                this.x += direction.x;
            }

            if (this.y <= 60 && this.x == 299)
            {
                var direction = directions[3];
                this.y += direction.y;
                this.x += direction.x;
            }
            if (this.y == 61 && this.x <= 320)
            {
                var direction = directions[1];
                this.y += direction.y;
                this.x += direction.x;

            }
            if (this.x == 321 && this.y <= 140 && this.y >= 60)
            {
                var direction = directions[3];
                this.y += direction.y;
                this.x += direction.x;

            }
            if (this.x >= 300 && this.y == 141 && this.x <= 321)
            {
                var direction = directions[2];
                this.y += direction.y;
                this.x += direction.x;

            }
            if (this.x == 299 && this.y <= 180 && this.y >= 141)
            {
                var direction = directions[3];
                this.y += direction.y;
                this.x += direction.x;

            }
            if (this.y == 181 && this.x <= 360)
            {
                var direction = directions[1];
                this.y += direction.y;
                this.x += direction.x;

            }

        })

        this.trigger("EnterFrame");
    },
});