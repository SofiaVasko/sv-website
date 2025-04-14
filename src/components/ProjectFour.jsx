import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

import formOne from "../assets/projects/projectFour/formOne.jpg";
import formTwo from "../assets/projects/projectFour/formTwo.jpg";
import formThree from "../assets/projects/projectFour/formThree.jpg";
import formFour from "../assets/projects/projectFour/formFour.jpg";
import formFive from "../assets/projects/projectFour/formFive.jpg";
import formSix from "../assets/projects/projectFour/formSix.jpg";
import formSeven from "../assets/projects/projectFour/formSeven.jpg";
import formEight from "../assets/projects/projectFour/formEight.jpg";
import formNine from "../assets/projects/projectFour/formNine.jpg";

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

export const ProjectFour = () => {
  const nightMode = useSelector((state) => state.nightMode);
  const { t } = useTranslation();

  const photos = {
    1: formOne,
    2: formTwo,
    3: formThree,
    4: formFour,
    5: formFive,
    6: formSix,
    7: formSeven,
    8: formEight,
    9: formNine,
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
        <ProjectH>{t("projects.four")}</ProjectH>

        <ProjectDivWithButtonLinks>
          <ProjectButtonA
            href="https://sofiavasko.github.io/react-task20/"
            target="_blank"
            rel="noopener noreferrer"
            $darkMode={nightMode}
          >
            {t("projects.visit")}
          </ProjectButtonA>
          <ProjectButtonLinkBlue to="/projects" $darkMode={nightMode}>
            {t("project.back.projects")}
          </ProjectButtonLinkBlue>
          <ProjectButtonLink to="/projects/3" $darkMode={nightMode}>
            {t("project.back.project")}
          </ProjectButtonLink>
          <ProjectButtonLink to="/projects/5" $darkMode={nightMode}>
            {t("project.next.project")}
          </ProjectButtonLink>
        </ProjectDivWithButtonLinks>

        <ProjectArticle $darkMode={nightMode}>
          <ProjectImg src={photos[`${state}`]} alt="form project" />
          <ProjectP $darkMode={nightMode}>{t("project.four.p")}</ProjectP>
        </ProjectArticle>
      </ProjectSection>
    </HeightWrapper>
  );
};
