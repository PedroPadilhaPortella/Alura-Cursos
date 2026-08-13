import { BehaviorSubject, debounceTime, distinctUntilChanged, filter, Observable, of, startWith, switchMap, tap } from 'rxjs';
import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';

import { Cidade, Estado, EstadosService } from '../../shared/services/estados.service';
import { ButtonComponent } from '../../shared/components/button/button.component';
import { CadastroService } from '../../shared/services/cadastro.service';
import { cpfValidator } from '../../shared/validators/cpf.validator';
import { CepService } from '../../shared/services/cep.service';
import { cepValidator } from '../../shared/validators/cep.validator';

const isPasswordsEqualsValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
  const senha = control.get('senha')?.value;
  const confirmarSenha = control.get('confirmarSenha')?.value;

  return senha && confirmarSenha && senha === confirmarSenha ? null : { passwordsNotEqual: true };
}

@Component({
  selector: 'app-dados-pessoais-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, ButtonComponent],
  templateUrl: './dados-pessoais-form.component.html',
  styleUrls: ['./dados-pessoais-form.component.scss'],
})
export class DadosPessoaisFormComponent implements OnInit {
  cadastroService = inject(CadastroService);
  estadosService = inject(EstadosService);
  cepService = inject(CepService);
  formBuilder = inject(FormBuilder);
  router = inject(Router);

  dadosPessoaisForm!: FormGroup;

  estados$!: Observable<Estado[]>;
  cidades$!: Observable<Cidade[]>;
  isLoadingCidades$ = new BehaviorSubject<boolean>(false);
  isLoadingCep$ = new BehaviorSubject<boolean>(false);

  ngOnInit(): void {
    this.createForm();
    this.loadEstados();
    this.configureListenerEstado();
    this.configureListenerCep();
  }

  private createForm(): void {
    this.dadosPessoaisForm = this.formBuilder.group({
      nomeCompleto: ['', [Validators.required]],
      cpf: ['', [Validators.required, cpfValidator]],
      cep: ['', [Validators.required, Validators.pattern(/^\d{5}-?\d{3}$/)], [cepValidator(this.cepService)]],
      logradouro: [{ value: '', disabled: true }, [Validators.required]],
      estado: ['', [Validators.required]],
      cidade: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      senha: ['', [Validators.required, Validators.minLength(6)]],
      confirmarSenha: ['', [Validators.required]],
    }, {
      validators: [isPasswordsEqualsValidator]
    });
  }

  private loadEstados(): void {
    this.estados$ = this.estadosService.getEstados();
  }

  private configureListenerEstado(): void {
    const estadoFieldControl = this.dadosPessoaisForm.get('estado');

    if(estadoFieldControl) {
      this.cidades$ = estadoFieldControl.valueChanges.pipe(
        startWith(''),
        tap(() => {
          this.resetarCidade();
          this.isLoadingCidades$.next(true);
        }),
        switchMap((estado) => {
          if(estado) {
            return this.estadosService.getCidadesPorEstado(estado)
              .pipe(tap(() => this.isLoadingCidades$.next(false)));
          }
          this.isLoadingCidades$.next(false);
          return of([]);
        })
      )
    }
  }

  private configureListenerCep(): void {
    const cepFieldControl = this.dadosPessoaisForm.get('cep');
    const logradouroFieldControl = this.dadosPessoaisForm.get('logradouro');

    if (!cepFieldControl || !logradouroFieldControl) {
      return;
    }

    cepFieldControl.valueChanges.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      filter(cep => !!cep && cep.replace(/\D/g, '').length === 8),
      tap(() => {
        this.isLoadingCep$.next(true);
        logradouroFieldControl.setValue('');
      }),
      switchMap(cep => this.cepService.buscarEndereco(cep))
    ).subscribe({
      next: (endereco) => {
        this.isLoadingCep$.next(false);
        if (!endereco.erro) {
          logradouroFieldControl.setValue(endereco.logradouro);
        }
      },
      error: () => this.isLoadingCep$.next(false)
    });
  }

  private resetarCidade(): void {
    this.dadosPessoaisForm.get('cidade')?.setValue('');
  }

  onPreviousStep(): void {
    this.salvarDadosAtuais();
    this.router.navigate(['/cadastro/area-atuacao']);
  }

  onNextStep(): void {
    if (this.dadosPessoaisForm.valid) {
      this.salvarDadosAtuais();
      this.router.navigate(['/cadastro/perfil']);
    } else {
      this.dadosPessoaisForm.markAllAsTouched();
    }
  }

  private salvarDadosAtuais() {
    const formValue = this.dadosPessoaisForm.value;

    this.cadastroService.updateCadastroData({
      nomeCompleto: formValue.nomeCompleto,
      cep: formValue.cep,
      logradouro: formValue.logradouro,
      estado: formValue.estado,
      cidade: formValue.cidade,
      email: formValue.email,
      senha: formValue.senha,
    });
  }
}
