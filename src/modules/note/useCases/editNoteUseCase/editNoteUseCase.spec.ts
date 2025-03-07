import { makeUser } from 'src/modules/user/factories/userFactory';
import { NoteRepositoryInMemory } from '../../repositories/noteRepositoryInMemory';
import { makeNote } from '../../factories/noteFactory';
import { NotFoundException, UnauthorizedException } from '@nestjs/common';
import { EditNoteUseCase } from './editNoteUseCase';

let noteRepositoryInMemory: NoteRepositoryInMemory;
let editNoteUseCase: EditNoteUseCase;

describe('Edit Note', () => {
  beforeEach(() => {
    noteRepositoryInMemory = new NoteRepositoryInMemory();
    editNoteUseCase = new EditNoteUseCase(noteRepositoryInMemory);
  });

  it('Should be able to edit note', async () => {
    const user = makeUser({});
    const note = makeNote({
      userId: user.id,
    });

    noteRepositoryInMemory.notes = [note];

    const titleChange = 'title changed';
    const descriptionChange = 'description changed';
    await editNoteUseCase.execute({
      title: titleChange,
      description: descriptionChange,
      noteId: note.id,
      userId: user.id,
    });

    expect(noteRepositoryInMemory.notes[0].title).toEqual(titleChange);
    expect(noteRepositoryInMemory.notes[0].description).toEqual(
      descriptionChange,
    );
  });

  it('Should be able to throw error when not found note', async () => {
    expect(async () => {
      await editNoteUseCase.execute({
        title: 'se inscreva de novo',
        noteId: 'fakeId',
        userId: 'fakeId',
      });
    }).rejects.toThrowError(NotFoundException);
  });

  it('Should be able to throw error when note has anothes user', async () => {
    const note = makeNote({});

    noteRepositoryInMemory.notes = [note];

    expect(async () => {
      await editNoteUseCase.execute({
        title: 'se inscreva de novo',
        noteId: note.id,
        userId: 'fakeId',
      });
    }).rejects.toThrowError(UnauthorizedException);
  });
});
