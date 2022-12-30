import Navbar from '../components/Navbar';
import ProjectBar from '../components/ProjectBar';
import TaskBody from '../components/TaskBody';
import '../styles/globals.css'
import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en.json";
import Context from '../Context/Context';
import "react-datepicker/dist/react-datepicker.css";
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";

export default function App({ Component, pageProps }) {
  TimeAgo.addDefaultLocale(en);
  const queryClient = new QueryClient();
  return (
    <Context>
      <QueryClientProvider client={queryClient}>
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
      </QueryClientProvider>
    </Context>
  );
  
}
