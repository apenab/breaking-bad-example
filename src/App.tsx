import { Routes, Route } from "react-router-dom";

import { CharacterDetails, Characters } from "./routes";
import { AppContainer, NavBar } from "./components";

function App() {
  return (
    <>
      <NavBar />
      <AppContainer>
        <Routes>
          <Route path="/characters/" element={<Characters />} />
          <Route
            path="/characters/:characterId"
            element={<CharacterDetails />}
          />
        </Routes>
      </AppContainer>
    </>
  );
}

export default App;
