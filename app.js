'use strict';
//creating image objects and arrays
var imageHolder = document.getElementById('imageHolder');
var bag = new Image();
bag.src = 'images/bag.jpg';
var banana = new Image();
banana.src = 'images/banana.jpg';
var bathroom = new Image();
bathroom.src = 'images/bathroom.jpg';
var boots = new Image();
boots.src = 'images/boots.jpg';
var breakfast= new Image();
breakfast.src = 'images/breakfast.jpg';
var bubblegum = new Image();
bubblegum.src = 'images/bubblegum.jpg';
var chair = new Image();
chair.src = 'images/chair.jpg';
var cthulhu = new Image();
cthulhu.src = 'images/cthulhu.jpg';
var dog = new Image();
dog.src = 'images/dog-duck.jpg';
var dragon = new Image();
dragon.src = 'images/dragon.jpg';
var pen = new Image();
pen.src = 'images/pen.jpg';
var pet = new Image();
pet.src = 'images/pet-sweep.jpg';
var scissors = new Image();
scissors.src = 'images/scissors.jpg';
var shark = new Image();
shark.src = 'images/shark.jpg';
var sweep = new Image();
sweep.src = 'images/sweep.png';
var tauntaun = new Image();
tauntaun.src = 'images/tauntaun.jpg';
var unicorn = new Image();
unicorn.src = 'images/unicorn.jpg';
var usb = new Image();
usb.src = 'images/usb.gif';
var water = new Image();
water.src = 'images/water-can.jpg';
var wine = new Image();
wine.src = 'images/wine-glass.jpg';
var images = [bag, banana, bathroom, boots, breakfast, bubblegum, chair, cthulhu, dog, dragon, pen, pet, scissors, shark, sweep, tauntaun, unicorn, usb, water, wine];
var imageSelected = [];
var imageTimesShown = [];

//creating functions
function randomNumber() {
  return Math.floor(Math.random() * images.length);
}

for(var i = 0; i < 3; i++) {
  var imgEl = document.createElement('img');
  imgEl.src = images[randomNumber()].src;
  console.log(imgEl);
  imageHolder.appendChild(imgEl);
}
