import { Routes, Route } from "react-router-dom";

import { Character, Characters } from "./routes";
import { NavBar } from "./components";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/characters/" element={<Characters />} />
        <Route path="/characters/:characterId" element={<Character />} />
      </Routes>
    </>
  );
}

export default App;
