import { Component, signal } from '@angular/core';

import { BuscarPassagensFormulario } from './components/buscar-passagens-formulario/buscar-passagens-formulario';
import { Header } from "./components/header/header";
import { Banner } from "./components/banner/banner";

@Component({
  selector: 'app-root',
  imports: [Banner, Header, BuscarPassagensFormulario],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('jornada-milhas');
}