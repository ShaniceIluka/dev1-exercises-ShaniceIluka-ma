“use strict”; 

let canvas = document;querySelector('canves');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let context = canvas.getContext ('2d');

let width = context.canvas.with;
let height = context.canvas.height;
/* test1 */

let margin = 5;

drawLines();

function drawLines ();{ 
   context.beginPath();

   context.lineWidth = 2;

   context.moveTo(margin, 50);
   context.lineTo(width - margin, 50);
   context.lineTo(margin,50);

}
