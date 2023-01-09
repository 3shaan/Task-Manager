import { dbConnect } from "../../../Database";
import Tasks from "../../../Schema/Tasks";

dbConnect();
const projectById = async (req, res) => {
    const { params, query , method} = req;
    switch (method) {
        case "GET":
           try {
             const project = query.projects;
             const email = query.email;
             console.log(project, email);
             const filter = { projectName: project, taskUser: email };
             const result = await Tasks.find(filter);
             return res.status(200).json(result);
           } catch (error) {
            return res.status(400).json({msg:error.message})
           }
    
        default:
            break;
    }
}
export default projectById;