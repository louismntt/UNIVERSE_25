// COLLAPISBLE LAYERS LIST

const layersList = document.querySelectorAll('.layer-selection');
console.log(layersList);

for (item of layersList) {
  item.addEventListener("click", function() {
    for (item of layersList) {
      item.classList.remove("show");
    }
    this.classList.add("show");
  })
}

// ———————————————————————————————————
// ———— GENERATE IMAGES PREVIEWS —————
// ———————————————————————————————————


// LAYER 1

const layer1ImagesContainer = document.getElementById('layer1-images-container');
var activeLayer1 = "";

for (var i = 0; i < layer1ImagesArray.length; i++) {

let imagePreviewContainer = document.createElement('li');
imagePreviewContainer.value = i;
imagePreviewContainer.classList.add("image-preview-container");
layer1ImagesContainer.appendChild(imagePreviewContainer);

let imagePreview = document.createElement('img');
imagePreview.classList.add("image-preview");
imagePreview.src = "assets/pngs/" + layer1ImagesArray[i][0];
imagePreviewContainer.appendChild(imagePreview);

let imagePreviewDescription = document.createElement('div');
imagePreviewDescription.classList.add("img-preview-description");
imagePreviewContainer.appendChild(imagePreviewDescription);

let layerCheckbox = document.createElement('img');
layerCheckbox.classList.add("layer-checkbox");
layerCheckbox.src = "assets/svg/unchecked-box.svg";
imagePreviewDescription.appendChild(layerCheckbox);

let layerName = document.createElement('p');
layerName.innerHTML = layer1ImagesArray[i][1];
imagePreviewDescription.appendChild(layerName);

  imagePreviewContainer.addEventListener("click", function(){

    var nodes = layer1ImagesContainer.getElementsByClassName("layer-checkbox");
    for(var i=0; i<nodes.length; i++) {
      nodes[i].src = "assets/svg/unchecked-box.svg";
    }
    layerCheckbox.src = "assets/svg/checked-box.svg";

    console.log('ça clique sur ' + this.value);
    activeLayer1 = "assets/pngs/" + layer1ImagesArray[this.value][0];
    draw();
  })

}

// LAYER 2

const layer2ImagesContainer = document.getElementById('layer2-images-container');
var activeLayer2 = "";

for (var i = 0; i < layer2ImagesArray.length; i++) {

let imagePreviewContainer = document.createElement('li');
imagePreviewContainer.value = i;
imagePreviewContainer.classList.add("image-preview-container");
layer2ImagesContainer.appendChild(imagePreviewContainer);

let imagePreview = document.createElement('img');
imagePreview.classList.add("image-preview");
imagePreview.src = "assets/pngs/" + layer2ImagesArray[i][0];
imagePreviewContainer.appendChild(imagePreview);

let imagePreviewDescription = document.createElement('div');
imagePreviewDescription.classList.add("img-preview-description");
imagePreviewContainer.appendChild(imagePreviewDescription);

let layerCheckbox = document.createElement('img');
layerCheckbox.classList.add("layer-checkbox");
layerCheckbox.src = "assets/svg/unchecked-box.svg";
imagePreviewDescription.appendChild(layerCheckbox);

let layerName = document.createElement('p');
layerName.innerHTML = layer2ImagesArray[i][1];
imagePreviewDescription.appendChild(layerName);

  imagePreviewContainer.addEventListener("click", function(){

    var nodes = layer2ImagesContainer.getElementsByClassName("layer-checkbox");
    for(var i=0; i<nodes.length; i++) {
      nodes[i].src = "assets/svg/unchecked-box.svg";
    }
    layerCheckbox.src = "assets/svg/checked-box.svg";

    console.log('ça clique sur ' + this.value);
    activeLayer2 = "assets/pngs/" + layer2ImagesArray[this.value][0];
    draw();
  })

}

// LAYER 3

const layer3ImagesContainer = document.getElementById('layer3-images-container');
var activeLayer3 = "";

