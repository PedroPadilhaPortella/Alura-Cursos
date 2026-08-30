import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import { catchError, throwError } from 'rxjs';
import { inject } from '@angular/core';

export const errorInterceptor: HttpInterceptorFn = (req, next) => {
  const snackBar = inject(MatSnackBar);

  return next(req).pipe(
    catchError((error: HttpErrorResponse) => {
      const message = getErrorMessage(error);

      snackBar.open(message, 'Fechar', {
        duration: 4000,
        horizontalPosition: 'end',
        verticalPosition: 'bottom',
        panelClass: ['snackbar-erro'],
      });

      return throwError(() => error);
    }),
  );
};

function getErrorMessage(error: HttpErrorResponse): string {
  if (error.status === 0) return 'Não foi possível conectar ao servidor.';
  if (error.status === 404) return 'Recurso não encontrado.';
  if (error.status >= 500) return 'Erro no servidor. Tente novamente mais tarde.';
  return error.error?.message ?? 'Ocorreu um erro inesperado.';
}
