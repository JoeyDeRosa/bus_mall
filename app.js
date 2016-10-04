'use strict';
//creating image objects and arrays
function TestImage(src, number, imageName) {
  this.src = src;
  this.number = number;
  this.imageName = imageName;
  images.push(this);
}
var imageHolder = document.getElementById('imageHolder');
var listHolder = document.getElementById('listHolder');
var imgEl1 = document.createElement('img');
var imgEl2 = document.createElement('img');
var imgEl3 = document.createElement('img');
var previousImage1 = false;
var previousImage2 = false;
var previousImage3 = false;
var count = 0;
var index = 0;
var images = [];
new TestImage('images/bag.jpg',0,'bag');
new TestImage('images/banana.jpg',1,'banana');
new TestImage('images/bathroom.jpg',2,'bathroom');
new TestImage('images/boots.jpg',3,'boots');
new TestImage('images/breakfast.jpg',4,'breakfast');
new TestImage('images/bubblegum.jpg',5,'bubblegum');
new TestImage('images/chair.jpg',6,'chair');
new TestImage('images/cthulhu.jpg',7,'cthulhu');
new TestImage('images/dog-duck.jpg',8,'dog duck');
new TestImage('images/dragon.jpg',9,'dragon');
new TestImage('images/pen.jpg',10,'pen');
new TestImage('images/pet-sweep.jpg',11,'pet sweep');
new TestImage('images/scissors.jpg',12,'scissors');
new TestImage('images/shark.jpg',13,'shark');
new TestImage('images/sweep.png',14,'child sweep');
new TestImage('images/tauntaun.jpg',15,'tauntaun');
new TestImage('images/unicorn.jpg',16,'unicorn');
new TestImage('images/usb.gif',17,'usb');
new TestImage('images/water-can.jpg',18,'water can');
new TestImage('images/wine-glass.jpg',19,'wine glass');
var imageSelected = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var imageTimesShown = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];

//creating functions
function randomNumber() {
  index = Math.floor(Math.random() * images.length);
  return index;
}

function generateImages() {
  var image1 = images[randomNumber()].src;
  while(image1 === previousImage1 || image1 === previousImage2 || image1 === previousImage3) {
    image1 = images[randomNumber()].src;
  }
  ++imageTimesShown[index];
  imgEl1.src = image1;
  imgEl1.setAttribute('alt', images[index].number);
  imageHolder.appendChild(imgEl1);
  //
  var image2 = images[randomNumber()].src;
  while(image2 === previousImage1 || image2 === previousImage2 || image2 === previousImage3 || image2 === image1) {
    image2 = images[randomNumber()].src;
  }
  ++imageTimesShown[index];
  imgEl2.src = image2;
  imgEl2.setAttribute('alt', images[index].number);
  imageHolder.appendChild(imgEl2);
  //
  var image3 = images[randomNumber()].src;
  while(image3 === previousImage1 || image3 === previousImage2 || image3 === previousImage3 || image3 === image1 || image3 === image2) {
    image3 = images[randomNumber()].src;
  }
  ++imageTimesShown[index];
  imgEl3.src = image3;
  imgEl3.setAttribute('alt', images[index].number);
  imageHolder.appendChild(imgEl3);
  previousImage1 = image1;
  previousImage2 = image2;
  previousImage3 = image3;
}

function displayTimesSelected() {
  for(var i = 0; i < images.length; i++) {
    var message = 'The ' + images[i].imageName + ' image was selected ' + imageSelected[i] + ' time(s).';
    var liEl = document.createElement('li');
    liEl.textContent = message;
    listHolder.appendChild(liEl);
  }
}

function handleClick(event) {
  var selectedImage = event.target.alt;
  ++imageSelected[selectedImage];
  ++count;
  if(count === 25){
    displayTimesSelected();
    imageHolder.removeEventListener('click', displayTimesSelected);
  }
  generateImages();
}

//run functions
generateImages();
imageHolder.addEventListener('click', handleClick);
