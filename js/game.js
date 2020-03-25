let player = {
    pos: [0, 0],
    sprite: new Sprite(
        'img/pink_dude.png', 
        [0, 0], 
        [32, 32], 
        16, 
        [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
    )
};

let bullets = [];
let piggies = [];
let positivityPop = [];



let lastFire = Date.now();
let gameTime = 0;
let isGameOver;
let terrainPattern;

let posPoints = 0;
let scoreEl = document.getElementById('positivity-points');

let playerSpeed = 200;
let bulletSpeed = 500;
let enemySpeed = 100; //my piggies

// update game objects
update = (dt) => {
    gameTime += dt;

    handleInput(dt);
    updateEntities(dt);
    
    if (Math.random() < 1 - Math.pow(.993, (gameTime))){
        piggies.push({
            pos: [canvas.width,
            Math.random() * (canvas.height - 39)],
            sprite: new Sprite('img/angry_red_pig.png', [0, 0], [36, 30],
            6, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11])
        })
    }

    checkCollisions();


    scoreEl.innerHTML = `Positivity Points: ${score}`;
};

const handleInput = (dt) => {
    if (input.isDown('DOWN') || input.isDown('s')) {
        player.pos[1] += playerSpeed * dt;
    }

    if (input.isDown('UP') || input.isDown('w')) {
        player.pos[1] -= playerSpeed * dt;
    }

    if (input.isDown('LEFT') || input.isDown('a')) {
        player.pos[0] -= playerSpeed * dt;
    }

    if (input.isDown('RIGHT') || input.isDown('d')) {
        player.pos[0] += playerSpeed * dt;
    }

    if (input.isDown('SPACE') &&
        !isGameOver &&
        Date.now() - lastFire > 100) {
        let x = player.pos[0] + player.sprite.size[0] /2
        let y = player.pos[1] + player.sprite.size[1]/ 2

        bullets.push({
            pos: [x, y],
            dir: 'forward',
            sprite: new Sprite('img/heart.png', [1,1], [50, 50])
        });  
        bullets.push({
            pos: [x, y],
            dir: 'up',
            sprite: new Sprite('img/heart.png', [1, 1], [50, 50])
        });
        bullets.push({
            pos: [x, y],
            dir: 'down',
            sprite: new Sprite('img/heart.png', [1, 1], [50, 50])
        });

        lastFire = Date.now();
    }
}

const updateEntities = (dt) => {

    player.sprite.update(dt);

    // Update all the heart bullets
    for (let i = 0; i < bullets.length; i++) {
        let bullet = bullets[i];

        switch (bullet.dir) {
            case 'up': bullet.pos[1] -= bulletSpeed * dt; break;
            case 'down': bullet.pos[1] += bulletSpeed * dt; break;
            default:
                bullet.pos[0] += bulletSpeed * dt;
        }

        // Remove the bullet if it goes offscreen
        if (bullet.pos[1] < 0 || bullet.pos[1] > canvas.height ||
            bullet.pos[0] > canvas.width) {
            bullets.splice(i, 1);
            i--;
        }
    }

    for (let i = 0; i < piggies.length; i++) {
        piggies[i].pos[0] -= enemySpeed * dt;
        piggies[i].sprite.update(dt);

        // Remove if offscreen
        if (piggies[i].pos[0] + piggies[i].sprite.size[0] < 0) {
            piggies.splice(i, 1);
            i--;
        }
    }


    for (let i = 0; i < positivityPop.length; i++) {
        positivityPop[i].sprite.update(dt);

        if (positivityPop[i].sprite.done) {
            positivityPop.splice(i, 1);
            i--;
        }
    }
    
}

const collides = (x, y, rightXCoord, btmRight, leftXCoord, y2, r2, btmLeft) => {
    return !(rightXCoord <= leftXCoord || x > r2 ||
        btmRight <= y2 || y > btmLeft);
}

const frameCollides = (pos, size, pos2, size2) => {
    return collides(pos[0], pos[1],
        pos[0] + size[0], pos[1] + size[1],
        pos2[0], pos2[1],
        pos2[0] + size2[0], pos2[1] + size2[1]);
}

const checkCollisions = () => {
    checkPlayerBounds();

    // Run collision detection for all piggies and bullets
    for (let i = 0; i < piggies.length; i++) {
        let pos = piggies[i].pos;
        let size = piggies[i].sprite.size;

        for (let j = 0; j < bullets.length; j++) {
            let pos2 = bullets[j].pos;
            let size2 = bullets[j].sprite.size;

            if (frameCollides(pos, size, pos2, size2)) {
                // Remove the enemy
                piggies.splice(i, 1);
                i--;

                // Add score
                score += 100;

                // Add an explosion
                positivityPop.push({
                    pos: pos,
                    sprite: new Sprite('img/collected.png',
                        [0,0],
                        [32, 32],
                        10,
                        [0, 1, 2, 3, 4, 5],
                        null,
                        true)
                });

                // Remove the bullet and stop this iteration
                bullets.splice(j, 1);
                break;
            }
        }

        if (frameCollides(pos, size, player.pos, player.sprite.size)) {
            gameOver();
        }
    }
}

const checkPlayerBounds = () => {
    if (player.pos[0] < 0) {
        player.pos[0] = 0;
    }
    else if (player.pos[0] > canvas.width - player.sprite.size[0]) {
        player.pos[0] = canvas.width - player.sprite.size[0];
    }

    if (player.pos[1] < 0) {
        player.pos[1] = 0;
    }
    else if (player.pos[1] > canvas.height - player.sprite.size[1]) {
        player.pos[1] = canvas.height - player.sprite.size[1];
    }
}