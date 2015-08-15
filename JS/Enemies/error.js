Crafty.c("Error", {
    init: function () {
        this.addComponent("2D, DOM, error, Collision");
        this.bind("spawn", function () {
            var random = (Math.random() * 100);
            if (random > 0 && random <= 26) {
                this.attr({x: 3 * Settings.poligon, y: 3 * Settings.poligon})
            }
            if (random > 26 && random <= 51) {
                this.attr({x: 3 * Settings.poligon, y: 7 * Settings.poligon})
            }
            if (random > 51 && random <= 76) {
                this.attr({x: 16 * Settings.poligon, y: 3 * Settings.poligon})
            }
            if (random > 76 && random <= 101) {
                this.attr({x: 16 * Settings.poligon, y: 7 * Settings.poligon})
            }
        })
        this.trigger("spawn");
    },
});