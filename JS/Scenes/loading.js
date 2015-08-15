Crafty.scene("loading", function () {


    Crafty.sprite(16, "Images (Dev)/Map/SpriteMap.png", {//Задаем спрайтам (спрайтам карты) в рисунке названия
        topline: [0, 0],
        righttop: [1, 0],
        rightpimp: [2, 0],
        rightline: [3, 0],
        rightbot: [4, 0],
        lefttop: [5, 0],
        leftpimp: [6, 0],
        leftline: [7, 0],
        leftbot: [8, 0],
        hortube: [9, 0],
        bottotop: [0, 1],
        toppimp: [1, 1],
        botline: [2, 1],
        verttube: [3, 1],
        toptoright: [4, 1],
        toptoleft: [5, 1],
        bottoright: [6, 1],
        bottoleft: [7, 1],
        toptobot: [8, 1],
        botpimp: [9, 1],
        wall: [0, 2]
    })

    Crafty.sprite(16, "Images (Dev)/Map/live.png", {
        live: [0, 0]
    })

    Crafty.sprite(16, "Images (Dev)/Objects sprite.png", {
        playerR: [4, 2],
        playerL: [3, 2]
    })

    Crafty.sprite(20, "Images (Dev)/Map/Score panel 21.png", {
        scorepanel: [0, 0, 400, 60]
    })


    Crafty.sprite(16, "Images (Dev)/Objects sprite.png", {//Задаем спрайтам обьектов назваи
        bug: [0, 1],
        java: [0, 0],
        cSharp: [1, 0],
        php: [2, 0],
        dotNET: [3, 0],
        js: [4, 0],
        error: [2, 1],
        crash: [3, 1],
        ddos: [4, 1]
    })
    Crafty.scene("main");
});