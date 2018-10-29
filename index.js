/**
 * This program is a boliler plate code for the famous tic tac toe game
 * Here box represents one placeholder for either X or a 0
 * We have a 2D array to represent the arrangement of X or O is a grid
 * 0 -> empty box
 * 1 -> box with X
 * 2 -> box with O
 * 
 * Below are the tasks which needs to be completed
 * Imagine you are playing with Computer so every alternate move should be by Computer
 * X -> player
 * O -> Computer
 * 
 * Winner has to be decided and has to be flashed
 * 
 * Extra points will be given for the Creativity
 * 
 * Use of Google is not encouraged
 * 
 */
const grid = [];
const GRID_LENGTH = 3;
let turn = 'X';

var chance = 0;
var data = [];
var user = [];
var comp = [];
var flag = false;

function initializeGrid() {
    for (let colIdx = 0;colIdx < GRID_LENGTH; colIdx++) {
        const tempArray = [];
        for (let rowidx = 0; rowidx < GRID_LENGTH;rowidx++) {
            tempArray.push(0);
        }
        grid.push(tempArray);
    }
}

function getRowBoxes(colIdx) {
    let rowDivs = '';
    
    for(let rowIdx=0; rowIdx < GRID_LENGTH ; rowIdx++ ) {
        let additionalClass = 'darkBackground';
        let content = '';
        const sum = colIdx + rowIdx;
        if (sum%2 === 0) {
            additionalClass = 'lightBackground'
        }
        const gridValue = grid[colIdx][rowIdx];
        if(gridValue === 1) {
            content = '<span class="cross">X</span>';
        }
        else if (gridValue === 2) {
            content = '<span class="circle">O</span>';
        }
        rowDivs = rowDivs + '<div colIdx="'+ colIdx +'" rowIdx="' + rowIdx + '" class="box ' +
            additionalClass + '">' + content + '</div>';
    }
    return rowDivs;
}

function getColumns() {
    let columnDivs = '';
    for(let colIdx=0; colIdx < GRID_LENGTH; colIdx++) {
        let coldiv = getRowBoxes(colIdx);
        coldiv = '<div class="rowStyle">' + coldiv + '</div>';
        columnDivs = columnDivs + coldiv;
    }
    return columnDivs;
}

function renderMainGrid() {
    const parent = document.getElementById("grid");
    const columnDivs = getColumns();
    parent.innerHTML = '<div class="columnsStyle">' + columnDivs + '</div>';
}

