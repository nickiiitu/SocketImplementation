import React from "react"
import Input from "./Input";
import Display from "./Display";
import { Route,Routes} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Input />}/>
        <Route path="/abc" element={<Display />}/>
      </Routes>
    </div>
  );
}

export default App;
