import { Module } from '@nestjs/common';
import { EnvironmentConfigModule } from './enviroment-config/infrastructures/config/environment-config/environment-config.module';
import { TypeOrmConfigModule } from './infrastructures/config/typeorm/typeorm.module';

@Module({
  imports: [EnvironmentConfigModule, TypeOrmConfigModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
