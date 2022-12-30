import axios from "axios";
import { Tooltip } from "flowbite-react";
import { AiOutlineDelete } from "react-icons/ai";
import { FaRegCalendarTimes } from "react-icons/fa";
import ReactTimeAgo from "react-time-ago";
import Swal from "sweetalert2";
const CompleteTaskCard = ({ task, refetch }) => {
  const {
    _id,
    taskTitle,
    taskDetails,
    projectName,
    image,
    date,
    createTime,
    complete,
  } = task;
  const handleNotComplete = () => {
    axios
      .patch(`https://task-mangaer-server.vercel.app/complete?id=${_id}`)
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

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
          .delete(`https://task-mangaer-server.vercel.app/tasks?id=${_id}`)
          .then((data) => {
            console.log(data);
            refetch();
          })
          .catch((err) => {
            console.log(err.message);
          });
        Swal.fire("Deleted!", "Your Task has been deleted.", "success");
      }
    });
  };
  return (
    <div>
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

        <div className="flex mt-3 gap-4 justify-end">
          <Tooltip
            content="Not Complete"
            placement="top"
            animation="duration-500"
          >
            <button
              onClick={handleNotComplete}
              className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg px-3 py-1 text-2xl text-center"
            >
              <FaRegCalendarTimes></FaRegCalendarTimes>
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
    </div>
  );
};

export default CompleteTaskCard;
