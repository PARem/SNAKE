class Snake extends Elem{
    constructor(matrix, cords, direct = 'up'){
        super(matrix, cords);
        this.value = 'snake';
        this.course = direct;
        this.direct = direct;
        this.alive = true;
    }



    move(){

        if(!this.alive){
            return false;
        }
        this.course = this.direct;
        let head = this.cords[0].slice();
        console.log(head);
        switch(this.course){
            case 'right':
                head[0]++;
                break;
            case 'left':
                head[0]--;
                break;
            case 'up':
                head[1]--;
                break;
            case 'down':
                head[1]++;
                break;
        }
        let cell = this.matrix.getCell(head[0], head[1]);
        if(!this._checkAlive(head, cell)){
            this.alive = false;
            return false;
        }



        if(cell !== 'fruit'){
            let tail = this.cords.pop();
            this.matrix.setCell(tail[0], tail[1], '');
        }else{
            (new Fruit(this.matrix, [this.matrix.randomCordsForFruit()])).show();
            this.matrix.eatFruit();
        }

        this.cords.unshift(head);
        this.matrix.setCell(head[0], head[1], 'snake');

    }

    _checkAlive(head, cell){

        return head[0] >=1 && head[0] <= this.matrix.cols &&
               head[1] >= 1 && head[1] <= this.matrix.rows &&
               cell !== 'wall' && cell !== 'snake';


}

}