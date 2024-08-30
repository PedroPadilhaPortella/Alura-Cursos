import Gerente from "./Funcionarios/Gerente.js";
import Diretor from "./Funcionarios/Diretor.js";
import ServicoAutenticacao from "./ServicoAutenticacao.js";
import Cliente from "./Cliente.js";

const diretor = new Diretor('Pedro Portella', 15000, '149.930.234-10')
diretor.cadastrar('pedro123@CEO')
const diretorIsLogged = ServicoAutenticacao.login(diretor, 'pedro123@CEO')
console.log("Diretor está Logado? " + diretorIsLogged)


const gerente = new Gerente('Ricardo Silva', 8000, '421.234.214.01')
gerente.cadastrar('rick.loko123')
const gerenteIsLogged = ServicoAutenticacao.login(gerente, 'rick.senha_errada')
console.log("Gerente está Logado? " + gerenteIsLogged)


const cliente = new Cliente('Larissa Mendes', '532.243.234-10', 'lari_lovepizza002')
const clienteIsLogged = ServicoAutenticacao.login(cliente, 'lari_lovepizza002')
console.log("Cliente está Logado? " + clienteIsLogged)