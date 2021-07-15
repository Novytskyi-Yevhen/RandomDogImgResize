import { Schema, model } from "mongoose";

export interface IDogImage {
  buffer: Buffer;
  mainImg: string;
  width: number;
  height: number;
}

const schema = new Schema<IDogImage>({
  buffer: {
    type: Buffer,
    required: true,
  },
  mainImg: {
    type: String,
    required: true,
  },
  width: {
    type: Number,
    required: true,
  },
  height: {
    type: Number,
    required: true,
  },
});

export default model<IDogImage>("DogImage", schema);
