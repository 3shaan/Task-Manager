import Navbar from '../components/Navbar';
import ProjectBar from '../components/ProjectBar';
import TaskBody from '../components/TaskBody';
import '../styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
    <>
      <section className="grid grid-cols-8 pt-5 bg-[#ecf0f3] h-screen">
        <div className="col-span-2 flex">
          <Navbar></Navbar>
          <ProjectBar></ProjectBar>
        </div>
        <div className="col-span-5">
          <TaskBody></TaskBody>
          <Component {...pageProps} />
        </div>
      </section>
    </>
  );
  
}
