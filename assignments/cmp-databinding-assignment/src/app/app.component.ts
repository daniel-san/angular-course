import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  current_number:number = 0;

  updateNumber(newNumber: number) {
    this.current_number = newNumber;
  }
}
