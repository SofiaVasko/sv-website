import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

import postOne from "../assets/projects/projectThree/postOne.jpg";
import postTwo from "../assets/projects/projectThree/postTwo.jpg";
import postThree from "../assets/projects/projectThree/postThree.jpg";
import postFour from "../assets/projects/projectThree/postFour.jpg";

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

export const ProjectThree = () => {
  const nightMode = useSelector((state) => state.nightMode);
  const { t } = useTranslation();

  const photos = {
    1: postOne,
    2: postTwo,
    3: postThree,
    4: postFour,
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
        <ProjectH>{t("projects.three")}</ProjectH>

        <ProjectDivWithButtonLinks>
          <ProjectButtonA
            href="https://sofiavasko.github.io/react-task21/"
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
            {t("project.back.project")}
          </ProjectButtonLink>
          <ProjectButtonLink to="/projects/4" $darkMode={nightMode}>
            {t("project.next.project")}
          </ProjectButtonLink>
        </ProjectDivWithButtonLinks>

        <ProjectArticle $darkMode={nightMode}>
          <ProjectImg src={photos[`${state}`]} alt="post project" />
          <ProjectP $darkMode={nightMode}>{t("project.three.p")}</ProjectP>
        </ProjectArticle>
      </ProjectSection>
    </HeightWrapper>
  );
};
