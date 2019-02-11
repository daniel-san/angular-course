import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  num = 0;
  counter: any;
  @Output('current') current_number = new EventEmitter<number>();

  constructor() { }

  startGame() {
    this.counter = setInterval(() => {
      this.current_number.emit(this.num);
      this.num++;
    },1000);
  }
  
  stopGame() {
    clearInterval(this.counter);
    console.log('Game Stopped');
  }

  ngOnInit() {
  }

}
