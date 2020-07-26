//////////////////////////////////////////////////////////////////////////// CROSS-ZERO

const startCrossZero = document.querySelector("#startCrossZero");
const crossFullPath = 'https://localhost:44388/img/cross.png';
const zeroFullPath = 'https://localhost:44388/img/zero.png';
const redLineHorizontalSrc = 'https://localhost:44388/img/redLineHorizontal.png';
const redLineVerticalSrc = 'https://localhost:44388/img/redLineVertical.png';
const redLineDiagonalSrc = 'https://localhost:44388/img/redLineDiagonal.png';

function checkWin(isWin) {
    const redLineHorizontal0 = new Image();
    redLineHorizontal0.width = 140;
    redLineHorizontal0.height = 140;
    redLineHorizontal0.style.position = "absolute";
    redLineHorizontal0.src = redLineHorizontalSrc;
    const redLineHorizontal1 = new Image();
    redLineHorizontal1.width = 140;
    redLineHorizontal1.height = 140;
    redLineHorizontal1.style.position = "absolute";
    redLineHorizontal1.src = redLineHorizontalSrc;
    const redLineHorizontal2 = new Image();
    redLineHorizontal2.width = 140;
    redLineHorizontal2.height = 140;
    redLineHorizontal2.style.position = "absolute";
    redLineHorizontal2.src = redLineHorizontalSrc;

    const redLineVertical0 = new Image();
    redLineVertical0.width = 140;
    redLineVertical0.height = 140;
    redLineVertical0.style.position = "absolute";
    redLineVertical0.src = redLineVerticalSrc;
    const redLineVertical1 = new Image();
    redLineVertical1.width = 140;
    redLineVertical1.height = 140;
    redLineVertical1.style.position = "absolute";
    redLineVertical1.src = redLineVerticalSrc;
    const redLineVertical2 = new Image();
    redLineVertical2.width = 140;
    redLineVertical2.height = 140;
    redLineVertical2.style.position = "absolute";
    redLineVertical2.src = redLineVerticalSrc;

    const redLineDiagonal0 = new Image();
    redLineDiagonal0.width = 140;
    redLineDiagonal0.height = 140;
    redLineDiagonal0.style.position = "absolute";
    redLineDiagonal0.src = redLineDiagonalSrc;
    const redLineDiagonal1 = new Image();
    redLineDiagonal1.width = 140;
    redLineDiagonal1.height = 140;
    redLineDiagonal1.style.position = "absolute";
    redLineDiagonal1.src = redLineDiagonalSrc;
    const redLineDiagonal2 = new Image();
    redLineDiagonal2.width = 140;
    redLineDiagonal2.height = 140;
    redLineDiagonal2.style.position = "absolute";
    redLineDiagonal2.src = redLineDiagonalSrc;

    const cell00child = document.querySelector("#crossZeroRow0Col0").children[0];
    const cell01child = document.querySelector("#crossZeroRow0Col1").children[0];
    const cell02child = document.querySelector("#crossZeroRow0Col2").children[0];
    const cell10child = document.querySelector("#crossZeroRow1Col0").children[0];
    const cell11child = document.querySelector("#crossZeroRow1Col1").children[0];
    const cell12child = document.querySelector("#crossZeroRow1Col2").children[0];
    const cell20child = document.querySelector("#crossZeroRow2Col0").children[0];
    const cell21child = document.querySelector("#crossZeroRow2Col1").children[0];
    const cell22child = document.querySelector("#crossZeroRow2Col2").children[0];

    if (cell00child !== undefined                            // if cells is not empty
        && cell01child !== undefined
        && cell02child !== undefined
        && cell00child.src === crossFullPath                 // and if we have 3 cross in a row
        && cell01child.src === crossFullPath
        && cell02child.src === crossFullPath) {              // we shell generate 'win'
        cell00child.parentNode.appendChild(redLineHorizontal0);
        cell00child.style.position = 'absolute';
        cell01child.parentNode.appendChild(redLineHorizontal1);
        cell01child.style.position = 'absolute';
        cell02child.parentNode.appendChild(redLineHorizontal2);
        cell02child.style.position = 'absolute';
        isWin = true;
        return isWin;
    }
    else if (cell10child !== undefined
        && cell11child !== undefined
        && cell12child !== undefined
        && cell10child.src === crossFullPath
        && cell11child.src === crossFullPath
        && cell12child.src === crossFullPath) {
        cell10child.parentNode.appendChild(redLineHorizontal0);
        cell10child.style.position = 'absolute';
        cell11child.parentNode.appendChild(redLineHorizontal1);
        cell11child.style.position = 'absolute';
        cell12child.parentNode.appendChild(redLineHorizontal2);
        cell12child.style.position = 'absolute';
        isWin = true;
        return isWin;
    }
    else if (cell20child !== undefined
        && cell21child !== undefined
        && cell22child !== undefined
        && cell20child.src === crossFullPath
        && cell21child.src === crossFullPath
        && cell22child.src === crossFullPath) {
        cell20child.parentNode.appendChild(redLineHorizontal0);
        cell20child.style.position = 'absolute';
        cell21child.parentNode.appendChild(redLineHorizontal1);
        cell21child.style.position = 'absolute';
        cell22child.parentNode.appendChild(redLineHorizontal2);
        cell22child.style.position = 'absolute';
        isWin = true;
        return isWin;
    }
    else if (cell00child !== undefined
        && cell10child !== undefined
        && cell20child !== undefined
        && cell00child.src === crossFullPath
        && cell10child.src === crossFullPath
        && cell20child.src === crossFullPath) {
        cell00child.parentNode.appendChild(redLineVertical0);
        cell00child.style.position = 'absolute';
        cell10child.parentNode.appendChild(redLineVertical1);
        cell10child.style.position = 'absolute';
        cell20child.parentNode.appendChild(redLineVertical2);
        cell20child.style.position = 'absolute';
        isWin = true;
        return isWin;
    }
    else if (cell01child !== undefined
        && cell11child !== undefined
        && cell21child !== undefined
        && cell01child.src === crossFullPath
        && cell11child.src === crossFullPath
        && cell21child.src === crossFullPath) {
        cell01child.parentNode.appendChild(redLineVertical0);
        cell01child.style.position = 'absolute';
        cell11child.parentNode.appendChild(redLineVertical1);
        cell11child.style.position = 'absolute';
        cell21child.parentNode.appendChild(redLineVertical2);
        cell21child.style.position = 'absolute';
        isWin = true;
        return isWin;
    }
    else if (cell02child !== undefined
        && cell12child !== undefined
        && cell22child !== undefined
        && cell02child.src === crossFullPath
        && cell12child.src === crossFullPath
        && cell22child.src === crossFullPath) {
        cell02child.parentNode.appendChild(redLineVertical0);
        cell02child.style.position = 'absolute';
        cell12child.parentNode.appendChild(redLineVertical1);
        cell12child.style.position = 'absolute';
        cell22child.parentNode.appendChild(redLineVertical2);
        cell22child.style.position = 'absolute';
        isWin = true;
        return isWin;
    }
    else if (cell00child !== undefined
        && cell11child !== undefined
        && cell22child !== undefined
        && cell00child.src === crossFullPath
        && cell11child.src === crossFullPath
        && cell22child.src === crossFullPath) {
        cell11child.parentNode.appendChild(redLineDiagonal0);
        cell11child.style.position = 'absolute';
        cell22child.parentNode.appendChild(redLineDiagonal1);
        cell22child.style.position = 'absolute';
        cell00child.parentNode.appendChild(redLineDiagonal2);
        cell00child.style.position = 'absolute';
        isWin = true;
        return isWin;
    }
    else if (cell02child !== undefined
        && cell11child !== undefined
        && cell20child !== undefined
        && cell02child.src === crossFullPath
        && cell11child.src === crossFullPath
        && cell20child.src === crossFullPath) {
        cell02child.parentNode.appendChild(redLineDiagonal0);
        cell02child.style.position = 'absolute';
        cell11child.parentNode.appendChild(redLineDiagonal1);
        cell11child.style.position = 'absolute';
        cell20child.parentNode.appendChild(redLineDiagonal2);
        cell20child.style.position = 'absolute';
        isWin = true;
        return isWin;
    }
    else {
        isWin = false;
        return isWin;
    }
}

