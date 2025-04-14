import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

import timerOne from "../assets/projects/projectFive/timerOne.jpg";
import timerTwo from "../assets/projects/projectFive/timerTwo.jpg";
import timerThree from "../assets/projects/projectFive/timerThree.jpg";

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

export const ProjectFive = () => {
  const nightMode = useSelector((state) => state.nightMode);
  const { t } = useTranslation();

  const photos = {
    1: timerOne,
    2: timerTwo,
    3: timerThree,
  };
  const [state, setState] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setState((prevState) => {
        return prevState === 3 ? 1 : prevState + 1;
      });
    }, 3000);
    return () => {
      clearInterval(interval);
    };
  }, []);
  return (
    <HeightWrapper className="wrapper">
      <ProjectSection>
        <ProjectH>{t("projects.five")}</ProjectH>

        <ProjectDivWithButtonLinks>
          <ProjectButtonA
            href="https://sofiavasko.github.io/react-task18/"
            target="_blank"
            rel="noopener noreferrer"
            $darkMode={nightMode}
          >
            {t("projects.visit")}
          </ProjectButtonA>
          <ProjectButtonLinkBlue to="/projects" $darkMode={nightMode}>
            {t("project.back.projects")}
          </ProjectButtonLinkBlue>
          <ProjectButtonLink to="/projects/4" $darkMode={nightMode}>
            {t("project.back.project")}
          </ProjectButtonLink>
          <ProjectButtonLink to="/projects/6" $darkMode={nightMode}>
            {t("project.next.project")}
          </ProjectButtonLink>
        </ProjectDivWithButtonLinks>

        <ProjectArticle $darkMode={nightMode}>
          <ProjectImg src={photos[`${state}`]} alt="timer project" />
          <ProjectP $darkMode={nightMode}>{t("project.five.p")}</ProjectP>
        </ProjectArticle>
      </ProjectSection>
    </HeightWrapper>
  );
};
