import { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import {
  HeightWrapperMain,
  MainWrapper,
  MainName,
  MainH,
  ButtonMain,
} from "../styled/styledComponents";

export const Main = () => {
  const textRef = useRef(null);
  const nightMode = useSelector((state) => state.nightMode);
  const { t } = useTranslation();
  function handleText() {
    let count = 0;
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const target = textRef.current;
    const interval = setInterval(() => {
      target.innerText = target.innerText
        .split("")
        .map((letter, index) => {
          if (index < count) {
            return target.dataset.value[index];
          }
          return letters[Math.floor(Math.random() * 26)];
        })
        .join("");

      if (count >= 9) clearInterval(interval);
      count += 1 / 3;
    }, 70);
  }

  useEffect(() => {
    const interval = setInterval(() => handleText(), 2700);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <HeightWrapperMain className="wrapper">
      <MainWrapper>
        <MainName $darkMode={nightMode}>{t("main.name")}</MainName>
        <MainH $darkMode={nightMode}>
          <span ref={textRef} data-value="FRONTEND">
            {t("main.span")}
          </span>{" "}
          {t("main.prof")}
        </MainH>
        <ButtonMain
          href="mailto:svaskowork@gmail.com?subject=Get in touch&body=Dear Sofia Vasko, "
          $darkMode={nightMode}
          className="buttonMain"
        >
          {t("main.button")}
        </ButtonMain>
      </MainWrapper>
    </HeightWrapperMain>
  );
};
