import viber from "../assets/viber.png";
import viberQ from "../assets/viberQr.jpg";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import {
  HeightWrapperMain,
  ViberSection,
  ViberH,
  ViberFigure,
  ViberImg,
  ViberFigcaption,
  ViberDiv,
  ViberHSecond,
  ViberIcon,
  ViberButton,
} from "../styled/styledComponents";

export const Viber = () => {
  const nightMode = useSelector((state) => state.nightMode);
  const { t } = useTranslation();

  return (
    <HeightWrapperMain className="wrapper">
      <ViberSection>
        <ViberH $darkMode={nightMode}>{t("contacts.viber")}</ViberH>
        <ViberFigure $darkMode={nightMode}>
          <ViberImg src={viberQ} alt="Viber QR-code" />
          <ViberFigcaption $darkMode={nightMode}>
            {" "}
            <i>{t("contacts.viber.span")}</i>
          </ViberFigcaption>
        </ViberFigure>
        <ViberDiv>
          <ViberHSecond $darkMode={nightMode}>
            {t("contacts.viber.word")}{" "}
            <ViberIcon src={viber} alt="Viber Icon" />{" "}
          </ViberHSecond>
        </ViberDiv>
        <ViberButton to="/contacts" $darkMode={nightMode}>
          {t("contacts.viber.back")}
        </ViberButton>
      </ViberSection>
    </HeightWrapperMain>
  );
};
