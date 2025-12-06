import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import FileStructure from "./pages/file-structure/file-structure-component";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/filestructure" element={<FileStructure />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
