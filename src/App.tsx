import React from "react";
import Projects from "./components/Projects";
import Contacts from "./components/Contacts";
function App() {
  return (
    <div className="w-screen h-screen bg-cyan-500">
      <div className="h-screen flex justify-between">
        <div className="mt-52 px-52 w-full">
          <Contacts />
          <Projects />
        </div>
      </div>
    </div>
  );
}

export default App;