function draw(cursor) {
    let isWin = false;
    const cross = new Image(125, 125);
    cross.src = '/img/cross.png';
    const zero = new Image(125, 125);
    zero.src = '/img/zero.png';

    console.log(cross);
    const cursorInputEl = document.getElementById(cursor);
    var randomAnswerEl = document.getElementById(`crossZeroRow${randomInt(0, 2)}Col${randomInt(0, 2)}`);

    while ((randomAnswerEl === cursorInputEl         // avoid entering cross and zero into a single cell 
        || randomAnswerEl.children.length !== 0)     // avoid entering into already filled cell
        && counter !== 4) {                          // avoid recursion on the last move                                                                    
        var randomAnswerEl = document.getElementById(`crossZeroRow${randomInt(0, 2)}Col${randomInt(0, 2)}`);
    }

    cursorInputEl.appendChild(cross);
    isWin = checkWin(isWin);
    if (isWin === false) {
        if (counter !== 4) {                             // avoid entering 10th element into the 9-cell field
            randomAnswerEl.appendChild(zero);
            checkWin();
        }
    }    
    counter++;
}

///////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////



///////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////// PUZZLE 15

const puzzleStartDiv = document.querySelector("#startPuzzle15");
let counter = 0;
const col0 = document.getElementById('0');
const col1 = document.getElementById('1');
const col2 = document.getElementById('2');
const col3 = document.getElementById('3');
const hours = document.getElementById('_hour');
const mins = document.getElementById('_mins');
const secs = document.getElementById('_secs');

if (puzzleStartDiv !== null) {
    (mix());         // comment this string to win
}

function clock() {
    let S = '00', M = '00', H = '00';

    setInterval(function () {
        S = +S + 1;
        if (S < 10) { S = '0' + S; }
        if (S == 60) {
            S = '00';
            M = +M + 1;
            if (M < 10) { M = '0' + M; }
            if (M == 60) {
                M = '00';
                H = +H + 1;
                if (H < 10) { H = '0' + H; }
            }
        }
        secs.innerText = S;
        mins.innerText = M;
        hours.innerText = H;
    }, 1000);
}

