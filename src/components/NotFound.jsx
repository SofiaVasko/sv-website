import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import {
  HeightWrapperMain,
  NotSection,
  NotHFirst,
  NotHSecond,
  NotP,
  NotFoundButtonLink,
} from "../styled/styledComponents";

export const NotFound = () => {
  const nightMode = useSelector((state) => state.nightMode);
  const { t } = useTranslation();

  return (
    <HeightWrapperMain className="wrapper">
      <NotSection>
        <NotHFirst $darkMode={nightMode}>{t("notfound.num")}</NotHFirst>
        <NotHSecond $darkMode={nightMode}>{t("notfound.h")}</NotHSecond>
        <NotP $darkMode={nightMode}>{t("notfound.p")}</NotP>
        <NotFoundButtonLink to="/" $darkMode={nightMode}>
          {t("contacts.viber.back")}
        </NotFoundButtonLink>
      </NotSection>
    </HeightWrapperMain>
  );
};
