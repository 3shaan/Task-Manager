import { dbConnect } from "../../../Database";
import Projects from "../../../Schema/Projects";

dbConnect();

const ProjectFunc = async (req, res) => {
    const { method, body, query } = req;
    switch (method) {
        case "GET":
            try {
                const email = query.email;
                const data = await Projects.find({ email: email }).exec();
                return res.status(200).json(data);
         } catch (error) {
            return res.status(400).json({msg:error.message})
         }
        case "POST":
         try {
               const data = new Projects(body);
             await data.save();
             return res.status(200).json({msg:"Project Added Successfully"})
         } catch (error) {
            return res.status(400).json({msg:error.message})
         }
            
    
    }
}
export default ProjectFunc;