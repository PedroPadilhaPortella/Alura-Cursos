import { ITransaction } from "../../domain/entities/ITransaction";
import { ITransactionRepository } from "../ports/ITransactionRepository";

export class GetTransactions {
  constructor(private readonly repository: ITransactionRepository) { }

  execute(): Promise<ITransaction[]> {
    return this.repository.get();
  }
}