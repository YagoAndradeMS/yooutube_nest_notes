import { Module } from '@nestjs/common';
import { userController } from './user.controller';
import { CreateUserUseCase } from 'src/modules/user/useCases/createUserUseCase/createUserUseCase';
import { DatabaseModule } from 'src/infra/database/prisma/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [userController],
  providers: [CreateUserUseCase],
})
export class UserModule {}
