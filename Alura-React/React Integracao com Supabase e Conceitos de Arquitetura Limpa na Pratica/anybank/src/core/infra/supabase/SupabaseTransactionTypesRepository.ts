import { supabase } from "../../../config/supabase";
import { ITransactionTypeRepository } from "../../application/ports/ITransactionTypeRepository";
import { ITransactionType } from "../../domain/entities/ITransactionType";

export class SupabaseTransactionTypesRepository implements ITransactionTypeRepository {

  async get(): Promise<ITransactionType[]> {
    const { data, error } = await supabase.from('transaction_type').select('*');

    if (error) throw error;

    return (data || []) as ITransactionType[];
  }
}