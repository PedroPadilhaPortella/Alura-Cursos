import { ITransaction } from "../../domain/entities/ITransaction";
import { ITransactionRepository } from "../ports/ITransactionRepository";

export class CreateTransaction {
  constructor(private readonly repository: ITransactionRepository) { }

  execute(value: number, typeId: number, userId: string): Promise<ITransaction> {
    return this.repository.create(value, typeId, userId);
  }
}