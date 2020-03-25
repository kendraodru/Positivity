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
canvas.width = 650;
canvas.height = 500;
document.body.appendChild(canvas);


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
    background = ctx.createPattern(resources.get('img/blue.png'), 'repeat');
    // document.getElementById('play-again').addEventListener('click', () => {
    //     reset();
    // });
    reset();
    lastTime = Date.now();
    main();
}

resources.load([
    'img/blue.png',
    'img/angry_red_pig.png',
    'img/pink_dude.png',
    'img/heart.png',
    'img/collected.png',
    'img/green_pig.png',
    'img/Purple.png',
]);
resources.onReady(init);
