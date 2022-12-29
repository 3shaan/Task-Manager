import TaskCard from "../../components/TaskCard";

const index = ({ data }) => {
    console.log(data)
    
    return (
      <div className="mt-10">
        <div className="grid grid-cols-1 md:grid-cols-2 px-5 gap-5">
          {data.map((task) => (
            <TaskCard key={task._id} task={task}></TaskCard>
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