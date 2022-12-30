import { async } from "@firebase/util";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";
import TaskCard from "../../components/TaskCard";

const Project = () => {
  const router = useRouter();
  console.log(router.query.project);
  const { data, isLoading, refetch } = useQuery({
    queryKey: [`${router?.query?.project}`],
    queryFn: async () => {
      const res = await fetch(
        `https://task-mangaer-server.vercel.app/project/${router?.query?.project}`
      );
      const data = await res.json();
      return data;
    },
  });
  console.log(data);
  if (isLoading) {
    return <></>;
  }
  return (
    <div className="mt-10">
      <div className="grid grid-cols-1 md:grid-cols-2 px-5 gap-5">
        {data.map((task) => (
          <TaskCard key={task._id} task={task} refetch={refetch}></TaskCard>
        ))}
      </div>
    </div>
  );
};

export default Project;
