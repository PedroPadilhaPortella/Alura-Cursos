import { nanoid } from 'nanoid';

export enum TransactionType {
  ENTRADA = 'entrada',
  SAIDA = 'saida',
}

export class Transaction {
  readonly id = nanoid();
  readonly date = new Date();

  constructor(
    public readonly type: TransactionType,
    public readonly value: number,
  ) {}
}
