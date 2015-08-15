Crafty.c("DotNET", {
    init: function () {
        this.bind("dotNETSpawn", function () {
            this.addComponent("2D, DOM, dotNET, Collision");
            this.collision();
            var random = (Math.random() * 100);
            if (random > 0 && random <= 51) {
                this.attr({x: 2 * Settings.poligon, y: 5 * Settings.poligon})
            }
            if (random > 51 && random <= 101) {
                this.attr({x: 17 * Settings.poligon, y: 5 * Settings.poligon})
            }
        });
    }
});