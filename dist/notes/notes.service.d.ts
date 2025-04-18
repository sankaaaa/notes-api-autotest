import { Model } from 'mongoose';
import { Note } from './schemas/note.schema';
import { INoteDto, INoteListDto, ICreateNoteDto, IUpdateNoteDto } from './dto/note.dto';
export declare class NotesService {
    private noteModel;
    constructor(noteModel: Model<Note>);
    findAll(): Promise<INoteListDto>;
    create(createNoteDto: ICreateNoteDto): Promise<INoteDto>;
    findOne(id: string): Promise<INoteDto>;
    update(id: string, updateNoteDto: IUpdateNoteDto): Promise<INoteDto>;
    remove(id: string): Promise<{
        success: boolean;
    }>;
    private mapToDto;
}
