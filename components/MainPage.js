import { useQuery } from "@tanstack/react-query";
import { GiAlarmClock } from "react-icons/gi";
import { FiActivity } from "react-icons/fi";
import { VscChecklist } from "react-icons/vsc";
const MainPage = () => {
  const totalTask = useQuery({
    queryKey: ["total task"],
    queryFn: async () => {
      const res = await fetch("https://task-mangaer-server.vercel.app/tasks");
      const data = await res.json();
      return data;
    },
  });
  const completeTask = useQuery({
    queryKey: ["complete task"],
    queryFn: async () => {
      const res = await fetch(
        "https://task-mangaer-server.vercel.app/complete"
      );
      const data = await res.json();
      return data;
    },
  });
  const runningTask = totalTask?.data?.length - completeTask?.data?.length;
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 p-5">
        <div>
          <div class="flex flex-col justify-between max-w-sm h-44 p-6 bg-white border border-gray-200 rounded-lg shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 relative">
            <div className="text-3xl bg-pink-600 h-14 w-14 flex justify-center items-center rounded-lg absolute top-[-10px] text-white left-12">
              <GiAlarmClock></GiAlarmClock>
            </div>
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-right">
              Total Task
            </h5>
            <p className="text-xl text-right text-pink-500 font-semibold">
              {totalTask?.data?.length}
            </p>
            <hr />
            <p className="text-right text-sm">
              <span className="text-pink-600 font-semibold">+50%</span> then
              last week
            </p>
          </div>
        </div>
        <div>
          <div class="flex flex-col justify-between max-w-sm h-44 p-6 bg-white border border-gray-200 rounded-lg shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 relative">
            <div className="text-3xl bg-blue-600 h-14 w-14 flex justify-center items-center rounded-lg absolute top-[-10px] text-white left-12">
              <FiActivity></FiActivity>
            </div>
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-right">
              Running Task
            </h5>
            <p className="text-xl text-right text-blue-500 font-semibold">
              {runningTask}
            </p>
            <hr />
            <p className="text-right text-sm">
              <span className="text-blue-600 font-semibold">+50%</span> then
              last week
            </p>
          </div>
        </div>
        <div>
          <div class="flex flex-col justify-between max-w-sm h-44 p-6 bg-white border border-gray-200 rounded-lg shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 relative">
            <div className="text-3xl bg-cyan-600 h-14 w-14 flex justify-center items-center rounded-lg absolute top-[-10px] text-white left-12">
              <VscChecklist></VscChecklist>
            </div>
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-right">
              Complete Task
            </h5>
            <p className="text-xl text-right text-cyan-500 font-semibold">
              {completeTask?.data?.length}
            </p>
            <hr />
            <p className="text-right text-sm">
              <span className="text-cyan-600 font-semibold">+50%</span> then
              last week
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
