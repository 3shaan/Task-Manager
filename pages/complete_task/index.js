import { useQuery } from "@tanstack/react-query";
import CompleteTaskCard from "../../components/CompleteTaskCard";

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
      const res = await fetch(
        "https://task-mangaer-server.vercel.app/complete"
      );
      const data = await res.json();
      return data;
    },
  });
  if (isLoading) {
    return <></>;
  }
  return (
    <section>
      <div className="grid grid-cols-1 md:grid-cols-2 px-5 gap-5">
        {tasks.map((task) => (
          <CompleteTaskCard key={task._id} task={task}></CompleteTaskCard>
        ))}
      </div>
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
