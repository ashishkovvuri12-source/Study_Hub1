import mongoose, { Document, Schema, Model } from 'mongoose';

export interface IQuestion {
  questionNumber: number;
  text: string;
  isImportant: boolean;
}

export interface IChapter {
  chapterNumber: number;
  title: string;
  video: string;
  content: string;
  questions: IQuestion[];
}

export interface IMaterial extends Document {
  subjectId: string;
  name: string;
  icon: string;
  order: number;
  tagline: string;
  description: string;
  tags: string[];
  chapters: IChapter[];
  createdAt: Date;
  updatedAt: Date;
}

const QuestionSchema = new Schema<IQuestion>(
  {
    questionNumber: { type: Number, required: true },
    text: { type: String, required: true },
    isImportant: { type: Boolean, default: false }
  },
  { _id: false }
);

const ChapterSchema = new Schema<IChapter>(
  {
    chapterNumber: { type: Number, required: true },
    title: { type: String, required: true },
    video: { type: String, default: '' },
    content: { type: String, default: '' },
    questions: [QuestionSchema]
  },
  { _id: false }
);

const MaterialSchema = new Schema<IMaterial>(
  {
    subjectId: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true
    },
    name: { type: String, required: true },
    icon: { type: String, required: true },
    order: { type: Number, default: 0 },
    tagline: { type: String, default: '' },
    description: { type: String, default: '' },
    tags: [{ type: String }],
    chapters: [ChapterSchema]
  },
  {
    timestamps: true
  }
);

export const Material: Model<IMaterial> =
  mongoose.models.Material || mongoose.model<IMaterial>('Material', MaterialSchema);

