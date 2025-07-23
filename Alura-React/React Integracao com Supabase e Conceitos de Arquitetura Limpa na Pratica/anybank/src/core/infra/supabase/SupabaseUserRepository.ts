import { supabase } from "../../../config/supabase";
import { IUser } from "../../domain/entities/IUser";
import { IUserRepository } from "../../application/ports/IUserRepository";

export class SupabaseUserRepository implements IUserRepository {

  async create(user: Omit<IUser, "id">): Promise<void> {
    const { error } = await supabase.auth.signUp({
      email: user.email,
      password: user.password,
      options: {
        emailRedirectTo: 'http://localhost:5173/',
      },
    });

    if (error) throw error;
  }
}