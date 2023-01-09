import { async } from "@firebase/util";
import { useQuery } from "@tanstack/react-query";
import { Spinner } from "flowbite-react";
import { useRouter } from "next/router";
import { useContext } from "react";
import TaskCard from "../../components/TaskCard";
import { authContext } from "../../Context/Context";

const Project = () => {
  const router = useRouter();
  const { user } = useContext(authContext);
  console.log(router.query.project);
  const { data, isLoading, refetch } = useQuery({
    queryKey: [`${router?.query?.project}`],
    queryFn: async () => {
      const res = await fetch(
        `/api/projects/${router?.query?.project}?email=${user.email}`
      );
      const data = await res.json();
      return data;
    },
  });
  console.log(data, router?.query?.project, user?.email);
  if (isLoading) {
    return (
      <div className="text-center">
        <Spinner aria-label="Center-aligned spinner example" />
      </div>
    );
  }
  if (user) {
    refetch();
  }
  return (
    <div className="mt-10">
      <div className="grid grid-cols-1 md:grid-cols-2 px-5 gap-5">
        {data?.length > 0 ? (
          data.map((task) => (
            <TaskCard key={task._id} task={task} refetch={refetch}></TaskCard>
          ))
        ) : (
          <div className="text-3xl text-center mt-10">You have no Task in this Project</div>
        )}
      </div>
    </div>
  );
};

export default Project;
