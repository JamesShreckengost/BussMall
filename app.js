'use strict';

// create a product constructor
//  timesClicked
//  timesShown
//  image

function ProductImage(image) {
  this.timesClicked = 0;
  this.timesShown = 0;
  this.image = image;

  ProductImage.allImages.push(this)
}

// Creates our allImages property on the ProductImage constructor
ProductImage.allImages = [];


// creates the ProductImage, and runs the operations within the constructor
new ProductImage('images/bag.jpg');
new ProductImage('images/banana.jpg');
new ProductImage('images/bathroom.jpg');
new ProductImage('images/boots.jpg');
new ProductImage('images/breakfast.jpg');
new ProductImage('images/bubblegum.jpg');
new ProductImage('images/chair.jpg');
new ProductImage('images/cthulhu.jpg');
new ProductImage('images/dog-duck.jpg');
new ProductImage('images/dragon.jpg');
new ProductImage('images/pen.jpg');
new ProductImage('images/pet-sweep.jpg');
new ProductImage('images/scissors.jpg');
new ProductImage('images/shark.jpg');
new ProductImage('images/sweep.jpg');
new ProductImage('images/tauntaun.jpg');
new ProductImage('images/unicorn.jpg');
new ProductImage('images/usb.gif');
new ProductImage('images/water-can.jpg');
new ProductImage('images/wine-glass.jpg');

// selects elements from my HTML to render product stuff

var productContainer = document.getElementById('product-container');
var productOneImage = document.getElementById('product-one');
var productTwoImage = document.getElementById('product-two');
var productThreeImage = document.getElementById('product-three');
console.log(ProductImage.allImages)


// generates 3 random product images
function generateRandomProducts() {
  // randomIndex from our array
  var indexOne = Math.floor(Math.random() * ProductImage.allImages.length);
  var indexTwo = Math.floor(Math.random() * ProductImage.allImages.length);
  var indexThree = Math.floor(Math.random() * ProductImage.allImages.length);

  while (indexOne === indexTwo && indexTwo === indexThree && indexOne === indexThree) {
    indexOne = Math.floor(Math.random() * ProductImage.allImages.length);
  }

  var productOne = ProductImage.allImages[indexOne];
  var productTwo = ProductImage.allImages[indexTwo];
  var productThree = ProductImage.allImages[indexThree];

  return [productOne, productTwo, productThree];
}

function renderProducts(productOne, productTwo, productThree) {
  productOneImage.src = productOne.image;
  productOne.timesShown++;

  productTwoImage.src = productTwo.image;
  productTwo.timesShown++;

  productThreeImage.src = productThree.image;
  productThree.timesShown++;

}

// intialize our page

var randomProducts = generateRandomProducts();
renderProducts(randomProducts[1], randomProducts[2], randomProducts[3])

// how do we do something everytime an image was clicked
productContainer.addEventListener('click', function (event) {
  console.log(event.target); // the actual item that was clicked

  // how to identify which image is clicked. Increment the object that was clicked.
  for (var i = 0; i < ProductImage.allImages.length; i++) {
    if (event.target.src.includes(ProductImage.allImages[i].image)) {
      ProductImage.allImages[i].timesClicked++;
      console.log(ProductImage.allImages[i]);
    }
  }

var newProducts = generateRandomProducts();
renderProducts(newProducts[0], newProducts[1], newProducts[2]);

});