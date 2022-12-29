import morgan from "morgan";
import { dbConnect, runMiddleWare } from "../../../Database";
import Tasks from "../../../Schema/Tasks";

dbConnect();

export default tasks = async (req, res)=>{
    const { method, body } = req;
    const morgan = morgan('dev');
    switch (method) {
        case "GET":
            try {
                const tasks = await Tasks.find();
                await runMiddleWare(req, res, morgan);
                return res.status(200).json(tasks)
            } catch (error) {
                return res.status(400).json({msg:error.message});
            }
    }
}