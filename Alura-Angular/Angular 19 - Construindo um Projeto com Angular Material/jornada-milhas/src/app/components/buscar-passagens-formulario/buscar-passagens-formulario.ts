import { Component, computed, inject, signal } from '@angular/core';
import { FormBuilder, FormControl, ReactiveFormsModule } from '@angular/forms';
import { toSignal } from '@angular/core/rxjs-interop';

import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';

import { PassagemService } from '../../services/passagem.service';
import { PassagemCard } from '../passagem-card/passagem-card';
import { Passagem } from '../../models/passagem';

const MATERIAL_MODULES = [
  MatButtonToggleModule,
  MatFormFieldModule,
  MatInputModule,
  MatIconModule,
  MatButtonModule,
  MatTooltipModule,
  MatAutocompleteModule,
];

@Component({
  selector: 'app-buscar-passagens-formulario',
  imports: [...MATERIAL_MODULES, ReactiveFormsModule, PassagemCard],
  templateUrl: './buscar-passagens-formulario.html',
  styleUrl: './buscar-passagens-formulario.scss',
})
export class BuscarPassagensFormulario {
  private passagemService = inject(PassagemService);
  private fb = inject(FormBuilder);

  cidades = this.passagemService.cidades;

  form = this.fb.group({
    trajeto: ['ida-e-volta'],
    origem: [''],
    destino: [''],
  });

  private origemValue = toSignal(this.form.controls.origem.valueChanges, { initialValue: '' });
  private destinoValue = toSignal(this.form.controls.destino.valueChanges, { initialValue: '' });

  origemFiltrada = computed(() => this.filtrarCidades(this.origemValue() ?? ''));
  destinoFiltrada = computed(() => this.filtrarCidades(this.destinoValue() ?? ''));

  resultados = signal<Passagem[]>([]);
  buscou = signal(false);

  private filtrarCidades(valor: string) {
    const termo = valor.toLowerCase();
    return this.cidades.filter((c) => c.nome.toLowerCase().includes(termo));
  }

  buscar() {
    const { origem, destino } = this.form.value;

    const origemId = this.encontrarCidadeId(origem ?? null);
    const destinoId = this.encontrarCidadeId(destino ?? null);

    this.buscou.set(true);

    if (!origemId || !destinoId) {
      return;
    }

    this.resultados.set(this.passagemService.buscarPassagens(origemId, destinoId));
  }

  private encontrarCidadeId(nome: string | null): string | undefined {
    return this.cidades.find((c) => c.nome === nome)?.id;
  }

  trocarOrigemDestino() {
    const origem = this.form.controls.origem.value;
    const destino = this.form.controls.destino.value;
    this.form.patchValue({ origem: destino, destino: origem });
  }
}
