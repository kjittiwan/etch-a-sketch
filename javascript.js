const gridContainer = document.querySelector('#grid-container');
const clearBtn = document.querySelector('.clearBtn');
const body = document.querySelector('body');
const sketchBtn = document.querySelector('.sketchBtn');
const shadeBtn = document.querySelector('.shadeBtn');
const rainbowBtn = document.querySelector('.rainbowBtn');
const buttonContainer = document.querySelector('.button-container')
const buttons = document.querySelector('button')
let num;
let mouseDown = false;
let slider = document.querySelector('.slider');
let output = document.querySelector(".size");
output.textContent = `${slider.value} x ${slider.value}`;
slider.oninput = function(){
  clearGrid();
  rows = this.value;
  columns = this.value;
  output.textContent = `${this.value} x ${this.value}`
  makeGrid(rows,columns);
};

clearBtn.addEventListener('click', function(){
  clearGrid();
  makeGrid(rows,columns);

});

function makeGrid(rows,columns){
  for(i=0; i< rows*columns;i++){
    const gridItem = document.createElement('div');
    gridItem.classList.add('grid-item');
    gridContainer.appendChild(gridItem);
    sketchBtn.addEventListener('click', function(){
      gridItem.addEventListener('mousedown',function(){
        gridItem.style.backgroundColor = 'black';
      });
      gridItem.addEventListener('mouseover',function(){
        gridItem.style.backgroundColor = 'black';
      });

    })
    
    rainbowBtn.addEventListener('click', function(){
      let r = Math.floor(Math.random() * 256)
      let g = Math.floor(Math.random() * 256)
      let b = Math.floor(Math.random() * 256)
      
      gridItem.addEventListener('mousedown',function(){
        gridItem.style.backgroundColor = "rgb(" + r + ", " + g + ", " + b + ")";
      });
      gridItem.addEventListener('mouseover',function(){
        gridItem.style.backgroundColor = "rgb(" + r + ", " + g + ", " + b + ")";
      });
    })
     
    
    
    
  }
gridContainer.style.setProperty('grid-template-columns', `repeat(${columns}, 1fr)`);
gridContainer.style.setProperty('grid-template-rows', `repeat(${rows}, 1fr)`);
}
function getNum(){
  num = prompt('Enter a number');
  return num;
}




function clearGrid() {
  gridContainer.textContent = '';
}
window.addEventListener('load', reset);
function reset(){
  rows = 16;
  columns = 16
  makeGrid(rows,columns)

}


