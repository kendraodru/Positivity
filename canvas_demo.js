// console.log('hello')
// reference page for project

// let canvas = document.querySelector('canvas');
// canvas.width = window.innerWidth;
// canvas.height = window.innerHeight;

// within the variable called ctx, we have access to all these drawing methods
// ctx = canvas.getContext('2d');

// rect
// (top-left,top-right,width, heigth)
// ctx.fillStyle = 'rgba(0,0,255,0.5)'
// ctx.fillRect(100,100, 100, 100)
// ctx.fillStyle='rgba(255,0,0,0.5)'
// ctx.fillRect(200,300, 100, 100)
// ctx.fillStyle ='rgba(0,255,0,0.5)'
// ctx.fillRect(400,300, 100, 100)


// line s
// ctx.beginPath();
// // moveTo(x,y)
// ctx.moveTo(50, 300);
// // creates a line to a new coordinate
// ctx.lineTo(300, 100);
// ctx.lineTo(400, 300);
// // to add color
// ctx.strokeStyle = 'blue';
// ctx.stroke();

// arc for circle
// ctx.beginPath();
// ctx.arc(300, 300, 30, 0, Math.PI*2, false)
// ctx.strokeStyle = 'blue'
// ctx.stroke();

// for (let i = 0; i<8; i++){
//     let x = Math.random() * window.innerWidth;
//     let y = Math.random() * window.innerHeight;
//     ctx.beginPath();
//     ctx.arc(x, y, 30, 0, Math.PI * 2, false)
//     ctx.strokeStyle = 'blue'
//     ctx.stroke();
// }


// ANIMATION TIMEEEE

// let x = Math.random()* innerWidth;
// let y = Math.random() * innerHeight;
// velocity
// let dx = (Math.random() - 0.5)* 10;
// let dy = (Math.random() - 0.5) * 10; 
// let dx = 6;
// let dy = 6; 
// let radius = 30;
// function animate(){
    // if (x + radius > innerWidth || x - radius < 0){
    //     dx = -dx
    // } 

    // if (y + radius > innerHeight || y - radius < 0){
    //     dy = -dy
    // } 
    // requestAnimationFrame(animate);
    // ctx.clearRect(0,0, innerWidth, innerHeight);
    // ctx.beginPath();
    // ctx.arc(x, y, radius, 0, Math.PI * 2, false)
    // ctx.strokeStyle = 'blue'
    // ctx.stroke();

    // x+=dx;
    // y+=dy;
// }

// function Circle(x, y, dx, dy, radius) {
//     this.x = x;
//     this.y = y;
//     this.dx = dx;
//     this.dy = dy;
//     this.radius = radius

//     this.draw = function () {
//         ctx.beginPath();
//         ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
//         ctx.strokeStyle = 'blue'
//         ctx.stroke();
//     }

//     this.update = function () {
//         if (this.x + radius > innerWidth || this.x - radius < 0) {
//             this.dx = -this.dx
//         }

//         if (this.y + radius > innerHeight || this.y - radius < 0) {
//             this.dy = -this.dy
//         }

//         this.x += this.dx;
//         this.y += this.dy;
//     }
// }



// // let circle = new Circle(x, x, dx, dy, radius);

// // function animate (){
// //     requestAnimationFrame(animate);
// //     ctx.clearRect(0, 0, innerWidth, innerHeight);
// //     circle.draw();
// //     circle.update();
// // }

// let circles = [];

// for (let i = 0; i < 100; i++){
//     let radius = 30;
//     let x = Math.random() * innerWidth - (radius*2) + radius;
//     let y = Math.random() * innerHeight - (radius * 2) + radius;
//     // let dx = 6;
//     // let dy = 6;
//     let dx = (Math.random() - 0.5) * 10;
//     let dy = (Math.random() - 0.5) * 10; 
//     circles.push(new Circle(x, y, dx, dy, radius))
//     // console.log(circles)
// }

// function animate (){
//     requestAnimationFrame(animate);
//     ctx.clearRect(0, 0, innerWidth, innerHeight);
//     for (let i=0; i < circles.length; i++){
//         circles[i].draw();
//         circles[i].update();
//     }  
// }
// animate();

