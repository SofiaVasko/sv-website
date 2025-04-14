import { Outlet } from "react-router-dom";
import {
  HeaderBlock,
  Ul,
  LinkA,
  ButtonNight,
  ButtonDay,
  ToggleGroup,
  ButtonLang,
  HeaderContainer,
  ButtonMobDark,
  ButtonMobLight,
  ButtonMobClose,
} from "../styled/styledComponents";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useMediaQuery } from "react-responsive";

export const Header = () => {
  const [click, setClick] = useState(false);
  const nightMode = useSelector((state) => state.nightMode);
  const dispatch = useDispatch();
  const { t, i18n } = useTranslation();

  const notDesktop = useMediaQuery({ query: "(max-width: 735px)" });

  const [menu, setMenu] = useState(false);

  const divBlur = notDesktop && menu ? "blur active" : "blur";

  function toggleMode() {
    dispatch({
      type: "GET_LIGHT_MODE",
      payload: !nightMode,
    });
  }

  function toggleLang() {
    setClick((prevState) => !prevState);
  }

  function getTranslation(language) {
    i18n.changeLanguage(language);
  }

  function translateAndToggle(language) {
    toggleLang();
    getTranslation(language);
  }

  function getMobileMenu() {
    if (!notDesktop) return;
    setMenu((prevState) => !prevState);
  }

  useEffect(() => {
    if (!notDesktop) {
      setMenu(false);
    }
  }, [notDesktop]);

  useEffect(() => {
    if (notDesktop && menu) {
      document.body.classList.add("lock");
    } else {
      document.body.classList.remove("lock");
    }
  }, [notDesktop, menu]);

  return (
    <div className="wrapper">
      <div onClick={getMobileMenu} className={divBlur}></div>
      <HeaderBlock $darkMode={nightMode}>
        {nightMode ? (
          <ButtonMobDark onClick={getMobileMenu}></ButtonMobDark>
        ) : (
          <ButtonMobLight onClick={getMobileMenu}></ButtonMobLight>
        )}

        <HeaderContainer
          className={`wrapper ${menu ? "navbar" : "headerContainer"}`}
          $darkMode={nightMode}
        >
          <ButtonMobClose onClick={getMobileMenu}></ButtonMobClose>
          <nav className="nav">
            <Ul>
              <li>
                <LinkA to="/" $darkMode={nightMode} onClick={getMobileMenu}>
                  {t("header.main")}
                </LinkA>
              </li>
              <li>
                <LinkA
                  to="/skills"
                  $darkMode={nightMode}
                  onClick={getMobileMenu}
                >
                  {t("header.skills")}
                </LinkA>
              </li>
              <li>
                <LinkA
                  to="/projects"
                  $darkMode={nightMode}
                  onClick={getMobileMenu}
                >
                  {t("header.projects")}
                </LinkA>
              </li>
              <li>
                <LinkA
                  to="/contacts"
                  $darkMode={nightMode}
                  onClick={getMobileMenu}
                >
                  {t("header.contacts")}
                </LinkA>
              </li>
            </Ul>
          </nav>
          <ToggleGroup className="toggleGroup">
            {click ? (
              <ButtonLang
                onClick={() => translateAndToggle("en")}
                $darkMode={nightMode}
              >
                EN
              </ButtonLang>
            ) : (
              <ButtonLang
                onClick={() => translateAndToggle("uk")}
                $darkMode={nightMode}
              >
                UK
              </ButtonLang>
            )}
            {nightMode ? (
              <ButtonDay onClick={toggleMode} $darkMode={nightMode}>
                {t("toggle.day")}
              </ButtonDay>
            ) : (
              <ButtonNight onClick={toggleMode} $darkMode={nightMode}>
                {t("toggle.night")}
              </ButtonNight>
            )}
          </ToggleGroup>
        </HeaderContainer>
      </HeaderBlock>
      <Outlet />
    </div>
  );
};
