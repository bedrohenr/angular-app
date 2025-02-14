import { Component, inject } from '@angular/core';
import { EnviaFormService } from '../../services/envia-form.service';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  name = "Marcos Daniel Andrea Marcela";
  fruitList = ['Uva', 'Maçã', 'Banana'];
  private enviaForm = inject(EnviaFormService);

  clicked(){
    this.enviaForm.enviaInfoParaBackend();
  }
}
