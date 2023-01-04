import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Pokedex, Pokemon, NotFound } from "./pages";

function App() {
  return (
    <Router>
      <div className="flex flex-col justify-center items-center border border-red-400 bg-red-600 ">
        <p className="text-lg ">HEADER</p>
      </div>
      <Routes>
        <Route path="/" element={<Pokedex />} />
        <Route path="/pokemon/:id" element={<Pokemon />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
