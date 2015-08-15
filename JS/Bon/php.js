Crafty.c("Php", {
    init: function () {
        this.bind("phpSpawn", function () {
            this.addComponent("2D, DOM, php, Collision");
            this.collision();
            var random = (Math.random() * 100);
            if (random > 0 && random <= 26) {
                this.attr({x: 4 * Settings.poligon, y: 1 * Settings.poligon})
            }
            if (random > 26 && random <= 51) {
                this.attr({x: 4 * Settings.poligon, y: 9 * Settings.poligon})
            }
            if (random > 51 && random <= 76) {
                this.attr({x: 15 * Settings.poligon, y: 1 * Settings.poligon})
            }
            if (random > 76 && random <= 101) {
                this.attr({x: 15 * Settings.poligon, y: 9 * Settings.poligon})
            }
        });
    }
});