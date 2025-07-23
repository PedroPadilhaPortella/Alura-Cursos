import { ITransactionType } from "../../domain/entities/ITransactionType";

export interface ITransactionTypeRepository {
  get(): Promise<ITransactionType[]>;
}