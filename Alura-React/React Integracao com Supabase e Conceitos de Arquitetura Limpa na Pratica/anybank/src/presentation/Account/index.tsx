import { ITransaction } from "../../core/domain/entities/ITransaction";
import { Balance } from "../Balance";
import { Card, DateWrapper, GreetingWrapper, Heading } from "./styles"

const options: Intl.DateTimeFormatOptions = {
  weekday: 'long',
  day: '2-digit',
  month: '2-digit',
  year: 'numeric'
};

const getBalance = (transactions: ITransaction[]): number => {
  return transactions.reduce((acc, transaction) => {
    const isDeposit = transaction.type.display === "Depósito";
    const value = isDeposit ? transaction.value : -transaction.value;
    return acc + value;
  }, 0);
};

type AccountProps = {
  transactions: ITransaction[];
}

export const Account = ({ transactions }: AccountProps) => {
  const balance = getBalance(transactions);

  return (<Card>
    <GreetingWrapper>
      <DateWrapper>
        {new Date().toLocaleDateString('pt-BR', options)}
      </DateWrapper>
      <Heading>
        Olá, bem vindo! :)
      </Heading>
    </GreetingWrapper>
    <div>
      <Balance value={balance} />
    </div>
  </Card>)
}