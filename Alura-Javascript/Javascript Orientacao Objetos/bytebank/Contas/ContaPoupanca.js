import Conta from './Conta.js';

export default class ContaPoupanca extends Conta {

    constructor(saldoInicial, cliente, agencia) {
        super(saldoInicial, cliente, agencia);
    }

    //sobreescrevendo o comportamento de sacar
    sacar(valor) {
        let taxa = 1.02;
        return super._sacar(valor, taxa);
    }
}