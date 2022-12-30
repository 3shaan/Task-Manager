import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import TaskCard from "../../components/TaskCard";

const Index = () => {
  const {
    data: tasks,
    isLoading,
    isError,
    error,
    refetch,
  } = useQuery({
    queryKey: ["all task"],
    queryFn: async () => {
      const res = await fetch("https://task-mangaer-server.vercel.app/tasks");
      const data = await res.json();
      return data;
    },
  });
  if (isLoading) {
    return <></>;
  }

  console.log(tasks);
  return (
    <div className="mt-10">
      <div className="grid grid-cols-1 md:grid-cols-2 px-5 gap-5">
        {tasks.map((task) => (
          <TaskCard key={task._id} task={task} refetch={refetch}></TaskCard>
        ))}
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
