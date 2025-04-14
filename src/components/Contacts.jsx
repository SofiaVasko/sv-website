import me from "../assets/me.jpg";

import viber from "../assets/viber.png";
import tg from "../assets/telegram.png";
import git from "../assets/github.png";
import gmail from "../assets/gmail.png";
import orcid from "../assets/orcid.svg";

import {
  HeightWrapperMain,
  ContactsSection,
  ContactsDivWithImg,
  WowDiv,
  WowNameDiv,
  ContactsH,
  MeFigureSecond,
  MeImgSecond,
  MeFigcaptionSecond,
  ContactsSecondH,
  ContactsLink,
  ContactsIcons,
} from "../styled/styledComponents";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { Link } from "react-router";

export const Contacts = () => {
  const nightMode = useSelector((state) => state.nightMode);
  const { t } = useTranslation();

  return (
    <HeightWrapperMain className="wrapper">
      <ContactsSection>
        <ContactsDivWithImg>
          <WowDiv>
            <WowNameDiv $darkMode={nightMode}>S.V.</WowNameDiv>
          </WowDiv>
          <ContactsH $darkMode={nightMode}>{t("contacts.word")}</ContactsH>

          <MeFigureSecond $darkMode={nightMode}>
            <MeImgSecond src={me} alt="me" />
            <MeFigcaptionSecond $darkMode={nightMode}>
              <i>{t("contacts.me")}</i>
            </MeFigcaptionSecond>
          </MeFigureSecond>
        </ContactsDivWithImg>
        <ContactsSecondH $darkMode={nightMode}>
          {t("contacts.p")}
        </ContactsSecondH>
        <ContactsLink>
          <a
            href="https://t.me/VaskoSofia"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            <ContactsIcons src={tg} alt="telegram" />
          </a>
          <a href="mailto:svaskowork@gmail.com?subject=Get in touch&body=Dear Sofia Vasko, ">
            {" "}
            <ContactsIcons src={gmail} alt="gmail" />{" "}
          </a>
          <a
            href="https://orcid.org/0009-0000-5354-240X"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            <ContactsIcons src={orcid} alt="orcid" />{" "}
          </a>
          <Link to="/contacts/viber">
            <ContactsIcons src={viber} alt="viber" />
          </Link>
          <a
            href="https://github.com/SofiaVasko"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            <ContactsIcons src={git} alt="github" />{" "}
          </a>
        </ContactsLink>
      </ContactsSection>
    </HeightWrapperMain>
  );
};
