import { Note as NoteRaw } from '@prisma/client';
import { Note } from 'src/modules/note/entities/note';

export class PrismaNoteMapper {
  static toPrisma({
    createdAt,
    description,
    title,
    userId,
    id,
  }: Note): NoteRaw {
    return {
      createdAt,
      description,
      title,
      userId,
      id,
    };
  }

  static toDomain({
    id,
    createdAt,
    description,
    title,
    userId,
  }: NoteRaw): Note {
    return new Note(
      {
        createdAt,
        description,
        title,
        userId,
      },
      id,
    );
  }
}
