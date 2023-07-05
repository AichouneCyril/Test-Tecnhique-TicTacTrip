import mongoose, { Schema, Document } from "mongoose";

export interface WordCountDocument extends Document {
  wordCount: number;
}

const wordCountSchema: Schema = new mongoose.Schema({
  wordCount: { type: Number, required: true },
});

const WordCountModel = mongoose.model<WordCountDocument>(
  "WordCount",
  wordCountSchema
);

export default WordCountModel;
