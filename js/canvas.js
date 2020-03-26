
// boilerplate code
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
// create me canvas lad
let canvas = document.getElementById('positivity-game')
let ctx = canvas.getContext("2d");

canvas.width = 650;
canvas.height = 500;
document.body.appendChild(canvas);


// Woozz, me game loop
let lastTime;
const main = ()=>{
    let now = Date.now();
    let dt = (now - lastTime) / 1000.0;
    update(dt);

    render();

    lastTime = now;
    requestAnimFrame(main);
    // playAudio();
};

const playAudio = ()=>{
    document.getElementById('play-music').play()
}





const init = ()=>{
    background = ctx.createPattern(resources.get('img/blue.png'), 'repeat');
    document.getElementById('play-again').addEventListener('click', () => {
        reset();
    });
    reset();
    lastTime = Date.now();
    main();
}


resources.curry([
    'img/blue.png',
    'img/angry_red_pig.png',
    'img/pink_dude.png',
    'img/heart.png',
    'img/collected.png',
    'img/green_pig.png',
    'img/Purple.png',
]);

resources.onReady(init);
// resources.onReady(init);

// EVENT LISTENER

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById('play-music-icon').addEventListener("click",(e)=>{
        let music = document.getElementById('play-music');
        let icon = document.getElementById('fas fa-volume-mute');
        // console.log(music)
        e.preventDefault();
        if (music.muted === false){
            console.log('mute')
            console.log(icon)
            
            music.muted = false;
            icon[0].setAttribute("class", "fas fa-volume-mute");
            icon = document.getElementById('fas fa-volume-mute');
            console.log('hi')
        }else if(music.muted === true){
            console.log('unmute')
            console.log(icon)

            document.getElementById('play-music').play()
            music.muted = false;
            icon[0].setAttribute("class", "fas fa-volume-up");
            icon = document.getElementById('fas fa-volume-up');
            console.log('bye')
        }
        
    })
})

// <i class="fas fa-volume-mute"></i> the class i want to us

// const whattado = document.getElementById('instructions')
// $("document").ready({
//     $("whattado").trigger('click')
// })
// document.getElementById('play-music-icon')
// document.getElementById('mute-audio').addEventListener("click", (e) => {
//     const music = document.getElementById("music");
//     if (music.muted === false) {
//         music.muted = true;
//         document.getElementById('mute-audio-img').src = "./assets/img/icons/music-off.png";
//     }
//     else {
//         music.muted = false;
//         document.getElementById('mute-audio-img').src = "./assets/img/icons/music-on.png";
//     }
// });