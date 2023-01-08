import mongoose, { model, models, Schema } from "mongoose";

const taskSchema = new Schema(
  {
    taskTitle: {
      type: String,
      require: true,
      trim: true,
    },
    projectName: {
      type: String,
      require: true,
    },
    image: {
      type: String,
    },
    date: {
      type: Date,
    },
    taskDetails: {
      type: String,
      trim: true,
    },
    createTime: {
      type: Date,
    },
    taskUser: {
      type: String,
    },
    complete: {
      type: Boolean
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export default mongoose.models.Tasks || mongoose.model('Tasks', taskSchema);