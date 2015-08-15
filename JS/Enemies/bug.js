Crafty.c("Bug", {
    init: function () {
        this.addComponent("2D, DOM, bug, Collision")
        this.bind("spawn", function () {
            var random = (Math.random() * 100);
            if (random > 0 && random <= 26) {
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
        })

        this.trigger("spawn");
        this.bind("EnterFrame", function () {
            var directions = [
                {name: 'BugUp', x: 0, y: -1},
                {name: 'BugRight', x: 1, y: 0},
                {name: 'BugLeft', x: -1, y: 0},
                {name: 'BugDown', x: 0, y: 1}
            ];
            if (!direction) {
                var rand = Math.floor(Math.random() * (3 - 0 + 1) + 0);
                var direction = directions[rand];
            }

            this.x += direction.x;
            this.y += direction.y;
        })
        this.trigger("EnterFrame");
    },
});
