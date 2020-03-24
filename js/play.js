// Render everything
const render = () => {
    // ctx.fillStyle = terrainPattern;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    // add obstacles 
    ctx.fillStyle = 'rgba(0,0,255,1)' //blue
    ctx.fillRect(100,100, 30, 30)
    ctx.fillStyle='rgba(255,0,0,0.5)' //red
    ctx.fillRect(200,300, 100, 100)
    ctx.fillStyle ='rgba(0,255,0,0.5)' //green
    ctx.fillRect(100,200, 100, 100)

    
    let terrainPattern = ctx.createPattern(resources.get('img/blue.png'), 'repeat');
    ctx.fillStyle = terrainPattern;
    
    if (!isGameOver) {
        renderEntity(player);
    }

    renderEntities(bullets);
    renderEntities(enemies);
    // renderEntities(positivityBurst);
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

// Game over
const gameOver = () => {

}

// Reset game to original state
const reset = () => {
    isGameOver = false;
    gameTime = 0;
    score = 0;

    enemies = [];
    bullets = [];

    for(i=0; i < 10; i++){
        enemies.push({
            pos: [Math.random() * canvas.width,
            Math.random() * (canvas.height - 39)],
            sprite: new Sprite('img/angry_red_pig.png', [0, 0], [36, 30],
                6, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11])
        })
    }

    player.pos = [50, canvas.height / 2];
};


