import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

import musicOne from "../assets/projects/projectSix/musicOne.jpg";
import musicTwo from "../assets/projects/projectSix/musicTwo.jpg";
import musicThree from "../assets/projects/projectSix/musicThree.jpg";
import musicFour from "../assets/projects/projectSix/musicFour.jpg";

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

export const ProjectSix = () => {
  const nightMode = useSelector((state) => state.nightMode);
  const { t } = useTranslation();

  const photos = {
    1: musicOne,
    2: musicTwo,
    3: musicThree,
    4: musicFour,
  };
  const [state, setState] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setState((prevState) => {
        return prevState === 4 ? 1 : prevState + 1;
      });
    }, 3000);
    return () => {
      clearInterval(interval);
    };
  }, []);
  return (
    <HeightWrapper className="wrapper">
      <ProjectSection>
        <ProjectH>{t("projects.six")}</ProjectH>

        <ProjectDivWithButtonLinks>
          <ProjectButtonA
            href="https://sofiavasko.github.io/advanced-tasks/Task10/index.html"
            target="_blank"
            rel="noopener noreferrer"
            $darkMode={nightMode}
          >
            {t("projects.visit")}
          </ProjectButtonA>
          <ProjectButtonLinkBlue to="/projects" $darkMode={nightMode}>
            {t("project.back.projects")}
          </ProjectButtonLinkBlue>
          <ProjectButtonLink to="/projects/5" $darkMode={nightMode}>
            {t("project.back.project")}
          </ProjectButtonLink>
        </ProjectDivWithButtonLinks>

        <ProjectArticle $darkMode={nightMode}>
          <ProjectImg src={photos[`${state}`]} alt="music project" />
          <ProjectP $darkMode={nightMode}>{t("project.six.p")}</ProjectP>
        </ProjectArticle>
      </ProjectSection>
    </HeightWrapper>
  );
};
