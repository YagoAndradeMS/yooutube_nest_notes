import { Module } from '@nestjs/common';
import { NoteViewModel } from './viewModels/NoteViewModels';
import { DatabaseModule } from 'src/infra/database/prisma/database.module';
import { UserModule } from '../user/user.module';
import { AuthModule } from '../auth/auth.module';
import { CreateNoteUseCase } from 'src/modules/note/useCases/createNoteUseCase/createNoteUseCase';
import { EditNoteUseCase } from 'src/modules/note/useCases/editNoteUseCase/editNoteUseCase';
import { DeleteNoteUseCase } from 'src/modules/note/useCases/deleteNoteUseCase/deleteNoteUseCase';
import { GetNoteUseCase } from 'src/modules/note/useCases/getNoteUseCase/getNoteUseCase';
import { GetManyNoteUseCase } from 'src/modules/note/useCases/getManyUseCase/getManyUseCase';
import { NoteController } from './note.controller';

@Module({
  controllers: [NoteController],
  imports: [DatabaseModule],
  providers: [
    CreateNoteUseCase,
    EditNoteUseCase,
    DeleteNoteUseCase,
    GetNoteUseCase,
    GetManyNoteUseCase,
  ],
})
export class NoteModule {}
