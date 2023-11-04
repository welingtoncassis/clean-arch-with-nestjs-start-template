import { DynamicModule, Module } from '@nestjs/common';
import { EnvironmentConfigModule } from '../../enviroment-config/infrastructures/config/environment-config/environment-config.module';
import { RepositoriesModule } from '../repositories/repository.module';
import { UserRepositoryOrm } from '../repositories/user.repository';
import { GetAllUserUseCases } from '../../applications/use-cases/get-all-users.usecase';
import { UseCaseProxy } from './usecase-proxy';

@Module({
  imports: [EnvironmentConfigModule, RepositoriesModule],
})
export class UsecaseProxyModule {
  static GET_ALL_USERS_USE_CASE = 'getAllUsersUsecaseProxy';

  static register(): DynamicModule {
    return {
      module: UsecaseProxyModule,
      providers: [
        {
          inject: [UserRepositoryOrm],
          provide: UsecaseProxyModule.GET_ALL_USERS_USE_CASE,
          useFactory: (userRepository: UserRepositoryOrm) =>
            new UseCaseProxy(new GetAllUserUseCases(userRepository)),
        },
      ],
      exports: [UsecaseProxyModule.GET_ALL_USERS_USE_CASE],
    };
  }
}
