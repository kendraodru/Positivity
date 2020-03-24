const requestAnimFrame = (()=> {
    return window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        window.oRequestAnimationFrame ||
        window.msRequestAnimationFrame ||
        function (callback) {
            window.setTimeout(callback, 1000 / 60);
        };
})();

let canvas = document.getElementById('positivity-game')
let ctx = canvas.getContext("2d");
canvas.width = 512;
canvas.height = 480;
document.body.appendChild(canvas);

// The main game loop
let lastTime;
const main = ()=>{
    let now = Date.now();
    let dt = (now - lastTime) / 1000.0;

    update(dt);
    render();

    lastTime = now;
    requestAnimFrame(main);
};

const init = ()=>{
    terrainPattern = ctx.createPattern(resources.get('img/blue.png'), 'repeat');
    reset();
    lastTime = Date.now();
    main();
}

resources.load([
    'img/blue.png',
    'img/angry_red_pig.png',
    'img/pink_dude.png',
    'img/heart.png',
    'img/box_tile.png',
    'img/Green.png',
    'img/Pink.png',
]);
resources.onReady(init);
