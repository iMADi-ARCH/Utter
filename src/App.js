import Navbar from "./components/Navbar";
import MyMenu from "./components/MyMenu";
import Jobs from "./components/Jobs";
import { createContext, useState } from "react";

export let JobsContext = createContext(null);

function App() {
  let [jobsList, setJobsList] = useState([
    {
      id: 0,
      title: "Test Job 1",
      done: false,
      tasks: [
        {
          id: 0,
          title: "Bread",
          done: true,
        }, 
        {
          id: 1,
          title: "Potato Chip",
          done: false,
        }, 
      ]
    },
    {
      id: 1,
      title: "Test Job 2",
      done: false,
      tasks: [
        {
          id: 0,
          title: "Carrot",
          done: false,
        }, 
        {
          id: 1,
          title: "Tomato",
          done: false,
        }, 
      ]
    },
    {
      id: 2,
      title: "Test Job 3",
      done: false,
      tasks: [
        {
          id: 0,
          title: "Apple",
          done: false,
        }, 
        {
          id: 1,
          title: "Mango",
          done: false,
        }, 
      ]
    },
  ]);

  const setTaskDone = (jobId, taskId, is_done) => {
    let temp = jobsList;
    temp[jobId].tasks[taskId].done = !temp[jobId].tasks[taskId].done;
    setJobsList(temp);
    console.log("After checking Carrot", jobsList[jobId].tasks);
  }

  return (
    <main className="w-full h-full bg-gray-200 flex flex-col justify-center">
      <JobsContext.Provider value={setTaskDone}>
        <MyMenu />
        <div onClick={() => {console.log("Initially:", jobsList[1].tasks)}} >SOME DEBUG STUFF</div>
        <Navbar />
        <Jobs jobs={jobsList} />
      </JobsContext.Provider>
    </main>
  );
}

export default App;
