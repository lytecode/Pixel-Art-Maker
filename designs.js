// Select color input
// Select size input
let inputHeight;
let inputWidth;
let color;
// When size is submitted by the user, call makeGrid()
$('#sizePicker').on('submit', function(evt){
   
    inputHeight = $('#inputHeight').val();
    inputWidth = $('#inputWeight').val();
    console.log('inputHeight: ', inputHeight);
    console.log('inputWeight: ', inputWidth);
    
    makeGrid();
    evt.preventDefault();
});

function makeGrid() {

// Your code goes here!

console.log('inputHeight 2: ', inputHeight);

}
