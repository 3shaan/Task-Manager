import axios from "axios";
import { Tooltip } from "flowbite-react";
import { useState } from "react";
import { toast } from "react-hot-toast";
import { AiOutlineDelete } from "react-icons/ai";
import { BsFillCalendarCheckFill } from "react-icons/bs";
import { TbDetails } from "react-icons/tb";
import ReactTimeAgo from "react-time-ago";
import Swal from "sweetalert2";
import TaskDetailsModal from "./TaskDetailsModal";
const TaskCard = ({ task }) => {
    const {_id, taskTitle, taskDetails, projectName, image, date, createTime, complete } = task;
    console.log(date)
    const [open, setOpen] = useState(false);
    
    const handleComplete = () => {
        axios
          .put(`http://localhost:5000/tasks?id=${_id}`)
          // .then(res=>res.json())
          .then((data) => {
            console.log(data);
            toast.success("Task complete");
            if (data?.data?.acknowledged) {
              toast.success("Task complete");
            }
          })
          .catch((err) => {
            console.log(err);
          });
    }

    // delete task

    const handleDelete = () => {
        Swal.fire({
          title: "Are you sure to Delete this Task?",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, delete it!",
        }).then((result) => {
            if (result.isConfirmed) {
              axios
                .delete(`http://localhost:5000/tasks?id=${_id}`)
                .then((data) => {
                  console.log(data);
                })
                .catch((err) => {
                  console.log(err.message);
                });
              Swal.fire("Deleted!", "Your Task has been deleted.", "success");
              
          }
        });
      
    };
  return (
    <div className={`${complete ? "hidden" : ""}`}>
      <div className="block max-w-sm h-56 p-6 bg-white border border-gray-200 rounded-lg shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
        <div className="flex justify-between items-center">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {taskTitle}
          </h5>
          {createTime && (
            <ReactTimeAgo date={createTime} locale="en-US"></ReactTimeAgo>
          )}
        </div>

        <p className="text-xl text-gray-700 dark:text-gray-400">
          {taskDetails?.length < 65
            ? taskDetails
            : `${taskDetails?.slice(0, 65)}...`}
        </p>
        <div>
          <p className="text">Task time: 2022 march 22 </p>
        </div>

        <div className="flex mt-3 gap-4 justify-between">
          <Tooltip content="Details" placement="top" animation="duration-500">
            <button
              onClick={() => setOpen(true)}
              className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg px-3 py-1 text-2xl text-center"
            >
              <TbDetails></TbDetails>
            </button>
          </Tooltip>
          <Tooltip content="Complete" placement="top" animation="duration-500">
            <button
              onClick={handleComplete}
              className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg px-3 py-1.5 text-xl text-center "
            >
              <BsFillCalendarCheckFill></BsFillCalendarCheckFill>
            </button>
          </Tooltip>
          <Tooltip content="Delete" placement="top" animation="duration-500">
            <button
              onClick={handleDelete}
              className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg px-3 py-1 text-2xl text-center"
            >
              <AiOutlineDelete></AiOutlineDelete>
            </button>
          </Tooltip>
        </div>
      </div>
      <TaskDetailsModal
        open={open}
        setOpen={setOpen}
        task={task}
      ></TaskDetailsModal>
    </div>
  );
};

export default TaskCard;
