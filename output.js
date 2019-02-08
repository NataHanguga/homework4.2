window.onload = function () {
    confirm('Output 4 numbers for creating Spiral Matrix');
}
function drawArray() {
    let spiralArray = {
        length: Number(document.getElementById('length').value),//row length
        height: Number(document.getElementById('height').value),//col length
        x: Number(document.getElementById('x0').value),//row point
        y: Number(document.getElementById('y0').value),//col point
        directionX: 0,//x bias
        directionY: 0,//y bias
        step: 1,//step
        direction: -1,//move direction
        turn: 0,//turn count
        count: 0,//cell count
        error: 0,//error count
        index: [],//index array
        arr: []//numbers aray
    };

    for (let i = 0; i < spiralArray.length; i++) {
        spiralArray.arr[i] = new Array();//create massive
        for (let j = 0; j < spiralArray.height; j++) {
            spiralArray.arr[i][j] = 0;
        }
    }

    while (spiralArray.count < spiralArray.length * spiralArray.height) {
        //r-b-l-t
        //10--1--10-1
        if (spiralArray.direction == 10) {
            spiralArray.directionX = 0;
            spiralArray.directionY = 1;
            spiralArray.direction = 1;//10-right 1/0
        }
        else if (spiralArray.direction == -1) {
            spiralArray.directionX = 1;
            spiralArray.directionY = 0;
            spiralArray.direction = 10;//-1 - bottom 0/-1
        }
        else if (spiralArray.direction == -10) {
            spiralArray.directionX = 0;
            spiralArray.directionY = -1;
            spiralArray.direction = -1;//-10 - left -1/0
        }
        else if (spiralArray.direction == 1) {
            spiralArray.directionX = -1;
            spiralArray.directionY = 0
            spiralArray.direction = -10;// 1- top 0/1
        }
        for (let s = 0; s < spiralArray.step; s++) {// step count
            if (((spiralArray.x >= 0) && 
                (spiralArray.x < spiralArray.height)) && 
                ((spiralArray.y >= 0) && 
                (spiralArray.y < spiralArray.length))) {//if number within the array write number to numbers arr
                if (spiralArray.count < 10) { //for beautifi output
                    spiralArray.count = '0' + spiralArray.count;//add '0' to one-sign numbers
                }

                spiralArray.arr[spiralArray.y][spiralArray.x] = spiralArray.count;//push num to arr
                spiralArray.index = spiralArray.index.concat('(' + spiralArray.x + ';' + spiralArray.y + ')');//push num index to index arr
                spiralArray.count++;//increment number
                } else {
                spiralArray.error++;//if numbe rwithout the array push error to error arr
            }
            spiralArray.x += spiralArray.directionX;//increase row index
            spiralArray.y += spiralArray.directionY;//increase col index
        }
        spiralArray.turn++;//turn++
        if (spiralArray.turn == 2) {//if k=2 increase step length
            spiralArray.step++;
            spiralArray.turn = 0;//turn=0
        }
    }

    let array = 'Spiral Matrix<br>';
    let outputArray = document.getElementById('array');
    for (let i = 0; i < spiralArray.length; i++) {
        for (let j = 0; j < spiralArray.height; j++) {
            array += spiralArray.arr[i][j] + ' ';//add array to string
        }
        array += '<br>';
    }
    outputArray.innerHTML = array;//output string to html

    let way = 'Way<br>';
    let outputWay = document.getElementById('way');
    for (let i = 0; i < spiralArray.index.length; i++) {
        way += spiralArray.index[i] + ' => ';//add array to string
    }
    outputWay.innerHTML = way;//output string to html
}
