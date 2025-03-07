import { Module } from '@nestjs/common';
import { UserModule } from './infra/http/modules/user/user.module';
import { DatabaseModule } from './infra/database/prisma/database.module';
import { AuthModule } from './infra/http/modules/auth/auth.module';
import { APP_GUARD } from '@nestjs/core';
import { JwtAuthGuard } from './infra/http/modules/auth/guards/jwtAuth.Guard';
import { NoteModule } from './infra/http/modules/note/note.module';

@Module({
  imports: [DatabaseModule, UserModule, AuthModule, NoteModule],
  controllers: [],
  providers: [
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard,
    },
  ],
})
export class AppModule {}
