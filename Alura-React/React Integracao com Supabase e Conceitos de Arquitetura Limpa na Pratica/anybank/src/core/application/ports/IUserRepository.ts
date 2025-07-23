import { IUser } from "../../domain/entities/IUser";

export interface IUserRepository {
  create(user: Omit<IUser, 'id'>): Promise<void>;
}