function findDivOrderIndex(id, div) {
    for (var i = 0; i < div.children.length; i++) {
        if (div.children[i].id === `img_(${id})`) {
            var indexNum = i;
        }
    }
    return indexNum;
}

function randomInt(min, max) {
    let random = min + Math.random() * (max + 1 - min);
    return Math.floor(random);
}

function mix() {
    let col0El = col0.children[randomInt(0, 3)];
    let col1El = col1.children[randomInt(0, 3)];
    let col2El = col2.children[randomInt(0, 3)];
    let col3El = col3.children[randomInt(0, 3)];
    let mixes = 0;

    while (mixes < 10) {
        col0.insertBefore(col1El, col0.children[randomInt(0, 3)]);
        col1.insertBefore(col0El, col1.children[randomInt(0, 3)]);
        col1.insertBefore(col2El, col1.children[randomInt(0, 3)]);
        col2.insertBefore(col2El, col2.children[randomInt(0, 3)]);
        col2.insertBefore(col3El, col2.children[randomInt(0, 3)]);
        col3.insertBefore(col2El, col3.children[randomInt(0, 3)]);
        col3.insertBefore(col0El, col3.children[randomInt(0, 3)]);
        col1.insertBefore(col2El, col1.children[randomInt(0, 3)]);
        mixes++
    }
}

function move(id) {
    counter++;
    const counterEl = document.getElementById('_counter')
    counterEl.innerText = counter;

    let currImg = document.querySelector(`#img_\\(${id}\\)`);
    let zeroImg = document.querySelector("#img_\\(0\\)");
    let currDivParent = currImg.parentNode;
    let zeroDivParent = zeroImg.parentNode;
    let currDivOrderIndex = findDivOrderIndex(id, currDivParent);
    let zeroDivOrderIndex = findDivOrderIndex(0, zeroDivParent);

    if (parseInt(zeroDivParent.id) === parseInt(currDivParent.id) + 1
        && currDivOrderIndex === zeroDivOrderIndex                                             // if to right
        || parseInt(zeroDivParent.id) === parseInt(currDivParent.id) - 1
        && currDivOrderIndex === zeroDivOrderIndex                                             //    to left
        || zeroDivOrderIndex === currDivOrderIndex + 1
        && parseInt(zeroDivParent.id) === parseInt(currDivParent.id)                           //    down
        || zeroDivOrderIndex === currDivOrderIndex - 1
        && parseInt(zeroDivParent.id) === parseInt(currDivParent.id)) {                        //    up
        zeroDivParent.insertBefore(currImg, zeroDivParent.children[zeroDivOrderIndex]);
        currDivParent.insertBefore(zeroImg, currDivParent.children[currDivOrderIndex]);
    }

    if (counter === 1) {
        clock();
    }

    if ((col0.children[0].id === `img_(${0})`
        && col0.children[1].id === `img_(${4})`
        && col0.children[2].id === `img_(${8})`
        && col0.children[3].id === `img_(${12})`
        && col1.children[0].id === `img_(${1})`
        && col1.children[1].id === `img_(${5})`
        && col1.children[2].id === `img_(${9})`
        && col1.children[3].id === `img_(${13})`
        && col2.children[0].id === `img_(${2})`
        && col2.children[1].id === `img_(${6})`
        && col2.children[2].id === `img_(${10})`
        && col2.children[3].id === `img_(${14})`
        && col3.children[0].id === `img_(${3})`
        && col3.children[1].id === `img_(${7})`
        && col3.children[2].id === `img_(${11})`
        && col3.children[3].id === `img_(${15})`)
        ||
        (col0.children[0].id === `img_(${1})`
            && col0.children[1].id === `img_(${5})`
            && col0.children[2].id === `img_(${9})`
            && col0.children[3].id === `img_(${13})`
            && col1.children[0].id === `img_(${2})`
            && col1.children[1].id === `img_(${6})`
            && col1.children[2].id === `img_(${10})`
            && col1.children[3].id === `img_(${14})`
            && col2.children[0].id === `img_(${3})`
            && col2.children[1].id === `img_(${7})`
            && col2.children[2].id === `img_(${11})`
            && col2.children[3].id === `img_(${15})`
            && col3.children[0].id === `img_(${4})`
            && col3.children[1].id === `img_(${8})`
            && col3.children[2].id === `img_(${12})`
            && col3.children[3].id === `img_(${0})`)) {
        win();
    }
}

function work(id) {
    move(id);
}

function win() {
    $("._hidedInput").slideToggle("slow");
    $("._unhidedInput").slideToggle("slow");
    (function resultMoves() {
        const resultCount = counter;
        $('#inputMoves').val(resultCount);
    }());
    (function resultTime() {
        const resultTime = `${hours.innerText}:${mins.innerText}:${secs.innerText}`;
        $('#inputTime').val(resultTime);
    }());
}

///////////////////////////////////////////////////////////////////////////////////////