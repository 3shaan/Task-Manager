import { useQuery } from "@tanstack/react-query";
import TaskCard from "../../components/TaskCard";

const index = () => {
  const {data, isLoading, isError,error, refetch } = useQuery({
    queryKey: ['all task'],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/tasks");
      const data = await res.json();
      return data;
    }
  })
  if (isLoading) {
    return <></>
  }
  
  console.log(data);
    return (
      <div className="mt-10">
        <div className="grid grid-cols-1 md:grid-cols-2 px-5 gap-5">
          {data.map((task) => (
            <TaskCard key={task._id} task={task} refetch={refetch} ></TaskCard>
          ))}
        </div>
      </div>
    );
};

export default index;

export async function getServerSideProps() {
    const res = await fetch("http://localhost:5000/tasks");
    const data = await res.json();
     return {
       props: {data}, 
     };
}