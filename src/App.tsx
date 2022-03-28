import { Routes, Route } from "react-router-dom";

import { CharacterDetails, CharacterList } from "./routes";
import { AppContainer, NavBar } from "./components";

function App() {
  return (
    <>
      <NavBar />
      <AppContainer>
        <Routes>
          <Route path="/" element={<CharacterList />} />
          <Route
            path="/character/:characterId"
            element={<CharacterDetails />}
          />
        </Routes>
      </AppContainer>
    </>
  );
}

export default App;
