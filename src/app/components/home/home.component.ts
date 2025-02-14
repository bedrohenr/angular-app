import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  name = "Marcos Daniel Andrea Marcela";

  clicked(event: any){
    console.log("You clicked the button.");
  }
}
