//let array = [];

//window.onload = function () {
//    fill();
//}

//function fill() {
//    for (var i = 0; i < 16; i++) {
//        array[i] = { 'id': `${i}`, 'value': (document.getElementById(`img_(${i})`)) };
//    }
//}

//function replaceArrayEl() {

//}

function findDivOrderIndex(id, div) {
    for (var i = 0; i < div.children.length; i++) {
        if (div.children[i].id === `img_(${id})`) {
            var indexNum = i;
        }
    }
    return indexNum;
}

function move(/*array, */id) {
    //let currArrayIndex = (array.findIndex(x => x.id === `${id}`));
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
}

function work(id) {
    move(id);
}