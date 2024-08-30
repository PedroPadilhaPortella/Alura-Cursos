# Expressões regulares: capturando textos de forma mágica

> Regex, ou expressões regulares, é uma linguagem para encontrar padrões de texto.
Sendo uma linguagem independente, existem interpretadores para a maioria das plataformas de desenvolvimento, como JavaScript, C#, Python ou Ruby.

Uma classe de caracteres predefinida é \d, que significa qualquer dígito.

Existem vários meta-char, como . ou *.

Existem quantifiers que definem quantas vezes um caractere deve aparecer:

> {1} É um quantifier que significa uma vez.

> \* É um quantifier que significa zero, uma ou mais vezes

> . É um meta-char que significa qualquer char.
Com \ podemos escapar meta-chars, por exemplo \..

### Quantifiers
? - zero ou uma vez.

\* - zero ou mais vezes.

\+ - uma ou mais vezes.

\{n} - exatamente n vezes.

{n,} - no mínimo n vezes.

{n,m} - no mínimo n vezes, no máximo m vezes.

> Os quantifiers são gananciosos por padrão, podemos utilizar um ? logo após o quantifier, deixando-o preguiçoso.

### Caracteres especiais
\t é um tab.

\r é carriage return.

\n é newline.

\f é form feed.

\s significa whitespace e é um atalho para [ \t\r\n\f].

### Classes de letras
Para descrever o mês, devemos usar uma nova classe de letras, seguem alguns exemplos:

[A-Z] significa de A até Z, sempre maiúscula.

[a-z] significa de a até z, sempre minúscula,

[A-Za-z] significa A-Z ou a-z.

[abc] significa a, b ou c.

\w significa word char e é uma atalho para [A-Za-z0-9_]

### Grupos
Podemos definir grupos, colocando entre ( )

Non-Capturing group: (?: ) (não deve devolver o grupo)

# Exercícios

## Encontrando o CNPJ
Expressão:  
`\d{2}\.\d{3}\.\d{3}\/\d{4}\-\d{2}`

## Encontrando o IP
Expressão:  
`\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}`

## Encontrando o CEP
Expressão:  
`\d{5}-\d{3}`

## Encontrando o Telefone
Expressão:  
`\(\d{2}\) \d{4,5}-\d{4}`

## Encontrando CPF, independente de máscaras, como em:
> 405.751.068-08, 40575106808 ou 405.751.068.08

Expressão:  
`\d{3}\.?\d{3}\.?\d{3}[-.]?\d{2}`

## Expressão para Tags Html
> No <code>for</code>, o valor de <code>i</code> começa de zero e é incrementado a cada volta enquanto <code>i < 10</code>, portando o bloco de código do for é executado 10 vezes.

Expressão:  
`</?code>`

## Horário no formato: 19h32min16s
Expressão:  
`\d{2}h\d{2}min\d{2}s`

## Data no formato:
> 11 de Abril de 1995

Expressão:  
`[1-3]?\d\s+de\s+[A-Z][a-zç]{3,8}\s+de\s+[12]\d{3}`
```
var DIA  = "[0123]?\d"; 
var _DE_ = "\s+de\s+";
var MES  = "[A-Za-z][a-zç]{1,8}";
var ANO  = "[12]\d{3}";
var stringRegex = DIA + _DE_ +  MES + _DE_ + ANO;
var objetoRegex  = new RegExp(stringRegex, 'g');
```

## Buscar o nome e a nota dos alunos que tenham a nota entre 7.2 e 7.9
> 9.8 - Robson, 7.1 - Teresa, 4.5 - Armênio, 6.5 - Zulu, 7.7 - Stefania, 7.8 - João, 5.0 - Romeu, 7.2 - Pompilho, 3.1 - Reinaldo, 7.3 - Bernadete, 4.7 - Cinério 

Expressão:
`7\.[2-9]\s+-\s+[^,]+ ou 7\.[2-9]\s+-\s+[A-Z][a-zãç]+`

