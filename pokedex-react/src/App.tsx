import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Pokedex, Pokemon, NotFound } from "./pages";
import { Header, Footer } from "./components";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-2 flex-col self-center max-w-4xl px-4 sm:px-10 m-auto my-12 border-2 border-red-600 ">
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
