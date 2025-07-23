import { supabase } from "../../../config/supabase";
import { ITransactionRepository } from "../../application/ports/ITransactionRepository";
import { ITransaction } from "../../domain/entities/ITransaction";

export class SupabaseTransactionRepository implements ITransactionRepository {

  async create(value: number, typeId: number, userId: string): Promise<ITransaction> {
    const { data, error } = await supabase.from('transactions')
      .insert([{ transaction_type_id: typeId, value, user_id: userId }])
      .select(`*,transaction_type (id, display)`)

    if (error) throw error;

    if (!data || data.length == 0) throw new Error('Falha ao obter transação cadastrada!');

    if (!data[0].transaction_type) throw new Error('Falha ao obter o tipo transação cadastrada!');

    return {
      date: new Date(data[0].created_at),
      value: data[0].value,
      type: data[0].transaction_type,
      id: data[0].id
    }
  }

  async get(): Promise<ITransaction[]> {
    const { data, error } = await supabase.from('transactions')
      .select(`*,transaction_type (id, display)`)

    if (error) throw error;

    if (!data) return [];

    const result: ITransaction[] = data.map(row => {
      if (!row.transaction_type) throw Error('Not typed transaction found');
      return {
        id: row.id,
        type: row.transaction_type,
        value: row.value,
        date: new Date(row.created_at)
      }
    });

    return result;
  }
}