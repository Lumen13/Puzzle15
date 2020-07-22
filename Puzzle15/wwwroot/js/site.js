let counter = 0;

function clock() {
    const hour = document.getElementById('_hour');
    const mins = document.getElementById('_mins');
    const secs = document.getElementById('_secs');
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
        hour.innerText = H;
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

function move(id) {
    counter++;
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

    if ((document.getElementById('0').children[0].id === `img_(${0})`
        && document.getElementById('0').children[1].id === `img_(${4})`
        && document.getElementById('0').children[2].id === `img_(${8})`
        && document.getElementById('0').children[3].id === `img_(${12})`
        && document.getElementById('1').children[0].id === `img_(${1})`
        && document.getElementById('1').children[1].id === `img_(${5})`
        && document.getElementById('1').children[2].id === `img_(${9})`
        && document.getElementById('1').children[3].id === `img_(${13})`
        && document.getElementById('2').children[0].id === `img_(${2})`
        && document.getElementById('2').children[1].id === `img_(${6})`
        && document.getElementById('2').children[2].id === `img_(${10})`
        && document.getElementById('2').children[3].id === `img_(${14})`
        && document.getElementById('3').children[0].id === `img_(${3})`
        && document.getElementById('3').children[1].id === `img_(${7})`
        && document.getElementById('3').children[2].id === `img_(${11})`
        && document.getElementById('3').children[3].id === `img_(${15})`)
        ||
        (document.getElementById('0').children[0].id === `img_(${1})`
            && document.getElementById('0').children[1].id === `img_(${5})`
            && document.getElementById('0').children[2].id === `img_(${9})`
            && document.getElementById('0').children[3].id === `img_(${13})`
            && document.getElementById('1').children[0].id === `img_(${2})`
            && document.getElementById('1').children[1].id === `img_(${6})`
            && document.getElementById('1').children[2].id === `img_(${10})`
            && document.getElementById('1').children[3].id === `img_(${14})`
            && document.getElementById('2').children[0].id === `img_(${3})`
            && document.getElementById('2').children[1].id === `img_(${7})`
            && document.getElementById('2').children[2].id === `img_(${11})`
            && document.getElementById('2').children[3].id === `img_(${15})`
            && document.getElementById('3').children[0].id === `img_(${4})`
            && document.getElementById('3').children[1].id === `img_(${8})`
            && document.getElementById('3').children[2].id === `img_(${12})`
            && document.getElementById('3').children[3].id === `img_(${0})`)) {
        win();
    }
}

function work(id) {
    move(id);
}

function win() {
    $("._hidedInput").slideToggle("slow");
    $("._unhidedInput").slideToggle("slow");
    const hour = document.getElementById('_hour').innerText;
    const mins = document.getElementById('_mins').innerText;
    const secs = document.getElementById('_secs').innerText;
    (function resultMoves() {
        const resultCount = counter;
        $('#inputMoves').val(resultCount);
    }());
    (function resultTime() {
        const resultTime = `${hour}:${mins}:${secs}`;
        $('#inputTime').val(resultTime);
    }());
}