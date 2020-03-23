// console.log('hello')

let canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// within the variable called ctx, we have access to all these drawing methods
ctx = canvas.getContext('2d');

// (top-left,top-right,width, heigth)
ctx.fillRect(100,100, 100, 100)
ctx.fillRect(200,300, 100, 100)
