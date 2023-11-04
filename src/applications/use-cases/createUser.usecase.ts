import { UserRepository } from 'src/domains/repositories/user.repository';
import { CreateUserDto } from 'src/presentations/user/dto/create-user.dto';
import { UserEntity } from '../../domains/entities/user.entity';

export class CreateUserUseCases {
  constructor(private usersRepository: UserRepository) {}

  async execute(createUserDto: CreateUserDto): Promise<UserEntity> {
    return this.usersRepository.createUser(createUserDto);
  }
}
