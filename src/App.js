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

  const setTaskProp = (jobId, taskId, prop, value) => {
    let temp = [...jobsList];
    temp[jobId].tasks[taskId][prop] = value;
    setJobsList(temp);
    return temp;
  }
  const setJobProp = (jobId, prop, value) => {
    let temp = [...jobsList];
    temp[jobId][prop] = value;
    setJobsList(temp);
    return temp;
  }

  // const setTaskTitle = (jobId, taskId, newTitle) => {
  //   let temp = [...jobsList];
  //   temp[jobId].tasks[taskId].title = newTitle;
  //   setJobsList(temp);
  // }

  return (
    <main className="w-full h-full bg-gray-200 flex flex-col justify-center">
      <JobsContext.Provider value={[setTaskProp, setJobProp]}>
        <MyMenu />
        <Navbar />
        <Jobs jobs={jobsList} />
      </JobsContext.Provider>
    </main>
  );
}

export default App;
