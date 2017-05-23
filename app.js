//global variables

var imageList = ['bag', 'banana', 'bathroom', 'boots', 'breafast', 'bubblegum', 'chair', 'cthulhu', 'dog-duck', 'dragon', 'pen', 'pet-sweep', 'scissors', 'shark', 'tauntaun', 'unicorn', 'water-can', 'wine-glass', 'sweep', 'usb'];
console.log('image names', imageList);

var imageArray = [];
//var usedImages = [];
//var totalCounter = 0;

//construction function
function ImageConstructor(name, path){
  this.name = name;
  this.path = path;
  this.imageViews = 0;
  this.click = 0;
  ImageArray.push(this);
}

var bag = new imageCreator('bag', 'img/bag.jpg');
var banana = new imageCreator('banana', 'img\banana.jpg');
var bathroom = new imageCreator('bathroom', 'img\bathroom.jpg');
var boots = new imageCreator('boots', 'img\boots.jpg');
var breafast = new imageCreator('breafast', 'img\breakfast.jpg');
var bubblegum = new imageCreator('bubblegum', 'img\bubblegum.jpg');
var chair = new imageCreator('chair', 'img\chair.jpg');
var cthulhu = new imageCreator('cthulhu', 'img\cthulhu.jpg');
var dogduck = new imageCreator('dog-duck', 'img\dog-duck.jpg');
var pen = new imageCreator('dragon', 'img\dragon.jpg');
var scissors = new imageCreator('scissors', 'img\scissors.jpg');
var shark = new imageCreator('shark', 'img\shark.jpg');
var tauntaun = new imageCreator('tauntaun', 'img\tauntaun.jpg');
var unicorn = new imageCreator('unicorn', 'img\unicorn.jpg');
var watercan = new imageCreator('water-can', 'img\water-can.jpg');
var wineglass = new imageCreator('wine-glass', 'img\wine-glass.jpg');
var sweep = new imageCreator('sweep', 'img\sweep.png');
var usb = new imageCreator('usb', 'img\usb.gif');



//i'm suppostu generate random image and get that added to my whlie loop
function randomImage (){
  var randomNumber = Math.floor(Math.random() * imageList.length);
    //console.log('random number generator', randomNumber);
  return imageArray[randomNumber];
}

randomImage();
console.log(randomImage());
