import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';


export type videoDocument = HydratedDocument<video>;

@Schema()
export class video {
  @Prop({ required: true })
  title : string;

  @Prop({ required: true })
  videoPath:String;

  @Prop({ required: true})
  id : String;

 

}

export const videoSchema = SchemaFactory.createForClass(video);
