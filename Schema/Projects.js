import { model, models, Schema } from "mongoose";

const ProjectSchema = new Schema({
    ProjectName: {
        type: String,
        require: true,
        trim : true,
    },
    email: {
        type: String,
        require: true
    }
})

export default models.Project || model('Project', ProjectSchema);