for (var i = 0; i < layer3ImagesArray.length; i++) {

let imagePreviewContainer = document.createElement('li');
imagePreviewContainer.value = i;
imagePreviewContainer.classList.add("image-preview-container");
layer3ImagesContainer.appendChild(imagePreviewContainer);

let imagePreview = document.createElement('img');
imagePreview.classList.add("image-preview");
imagePreview.src = "assets/pngs/" + layer3ImagesArray[i][0];
imagePreviewContainer.appendChild(imagePreview);

let imagePreviewDescription = document.createElement('div');
imagePreviewDescription.classList.add("img-preview-description");
imagePreviewContainer.appendChild(imagePreviewDescription);

let layerCheckbox = document.createElement('img');
layerCheckbox.classList.add("layer-checkbox");
layerCheckbox.src = "assets/svg/unchecked-box.svg";
imagePreviewDescription.appendChild(layerCheckbox);

let layerName = document.createElement('p');
layerName.innerHTML = layer3ImagesArray[i][1];
imagePreviewDescription.appendChild(layerName);

  imagePreviewContainer.addEventListener("click", function(){

    var nodes = layer3ImagesContainer.getElementsByClassName("layer-checkbox");
    for(var i=0; i<nodes.length; i++) {
      nodes[i].src = "assets/svg/unchecked-box.svg";
    }
    layerCheckbox.src = "assets/svg/checked-box.svg";

    console.log('ça clique sur ' + this.value);
    activeLayer3 = "assets/pngs/" + layer3ImagesArray[this.value][0];
    draw();
  })

}

// LAYER 3

const layer4ImagesContainer = document.getElementById('layer4-images-container');
var activeLayer4 = "";

for (var i = 0; i < layer4ImagesArray.length; i++) {

let imagePreviewContainer = document.createElement('li');
imagePreviewContainer.value = i;
imagePreviewContainer.classList.add("image-preview-container");
layer4ImagesContainer.appendChild(imagePreviewContainer);

let imagePreview = document.createElement('img');
imagePreview.classList.add("image-preview");
imagePreview.src = "assets/pngs/" + layer4ImagesArray[i][0];
imagePreviewContainer.appendChild(imagePreview);

let imagePreviewDescription = document.createElement('div');
imagePreviewDescription.classList.add("img-preview-description");
imagePreviewContainer.appendChild(imagePreviewDescription);

let layerCheckbox = document.createElement('img');
layerCheckbox.classList.add("layer-checkbox");
layerCheckbox.src = "assets/svg/unchecked-box.svg";
imagePreviewDescription.appendChild(layerCheckbox);

let layerName = document.createElement('p');
layerName.innerHTML = layer4ImagesArray[i][1];
imagePreviewDescription.appendChild(layerName);

  imagePreviewContainer.addEventListener("click", function(){

    var nodes = layer4ImagesContainer.getElementsByClassName("layer-checkbox");
    for(var i=0; i<nodes.length; i++) {
      nodes[i].src = "assets/svg/unchecked-box.svg";
    }
    layerCheckbox.src = "assets/svg/checked-box.svg";

    console.log('ça clique sur ' + this.value);
    activeLayer4 = "assets/pngs/" + layer4ImagesArray[this.value][0];
    draw();
  })

}
const selectionContainer = document.getElementsByClassName('selection-container');

const refreshButton = document.getElementById('refresh-button');


refreshButton.addEventListener('click', function(){

  var goUncheckBox = document.getElementsByClassName("layer-checkbox");
  for(var i=0; i<goUncheckBox.length; i++) {
    goUncheckBox[i].src = "assets/svg/unchecked-box.svg";
  }

  activeLayer1 = '';
  activeLayer2 = '';
  activeLayer3 = '';
  activeLayer4 = '';
  draw();

})



// PUTTING PNGS TO CANVAS

var canvas = document.getElementById("canvas");
var context = canvas.getContext('2d');
canvas.width = 3000;
canvas.height = 1000;

