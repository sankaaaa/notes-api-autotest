import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Note } from './schemas/note.schema';
import {
    INoteDto,
    INoteListDto,
    ICreateNoteDto,
    IUpdateNoteDto,
} from './dto/note.dto';

@Injectable()
export class NotesService {
    constructor(@InjectModel(Note.name) private noteModel: Model<Note>) {}

    async findAll(): Promise<INoteListDto> {
        const notes = await this.noteModel.find().exec();
        return {
            items: notes.map((note) => this.mapToDto(note)),
        };
    }

    async create(createNoteDto: ICreateNoteDto): Promise<INoteDto> {
        const createdNote = new this.noteModel(createNoteDto);
        const savedNote = await createdNote.save();
        return this.mapToDto(savedNote);
    }

    async findOne(id: string): Promise<INoteDto> {
        const note = await this.noteModel.findById(id).exec();
        return this.mapToDto(note);
    }

    async update(id: string, updateNoteDto: IUpdateNoteDto): Promise<INoteDto> {
        const updatedNote = await this.noteModel
            .findByIdAndUpdate(id, updateNoteDto, { new: true })
            .exec();
        return this.mapToDto(updatedNote);
    }

    async remove(id: string): Promise<{ success: boolean }> {
        const result = await this.noteModel.deleteOne({ _id: id }).exec();
        return { success: result.deletedCount > 0 };
    }

    private mapToDto(note: Note): INoteDto {
        return {
            id: note._id.toString(),
            title: note.title,
            content: note.content,
        };
    }
}