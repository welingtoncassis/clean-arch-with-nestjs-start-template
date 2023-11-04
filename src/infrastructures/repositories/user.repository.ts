import { Injectable } from '@nestjs/common';
import { UserRepository } from '../../domains/repositories/user.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { UserModel } from '../models/user.model';
import { Repository } from 'typeorm';
import { UserEntity } from '../../domains/entities/user.entity';
import { CreateUserDto } from '../../domains/dto/create-user.dto';

@Injectable()
export class UserRepositoryOrm implements UserRepository {
  constructor(
    @InjectRepository(UserModel)
    private readonly userRepository: Repository<UserModel>,
  ) {}

  async createUser(createUserDto: CreateUserDto): Promise<UserEntity> {
    const user = new UserModel();
    user.email = createUserDto.email;
    user.name = createUserDto.name;
    user.password = createUserDto.password;
    return this.userRepository.save(user);
  }

  async getAllUsers(): Promise<UserEntity[]> {
    const users = await this.userRepository.find();
    return users.map((user) => this.toUser(user));
  }

  private toUser(userEntity: UserEntity): UserEntity {
    const user: UserEntity = new UserEntity();

    user.id = userEntity.id;
    user.email = userEntity.email;
    user.name = userEntity.name;
    user.password = userEntity.password;
    user.createdAt = userEntity.createdAt;
    user.updatedAt = userEntity.updatedAt;

    return user;
  }
}
