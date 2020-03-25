

class Piggie {
    constructor(url, pos, size, speed, frames, dir, once) {
        this.pos = pos
        this.x = pos[0];
        this.y = pos[1]
        this.size = size;
        this.speed = typeof speed === 'number' ? speed : 0;
        this.dx = speed/2;
        this.dy = speed/2;
        this.frames = frames;
        this._index = 0;
        this.url = url;
        this.dir = dir || 'horizontal';
        this.once = once;
    };

    update(dt) {
        this._index += this.speed * dt;
    }

    render(ctx) {
        let frame;

        if (this.speed > 0) {
            let max = this.frames.length;
            let idx = Math.floor(this._index);
            frame = this.frames[idx % max];

            if (this.once && idx >= max) {
                this.done = true;
                return;
            }
        }
        else {
            frame = 0;
        }


        let x = this.pos[0];
        let y = this.pos[1];

        if (x + this.size > canvas.width || x - this.size[0] < 0) {
            this.dx = -this.dx
            // this.speed = this.dx * 2
        }

        if (y + this.size > canvas.height || y - this.size[1] < 0) {
            this.dy = -this.dy
            // this.speed = this.dy * 2
        }

        // this.x += this.dx;
        // this.y += this.dy;

        if (this.dir == 'vertical') {
            y += frame * this.size[1];
        }
        else {
            x += frame * this.size[0];
        }

        ctx.drawImage(resources.get(this.url),
            x, y,
            this.size[0], this.size[1],
            0, 0,
            this.size[0], this.size[1]);
    }

};


window.Piggie = Piggie;