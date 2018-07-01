// Select color input
// Select size input
let inputHeight, inputWidth, color;

// When size is submitted by the user, call makeGrid()
$('#sizePicker').on('submit', function(evt){ 
    inputHeight = $('#inputHeight').val();
    inputWidth = $('#inputWeight').val();
    
    $('#pixelCanvas > tr').remove();
    makeGrid();
    evt.preventDefault();
});


function makeGrid() {
// Your code goes here!
    for(let row = 1; row <= inputWidth; row++){
        $('#pixelCanvas').append('<tr></tr>');
        for(let col = 1; col <= inputHeight; col++){
            $('tr:last').append('<td></td>');
            $('td').addClass('cell');
        }
    }

    
    $('.cell').click(function(event){
        color = $('#colorPicker').val()
        $(event.target).css('background-color', color);
    })
}
