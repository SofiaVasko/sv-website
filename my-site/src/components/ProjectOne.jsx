import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import todoOne from "../assets/projects/projectOne/todoOne.jpg";
import todoTwo from "../assets/projects/projectOne/todoTwo.jpg";
import todoThree from "../assets/projects/projectOne/todoThree.jpg";
import todoFour from "../assets/projects/projectOne/todoFour.jpg";
import todoFive from "../assets/projects/projectOne/todoFive.jpg";
import todoSix from "../assets/projects/projectOne/todoSix.jpg";
import todoSeven from "../assets/projects/projectOne/todoSeven.jpg";

import { useState, useEffect } from "react";

import {
  HeightWrapper,
  ProjectSection,
  ProjectH,
  ProjectDivWithButtonLinks,
  ProjectButtonA,
  ProjectButtonLinkBlue,
  ProjectButtonLink,
  ProjectArticle,
  ProjectImg,
  ProjectP,
} from "../styled/styledComponents";

export const ProjectOne = () => {
  const nightMode = useSelector((state) => state.nightMode);
  const { t } = useTranslation();

  const photos = {
    1: todoOne,
    2: todoTwo,
    3: todoThree,
    4: todoFour,
    5: todoFive,
    6: todoSix,
    7: todoSeven,
  };

  const [state, setState] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setState((prevState) => {
        return prevState === 7 ? 1 : prevState + 1;
      });
    }, 3000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <HeightWrapper className="wrapper">
      <ProjectSection>
        <ProjectH>{t("projects.one")}</ProjectH>

        <ProjectDivWithButtonLinks>
          <ProjectButtonA
            href="https://sofiavasko.github.io/advanced-tasks/Task14/index.html"
            target="_blank"
            rel="noopener noreferrer"
            $darkMode={nightMode}
          >
            {t("projects.visit")}
          </ProjectButtonA>
          <ProjectButtonLinkBlue to="/projects" $darkMode={nightMode}>
            {t("project.back.projects")}
          </ProjectButtonLinkBlue>
          <ProjectButtonLink to="/projects/2" $darkMode={nightMode}>
            {t("project.next.project")}
          </ProjectButtonLink>
        </ProjectDivWithButtonLinks>

        <ProjectArticle $darkMode={nightMode}>
          <ProjectImg src={photos[`${state}`]} alt="todo project" />
          <ProjectP $darkMode={nightMode}>{t("project.one.p")}</ProjectP>
        </ProjectArticle>
      </ProjectSection>
    </HeightWrapper>
  );
};