function draw() {
  context.clearRect(0, 0, canvas.width, canvas.height);

  var layer0 = new Image();
  layer0.onload = function() {
    context.drawImage(layer0, 0, 0, canvas.width, canvas.height);

    var layer1 = new Image();
    layer1.onload = function() {
      context.drawImage(layer1, 0, 0, canvas.width, canvas.height);
    };
    layer1.src = activeLayer1;

    var layer2 = new Image();
    layer2.onload = function() {
      context.drawImage(layer2, 0, 0, canvas.width, canvas.height);
    };
    layer2.src = activeLayer2;

    var layer3 = new Image();
    layer3.onload = function() {
      context.drawImage(layer3, 0, 0, canvas.width, canvas.height);
    };
    layer3.src = activeLayer3;

    var layer4 = new Image();
    layer4.onload = function() {
      context.drawImage(layer4, 0, 0, canvas.width, canvas.height);
    };
    layer4.src = activeLayer4;

  };
  layer0.src = "assets/pngs/" + activeLayer0;


  console.log('draw once');
}

draw();

const downloadButton = document.getElementById('download-button');

downloadButton.addEventListener("click", function() {
  console.log('png downloaded');
  ReImg.fromCanvas(canvas).downloadPng();
})

// ————————— SHUFFLE TABS ———————

function WordShuffler(holder, opt) {
  var that = this;
  var time = 0;
  this.now;
  this.then = Date.now();

  this.delta;
  this.currentTimeOffset = 0;

  this.word = null;
  this.currentWord = null;
  this.currentCharacter = 0;
  this.currentWordLength = 0;

  var options = {
    fps: 20,
    timeOffset: 5,
    textColor: '#000',
    fontSize: "50px",
    useCanvas: false,
    mixCapital: false,
    mixSpecialCharacters: false,
    needUpdate: true,
    colors: [
      '#000000'
      // '#f44336','#e91e63','#9c27b0',
      // '#673ab7','#3f51b5','#2196f3',
      // '#03a9f4','#00bcd4','#009688',
      // '#4caf50','#8bc34a','#cddc39',
      // '#ffeb3b','#ffc107','#ff9800',
      // '#ff5722','#795548','#9e9e9e',
      // '#607d8b'
    ]
  }

  if (typeof opt != "undefined") {
    for (key in opt) {
      options[key] = opt[key];
    }
  }

  this.needUpdate = true;
  this.fps = options.fps;
  this.interval = 1000 / this.fps;
  this.timeOffset = options.timeOffset;
  this.textColor = options.textColor;
  this.fontSize = options.fontSize;
  this.mixCapital = options.mixCapital;
  this.mixSpecialCharacters = options.mixSpecialCharacters;
  this.colors = options.colors;

  this.useCanvas = options.useCanvas;

  this.chars = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z'
  ];
  this.specialCharacters = [
    '!',
    '§',
    '$',
    '%',
    '&',
    '/',
    '(',
    ')',
    '=',
    '?',
    '_',
    '<',
    '>',
    '^',
    '°',
    '*',
    '#',
    '-',
    ':',
    ';',
    '~'
  ]

  if (this.mixSpecialCharacters) {
    this.chars = this.chars.concat(this.specialCharacters);
  }

  this.getRandomColor = function() {
    var randNum = Math.floor(Math.random() * this.colors.length);
    return this.colors[randNum];
  }

  //if Canvas

  this.position = {
    x: 0,
    y: 50
  }

  //if DOM
  if (typeof holder != "undefined") {
    this.holder = holder;
  }

  if (!this.useCanvas && typeof this.holder == "undefined") {
    console.warn('Holder must be defined in DOM Mode. Use Canvas or define Holder');
  }

  this.getRandCharacter = function(characterToReplace) {
    if (characterToReplace == " ") {
      return ' ';
    }
    var randNum = Math.floor(Math.random() * this.chars.length);
    var lowChoice = -.5 + Math.random();
    var picketCharacter = this.chars[randNum];
    var choosen = picketCharacter.toLowerCase();
    if (this.mixCapital) {
      choosen = lowChoice < 0
        ? picketCharacter.toLowerCase()
        : picketCharacter;
    }
    return choosen;

  }

  this.writeWord = function(word) {
    this.word = word;
    this.currentWord = word.split('');
    this.currentWordLength = this.currentWord.length;

  }

  this.generateSingleCharacter = function(color, character) {
    var span = document.createElement('span');
    span.style.color = color;
    span.innerHTML = character;
    return span;
  }

  this.updateCharacter = function(time) {

    this.now = Date.now();
    this.delta = this.now - this.then;

    if (this.delta > this.interval) {
      this.currentTimeOffset++;

      var word = [];

      if (this.currentTimeOffset === this.timeOffset && this.currentCharacter !== this.currentWordLength) {
        this.currentCharacter++;
        this.currentTimeOffset = 0;
      }
      for (var k = 0; k < this.currentCharacter; k++) {
        word.push(this.currentWord[k]);
      }

      for (var i = 0; i < this.currentWordLength - this.currentCharacter; i++) {
        word.push(this.getRandCharacter(this.currentWord[this.currentCharacter + i]));
      }

      if (that.useCanvas) {
        c.clearRect(0, 0, stage.x * stage.dpr, stage.y * stage.dpr);
        c.font = that.fontSize + " sans-serif";
        var spacing = 0;
        word.forEach(function(w, index) {
          if (index > that.currentCharacter) {
            c.fillStyle = that.getRandomColor();
          } else {
            c.fillStyle = that.textColor;
          }
          c.fillText(w, that.position.x + spacing, that.position.y);
          spacing += c.measureText(w).width;
        });
      } else {

        if (that.currentCharacter === that.currentWordLength) {
          that.needUpdate = false;
        }
        this.holder.innerHTML = '';
        word.forEach(function(w, index) {
          var color = null
          if (index > that.currentCharacter) {
            color = that.getRandomColor();
          } else {
            color = that.textColor;
          }
          that.holder.appendChild(that.generateSingleCharacter(color, w));
        });
      }
      this.then = this.now - (this.delta % this.interval);
    }
  }

  this.restart = function() {
    this.currentCharacter = 0;
    this.needUpdate = true;
  }

  function update(time) {
    time++;
    if (that.needUpdate) {
      that.updateCharacter(time);
    }
    requestAnimationFrame(update);
  }

  this.writeWord(this.holder.innerHTML);

  console.log(this.currentWord);
  update(time);
}

