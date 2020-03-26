
const render = () => {
    ctx.fillRect(0, 0, canvas.width, canvas.height);    
    ctx.fillStyle = background;
    if (!isGameOver) {
        renderEntity(player);
    }
    renderEntities(bullets);
    renderEntities(piggies);
    renderEntities(positivityPop);
};

const renderEntities = (list) => {
    for (let i = 0; i < list.length; i++) {
        renderEntity(list[i]);
    }
}

const renderEntity = (entity) => {
    ctx.save();
    ctx.translate(entity.pos[0], entity.pos[1]);
    entity.sprite.render(ctx);
    ctx.restore();
}


const gameOver = () => {
    document.getElementById('game-over').style.display = 'block';
    document.getElementById('game-over-cover').style.display = 'block';
    isGameOver = true;
}

const reset = () => {
    document.getElementById('game-over').style.display = 'none';
    document.getElementById('game-over-cover').style.display = 'none';
    isGameOver = false;
    gameTime = 0;
    score = 0;

    piggies = [];
    bullets = [];

    player.pos = [50, canvas.height / 2];
};

// EVENT LISTENERS

document.getElementById('play-music-icon').addEventListener("click", (e) => {

    let music = document.getElementById('play-music');
    let icon = document.getElementById('volume-icon');

    e.preventDefault();
    if (music.muted === false) {
        console.log('mute')
        console.log(icon)

        music.muted = true;
        icon.setAttribute("class", "fas fa-volume-mute");
        icon = document.getElementById('volume-icon');
        console.log('hi')
    } else if (music.muted === true) {
        console.log('unmute')
        console.log(icon)

        document.getElementById('play-music').play()
        music.muted = false;
        icon.setAttribute("class", "fas fa-volume-up");
        icon = document.getElementById('volume-icon');
        console.log('bye')
    }

})


