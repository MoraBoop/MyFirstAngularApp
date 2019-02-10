import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Aplicacion con angular';
  autor = 'Jaison Mora';
  hobbies = [
    'Entrenar Judo',
    'Jugar Dota',
    'Investigar sobre devs'
  ];
  edad = 17;
}
