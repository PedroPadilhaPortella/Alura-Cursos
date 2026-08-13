import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RadioOptionComponent } from "../../shared/components/radio-option/radio-option.component";
import { ExperienceLevelComponent } from "../../shared/components/experience-level/experience-level.component";
import { ButtonComponent } from "../../shared/components/button/button.component";
import { Router } from '@angular/router';
import { CadastroService } from '../../shared/services/cadastro.service';

const MODULES = [
  CommonModule,
  ReactiveFormsModule
];

const COMPONENTS = [
  RadioOptionComponent,
  ExperienceLevelComponent,
  ButtonComponent
]

@Component({
  selector: 'app-cadastro-form',
  standalone: true,
  imports: [
    ...MODULES,
    ...COMPONENTS,
],
  templateUrl: './cadastro-form.component.html',
  styleUrls: ['./cadastro-form.component.scss']
})
export class CadastroFormComponent implements OnInit {
  cadastroForm!: FormGroup;

  cadastroService = inject(CadastroService);
  formBuilder = inject(FormBuilder);
  router = inject(Router);

  areasAtuacao = [
    { id: 'ti', value: 'ti', label: 'TI e Programação' },
    { id: 'design', value: 'design', label: 'Design e Multimídia' },
    { id: 'revisao', value: 'revisao', label: 'Revisão' },
    { id: 'traducao', value: 'traducao', label: 'Tradução' },
    { id: 'transcricao', value: 'transcricao', label: 'Transcrição' },
    { id: 'marketing', value: 'marketing', label: 'Marketing' }
  ];

  niveisExperiencia = [
    {
      id: 'iniciante',
      label: 'Iniciante',
      description: '(1 a 3 anos)'
    },
    {
      id: 'intermediario',
      label: 'Intermediário',
      description: '(3 a 6 anos)'
    },
    {
      id: 'avancado',
      label: 'Avançado',
      description: '(6 anos ou mais)'
    }
  ];

  ngOnInit(): void {
    this.cadastroForm = this.formBuilder.group({
      areaAtuacao: ['', [Validators.required]],
      nivelExperiencia: ['', [Validators.required]]
    });
  }

  onAreaChange(area: string): void {
    this.cadastroForm.get('areaAtuacao')?.setValue(area);
  }

  onLevelChange(level: string): void {
    this.cadastroForm.get('nivelExperiencia')?.setValue(level);
  }

  onPreviousStep() {
    alert('Passo anterior');
  }

  onNextStep() {
    if(this.cadastroForm.valid) {
      this.cadastroService.updateCadastroData(this.cadastroForm.value);
      this.router.navigate(['/cadastro/dados-pessoais']);
    }
  }
}
