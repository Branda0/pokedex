import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Pokedex, Pokemon, NotFound } from "./pages";
import { Header, Footer } from "./components";

function App() {
  return (
    <Router>
      <div className=" flex flex-col min-h-screen font-display">
        <Header />
        <main className=" flex flex-1 w-full flex-col">
          <Routes>
            <Route path="/" element={<Pokedex />} />
            <Route path="/pokemon/:id" element={<Pokemon />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
