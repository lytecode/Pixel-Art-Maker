// When size is submitted by the user, call makeGrid()
$('#sizePicker').on('submit', function(evt){ 
    const inputHeight = $('#inputHeight').val();
    const inputWidth = $('#inputWeight').val();
    
    $('#pixelCanvas > tr').remove();
    makeGrid(inputWidth, inputHeight);
    evt.preventDefault();
});

/**
 * @description Creates a grid of N by M
 * @param {number} height - The number of grid rows
 * @param {number} width - The number of grid columns
 */
function makeGrid(width, height) {
    for(let row = 1; row <= height; row++){
        $('#pixelCanvas').append('<tr></tr>');
        for(let col = 1; col <= width; col++){
            $('tr:last').append('<td></td>');
            $('td').addClass('cell');
        }
    }

    paintGrid();
}

/**
 * @description Paints a selected grid
 */
function paintGrid(){
    $('.cell').click(function(event){
        const color = $('#colorPicker').val()
        $(event.target).css('background-color', color);
    });
}