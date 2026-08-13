
import { Component, inject, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AbstractControl, FormArray, FormBuilder, FormGroup, ReactiveFormsModule, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';

import { ButtonComponent } from '../../shared/components/button/button.component';
import { Habilidade } from '../../shared/models/habilidade.interface';
import { ChipComponent } from '../../shared/components/chip/chip.component';
import { CadastroService } from '../../shared/services/cadastro.service';
import { Router } from '@angular/router';
import { Idioma } from '../../shared/models/idioma.interface';

export function maxLengthNoWhiteSpaces(max: number): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value: string = control.value ?? '';
    const noWhiteSpaces = value.replace(/ /g, '');

    if (noWhiteSpaces.length > max) {
      return {
        maxLengthNoWhiteSpaces: {
          requiredLength: max,
          actualLength: noWhiteSpaces.length
        }
      };
    }

    return null;
  };
}

@Component({
  selector: 'app-perfil-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ButtonComponent,
    ChipComponent
  ],
  templateUrl: './perfil-form.component.html',
  styleUrls: ['./perfil-form.component.scss']
})
export class PerfilFormComponent implements OnInit {
  cadastroService = inject(CadastroService);
  formBuilder = inject(FormBuilder);
  router = inject(Router);
  
  perfilForm!: FormGroup;
  fotoPreview: string | ArrayBuffer | null = null;

  habilidades: Habilidade[] = [
    { nome: 'Fullstack', selecionada: false },
    { nome: 'Front-end', selecionada: false },
    { nome: 'Back-end', selecionada: false },
    { nome: 'React', selecionada: false },
    { nome: 'Angular', selecionada: false },
    { nome: 'Vue', selecionada: false },
    { nome: 'Java', selecionada: false },
    { nome: 'Python', selecionada: false },
    { nome: 'C++', selecionada: false },
    { nome: 'C#', selecionada: false },
    { nome: 'Android', selecionada: false },
    { nome: 'iOS', selecionada: false },
    { nome: 'Flutter', selecionada: false },
  ];

  niveisIdioma: string[] = [
    'Básico',
    'Intermediário',
    'Avançado',
    'Fluente',
    'Nativo'
  ];

  idiomas: string[] = [
    'Português',
    'Inglês',
    'Espanhol'
  ];

  resumoTotalCaracteresRestantes = signal<number>(70);

  ngOnInit(): void {
    this.createForm();
  }

  private createForm(): void {
    this.perfilForm = this.formBuilder.group({
      foto: [''],
      habilidadesSelecionadas: [[]],
      idiomas: this.formBuilder.array([] as Idioma[]),
      resumo: ['', [Validators.required, maxLengthNoWhiteSpaces(70)]],
      portfolio: ['', Validators.pattern('https?://.+')],
      linkedIn: ['', Validators.pattern('https?://(www\\.)?linkedin\\.com/.+')],
    });

    this.perfilForm.get('resumo')?.valueChanges.subscribe(value => {
      const noWhiteSpaces = (value ?? '').replace(/ /g, '');
      this.resumoTotalCaracteresRestantes.set(70 - noWhiteSpaces.length);
    });

    this.adicionarIdioma("Português", "Nativo");
  }

  // Gerenciar Upload de Foto
  onFotoSelecionada(event: any): void {
    const file = event.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        this.fotoPreview = reader.result;
        this.perfilForm.patchValue({ foto: reader.result });
      };
      reader.readAsDataURL(file);
    }
  }

  // Gerenciar Habilidades
  toggleHabilidade(habilidade: Habilidade): void {
    habilidade.selecionada = !habilidade.selecionada;
    const habilidadesSelecionadas = this.habilidades.filter(h => h.selecionada).map(h => h.nome);
    this.perfilForm.patchValue({ habilidadesSelecionadas });
  }

  // Gerenciar Idiomas
  get idiomasArray(): FormArray {
    return this.perfilForm.get('idiomas') as FormArray;
  }

  adicionarIdioma(nome: string = '', nivel: string = ''): void {
    const idiomaForm = this.formBuilder.group({
      nome: [nome, Validators.required],
      nivel: [nivel, Validators.required]
    });

    this.idiomasArray.push(idiomaForm);
  }

  // Actions
  removerIdioma(index: number): void {
    if (this.idiomasArray.length <= 1) {
      return;
    }

    this.idiomasArray.removeAt(index);
  }

  private extrairIdiomas(): Idioma[] {
    return this.idiomasArray.controls.map(control => {
      return {
        nome: control.get('nome')?.value,
        nivel: control.get('nivel')?.value
      };
    });
  };

  onAnterior(): void {
    this.salvarDadosAtuais();
    this.router.navigate(['/cadastro/dados-pessoais']);
  }

  onProximo(): void {
    if (this.perfilForm.valid) {
      this.salvarDadosAtuais();
      this.router.navigate(['/']);
    } else {
      this.perfilForm.markAllAsTouched();
    }
  }

  private salvarDadosAtuais() {
    const formValue = this.perfilForm.value;

    this.cadastroService.updateCadastroData({
      foto: formValue.foto,
      resumo: formValue.resumo,
      habilidadesSelecionadas: formValue.habilidadesSelecionadas,
      idiomas: this.extrairIdiomas(),
      portfolio: formValue.portfolio,
      linkedIn: formValue.linkedIn,
    });
  }
}
