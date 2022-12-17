import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./component/Navbar";
import Dashboard from "./pages/Dasboard";
import Person from "../src/pages/Person";
import Add from "./pages/Add";
import Edit from "./pages/Edit";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/person:id" element={<Person />} />
          <Route path="/add" element={<Add />} />
          <Route path="/edit:id" element={<Edit />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
