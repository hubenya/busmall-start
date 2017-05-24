//global variables
var imageArray = [];
var imagesLastShown = [];
var displayedImages = [];
var totalCounter = 0;
var results = document.getElementById('results')

//construction function
function imageCreator(name, filePath){
  this.name = name;
  this.filePath = filePath;
  this.imageViews = 0;
  this.clicks = 0;
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
var shark = new imageCreator('shark', './img/shark.jpg');
var tauntaun = new imageCreator('tauntaun', './img/tauntaun.jpg');
var unicorn = new imageCreator('unicorn', './img/unicorn.jpg');
var watercan = new imageCreator('water-can', './img/water-can.jpg');
var wineGlass = new imageCreator('wine-glass', './img/wine-glass.jpg');
var sweep = new imageCreator('sweep', './img/sweep.png');
var usb = new imageCreator('usb', './img/usb.gif');

// var imageList = [bag, banana, bathroom, boots, breafast, bubblegum, chair, cthulhu, dogDuck, dragon, pen, petSweep, scissors, shark, tauntaun, unicorn, watercan, wineGlass, sweep, usb];
// console.log('image names', imageList);


//i'm suppostu generate random image and get that added to my whlie loop
function randomImage() {
  while (true) {
    var randomNumber = Math.floor(Math.random() * imageArray.length);
    if (imagesLastShown.includes(imageArray[randomNumber]) === false){
      imageArray[randomNumber].imageViews += 1;
      console.log(imageArray[randomNumber]);
      return imageArray[randomNumber];
    }
  }
}

//function to render randomImages to the page after user clicks on them.
// function myClicker(click) {
//   for (var i = 0; i < imageArray.length; i++) {
//     if (imageArray[i].name === click) {
//       imageArray[i].clicks ++;
//       //console.log(imageArray[i].clicks);
//     }
//   }
// }

function render() {
  var newUsedImages = [];
  var myImage = document.getElementsByClassName('image');
  for (var k = 0; k < myImage.length; k++){
    var newImage = randomImage();
    myImage[k].setAttribute('src', newImage.filePath);
    imagesLastShown.push(newImage);
    newUsedImages.push(newImage);
    console.log(newUsedImages);
    console.log(imagesLastShown);
  }
  imagesLastShown = newUsedImages;
}

function eventListener() {
  render();
}
//
// //event handler function not connected at the moment but will soon
// function eventHandler(event) {
//   if (totalCounter < 24) {
//     var selected = event.target;
//     console.log(selected);
//     console.log(selected.id);
//     myClicker(selected.id);
//       totalCounter ++;
//       imagesLastShown = displayedImages;
//       displayedImages = [];
//       document.getElementById('myImage').innerHTML = '';
//       randomImage(imageArray.length);
//       render();
//       console.log(selected.clicks);
//     } else {
//       document.getElementById('myImage').innerHTML = '';
//       var ul = document.createElement('ul');
//       document.body.appendChild(ul);
//       for (var d = 0; d < imageArray.length; d++) {
//         var li = document.createElement('li');
//         li.innerHTML = imageArray[d].name + ' cliked by user ' + imageArray[d].cliks + ' times and clicked ' + Math.floor(imageArray[d].clicks/imageArray[d].displayCount * 100) + ' precent of times displayed';
//         results.appendChild('ul')
//       }
//     }
//   }
// }
var temImages = document.getElementsByClassName('image')
for (var i = 0; i < temImages.length; i++) {
  temImages[i].addEventListener('click', eventListener);
}
render();

// i need to add my while loops to loop throught the each image. i'm not there yet.
