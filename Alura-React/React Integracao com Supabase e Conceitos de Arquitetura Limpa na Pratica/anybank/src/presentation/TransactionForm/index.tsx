import { useEffect, useState } from "react"
import { Button } from "../../components/Button"
import { Card } from "../../components/Card"
import { Dropdown } from "../../components/Dropdown"
import { FormLabel } from "../../components/FormLabel"
import { TextField } from "../../components/TextField"
import { CreateTransaction } from "../../core/application/usecases/CreateTransaction"
import { GetTransactionTypes } from "../../core/application/usecases/GetTransactionTypes"
import { ITransactionType } from "../../core/domain/entities/ITransactionType"
import { SupabaseTransactionTypesRepository } from "../../core/infra/supabase/SupabaseTransactionTypesRepository"
import { Form, Heading, Wrapper } from "./styles"
import { SupabaseTransactionRepository } from "../../core/infra/supabase/SupabaseTransactionRepository"
import { useAuthContext } from "../../hooks/useAuthContext"
import { toast } from "react-toastify"
import { ITransaction } from "../../core/domain/entities/ITransaction"

const getTransactionTypes = new GetTransactionTypes(new SupabaseTransactionTypesRepository());
const createTransactionUsecase = new CreateTransaction(new SupabaseTransactionRepository());

type TransactionFormProps = {
  onRegister: (transaction: ITransaction) => void;
}

export const TransactionForm = ({ onRegister }: TransactionFormProps) => {
  const { session } = useAuthContext();

  const [transactionTypes, setTransactionTypes] = useState<ITransactionType[]>([]);
  const [transactionType, setTransactionType] = useState('')
  const [transactionValue, setSetTransactionValue] = useState('')

  useEffect(() => {
    getTransactionTypes.execute()
      .then(data => setTransactionTypes(data));
  }, []);

  const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (session) {
      try {
        const transaction = await createTransactionUsecase
          .execute(parseFloat(transactionValue), parseInt(transactionType), session.user.id);

        toast.success('Transacao registrada com sucesso!');
        onRegister(transaction);
        setSetTransactionValue('');
        setTransactionType('');
      } catch (error) {
        console.log('Falha ao registrar transacao', error);
        toast.error('Falha ao registrar transacao!');
      }
    }
  }

  return (
    <Card>
      <Wrapper>
        <Form onSubmit={handleFormSubmit}>
          <Heading>Nova transação</Heading>
          <fieldset>
            <FormLabel>Transação</FormLabel>
            <Dropdown
              value={transactionType}
              onChange={evt => setTransactionType(evt.target.value)}
              required
            >
              <option value="" disabled hidden>Selecione o tipo de transação</option>
              {transactionTypes.map(transactionType => (
                <option key={transactionType.id} value={transactionType.id}>{transactionType.display}</option>
              ))}
            </Dropdown>
          </fieldset>
          <fieldset>
            <FormLabel>
              Valor
            </FormLabel>
            <TextField
              placeholder="R$ 00,00"
              type="number"
              value={transactionValue}
              onChange={evt => setSetTransactionValue(evt.target.value)}
              required
            />
          </fieldset>
          <Button>Concluir transação</Button>
        </Form>
      </Wrapper>
    </Card>
  )
}
