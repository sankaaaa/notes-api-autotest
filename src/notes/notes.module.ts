import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { NotesFuncs } from './notes.funcs';
import { NotesMethods } from './notes.methods';
import { Note, NoteSchema } from './schemas/note.schema';

@Module({
    imports: [
        MongooseModule.forFeature([{ name: Note.name, schema: NoteSchema }]),
    ],
    controllers: [NotesFuncs],
    providers: [NotesMethods],
})
export class NotesModule {}
