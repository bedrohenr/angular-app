import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { EnviaFormService } from '../../services/envia-form.service';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  name = "Marcos Marcela";
  fruitList = ['Uva', 'Maçã', 'Banana'];
  private enviaForm = inject(EnviaFormService);

  @Input("name") props!: string;

  @Output() emitindoValorName = new EventEmitter<string>();

  clicked(){
    this.emitindoValorName.emit(this.name);
    this.enviaForm.enviaInfoParaBackend();
  }
}
