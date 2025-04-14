import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import {
  ProjectsSection,
  ProjectsTitle,
  ProjectsDiv,
  ProjectsFigure,
  ProjectsFigcaption,
  ProjectsDivWithLinks,
  ProjectsPinkLink,
  ProjectsPinkA,
} from "../styled/styledComponents";

import {
  ReactCompareSlider,
  ReactCompareSliderImage,
} from "react-compare-slider";

import timer from "../assets/projects/timerOne.jpg";
import timerTwo from "../assets/projects/timerTwo.jpg";
import form from "../assets/projects/formOne.jpg";
import formTwo from "../assets/projects/formTwo.jpg";
import post from "../assets/projects/postOne.jpg";
import postTwo from "../assets/projects/postTwo.jpg";
import doOne from "../assets/projects/doOne.jpg";
import doTwo from "../assets/projects/doTwo.jpg";
import contacts from "../assets/projects/contactsOne.jpg";
import contactsTwo from "../assets/projects/contactsTwo.jpg";
import music from "../assets/projects/musicOne.jpg";
import musicTwo from "../assets/projects/musicTwo.jpg";

export const Projects = () => {
  const nightMode = useSelector((state) => state.nightMode);
  const { t } = useTranslation();
  return (
    <div className="wrapper">
      <ProjectsSection>
        <ProjectsTitle $darkMode={nightMode}>
          {t("projects.title")}
        </ProjectsTitle>
        <ProjectsDiv>
          <ProjectsFigure $darkMode={nightMode}>
            <ReactCompareSlider
              itemOne={<ReactCompareSliderImage src={doOne} alt="to-do-list" />}
              itemTwo={<ReactCompareSliderImage src={doTwo} alt="to-do-list" />}
            />
            <ProjectsFigcaption $darkMode={nightMode}>
              {" "}
              <i>{t("projects.one")}</i>
            </ProjectsFigcaption>
            <ProjectsDivWithLinks>
              <ProjectsPinkLink to="1" $darkMode={nightMode}>
                {t("projects.details")}
              </ProjectsPinkLink>
              <ProjectsPinkA
                href="https://sofiavasko.github.io/advanced-tasks/Task14/index.html"
                target="_blank"
                rel="noopener noreferrer"
                $darkMode={nightMode}
              >
                {t("projects.visit")}
              </ProjectsPinkA>
            </ProjectsDivWithLinks>
          </ProjectsFigure>

          <ProjectsFigure $darkMode={nightMode}>
            <ReactCompareSlider
              itemOne={
                <ReactCompareSliderImage src={contacts} alt="contacts" />
              }
              itemTwo={
                <ReactCompareSliderImage src={contactsTwo} alt="contacts" />
              }
            />
            <ProjectsFigcaption $darkMode={nightMode}>
              {" "}
              <i>{t("projects.two")}</i>
            </ProjectsFigcaption>
            <ProjectsDivWithLinks>
              <ProjectsPinkLink to="2" $darkMode={nightMode}>
                {t("projects.details")}
              </ProjectsPinkLink>
              <ProjectsPinkA
                href="https://sofiavasko.github.io/react-task17/"
                target="_blank"
                rel="noopener noreferrer"
                $darkMode={nightMode}
              >
                {t("projects.visit")}
              </ProjectsPinkA>
            </ProjectsDivWithLinks>
          </ProjectsFigure>

          <ProjectsFigure $darkMode={nightMode}>
            <ReactCompareSlider
              itemOne={<ReactCompareSliderImage src={post} alt="post" />}
              itemTwo={<ReactCompareSliderImage src={postTwo} alt="post" />}
            />
            <ProjectsFigcaption $darkMode={nightMode}>
              {" "}
              <i>{t("projects.three")}</i>
            </ProjectsFigcaption>
            <ProjectsDivWithLinks>
              <ProjectsPinkLink to="3" $darkMode={nightMode}>
                {t("projects.details")}
              </ProjectsPinkLink>
              <ProjectsPinkA
                href="https://sofiavasko.github.io/react-task21/"
                target="_blank"
                rel="noopener noreferrer"
                $darkMode={nightMode}
              >
                {t("projects.visit")}
              </ProjectsPinkA>
            </ProjectsDivWithLinks>
          </ProjectsFigure>

          <ProjectsFigure $darkMode={nightMode}>
            <ReactCompareSlider
              itemOne={<ReactCompareSliderImage src={form} alt="form" />}
              itemTwo={<ReactCompareSliderImage src={formTwo} alt="form" />}
            />
            <ProjectsFigcaption $darkMode={nightMode}>
              {" "}
              <i>{t("projects.four")}</i>
            </ProjectsFigcaption>
            <ProjectsDivWithLinks>
              <ProjectsPinkLink to="4" $darkMode={nightMode}>
                {t("projects.details")}
              </ProjectsPinkLink>
              <ProjectsPinkA
                href="https://sofiavasko.github.io/react-task20/"
                target="_blank"
                rel="noopener noreferrer"
                $darkMode={nightMode}
              >
                {t("projects.visit")}
              </ProjectsPinkA>
            </ProjectsDivWithLinks>
          </ProjectsFigure>

          <ProjectsFigure $darkMode={nightMode}>
            <ReactCompareSlider
              itemOne={<ReactCompareSliderImage src={timer} alt="timer" />}
              itemTwo={<ReactCompareSliderImage src={timerTwo} alt="timer" />}
            />
            <ProjectsFigcaption $darkMode={nightMode}>
              {" "}
              <i>{t("projects.five")}</i>
            </ProjectsFigcaption>
            <ProjectsDivWithLinks>
              <ProjectsPinkLink to="5" $darkMode={nightMode}>
                {t("projects.details")}
              </ProjectsPinkLink>
              <ProjectsPinkA
                href="https://sofiavasko.github.io/react-task18/"
                target="_blank"
                rel="noopener noreferrer"
                $darkMode={nightMode}
              >
                {t("projects.visit")}
              </ProjectsPinkA>
            </ProjectsDivWithLinks>
          </ProjectsFigure>

          <ProjectsFigure $darkMode={nightMode}>
            <ReactCompareSlider
              itemOne={<ReactCompareSliderImage src={music} alt="music" />}
              itemTwo={<ReactCompareSliderImage src={musicTwo} alt="music" />}
            />
            <ProjectsFigcaption $darkMode={nightMode}>
              {" "}
              <i>{t("projects.six")}</i>
            </ProjectsFigcaption>
            <ProjectsDivWithLinks>
              <ProjectsPinkLink to="6" $darkMode={nightMode}>
                {t("projects.details")}
              </ProjectsPinkLink>
              <ProjectsPinkA
                href="https://sofiavasko.github.io/advanced-tasks/Task10/index.html"
                target="_blank"
                rel="noopener noreferrer"
                $darkMode={nightMode}
              >
                {t("projects.visit")}
              </ProjectsPinkA>
            </ProjectsDivWithLinks>
          </ProjectsFigure>
        </ProjectsDiv>
      </ProjectsSection>
    </div>
  );
};
