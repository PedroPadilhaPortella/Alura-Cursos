import { ITransaction } from "../../domain/entities/ITransaction";

export interface ITransactionRepository {
  create(value: number, typeId: number, userId: string): Promise<ITransaction>;
  get(): Promise<ITransaction[]>;
}