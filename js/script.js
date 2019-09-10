
    let   div = document.querySelector('.board');

    let matrix = new Matrix(div, 10, 10);
    matrix.create();

    (new Wall(matrix, [[5, 4], [5, 5]])).show();

    (new Fruit( matrix, [[0, 2], [4, 5]])).show();

    let snake = new Snake(matrix, [], 'up');

    document.onkeydown = function(e){
        switch(e.keyCode){
            case 37:
                if(snake.course !== 'right')
                snake.direct = 'left';
                break;
            case 38:
                if(snake.course !== 'down')
                snake.direct = 'up';
                break;
            case 39:
                if(snake.course !== 'left')
                snake.direct = 'right';
                break;
            case 40:
                if(snake.course !== 'up')
                snake.direct = 'down';
                break;
        }
    };

    function startGame(){

        snake.cords = [[2, 8], [2, 9], [2, 10]];
        snake.alive = true;
        snake.course = 'up';
        snake.direct = snake.course;
        matrix._spead = 400;
        matrix._level = 0;
        matrix._score = 0;
        document.querySelector('#level').innerHTML = matrix._level;
        document.querySelector('#game-score').innerHTML = matrix._score;
        snake.show();

        let timer = setInterval(() =>{
            snake.move();
            if(!snake.alive){
                clearInterval(timer);
                alert('Game over!');
                for(let cord of snake.cords){
                    matrix.setCell(cord[0], cord[1], '');
                }

            }
        }, matrix._spead);
    }

