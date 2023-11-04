import * as bcrypt from 'bcrypt';
import { Body, Controller, Get, Inject, Post } from '@nestjs/common';
import { CreateUserUseCases } from 'src/applications/use-cases/createUser.usecase';
import { UseCaseProxy } from 'src/infrastructures/usecase-proxy/usecase-proxy';
import { UsecaseProxyModule } from 'src/infrastructures/usecase-proxy/usecase-proxy.module';
import { CreateUserDto } from '../../domains/dto/create-user.dto';
import { GetAllUserUseCases } from '../../applications/use-cases/get-all-users.usecase';

@Controller('users')
export class UserController {
  constructor(
    @Inject(UsecaseProxyModule.GET_ALL_USERS_USE_CASE)
    private readonly getUserUsecaseProxy: UseCaseProxy<GetAllUserUseCases>,
    @Inject(UsecaseProxyModule.CREATE_USER_USE_CASE)
    private readonly createUserUsecaseProxy: UseCaseProxy<CreateUserUseCases>,
  ) {}

  @Get('')
  async getAllUsers() {
    const result = await this.getUserUsecaseProxy.getInstance().execute();
    return {
      status: 'OK',
      code: 200,
      message: 'Get data success',
      data: result,
    };
  }

  @Post('/signup')
  async createUser(@Body() createUserDto: CreateUserDto) {
    const { email, name, password } = createUserDto;
    const hashedPassword = await bcrypt.hash(password, 10);
    const result = await this.createUserUsecaseProxy.getInstance().execute({
      email: email,
      name: name,
      password: hashedPassword,
    });
    return {
      status: 'Created',
      code: 201,
      message: 'Insert data success',
      data: result,
    };
  }
}
