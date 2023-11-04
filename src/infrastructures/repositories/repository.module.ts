import { Module } from '@nestjs/common';
import { TypeOrmConfigModule } from '../config/typeorm/typeorm.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModel } from '../models/user.model';
import { UserRepositoryOrm } from './user.repository';

@Module({
  imports: [TypeOrmConfigModule, TypeOrmModule.forFeature([UserModel])],
  providers: [UserRepositoryOrm],
  exports: [UserRepositoryOrm],
})
export class RepositoriesModule {}
