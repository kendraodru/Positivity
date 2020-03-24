// Render everything
const render = () => {
    ctx.fillStyle = terrainPattern;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Render the player if the game isn't over
    if (!isGameOver) {
        renderEntity(player);
    }

    renderEntities(bullets);
    // renderEntities(enemies);
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

    player.pos = [50, canvas.height / 2];
};
