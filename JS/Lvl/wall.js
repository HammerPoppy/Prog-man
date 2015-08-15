Crafty.c("Wall", {
    init: function () {
        this.addComponent("2D, DOM, wall, Collision");
        this.collision();
        this.requires("solid");
        /*this.addComponent("topline")
         this.addComponent("righttop")
         this.addComponent("rightpimp")
         this.addComponent("rightline");
         this.addComponent("rightbot")
         this.addComponent("lefttop")
         this.addComponent("leftpimp")
         this.addComponent("leftline");
         this.addComponent("leftbot")
         this.addComponent("hortube")
         this.addComponent("bottotop")
         this.addComponent("toppimp");
         this.addComponent("botline")
         this.addComponent("verttube")
         this.addComponent("toptoright")
         this.addComponent("toptoleft");
         this.addComponent("bottoright")
         this.addComponent("bottoleft")
         this.addComponent("toptobot")
         this.addComponent("botpimp");*/
    }
});
