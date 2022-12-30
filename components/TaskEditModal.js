import axios from "axios";
import { Label, Modal, TextInput } from "flowbite-react";
import { useState } from "react";
import DatePicker from "react-datepicker";
import { toast } from "react-hot-toast";

const TaskEditModal = ({ task, modalOpen, setModalOpen, refetch }) => {
  const [loading, setLoading] = useState(false);
  const {
    _id,
    taskTitle,
    taskDetails,
    projectName,
    image: taskImg,
    date,
    createTime,
  } = task;
  const [startDate, setStartDate] = useState(Date.parse(date));
  const [img, setImg] = useState("");
  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    const inputData = event.target;
    const title = inputData.text.value;
    const projectName = inputData.project.value;
    const images = img?.target?.files[0];
    const date = inputData.date.value;
    const taskDetails = inputData.textArea.value;
    const formData = new FormData();
    formData.append("image", images);
    const uploadImg = await fetch(
      "https://api.imgbb.com/1/upload?key=7393967092b740dbb7156b576663d2f7",
      {
        method: "POST",
        body: formData,
      }
    );
    const imageJson = await uploadImg.json();
    const image = imageJson?.data?.url;
    // console.log(image.data?.url)
    const task = {
      taskId: _id,
      taskTitle: title,
      projectName,
      image: image ? image : taskImg,
      date,
      taskDetails,
    };
    axios
      .put("https://task-mangaer-server.vercel.app/task", task)
      .then((data) => {
        console.log(data);
        setLoading(false);
        setModalOpen(false);
        refetch();
        if (data?.data?.acknowledged) {
          console.log("successfully edited task");
          toast.success("successfully edited task");
        }

        //  router.push("/allTasks");
      })
      .catch((err) => {
        console.log(err.message);
        setLoading(false);
      });
    // console.log(task)
  };
  return (
    <div>
      <Modal
        show={modalOpen}
        size="2xl"
        popup={true}
        onClose={() => setModalOpen(false)}
      >
        <Modal.Header />
        <Modal.Body>
          <form
            onSubmit={handleSubmit}
            className="space-y-6 px-6 pb-4 sm:pb-6 lg:px-8 xl:pb-8"
          >
            <h3 className="text-xl font-medium text-gray-900 dark:text-white text-center">
              Edit Your Task
            </h3>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="text" value="Task Title" />
              </div>
              <TextInput
                defaultValue={taskTitle}
                id="text"
                name="title"
                placeholder="Input your task Name"
                required={true}
              />
            </div>
            <div>
              <label
                for="countries"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Select Task Projcet
              </label>
              <select
                name="project"
                id="countries"
                defaultValue={projectName}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option selected value="Personal">
                  Personal
                </option>
                <option value="Family">Family</option>
                <option value="Office">Office</option>
              </select>
            </div>
            <div>
              <label
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                for="file_input"
              >
                Upload file
              </label>
              <input
                onChange={(data) => setImg(data)}
                name="images"
                className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                aria-describedby="file_input_help"
                id="file_input"
                type="file"
              ></input>
            </div>
            <div>
              <label htmlFor="date" className="font-semibold">
                Selet Task Date and Time
              </label>
              <DatePicker
                id="date"
                name="date"
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                showTimeSelect
                timeFormat="HH:mm"
                timeIntervals={15}
                timeCaption="time"
                dateFormat="MMMM d, yyyy h:mm aa"
              />
            </div>
            <div>
              <label
                for="message"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Task Description
              </label>
              <textarea
                name="textArea"
                defaultValue={taskDetails}
                id="message"
                rows="4"
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Write your thoughts here..."
              ></textarea>
            </div>
            <div>
              <input
                type="submit"
                className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 w-full"
                value={loading ? "Submitting..." : "Submit"}
              />
            </div>
          </form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default TaskEditModal;
