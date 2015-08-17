Crafty.c("Crash", {
    init: function () {
        this.addComponent("2D, DOM, crash, Collision")
        this.bind("spawn", function () {
            var random = (Math.random() * 100);
            if (random > 0 && random <= 50) {
                this.attr({x: 10 * Settings.poligon, y: 1 * Settings.poligon})
            }
            if (random > 51 && random <= 100) {
                this.attr({x: 10 * Settings.poligon, y: 9 * Settings.poligon})
            }
        })
        this.trigger("spawn");
    },
});