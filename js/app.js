//global variables
var imageArray = [];
var myChartLabels = [];
var myChartData = [];
var imagesLastShown = [];
var totalCounter = 0;
//

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


//i'm suppostu generate random image and get that added to my whlie loop
function randomImage() {
  while (true) {
    var randomNumber = Math.floor(Math.random() * imageArray.length);
    if (imagesLastShown.includes(imageArray[randomNumber]) === false){
      imageArray[randomNumber].imageViews += 1;
      //console.log(imageArray[randomNumber]);
      return imageArray[randomNumber];
    }
  }
}
//Here is wher i uppend images to my page
function render() {
  var newUsedImages = [];
  var myImage = document.getElementsByClassName('image');
  for (var k = 0; k < myImage.length; k++){
    var newImage = randomImage();
    myImage[k].setAttribute('src', newImage.filePath);
    myImage[k].setAttribute('id', newImage.name);
    imagesLastShown.push(newImage);
    newUsedImages.push(newImage);
    //console.log(newUsedImages);
    //console.log(imagesLastShown);
  }
  imagesLastShown = newUsedImages;
}
//event listener

//add chart function
function addChartData(){
  for(var h = 0; h < imageArray.length; h++){
    myChartLabels.push(imageArray[h].name);
    myChartData.push(imageArray[h].clicks);
  }
}

function buildChart(){
  var canvas = document.getElementById('chart');
  var ctx = canvas.getContext('2d');

  var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: myChartLabels,
      datasets: [{
        label: 'times images chosen',
        data: myChartData,
        backgroundColor: 'orange',
      }]
    },
    options: {
      scales:{
        yAxes: [{
          ticks: {
            beginAtZero:true
          }
        }]
      }
    }
  });
}

function eventListener(event) {
  var clickedImageId = event.target.id;
  for(var i = 0; i < imageArray.length; i++) {
    if (clickedImageId === imageArray[i].name) {
      imageArray[i].clicks += 1;
      totalCounter += 1;
      //console.log('testing', totalCounter);
    }
  }
  if (totalCounter < 26) { //add 26 to make it loop 25 times
    render();
  } else {
    //displayResults();
    stopGame();

  }
  // else execute function to display function of results

}
// function displayResults() {
//   var listImgArray = [];
//   var fullList = document.getElementById('results');
//   for (var x = 0; x < imageArray.length; x++) {
//     listImgArray.push(`<li>Number of clicks for ${imageArray[x].name}: ${imageArray[x].clicks}</li>`);
//   }
//   fullList.innerHTML = listImgArray.join('');
// }
function stopGame() {
  for (var i = 0; i < temImages.length; i++) {
    temImages[i].removeEventListener('click', eventListener);
  }
  addChartData();
  buildChart();
}

var temImages = document.getElementsByClassName('image');
for (var i = 0; i < temImages.length; i++) {
  temImages[i].addEventListener('click', eventListener);
}
// randomImage();
render();