var createdBy = document.getElementById('created-by');

var sideText = new WordShuffler(createdBy, {
  textColor: '#000000',
  timeOffset: 5,
  mixCapital: true,
  mixSpecialCharacters: true
});

// ——— shuffle desktop tab

var desktopTab = document.getElementById('desktop-tab');
var shuffleDesktop = 0;
desktopTab.addEventListener("mouseover", function() {

  if (shuffleDesktop == 0) {
    desktopTab.innerHTML = "COMING SOON";
    var desktopText = new WordShuffler(desktopTab, {
      textColor: '#000000',
      timeOffset: 2,
      mixCapital: true,
      mixSpecialCharacters: true
    });
    shuffleDesktop = 1;

    setTimeout(function() {
      desktopTab.innerHTML = "DESKTOP";
      var desktopText = new WordShuffler(desktopTab, {
        textColor: '#000000',
        timeOffset: 2,
        mixCapital: true,
        mixSpecialCharacters: true
      });
      shuffleDesktop = 0;
    }, 3000);
  }

})

// ——— shuffle mobile tab

var mobileTab = document.getElementById('mobile-tab');
var shuffleMobile = 0;
mobileTab.addEventListener("mouseover", function() {

  if (shuffleMobile == 0) {
    mobileTab.innerHTML = "COMING SOON";
    var mobileText = new WordShuffler(mobileTab, {
      textColor: '#000000',
      timeOffset: 2,
      mixCapital: true,
      mixSpecialCharacters: true
    });
    shuffleMobile = 1;

    setTimeout(function() {
      mobileTab.innerHTML = "MOBILE";
      var mobileText = new WordShuffler(mobileTab, {
        textColor: '#000000',
        timeOffset: 2,
        mixCapital: true,
        mixSpecialCharacters: true
      });
      shuffleMobile = 0;
    }, 3000);
  }

})