function onBoxClick() {
    var rowIdx = this.getAttribute("rowIdx");
    var colIdx = this.getAttribute("colIdx");
    //alert(rowIdx+'col:'+colIdx);

    if(data.includes(rowIdx+'-'+colIdx) == true && data.length >= 9){
        //alert('Game Over!');
        swal({
          type: 'error',
          title: 'Oops...',
          text: 'Game Over!',
        });
    }
    else if(data.includes(rowIdx+'-'+colIdx) == true){
        //alert('Already selected!');
        swal({
          type: 'error',
          title: 'Oops...',
          text: 'Already selected!',
        });
    }
    else{
        if(data.length >= 9 || flag == true){
            //alert('Game over!');
            swal({
              type: 'error',
              title: 'Oops...',
              text: 'Game over!',
            });
        }
        else{
                data.push(rowIdx+'-'+colIdx);
                user.push(rowIdx+'-'+colIdx);

                let u1=0, u2=0, u3=0, u4=0, u5=0, u6=0, u7=0, u8=0, c1=0, c2=0, c3=0, c4=0, c5=0, c6=0, c7=0, c8=0;

                for(let row=0; row < GRID_LENGTH ; row++ ) {
                    
                    for(let col=0; col < GRID_LENGTH ; col++ ) {

                        // diagonal
                        if(row==col){

                            if(user.includes(row+'-'+col) == true){
                                u1++;
                            }
                            else if(comp.includes(row+'-'+col) == true){
                                c1++;
                            }
                            
                        }
                        //opp diagonal
                        if(row+col==GRID_LENGTH-1 ){

                            if(user.includes(row+'-'+col) == true){
                                u2++;
                            }
                            else if(comp.includes(row+'-'+col) == true){
                                c2++;
                            }
                        }

                        // horizontal
                        if( row == 0 && (col == 0 || col == 1 || col == 2) ){

                            if(user.includes(row+'-'+col) == true){
                                u3++;
                            }
                            else if(comp.includes(row+'-'+col) == true){
                                c3++;
                            }   
                            
                        }
                        // horizontal
                        if( row == 1 && (col == 0 || col == 1 || col == 2) ){

                            if(user.includes(row+'-'+col) == true){
                                u4++;
                            }
                            else if(comp.includes(row+'-'+col) == true){
                                c4++;
                            }   
                            
                        }
                        // horizontal
                        if( row == 2 && (col == 0 || col == 1 || col == 2) ){

                            if(user.includes(row+'-'+col) == true){
                                u5++;
                            }
                            else if(comp.includes(row+'-'+col) == true){
                                c5++;
                            }   
                            
                        }

                        // horizontal
                        if( col == 0 && (row == 0 || row == 1 || row == 2) ){

                            if(user.includes(row+'-'+col) == true){
                                u6++;
                            }
                            else if(comp.includes(row+'-'+col) == true){
                                c6++;
                            }   
                            
                        }
                        // horizontal
                        if( col == 1 && (row == 0 || row == 1 || row == 2) ){

                            if(user.includes(row+'-'+col) == true){
                                u7++;
                            }
                            else if(comp.includes(row+'-'+col) == true){
                                c7++;
                            }   
                            
                        }
                        // horizontal
                        if( col == 2 && (row == 0 || row == 1 || row == 2) ){

                            if(user.includes(row+'-'+col) == true){
                                u8++;
                            }
                            else if(comp.includes(row+'-'+col) == true){
                                c8++;
                            }   
                            
                        }

                    }
                }

                if(u1==3 || u2==3 || u3==3 || u4==3 || u5==3 || u6==3 || u7==3 || u8==3 ){
                    swal({
                      type: 'success',
                      title: 'Wow',
                      text: 'You win!',
                    });

                    flag = true;
                }
                if(c1==3 || c2==3 || c3==3 || c4==3 || c5==3 || c6==3 || c7==3 || c8==3 ){
                    swal({
                      type: 'success',
                      title: 'Oops..',
                      text: 'Computer wins!',
                    });

                    flag = true;
                }

                
                    let newValue = 1;
                    grid[colIdx][rowIdx] = newValue;
                    renderMainGrid();
                    addClickHandlers();
                
        }
    }
}

function addClickHandlers() {

    // check for computerChance
    if(chance > 0){       
        //alert('yay!');
        computerTurn();
    }
        // last user turn!!
        if(data.length == 9){
            //alert('Game over!');
            swal({
              type: 'error',
              title: 'Oops...',
              text: 'Game over!',
            });
        }

    var boxes = document.getElementsByClassName("box");
    for (var idx = 0; idx < boxes.length; idx++) {
        boxes[idx].addEventListener('click', onBoxClick, false);
    }
    
    // incremented
    chance++;
}

// computerTurn
function computerTurn(){

    let newValue = 2;

    let row = getRndInteger();
    let col = getRndInteger();

    if(data.length < 9){

        for(let k=0; k<=data.length; k++){
            
            if(data.includes(row+'-'+col) == false){

                rowId = row;
                colId = col;

                data.push(row+'-'+col);
                comp.push(row+'-'+col);

                grid[colId][rowId] = newValue;
                renderMainGrid();
                break;

            }
            else{
            
                //alert('else');
                computerTurn();
                break;
            }
        }

    }

}


function getRndInteger() {

    num = [0,1,2];
    return num[Math.floor(Math.random()*num.length)];
}


initializeGrid();
renderMainGrid();
addClickHandlers();
