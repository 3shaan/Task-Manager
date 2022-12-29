import { Checkbox, Label, Modal, TextInput, Tooltip } from "flowbite-react";
import Image from "next/image";
import { BiEdit } from "react-icons/bi";

const TaskDetailsModal = ({ task, open, setOpen }) => {
  const { _id, taskTitle, taskDetails, projectName, image, date, createTime } =
    task;

  return (
    <div>
      <Modal show={open} size="4xl" popup={true} onClose={() => setOpen(false)}>
        <Modal.Header />
        <Modal.Body>
          <div>
            <div className="flex justify-center gap-4">
              <h1 className="text-2xl text-center font-semibold">
                Task title :
              </h1>
              <Tooltip
                content="Details"
                placement="top"
                animation="duration-500"
              >
                <button
                  onClick={() => setOpen(true)}
                  className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg px-3 py-1 text-2xl text-center"
                >
                  <BiEdit></BiEdit>
                </button>
              </Tooltip>
            </div>

            <div className="flex justify-between">
              <div>
                <p className="text-xl text-gray-700 dark:text-gray-400">
                  {taskDetails}
                </p>
                <p>Task Time remaining:</p>
                <p>Task created Time :</p>
              </div>
              <div>
                <Image src={image} alt="" height={100} width={300}></Image>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default TaskDetailsModal;
