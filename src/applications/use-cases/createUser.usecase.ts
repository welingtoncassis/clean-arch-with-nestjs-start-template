import { UserRepository } from 'src/domains/repositories/user.repository';
import { UserEntity } from '../../domains/entities/user.entity';
import { CreateUserDto } from '../../domains/dto/create-user.dto';

export class CreateUserUseCases {
  constructor(private usersRepository: UserRepository) {}

  async execute(createUserDto: CreateUserDto): Promise<UserEntity> {
    return this.usersRepository.createUser(createUserDto);
  }
}
