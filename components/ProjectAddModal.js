import axios from "axios";
import { Modal } from "flowbite-react";
import { useContext } from "react";
import { toast } from "react-hot-toast";
import { authContext } from "../Context/Context";


const ProjectAddModal = ({ modalOpen, setModalOpen }) => {
    const { user } = useContext(authContext);
    const handleProject = (event) => {
        event.preventDefault();
        const ProjectName = event.target.project.value;
        console.log(ProjectName);
        const project = {
          ProjectName,
          email: user.email,
        };
        axios.post("/api/projects", project)
            .then(res => {
                console.log(res)
                if (res.status === 200) {
                    toast.success(res?.data?.msg);
                    setModalOpen(false);
                    event.target.reset();
                }
            })
            .catch(err => {
            console.log(err)
        })
    }
    return (
      <div>
        <Modal show={modalOpen} size="md" onClose={() => setModalOpen(false)}>
          <Modal.Header>Add Project Name</Modal.Header>
          <Modal.Body>
            <div className="space-y-6 p-6">

              <form onSubmit={handleProject} className="flex items-center flex-col">
                <div className="w-full">
                  <input
                    type="text" name="project"
                    id="simple-search"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Project Name"
                    required
                  />
                </div>
                <button
                  type="Submit"
                  className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 mt-3 "
                >
                  Add New Project
                </button>
              </form>
            </div>
          </Modal.Body>
        </Modal>
      </div>
    );
};

export default ProjectAddModal;