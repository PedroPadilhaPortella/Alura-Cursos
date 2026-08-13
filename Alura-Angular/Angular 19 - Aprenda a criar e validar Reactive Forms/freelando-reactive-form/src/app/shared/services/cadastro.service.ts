import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Idioma } from '../models/idioma.interface';

interface CadastroData {
  areaAtuacao?: string;
  nivelExperiencia?: string;
  nomeCompleto?: string;
  cep?: string;
  logradouro?: string;
  estado?: string;
  cidade?: string;
  email?: string;
  senha?: string;
  foto?: string | ArrayBuffer | null;
  resumo?: string;
  habilidadesSelecionadas?: string[];
  idiomas?: Idioma[];
  portfolio?: string;
  linkedIn?: string;
}

const FREELANDO_CADASTRO_DATA_KEY = 'freelandoCadastroData';

@Injectable({
  providedIn: 'root'
})
export class CadastroService {

  private cadastroDataSubject = new BehaviorSubject<CadastroData>({});

  cadastroData$ = this.cadastroDataSubject.asObservable();

  constructor() {
    const savedData = localStorage.getItem(FREELANDO_CADASTRO_DATA_KEY);

    if(savedData) {
      this.cadastroDataSubject.next(JSON.parse(savedData));
    }
  }

  getCadastroData(): CadastroData {
    return this.cadastroDataSubject.value;
  }

  updateCadastroData(data: Partial<CadastroData>): void {
    const currentData = this.cadastroDataSubject.value;
    const updatedData = { ...currentData, ...data };
    this.cadastroDataSubject.next(updatedData);
    localStorage.setItem(FREELANDO_CADASTRO_DATA_KEY, JSON.stringify(updatedData));
  }
}
