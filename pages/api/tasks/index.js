import morgan from "morgan";
import { dbConnect, runMiddleWare } from "../../../Database";
import Tasks from "../../../Schema/Tasks";

dbConnect();

const tasks = async (req, res)=>{
    const { method, body } = req;
    switch (method) {
        case "GET":
            try { 
                  const email = req.query.email;
                //   console.log(email)
                  const query = { taskUser: email };
                const tasks = await Tasks.find({ taskUser: email }).exec();
                // await runMiddleWare(req, res, morgan);
                return res.status(200).json(tasks);
            } catch (error) {
                return res.status(400).json({msg:error.message});
            }
        case "POST":
            try {
                const data = new Tasks(body)
                const result = await data.save();
                return res.status(200).json(result);
            } catch (error) {
                 return res.status(400).json({ msg: error.message });
            }
        case "PUT":
            try {
                 const id = req.query.id;
                 console.log(id);
                 const query = { _id: id };
                 const option = { upsert: true };
                 const updateDoc = {
                   $set: {
                     complete: true,
                   },
                };
                await Tasks.updateOne(query, updateDoc, option);
                return res.status(200).json({msg: "Task completed"})
            } catch (error) {
                 return res.status(400).json({ msg: error.message });
            }
        case "DELETE":
            try {
                 const id = req.query.id;
                 console.log(id);
                 const query = { _id: id };
                await Tasks.deleteOne(query);
                return res.status(200).json({msg: "Task Deleted"})
            } catch (error) {
                 return res.status(400).json({ msg: error.message });
            }
    }
}
export default tasks;