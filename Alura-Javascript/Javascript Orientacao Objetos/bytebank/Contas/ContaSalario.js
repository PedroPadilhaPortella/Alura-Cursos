import Conta from './Conta.js';

export default class ContaSalario extends Conta {

    constructor(cliente) {
        super(0, cliente, 1001);
    }

    //sobreescrevendo o comportamento de sacar
    sacar(valor) {
        let taxa = 1.01;
        return super._sacar(valor, taxa);
    }
}