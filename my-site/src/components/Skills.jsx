import htmlI from "../assets/html.png";
import cssI from "../assets/css.png";
import jsI from "../assets/js.png";
import reactI from "../assets/react.png";
import reduxI from "../assets/redux.png";
import {
  SkillsSection,
  MeDiv,
  MeFigure,
  MeImg,
  FigcaptionBase,
  MeP,
  SkillsTitle,
  IconsDiv,
  IconsRow,
  IconsH,
  Img,
} from "../styled/styledComponents";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import meReal from "../assets/meme.jpg";

export const Skills = () => {
  const nightMode = useSelector((state) => state.nightMode);
  const { t } = useTranslation();
  return (
    <div className="wrapper">
      <SkillsSection>
        <MeDiv>
          <MeFigure $darkMode={nightMode}>
            <MeImg src={meReal} alt="me" />
            <FigcaptionBase $darkMode={nightMode}>
              <i>{t("skills.me")}</i>
            </FigcaptionBase>
          </MeFigure>
          <MeP $darkMode={nightMode}>{t("skills.p")}</MeP>
        </MeDiv>
        <SkillsTitle $darkMode={nightMode}>{t("skills.h1")}</SkillsTitle>
        <IconsDiv>
          <IconsRow>
            <IconsH $darkMode={nightMode} $purple>
              HTML
            </IconsH>
            <Img src={htmlI} alt="html" />
          </IconsRow>
          <IconsRow>
            <IconsH $darkMode={nightMode} $mint>
              CSS
            </IconsH>
            <Img src={cssI} alt="css" />
          </IconsRow>
        </IconsDiv>
        <IconsDiv>
          <IconsRow>
            <IconsH $darkMode={nightMode} $pink>
              JavaScript
            </IconsH>
            <Img src={jsI} alt="js" />
          </IconsRow>
          <IconsRow>
            <IconsH $darkMode={nightMode} $purple>
              REACT
            </IconsH>
            <Img src={reactI} alt="react" />
          </IconsRow>
          <IconsRow>
            <IconsH $darkMode={nightMode} $mint>
              REDUX
            </IconsH>
            <Img src={reduxI} alt="redux" />
          </IconsRow>
        </IconsDiv>
      </SkillsSection>
    </div>
  );
};
