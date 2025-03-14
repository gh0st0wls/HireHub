import { Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import CandidateSearch from "./pages/CandidateSearch";
import PotentialCandidates from "./pages/PotentialCandidates"; // ✅ Ensure this file exists
import NotFound from "./pages/NotFound"; // ✅ Ensure this file exists

function App() {
  return (
    <>
      <Nav />
      <main>
        <Routes>
          <Route path="/" element={<CandidateSearch />} />
          <Route path="/potential" element={<PotentialCandidates />} /> {/* ✅ Fixed route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </>
  );
}

export default App;

