import {
    Controller,
    Get,
    Post,
    Put,
    Delete,
    Param,
    Body,
} from '@nestjs/common';
import { NotesService } from './notes.service';
import {
    INoteDto,
    INoteListDto,
    ICreateNoteDto,
    IUpdateNoteDto,
} from './dto/note.dto';

@Controller('notes')
export class NotesController {
    constructor(private readonly notesService: NotesService) {}

    @Get()
    async findAll(): Promise<INoteListDto> {
        return this.notesService.findAll();
    }

    @Post()
    async create(@Body() createNoteDto: ICreateNoteDto): Promise<INoteDto> {
        return this.notesService.create(createNoteDto);
    }

    @Get(':id')
    async findOne(@Param('id') id: string): Promise<INoteDto> {
        return this.notesService.findOne(id);
    }

    @Put(':id')
    async update(
        @Param('id') id: string,
        @Body() updateNoteDto: IUpdateNoteDto,
    ): Promise<INoteDto> {
        return this.notesService.update(id, updateNoteDto);
    }

    @Delete(':id')
    async remove(@Param('id') id: string): Promise<{ success: boolean }> {
        return this.notesService.remove(id);
    }
}