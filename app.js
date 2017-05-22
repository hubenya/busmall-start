//global variables
var totalcounter = 0;
var images = ['bag', 'banana', 'bathroom', 'boots', 'breafast', 'bubblegum', 'chair', 'cthulhu', 'dog-duck', 'dragon', 'pen', 'pet-sweep', 'scissors', 'tauntaun', 'unicorn', 'usb', 'water-can', 'wine-glass'];

//console.log('image names', images[0]);
//construction function
// function ImageConstructor(){
//   this.images = images;
//   this.path = name + .jpg;
//   this.click = 0;
// }


// function ImageTracker(name, paths, shown, clicked)
//   this.name = name;
//   this.path = path;
//   this.shown = 0;
//   this.cliked = 0;
// }
var counter = 1;
var image = document.getElementById('image1');

image.addEventListener('click', function() {
  console.log('my image type:', this.getAttribute('src'));
  counter++;

  console.log('counter', counter);
});
// 
// var image = document.getElementById('image2');
//
// image.addEventListener('click', function() {
//   console.log('my image type:', this.getAttribute('src'));
//   counter++;
// });
//
// var image = document.getElementById('image3');
//
// image.addEventListener('click', function() {
//   console.log('my image type:', this.getAttribute('src'));
//   counter++;
//
//   console.log('counter', counter);
// });
