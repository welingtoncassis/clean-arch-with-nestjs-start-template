import { UserEntity } from '../entities/user.entity';

export interface UserRepository {
  getAllUsers(): Promise<UserEntity[]>;
}
