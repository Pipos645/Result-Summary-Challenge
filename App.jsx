import React from "react";
import {Result} from "./components/Result";
import {Summary} from "./components/Summary";

function App() {

  return (
    <div className="flex w-full min-h-screen justify-center lg:items-center">
      <div className="flex lg:flex-row flex-col lg:w-[45rem] w-[22.5rem] lg:h-[30rem] h-full bg-white shadow-2xl lg:rounded-3xl lg:overflow-hidden">
        <Result />
        <Summary />
      </div>
    </div>
  )
}

export default App
