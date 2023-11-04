import { CreateUserDto } from '../dto/create-user.dto';
import { UserEntity } from '../entities/user.entity';

export interface UserRepository {
  createUser(createUserDto: CreateUserDto): Promise<UserEntity>;
  getAllUsers(): Promise<UserEntity[]>;
}
