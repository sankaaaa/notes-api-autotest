import {
    Controller,
    Get,
    Post,
    Put,
    Delete,
    Param,
    Body,
    NotFoundException,
} from '@nestjs/common';
import { isValidObjectId } from 'mongoose';
import { NotesMethods } from './notes.methods';
import {
    INoteDto,
    INoteListDto,
    ICreateNoteDto,
    IUpdateNoteDto,
} from './dto/note.dto';

@Controller('notes')
export class NotesFuncs {
    constructor(private readonly notesService: NotesMethods) {}

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
        if (!isValidObjectId(id)) {
            throw new NotFoundException(`Invalid note id`);
        }

        const note = await this.notesService.findOne(id);
        if (!note) {
            throw new NotFoundException(`Note with id ${id} not found`);
        }

        return note;
    }

    @Put(':id')
    async update(
        @Param('id') id: string,
        @Body() updateNoteDto: IUpdateNoteDto,
    ): Promise<INoteDto> {
        if (!isValidObjectId(id)) {
            throw new NotFoundException(`Invalid note id`);
        }

        const updated = await this.notesService.update(id, updateNoteDto);
        if (!updated) {
            throw new NotFoundException(`Note with id ${id} not found`);
        }

        return updated;
    }

    @Delete(':id')
    async remove(@Param('id') id: string): Promise<{ success: boolean }> {
        if (!isValidObjectId(id)) {
            throw new NotFoundException(`Invalid note id`);
        }

        const result = await this.notesService.remove(id);
        if (!result) {
            throw new NotFoundException(`Note with id ${id} not found`);
        }

        return { success: true };
    }

}
