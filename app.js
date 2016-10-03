'use strict';
//creating image objects and arrays
var imageHolder = document.getElementById('imageHolder');
var imgEl1 = document.createElement('img');
var imgEl2 = document.createElement('img');
var imgEl3 = document.createElement('img');
var previousImage1 = false;
var previousImage2 = false;
var previousImage3 = false;
var index = 0;
var bag = new Image();
bag.src = 'images/bag.jpg';
var banana = new Image();
banana.src = 'images/banana.jpg';
var bathroom = new Image();
bathroom.src = 'images/bathroom.jpg';
var boots = new Image();
boots.src = 'images/boots.jpg';
var breakfast = new Image();
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
var imageSelected = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var imageTimesShown = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];

//creating functions
function randomNumber() {
  index = Math.floor(Math.random() * images.length);
  return index;
}

function selectImage() {
  return images[randomNumber()].src;
}

function generateImages() {
  var image1 = selectImage();
  while(image1 === previousImage1 || image1 === previousImage2 || image1 === previousImage3) {
    image1 = selectImage();
  }
  console.log(image1);
  console.log(previousImage1);
  ++imageTimesShown[index];
  imgEl1.src = image1;
  imageHolder.appendChild(imgEl1);
  //
  var image2 = selectImage();
  while(image2 === previousImage1 || image2 === previousImage2 || image2 === previousImage3 || image2 === image1) {
    image2 = selectImage();
  }
  console.log(image2);
  console.log(previousImage2);
  ++imageTimesShown[index];
  imgEl2.src = image2;
  imageHolder.appendChild(imgEl2);
  //
  var image3 = selectImage();
  while(image3 === previousImage1 || image3 === previousImage2 || image3 === previousImage3 || image3 === image1 || image3 === image2) {
    image3 = selectImage();
  }
  console.log(image3);
  console.log(previousImage3);
  ++imageTimesShown[index];
  imgEl3.src = image3;
  imageHolder.appendChild(imgEl3);
  previousImage1 = image1;
  previousImage2 = image2;
  previousImage3 = image3;
}

function handleClick() {
  generateImages();
}

//run functions
generateImages();
imageHolder.addEventListener('click', handleClick);
