import { useQuery } from "@tanstack/react-query";
import { Spinner } from "flowbite-react";
import { useContext } from "react";
import CompleteTaskCard from "../../components/CompleteTaskCard";
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
        `http://localhost:3000/api/complete?email=${user?.email}`
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
  return (
    <section>
      {tasks.length === 0 ? (
        <div className="text-center mt-20 text-2xl">
          <p>You Have No Completed Task</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 px-5 gap-5 mt-10">
          {tasks.map((task) => (
            <CompleteTaskCard
              key={task._id}
              task={task}
              refetch={refetch}
            ></CompleteTaskCard>
          ))}
        </div>
      )}
    </section>
  );
};

export default Index;

// export async function getServerSideProps() {
//   const res = await fetch("https://task-mangaer-server.vercel.app/complete");
//   const tasks = await res.json();
//   return {
//     props: {  tasks},
//   };
// }
