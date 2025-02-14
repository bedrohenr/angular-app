import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EnviaFormService {

  constructor() { }

  enviaInfoParaBackend(){
    console.log("Dados enviados para o backend.");
  }
}
