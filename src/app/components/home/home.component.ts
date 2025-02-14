import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  name = "Marcos Daniel Andrea Marcela";
  fruitList = ['Uva', 'Maçã', 'Banana'];

  clicked(event: any){
    console.log("Voce clicou.");
  }
}
