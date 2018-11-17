window.onload = function () {
    confirm('Output 4 numbers for creating Spiral Matrix');
}
function drawArray() {
    let spiralArray = {
        length: Number(document.getElementById('length').value),//размерность массива (строки)
        height: Number(document.getElementById('height').value),//размерность массива (столбцы)
        x: Number(document.getElementById('x0').value),//координаты начала записи массива строки
        y: Number(document.getElementById('y0').value),//координаты начала записи массива столбцы
        directionX: 0,//смещение по оси х
        directionY: 0,//смешение по оси у
        step: 1,//шаг елемента
        direction: -1,//направление движения
        turn: 0,//счетчик поворотов
        count: 0,//счетчик количества вводов в ячейки
        error: 0,//счетчик ошибок
        index: [],//массив индексов
        arr: []//массив чисел
    };

    for (let i = 0; i < spiralArray.length; i++) {
        spiralArray.arr[i] = new Array();//инициализация массива
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
        console.log('dx ' + spiralArray.directionX, 'dy ' + spiralArray.directionY, 'dir ' + spiralArray.direction, 'x ' + spiralArray.x, 'y ' + spiralArray.y);
        for (let s = 0; s < spiralArray.step; s++) {// cчетчик шагов
            if (((spiralArray.x >= 0) && (spiralArray.x < spiralArray.height)) && ((spiralArray.y >= 0) && (spiralArray.y < spiralArray.length))) {//если в границах массива пишем елемент
                if (spiralArray.count < 10) { //для коректного вывода массива
                    spiralArray.count = '0' + spiralArray.count;//добавляем к однозначным числам спереди 0
                }

                spiralArray.arr[spiralArray.y][spiralArray.x] = spiralArray.count;//запись числа к массиву
                spiralArray.index = spiralArray.index.concat('(' + spiralArray.x + ';' + spiralArray.y + ')');//запись индексов элементов в ходе заполнения массива
                spiralArray.count++;//инкрементируем значение елементов
                console.log('step ' + spiralArray.step, 'count ' + spiralArray.count, 'x ' + spiralArray.x, 'y ' + spiralArray.y);
            } else {
                spiralArray.error++;//если индекс за гранями массива инкрементируем ошибку
                console.log('error ' + spiralArray.error);
            }
            spiralArray.x += spiralArray.directionX;//увеличиваем индекс горизонтали
            spiralArray.y += spiralArray.directionY;//увеличиваем индекс вертикали
        }
        spiralArray.turn++;//инкрементируем поворот
        console.log(spiralArray.k);
        if (spiralArray.turn == 2) {//если к==2 то увеличить длину шага
            spiralArray.step++;
            spiralArray.turn = 0;//обнулить поворот
        }
    }

    console.log(spiralArray.arr);//вывод массива в консоль
    console.log('      ');
    console.log(spiralArray.index);//вывод индексную дорогу в консоль

    let array = 'Spiral Matrix<br>';
    let outputArray = document.getElementById('array');//привязка до элемента на html-странице
    for (let i = 0; i < spiralArray.length; i++) {
        for (let j = 0; j < spiralArray.height; j++) {
            array += spiralArray.arr[i][j] + ' ';//запись массива в строку
        }
        array += '<br>';
    }
    outputArray.innerHTML = array;//вывод строки в html

    let way = 'Way<br>';
    let outputWay = document.getElementById('way');//привязка до элемента на html-странице
    for (let i = 0; i < spiralArray.index.length; i++) {
        way += spiralArray.index[i] + '<br>';//запись массива в строку
    }
    outputWay.innerHTML = way;//вывод строки в html
}

//document.getElementById('start').onclick = drawArray();