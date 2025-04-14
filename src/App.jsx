import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { Main } from "./components/Main";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Contacts } from "./components/Contacts";
import { NotFound } from "./components/NotFound";
import { Viber } from "./components/Viber";
import { useSelector } from "react-redux";
import { colors } from "./styled/colors";
import { useState, useEffect } from "react";
import snake from "./assets/snake.jpg";

import { ProjectOne } from "./components/ProjectOne";
import { ProjectTwo } from "./components/ProjectTwo";
import { ProjectThree } from "./components/ProjectThree";
import { ProjectFour } from "./components/ProjectFour";
import { ProjectFive } from "./components/ProjectFive";
import { ProjectSix } from "./components/ProjectSix";

import { ScrollToTop } from "./components/ScrollToTop";

import { Global } from "./styled/styledComponents";

function App() {
  const [loading, setLoading] = useState(false);

  const nightMode = useSelector((state) => state.nightMode);
  const backgroundStyle = {
    background: nightMode ? colors.darkBackground : colors.lightBackground,
    transition: "0.3s ease-in-out",
  };
  useEffect(() => {
    setTimeout(() => {
      setLoading(true);
    }, 1200);
  }, []);
  return (
    <>
      <Global $darkMode={nightMode} />
      <div className="App" style={backgroundStyle}>
        <BrowserRouter>
          <ScrollToTop />
          {!loading ? (
            <div className="snakeWrapper">
              <img className="snakeImg" src={snake} alt="snake" />
            </div>
          ) : (
            <>
              <Header />
              <Routes>
                <Route index element={<Main />} />
                <Route path="skills" element={<Skills />} />
                <Route path="projects">
                  <Route index element={<Projects />} />
                  <Route path="1" element={<ProjectOne />} />
                  <Route path="2" element={<ProjectTwo />} />
                  <Route path="3" element={<ProjectThree />} />
                  <Route path="4" element={<ProjectFour />} />
                  <Route path="5" element={<ProjectFive />} />
                  <Route path="6" element={<ProjectSix />} />
                </Route>
                <Route path="contacts">
                  <Route index element={<Contacts />} />
                  <Route path="viber" element={<Viber />} />
                </Route>
                <Route path="*" element={<NotFound />} />
              </Routes>
            </>
          )}
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;