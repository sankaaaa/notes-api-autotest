import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Note extends Document {
    @Prop({ required: true })
    title: string;

    @Prop({ default: '' })
    content: string;
}

export const NoteSchema = SchemaFactory.createForClass(Note);