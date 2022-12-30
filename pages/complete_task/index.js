import CompleteTaskCard from "../../components/CompleteTaskCard";

const index = ({ tasks }) => {
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

export default index;

export async function getServerSideProps() {
  const res = await fetch("http://localhost:5000/complete");
  const tasks = await res.json();
  return {
    props: {  tasks},
  };
}