
//global variables
var imageArray = [];
//var usedImages = [];
//var totalCounter = 0;

//construction function
function imageCreator(name, filePath){
  this.name = name;
  this.filePath = filePath;
  this.imageViews = 0;
  this.click = 0;
  imageArray.push(this);
}

var bag = new imageCreator('bag', './img/bag.jpg');
var banana = new imageCreator('banana', './img/banana.jpg');
var bathroom = new imageCreator('bathroom', './img/bathroom.jpg');
var boots = new imageCreator('boots', './img/boots.jpg');
var breafast = new imageCreator('breafast', './img/breakfast.jpg');
var bubblegum = new imageCreator('bubblegum', './img/bubblegum.jpg');
var chair = new imageCreator('chair', './img/chair.jpg');
var cthulhu = new imageCreator('cthulhu', './img/cthulhu.jpg');
var dogDuck = new imageCreator('dog-duck', './img/dog-duck.jpg');
var dragon = new imageCreator('dragon', './img/dragon.jpg');
var pen = new imageCreator('pen', './img/pen.jpg');
var petSweep = new imageCreator('pet-sweep', './img/pet-sweep.jpg');
var scissors = new imageCreator('scissors', './img/scissors.jpg');
var shark = new imageCreator('shark', '/img/shark.jpg');
var tauntaun = new imageCreator('tauntaun', './img/tauntaun.jpg');
var unicorn = new imageCreator('unicorn', './img/unicorn.jpg');
var watercan = new imageCreator('water-can', './img/water-can.jpg');
var wineGlass = new imageCreator('wine-glass', './img/wine-glass.jpg');
var sweep = new imageCreator('sweep', './img/sweep.png');
var usb = new imageCreator('usb', './img/usb.gif');

var imageList = [bag, banana, bathroom, boots, breafast, bubblegum, chair, cthulhu, dogDuck, dragon, pen, petSweep, scissors, shark, tauntaun, unicorn, watercan, wineGlass, sweep, usb];
console.log('image names', imageList);

//i'm suppostu generate random image and get that added to my whlie loop
function randomImage (){
  var randomNumber = Math.floor(Math.random() * imageList.length);
    //console.log('random number generator', randomNumber);
  return imageArray[randomNumber];
}
randomImage();
console.log(randomImage());

//function to render randomImages to the page after user clicks on them.

function render() {
  for (k = 0; k < 3; k++){
    var display = document.getElementById('image');
    var object = displayedImages[k];
    image = document.createElement('img');
    image.setAttribute('class','survey');
    image.setAttribute('src', object.path);
    image.setAttribute('id', object.name);
    display.appendChild(image);
    object.displayCount++;
    image.addEventListiner('click', eventHandler);

  }
}

//event handler function not connected at the moment but will soon
function eventHandler(event) {
  if (counter < 25) {
    var selected = event.target;
    clicker(selected.id); {
      for (var i=0; i < imageList.length; i++); {
        if (imageList[i] === selected.id); {
          imageList[i].clickCount++;
        }
      }
    }
    lastShown = displayedImages;
    displayedImages = [];
    document.getElementById('image1').innerHTML = '';
    randomImage(imageList.length);
    render();
  } else {


  }
}
