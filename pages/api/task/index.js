import { dbConnect } from "../../../Database";
import Tasks from "../../../Schema/Tasks";

dbConnect();
const task = async (req, res) => {
  const { method} = req;
  switch (method) {
    case "PUT":
      try {
        const body = req.body;
        console.log(body);
        const query = { _id: body?.taskId };
        const option = { upsert: true };
        const updateDoc = {
          $set: {
            taskTitle: body?.taskTitle,
            projectName: body?.projectName,
            image: body?.image,
            date: body?.date,
            taskDetails: body?.taskDetails,
          },
          };
        await Tasks.updateOne(query, updateDoc, option);
        return res.status(200).json({msg:"Task Updated Successfully"})
      } catch (error) {
          return res.status(400).json({msg:error.message})
      }

    default:
      break;
  }
};

export default task;
