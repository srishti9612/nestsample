import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type BreedDocument = Breed & Document;

@Schema()
export class Breed {
  @Prop()
  name: string;

  @Prop()
  furType: string;
}

export const BreedSchema = SchemaFactory.createForClass(Breed);
