import { NotesService } from './notes.service';
import { INoteDto, INoteListDto, ICreateNoteDto, IUpdateNoteDto } from './dto/note.dto';
export declare class NotesController {
    private readonly notesService;
    constructor(notesService: NotesService);
    findAll(): Promise<INoteListDto>;
    create(createNoteDto: ICreateNoteDto): Promise<INoteDto>;
    findOne(id: string): Promise<INoteDto>;
    update(id: string, updateNoteDto: IUpdateNoteDto): Promise<INoteDto>;
    remove(id: string): Promise<{
        success: boolean;
    }>;
}
