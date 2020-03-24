
// Game state
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
let enemies = [];
let explosions = [];

let lastFire = Date.now();
let gameTime = 0;
let isGameOver;
let terrainPattern;

let posPoints = 0;
let scoreEl = document.getElementById('positivity-points');

// Speed in pixels per second
let playerSpeed = 200;
let bulletSpeed = 500;
let enemySpeed = 100; //my piggies

// Update game objects
update = (dt) => {
    gameTime += dt;

    handleInput(dt);
    updateEntities(dt);

    // code for my angry piggies to be created

    // checkCollisions();

    scoreEl.innerHTML = score;
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
    // Update the player sprite animation
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

    // Update all the enemies

    // Update all the positivity explosions
    
}
