import { useQuery } from "@tanstack/react-query";
import { Spinner } from "flowbite-react";
import { useContext, useEffect, useState } from "react";
import TaskCard from "../../components/TaskCard";
import { authContext } from "../../Context/Context";

const Index = () => {
  const { user } = useContext(authContext);
  const {
    data: tasks,
    isLoading,
    isError,
    error,
    refetch,
  } = useQuery({
    queryKey: ["all task"],
    queryFn: async () => {
      const res = await fetch(
        `https://task-mangaer-server-3shaan.vercel.app/tasks?email=${user?.email}`
      );
      const data = await res.json();
      return data;
    },
  });
  if (isLoading) {
    return (
      <div className="text-center">
        <Spinner aria-label="Center-aligned spinner example" />
      </div>
    );
  }

  console.log(tasks);
  return (
    <div className="mt-10">
      <div>
        {tasks.length === 0 ? (
          <div className="text-center mt-20 text-2xl">
            <p>You Have No Completed Task</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 px-5 gap-5">
            {tasks.map((task) => (
              <TaskCard key={task._id} task={task} refetch={refetch}></TaskCard>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Index;

// export async function getServerSideProps() {
//     const res = await fetch("https://task-mangaer-server.vercel.app/tasks");
//     const data = await res.json();
//      return {
//        props: {data},
//      };
// }
