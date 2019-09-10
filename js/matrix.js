class Matrix{
    constructor(element, rows, cols){
        this.element = element;
        this.rows = rows;
        this.cols = cols;
        this.cell = [];
        this._score = 0;
        this._level = 0;
        this._spead = 400;
    }
    create(){

        for(let i = 0; i < this.rows * this.cols; i++){
            let div = document.createElement('div');
            div.setAttribute('data-game', '');
            if(i % this.cols === 0){
                div.classList.add('row-start');
                this.cell[i] = '';
            }
            this.element.appendChild(div);


        }
    }
    getCell(x, y){
        let num = this._calcNum(x, y);
        return this.cell[num];
    }
    setCell(x, y, val){
        let num = this._calcNum(x, y);
        this.cell[num] = val;
        this.element.children[num].setAttribute('data-game', val);
    }

    _calcNum(x, y){
        return this.cols * (y-1) + x -1;
    }
    _randomCords(){
        return [
            Math.floor(Math.random() * (this.cols + 1)),
            Math.floor(Math.random() * (this.rows + 1))
        ];
    }
    randomCordsForFruit(){
        while(true){
            let cord = this._randomCords();
            if(this.getCell(cord[0], cord[1]) === ''){
                return cord;
            }
        }
    }
    eatFruit(){
        this._score +=100;
        document.querySelector('#game-score').innerHTML = this._score;
        if(this._score === 200){
            this.newLevel();
        }
    }
    newLevel(){
        this._score  = 0;
        this._level += 1;
        this._spead -= 150;
        document.querySelector('#level').innerHTML = this._level;
        document.querySelector('#game-score').innerHTML = this._score;
    }


}