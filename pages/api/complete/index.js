import { dbConnect } from "../../../Database";
import Tasks from "../../../Schema/Tasks";

dbConnect();

const complete = async (req, res) => {
  const { method, body, query } = req;
  switch (method) {
    case "GET":
      try {
          const email = query.email;
          console.log(email)
        const filter = {
          taskUser: email,
          complete: true,
        };
        const completeTask = await Tasks.find(filter);
        return res.status(200).json(completeTask);
      } catch (error) {
          return res.status(400).json({msg: error.message})
      }
    case "PUT":
      try {
          const filter = { _id: query.id };
        //   console.log(query.id)
          const updateDoc = {
              $set: {
                  complete:false
              }
          }
          const option = { upsert: true };
          await Tasks.updateOne(filter, updateDoc, option);
          return res.status(200).json({ msg: "Task Uncompleted" }); 
      } catch (error) {
          return res.status(400).json({msg: error.message})
      }

    default:
      break;
  }
};

export default complete;
