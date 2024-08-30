import Conta from './Conta.js';

export default class ContaCorrente extends Conta {
    static numeroDeContas = 0;

    constructor(cliente, agencia) {
        super(0, cliente, agencia);
        ContaCorrente.numeroDeContas++;
    }

    //sobreescrevendo o comportamento de sacar
    sacar(valor) {
        let taxa = 1.05;
        return super._sacar(valor, taxa);
    }
}