import { ITransactionType } from "../../domain/entities/ITransactionType";
import { ITransactionTypeRepository } from "../../application/ports/ITransactionTypeRepository";

export class GetTransactionTypes {
  constructor(private readonly repository: ITransactionTypeRepository) { }

  execute(): Promise<ITransactionType[]> {
    return this.repository.get();
  }
}