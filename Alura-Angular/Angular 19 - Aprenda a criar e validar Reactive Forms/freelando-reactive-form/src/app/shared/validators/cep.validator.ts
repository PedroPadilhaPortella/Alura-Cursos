import { AbstractControl, AsyncValidatorFn, ValidationErrors } from '@angular/forms';
import { catchError, map, of } from 'rxjs';
import { CepService } from '../services/cep.service';

export function cepValidator(cepService: CepService): AsyncValidatorFn {
  return (control: AbstractControl): import('rxjs').Observable<ValidationErrors | null> => {
    const cep = control.value;

    if (!cep || cep.replace(/\D/g, '').length !== 8) {
      return of(null); // deixa o Validators.pattern cuidar do formato
    }

    return cepService.buscarEndereco(cep).pipe(
      map(endereco => (endereco.erro ? { cepInexistente: true } : null)),
      catchError(() => of({ cepInvalido: true }))
    );
  };
}