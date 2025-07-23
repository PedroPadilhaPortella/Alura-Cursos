import styled from "styled-components"
import { Sidebar } from "../presentation/Sidebar"
import { Account } from "../presentation/Account"
import { TransactionForm } from "../presentation/TransactionForm"
import { Statement } from "../presentation/Statement"
import { useEffect, useState } from "react"
import { ITransaction } from "../core/domain/entities/ITransaction"
import { GetTransactions } from "../core/application/usecases/GetTransactions"
import { SupabaseTransactionRepository } from "../core/infra/supabase/SupabaseTransactionRepository"

const Main = styled.main`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  gap: 34px;
`;

const getTransactions = new GetTransactions(new SupabaseTransactionRepository());

const Home = () => {
  const [transactions, setTransactions] = useState<ITransaction[]>([]);

  useEffect(() => {
    getTransactions.execute()
      .then(data => setTransactions(data));
  });

  const onRegisterTransacion = (newTransaction: ITransaction) => {
    setTransactions([...transactions, newTransaction])
  };

  return (
    <>
      <Sidebar />
      <Main>
        <Account transactions={transactions} />
        <TransactionForm onRegister={onRegisterTransacion} />
      </Main>
      <div>
        <Statement transactions={transactions} />
      </div>
    </>
  )
}

export default Home