## Buscar o nome e a nota dos alunos que tenham a nota entre 7.5 e 7.9, independente de espaços em branco:
> 10 - Bruce, 9.5 - Miranda, 7.9    - Bob, 10 - Zimbabue, 7.5 - Bety

Expressão:
`[7]\.[5-9]\s+-\s+\w+`

## Escreva uma expressão regular que faça match apenas com as palavras GARROTE, SERROTE e ROTEIRO:
> BALEIRO GARROTE SERROTE GOLEIRO ROTEIRO 

Expressão:
`\w*ROT\w+`

## Escreva uma Expressão para o Pattern
> O username precisa ser da seguinte forma:  
O limite é de 10 caracteres;  
O primeiro caractere deve ser uma letra do alfabeto, não pode ser um número;  
A partir do segundo caractere podemos ter letras maiúsculas, minúsculas e números;  

Expressão:
`@Pattern(regexp="[a-zA-Z][a-zA-Z0-9]{0,9}")`

## Capture Excessões
```
Caused by: com.mysql.jdbc.exceptions.jdbc4.CommunicationsException: Communications link failure
```
Expressão:  
`^Caused by:.*`

## Capture as datas
Data: 02/09/1964 ou Data:02/09/1964.  
Expressão:
`^Data:[\s]?[0-9]{2}\/[0-9]{2}\/[0-9]{4}$`

## Validação de Emails
Expressão:
`^([\w-]\.?)+@([\w-]+\.)+([A-Za-z]{2,4})+$`

## Validação de email da Alura
> O email deve ter um @ e terminar com caelum.com.br ou alura.com.br. O nome do usuário (tudo antes do @) tem apenas letras minúsculas, pode ter um número no final e tem de 5 a 15 caracteres.  
Exemplo: super.mario@caelum.com.br extrai super.mario

Expressão:
`([a-z.]{4,14}[a-z1-9])@(?:caelum.com.br|alura.com.br)`

## Separando Informações em Grupos
> Nico Steppat|14/05/1977|Rua Buarque de Macedo|50|22222-222|Rio de Janeiro
> Romulo Henrique|14/06/1993|Rua do Lins|120|12345-322|Rio de Janeiro
> Leonardo Cordeiro|01/01/1995|Rua de Campo Grande|01|00001-234|Rio de Janeiro

Expressão:  
`([\w\s]+)\|(?:\d\d/\d\d/\d\d\d\d)\|([\w\s]+)\|(\d{1,4})\|(\d{5}-\d{3})\|(?:[\w\s]+)`

## O Recurso de Backreference /\
```<h1 class="text-left">Expressões Regulares</h1>```  
Expressão:  
`<(h1|h2).+?>([\w\sõãí.]+)<\/\1>`


## Código Secreto
Crie uma Regex que evidencie as letras da mensagem, a regra é que cada letra é precedida por uma letra Z seguida de 1 ou mais algarismos.
> Z171PZ7AZ23PZ7819AZ78GZ1AZ99IZ34O

Expressão:  
`(:?Z\d+)`
`[^Z\d]`

## Validação de Senhas
Crie uma expressão que valide senhas, onde a senha precisa ter mais de 8 caracteres e conter ao menos uma letra maiúscula, um caractere especial ($ * & @ #) e um algarismo, no mínimo.


Expressão:  
`^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])[0-9a-zA-Z$*&@#]{8,}$`

> /^  
  (?=.*\d)              // deve conter ao menos um dígito 
  (?=.*[a-z])           // deve conter ao menos uma letra minúscula  
  (?=.*[A-Z])           // deve conter ao menos uma letra maiúscula  
  (?=.*[$*&@#])         // deve conter ao menos um caractere especial  
  [0-9a-zA-Z$*&@#]{8,}  // deve conter ao menos 8 dos caracteres mencionados  
$/