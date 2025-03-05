import { Module } from '@nestjs/common';
import { userController } from './user.controller';
import { CreateUserUseCase } from 'src/modules/user/useCases/createUserUseCase/createUserUseCase';
import { DatabaseModule } from 'src/infra/database/prisma/database.module';
import { UserRepository } from 'src/modules/user/repositories/UserRepository';

@Module({
  imports: [DatabaseModule],
  controllers: [userController],
  providers: [CreateUserUseCase],
  exports: [DatabaseModule],
})
export class UserModule {}
