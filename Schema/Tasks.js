import mongoose, { model, models, Schema } from "mongoose";

const taskSchema = new Schema({
  title: {
    type: String,
    require: true,
    trim: true,
  },
  project: {
    type: String,
    require: true,
  },
  images: {
    type: String,
  },
  date: {
    type: String,
  },
  Desc: {
    type: String,
    trim: true,
  },
},
    {
        timestamps: true,
        versionKey: false,
    });

export default mongoose.models.Tasks || mongoose.model('tasks', taskSchema);