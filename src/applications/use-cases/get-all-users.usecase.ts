import { UserRepository } from 'src/domains/repositories/user.repository';
import { UserEntity } from '../../domains/entities/user.entity';

export class GetAllUserUseCases {
  constructor(private usersRepository: UserRepository) {}

  async execute(): Promise<UserEntity[]> {
    return await this.usersRepository.getAllUsers();
  }
}
