
let winnerTiles = ['tile1', 'tile2', 'tile3', 'tile4', 'tile5', 'tile6', 'tile7', 'tile8', 'tile9', 'tile10', 'tile11', 'tile12', 'tile13', 'tile14', 'tile15', 'tile16'];
let totalRows = 4;
let totalColumns = 4;
let lastTile = "tile16";

function onTileClick(row, column) {
    let cell = document.getElementById("cell" + row + column);
    let tile = cell.className;
    if (tile != lastTile) {
        if (column < totalColumns) {
            if (document.getElementById("cell" + row + (column + 1)).className == lastTile) {
                swapTiles("cell" + row + column, "cell" + row + (column + 1));
                if (checkWin()) {
                    wonGame();
                }
            }
        }
        if (column > 1) {
            if (document.getElementById("cell" + row + (column - 1)).className == lastTile) {
                swapTiles("cell" + row + column, "cell" + row + (column - 1));
                if (checkWin()) {
                    wonGame();
                }
            }
        }
        if (row > 1) {
            if (document.getElementById("cell" + (row - 1) + column).className == lastTile) {
                swapTiles("cell" + row + column, "cell" + (row - 1) + column);
                if (checkWin()) {
                    wonGame();
                }
            }
        }
        if (row < totalRows) {
            if (document.getElementById("cell" + (row + 1) + column).className == lastTile) {
                swapTiles("cell" + row + column, "cell" + (row + 1) + column);
                if (checkWin()) {
                    wonGame();
                }
            }
        }
    }
}

function swapTiles(cell1, cell2) {
    let temp = document.getElementById(cell1).className;
    document.getElementById(cell1).className = document.getElementById(cell2).className;
    document.getElementById(cell2).className = temp;
}

function shuffleTiles() {
    for (let row = 1; row <= totalRows; row++) {
        for (let column = 1; column <= totalColumns; column++) {
            let row2 = Math.floor(Math.random() * 4 + 1);
            let column2 = Math.floor(Math.random() * 4 + 1);
            swapTiles("cell" + row + column, "cell" + row2 + column2);
        }
    }
}

function checkWin() {
    let cells = document.querySelectorAll("td");
    cellValue = [];
    for (let i = 0; i < cells.length; i++) {
        cellValue.push(cells[i].className)
    };
    for (let i = 0; i < cellValue.length - 1; i++) {
        if (cellValue[i] != winnerTiles[i])
            return false;
    }
    return true;
}

function wonGame(){
    document.getElementById("gameWonDialog").showModal();
}