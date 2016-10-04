'use strict';
//creating image objects and arrays
function TestImage(src, number, imageName) {
  this.src = src;
  this.number = number;
  this.imageName = imageName;
  images.push(this);
  namesArray.push(this.imageName);
}
var imageHolder = document.getElementById('imageHolder');
var imgEl1 = document.createElement('img');
var imgEl2 = document.createElement('img');
var imgEl3 = document.createElement('img');
var count = 0;
var index = 0;
var imgElArray = [imgEl1, imgEl2, imgEl3];
var displayImages = ['','',''];
var previousImages = ['','',''];
var images = [];
var namesArray = [];
var percentageArray = [];
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
var data = {
  labels: namesArray, // titles array we declared earlier
  datasets: [
    {
      label: 'Number of Times an Image was Clicked',
      data: imageSelected, // votes array we declared earlier
      hoverBackgroundColor: [
        'red',
        'red',
        'red',
        'red',
        'red',
        'red',
        'red',
        'red',
        'red',
        'red',
        'red',
        'red',
        'red',
        'red',
        'red',
        'red',
        'red',
        'red',
        'red',
        'red'
      ]
    }]
};
var data2 = {
  labels: namesArray, // titles array we declared earlier
  datasets: [
    {
      label: 'Image Selected Percentage',
      data: percentageArray, // votes array we declared earlier
      hoverBackgroundColor: [
        'red',
        'red',
        'red',
        'red',
        'red',
        'red',
        'red',
        'red',
        'red',
        'red',
        'red',
        'red',
        'red',
        'red',
        'red',
        'red',
        'red',
        'red',
        'red',
        'red'
      ]
    }]
};
//creating functions
function randomNumber() {
  index = Math.floor(Math.random() * images.length);
  return index;
}

function generateImages() {
  for(var i = 0; i < 3; i++) {
    var possibleImage = images[randomNumber()];
    while(possibleImage === previousImages[0] || possibleImage === previousImages[1] || possibleImage === previousImages[2] || possibleImage === displayImages[0] || possibleImage === displayImages[1] || possibleImage === displayImages[2]) {
      possibleImage = images[randomNumber()];
    }
    ++imageTimesShown[index];
    displayImages[i] = possibleImage;
    previousImages[i] = displayImages[i];
    imgElArray[i].src = displayImages[i].src;
    imgElArray[i].setAttribute('alt', displayImages[i].number);
    imageHolder.appendChild(imgElArray[i]);
  }
}

function displayTable(chartData, chartID) {
  var ctx = document.getElementById(chartID).getContext('2d');
  new Chart(ctx,{
    type: 'bar',
    data: chartData,
    options: {
      responsive: false
    },
    scales: [{
      ticks: {
        beginAtZero:true
      }
    }]
  });
}

function findPercentage() {
  for(var i = 0; i < 20; i++) {
    percentageArray[i] = imageSelected[i] / imageTimesShown[i] * 100;
  }
}

function handleClick(event) {
  var selectedImage = event.target.alt;
  ++imageSelected[selectedImage];
  ++count;
  if(count === 25){
    displayTable(data, 'chart');
    findPercentage();
    displayTable(data2, 'chart2');
    imageHolder.removeEventListener('click', handleClick);
  } else {
    generateImages();
  }
}

//run functions
generateImages();
imageHolder.addEventListener('click', handleClick);
