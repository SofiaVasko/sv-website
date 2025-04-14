import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

import contactOne from "../assets/projects/projectTwo/contactOne.jpg";
import contactTwo from "../assets/projects/projectTwo/contactTwo.jpg";
import contactThree from "../assets/projects/projectTwo/contactThree.jpg";
import contactFour from "../assets/projects/projectTwo/contactFour.jpg";
import contactFive from "../assets/projects/projectTwo/contactFive.jpg";
import contactSix from "../assets/projects/projectTwo/contactSix.jpg";
import contactSeven from "../assets/projects/projectTwo/contactSeven.jpg";
import contactEight from "../assets/projects/projectTwo/contactEight.jpg";
import contactNine from "../assets/projects/projectTwo/contactNine.jpg";

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

export const ProjectTwo = () => {
  const nightMode = useSelector((state) => state.nightMode);
  const { t } = useTranslation();

  const photos = {
    1: contactOne,
    2: contactTwo,
    3: contactThree,
    4: contactFour,
    5: contactFive,
    6: contactSix,
    7: contactSeven,
    8: contactEight,
    9: contactNine,
  };
  const [state, setState] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setState((prevState) => {
        return prevState === 9 ? 1 : prevState + 1;
      });
    }, 3000);
    return () => {
      clearInterval(interval);
    };
  }, []);
  return (
    <HeightWrapper className="wrapper">
      <ProjectSection>
        <ProjectH>{t("projects.two")}</ProjectH>

        <ProjectDivWithButtonLinks>
          <ProjectButtonA
            href="https://sofiavasko.github.io/react-task17/"
            target="_blank"
            rel="noopener noreferrer"
            $darkMode={nightMode}
          >
            {t("projects.visit")}
          </ProjectButtonA>
          <ProjectButtonLinkBlue to="/projects" $darkMode={nightMode}>
            {t("project.back.projects")}
          </ProjectButtonLinkBlue>
          <ProjectButtonLink to="/projects/1" $darkMode={nightMode}>
            {t("project.back.project")}
          </ProjectButtonLink>
          <ProjectButtonLink to="/projects/3" $darkMode={nightMode}>
            {t("project.next.project")}
          </ProjectButtonLink>
        </ProjectDivWithButtonLinks>

        <ProjectArticle $darkMode={nightMode}>
          <ProjectImg src={photos[`${state}`]} alt="contact project" />
          <ProjectP $darkMode={nightMode}>{t("project.two.p")}</ProjectP>
        </ProjectArticle>
      </ProjectSection>
    </HeightWrapper>
  );
};
