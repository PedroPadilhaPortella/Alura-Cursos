import { IUser } from "../../domain/entities/IUser";
import { IUserRepository } from "../ports/IUserRepository";

export class CreateUser {
  constructor(private readonly repository: IUserRepository) { }

  execute(user: Omit<IUser, 'id'>): Promise<void> {
    return this.repository.create(user);
  }
}