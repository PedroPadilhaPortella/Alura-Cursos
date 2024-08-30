
/* Ser autenticável significa ter o metodo autenticar */

export default class ServicoAutenticacao {

    static login(autenticavel, senha) {
        if(ServicoAutenticacao.isAuthenticable(autenticavel)) {
            return autenticavel.autenticar(senha);
        }
        return false;
    }

    // Checa se a classe possui uma propriedade autenticar e se ela é uma função
    static isAuthenticable(autenticavel) {
        return 'autenticar' in autenticavel && autenticavel.autenticar instanceof Function;
    }
}