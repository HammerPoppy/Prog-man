Crafty.c("JS", {
    init: function () {
        this.bind("jsSpawn", function () {
            this.addComponent("2D, DOM, js, Collision");
            this.collision();
            var random = (Math.random() * 100);
            if (random > 0 && random <= 51) {
                this.attr({x: 5 * Settings.poligon, y: 5 * Settings.poligon})
            }
            if (random > 51 && random <= 101) {
                this.attr({x: 15 * Settings.poligon, y: 5 * Settings.poligon})
            }
        });
    }
});