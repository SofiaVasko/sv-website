import { colors } from "./colors";
import styled, { css, createGlobalStyle, keyframes } from "styled-components";
import { Link } from "react-router-dom";
import moon from "../assets/moon.png";
import sun from "../assets/sun.png";
import wow from "../assets/wowEffect.jpg";
import burger from "../assets/burger.png";
import burgerLight from "../assets/burgerLight.png";
import closed from "../assets/closed.png";

export const Global = createGlobalStyle`
body {
background-color: ${(props) =>
  props.$darkMode ? colors.darkBackground : colors.lightBackground};
}
`;

const TransitionEffect = css`
  transition: 0.3s ease-in-out;
`;
const FlexContainer = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const ColorBlue = css`
  color: ${(props) => (props.$darkMode ? colors.neonBlue : colors.softBlue)};
`;

const ColorPurple = css`
  color: ${(props) =>
    props.$darkMode ? colors.neonPurple : colors.softPurple};
`;
const TextCenter = css`
  text-align: center;
`;
const BackgroundGrey = css`
  background-color: ${(props) =>
    props.$darkMode ? colors.darkGrey : colors.softGrey};
`;
const BackgroundBlue = css`
  background-color: ${(props) =>
    props.$darkMode ? colors.neonBlue : colors.softBlue};
`;
const BackgroundMint = css`
  background-color: ${(props) =>
    props.$darkMode ? colors.neonMint : colors.softMint};
`;
const BackgroundPurple = css`
  background-color: ${(props) =>
    props.$darkMode ? colors.neonPurple : colors.softPurple};
`;
const BoxShadowBlue = css`
  box-shadow: ${(props) =>
    props.$darkMode
      ? `0px 2px 10px ${colors.neonBlue}`
      : "0px 2px 10px rgba(0, 0, 0, 0.1)"};
`;
const Border3SolidBlue = css`
  border: 3px solid
    ${(props) => (props.$darkMode ? colors.neonBlue : colors.softBlue)};
`;
const Border3SolidPurple = css`
  border: 3px solid
    ${(props) => (props.$darkMode ? colors.neonPurple : colors.softPurple)};
`;

const shadowDarkTheme = keyframes`
  0%, 100% {text-shadow: 0px 0px 10px ${colors.neonBlue};}
  50% {text-shadow: -7px -7px 0 ${colors.neonBlue};}
`;
const shadowLightTheme = keyframes`
  0%, 100% {text-shadow: 0px 0px 0px ${colors.softBlue};}
  50% {text-shadow: -7px -7px 0 ${colors.softBlue};}
`;

const fadeInFromTop = keyframes`
  0% {opacity: 0; transform: translateY(-1rem);}
  100% {opacity: 1; transform: translateY(0);}
`;

const fadeInWowLighten = keyframes`
  0% {background-color: initial}
  100% {background-color: ${colors.lightBackground}}
`;

const fadeInWowDarken = keyframes`
  0% {background-color: initial}
  100% {background-color: ${colors.darkBackground}}
`;

const fadeInFromRight = keyframes`
  0% {opacity: 0; transform: translateX(5rem);}
  100% {opacity: 1; transform: translateX(0);}
`;

const fadeInFromLeft = keyframes`
  0% {opacity: 0; transform: translateX(-5rem);}
  100% {opacity: 1; transform: translateX(0);}
`;

const fadeInFromBottom = keyframes`
  0% {opacity: 0; transform: translateY(5rem);}
  100% {opacity: 1; transform: translateY(0);}
`;

const fadeInFromBottomRight = keyframes`
  0% {opacity: 0; transform: translate(5rem, 5rem);}
  100% {opacity: 1; transform: translate(0, 0);}
`;

const fadeInFromTopLeft = keyframes`
  0% {opacity: 0; transform: translate(-5rem, -5rem);}
  100% {opacity: 1; transform: translate(0, 0);}
`;

const iconSkillsWobble = keyframes`
  0% {transform: skew(0deg, 0deg);}
  50% {transform: skew(15deg, 15deg);}
  75% {transform: skew(-15deg, -15deg);}
  100% {transform: skew(0deg, 0deg);}
`;

const iconContactsWobble = keyframes`
  0% {transform: skew(0deg, 0deg);}
  50% {transform: skew(-20deg, -20deg);}
  75% {transform: skew(20deg, 20deg);}
  100% {transform: skew(0deg, 0deg);}
`;

export const HeightWrapper = styled.div`
  min-height: 100vh;
`;

export const HeaderBlock = styled.header`
  ${FlexContainer}
  justify-content: flex-start;
  ${BackgroundGrey}
  height: 70px;
  position: fixed;
  width: 100%;
  z-index: 10;
  top: 0px;
  right: 0px;
  ${BoxShadowBlue}
`;

export const HeaderContainer = styled.div`
  @media (max-width: 735px) {
    ${BackgroundGrey}
    ${BoxShadowBlue}
  }
`;
export const ButtonMobDark = styled.button`
  background: transparent url(${burger}) no-repeat center / cover;
  width: 48px;
  height: 48px;
  border: none;
  margin-left: 0.5rem;
  display: none;

  @media (max-width: 735px) {
    display: block;
  }
`;
export const ButtonMobLight = styled(ButtonMobDark)`
  background-image: url(${burgerLight});
`;
export const ButtonMobClose = styled(ButtonMobDark)`
  background-image: url(${closed});
  position: absolute;
  top: 10px;
  left: 0;
`;

export const Ul = styled.ul`
  display: flex;
  gap: 4rem;
  list-style-type: none;

  @media (max-width: 1000px) {
    gap: 1rem;
  }

  @media (max-width: 735px) {
    flex-direction: column;
  }
`;

export const LinkA = styled(Link)`
  ${ColorBlue}
  ${TransitionEffect}
font-size: 1.3rem;

  &:hover,
  &:focus {
    ${ColorPurple}
    text-shadow: ${(props) =>
      props.$darkMode ? `0 0 10px ${colors.neonPurple}` : "none"}
  }
`;

export const ButtonNight = styled.button`
  background: transparent url(${moon}) no-repeat right / 2.2rem;

  width: 6rem;
  height: 2.5rem;
  border-radius: 1rem;
  ${Border3SolidBlue}
  ${ColorBlue}
  ${TransitionEffect}
  text-align: left;
  font-size: 1rem;
  padding: 0.3rem;

  &:hover,
  &:focus {
    ${ColorPurple}
    ${Border3SolidPurple}
  }
`;

export const ButtonDay = styled(ButtonNight)`
  background-image: url(${sun});
  background-position: left;
  text-align: right;
`;

export const ToggleGroup = styled.div`
  display: flex;
  gap: 1.5rem;

  @media (max-width: 1000px) {
    gap: 1rem;
  }

  @media (max-width: 735px) {
    flex-direction: column-reverse;
  }
`;

export const ButtonLang = styled.button`
  width: 3rem;
  height: 2.5rem;
  border-radius: 50%;
  ${ColorBlue}
  background: transparent;
  ${Border3SolidBlue}
  ${TextCenter}
${TransitionEffect}

&:hover,
&:focus {
    ${Border3SolidPurple}
  }
`;

export const HeightWrapperMain = styled(HeightWrapper)`
  ${FlexContainer}
`;

export const MainWrapper = styled.main`
  ${FlexContainer}
  flex-direction: column;
  gap: 2rem;
  padding-top: 5rem;
`;

export const MainName = styled.h1`
  font-size: 3rem;
  ${TextCenter}
  ${TransitionEffect}
  color: ${(props) => (props.$darkMode ? colors.neonPink : colors.softPurple)};
  text-shadow: ${(props) =>
    props.$darkMode ? `0 0 10px ${colors.neonBlue}` : ""};

  animation: ${(props) =>
      props.$darkMode ? shadowDarkTheme : shadowLightTheme}
    2s infinite;

  @media (max-width: 430px) {
    font-size: 2.5rem;
  }

  @media (max-width: 325px) {
    font-size: 2.3rem;
  }

  @media (max-width: 280px) {
    font-size: 1.8rem;
  }
`;

export const MainH = styled.h2`
  font-size: 2rem;
  ${ColorBlue}
  ${TextCenter}
text-shadow: ${(props) =>
    props.$darkMode ? `0 0 10px ${colors.neonBlue}` : ""};

  ${TransitionEffect}

  @media (max-width: 430px) {
    font-size: 1.5rem;
  }

  @media (max-width: 325px) {
    font-size: 1.3rem;
  }

  @media (max-width: 280px) {
    font-size: 1rem;
  }
`;

const Button = css`
  ${TextCenter}
  ${FlexContainer}
${TransitionEffect}
border-radius: 2rem;
  font-size: 1.2rem;
  font-weight: bold;
`;

export const ButtonMain = styled.a`
  width: 15rem;
  height: 3rem;
  ${BackgroundMint}
  color: ${(props) => (props.$darkMode ? "#000" : "#fff")};
  box-shadow: ${(props) =>
    props.$darkMode
      ? `0px 0px 15px ${colors.neonMint}`
      : `0px 0px 5px rgba(0, 0, 0, 0.1)`};
  ${Button}

  &:hover,
&:focus {
    ${BackgroundBlue}
    box-shadow: ${(props) =>
      props.$darkMode
        ? `0px 0px 20px ${colors.neonBlue}`
        : `0px 0px 5px rgba(0, 0, 0, 0.2)`};
  }

  @media (max-width: 325px) {
    width: 12rem;
  }

  @media (max-width: 280px) {
    width: 9rem;
    font-size: 1rem;
  }
`;

export const SkillsSection = styled.section`
  padding: 9rem 0rem 5rem;
`;

export const MeDiv = styled.div`
  ${FlexContainer}
  gap: 2rem;

  @media (max-width: 710px) {
    flex-direction: column;
  }
`;

export const FigureBase = styled.figure`
  max-width: 300px;
  max-height: 410px;
  width: 100%;
  height: 100%;
  ${BackgroundGrey}
  box-shadow: ${(props) =>
    props.$darkMode
      ? `0 4px 8px 0 rgba(0, 0, 0, 0.2),  0px 2px 10px ${colors.neonBlue}`
      : "0 4px 8px 0 rgba(0, 0, 0, 0.2),  0px 2px 10px rgba(0, 0, 0, 0.19)"};
  ${FlexContainer}
  justify-content: flex-start;
  flex-direction: column;
  gap: 2rem;
  transform: rotate(-5deg);
  margin-left: 2rem;
  ${TransitionEffect}
`;

export const MeFigure = styled(FigureBase)`
  @media (max-width: 710px) {
    margin: 0rem;
  }

  @media (max-width: 390px) {
    max-width: 250px;
    max-height: 360px;
  }

  @media (max-width: 300px) {
    max-width: 200px;
    max-height: 310px;
  }
`;
export const ImgBase = styled.img`
  max-width: 300px;
  width: 100%;
`;

export const MeImg = styled(ImgBase)`
  @media (max-width: 390px) {
    max-width: 250px;
  }
  @media (max-width: 300px) {
    max-width: 200px;
  }
`;
export const FigcaptionBase = styled.figcaption`
  font-size: 2rem;
  ${ColorBlue}
  ${TextCenter}
padding-bottom: 2rem;

  animation: ${fadeInFromTop} 0.7s 1;
`;

export const MeP = styled.p`
  font-size: 1.3rem;
  ${ColorBlue}
  ${TextCenter}
margin-right: 2rem;
  flex-shrink: 2;

  animation: ${fadeInFromBottomRight} 0.7s 1;

  @media (max-width: 731px) {
    font-size: 1.2rem;
    margin: 0rem 1rem;
  }

  @media (max-width: 390px) {
    font-size: 1rem;
  }
`;

export const SkillsTitle = styled.h1`
  ${ColorBlue}
  text-shadow: ${(props) =>
    props.$darkMode ? `0 0 20px ${colors.neonBlue}` : ""};
  text-decoration: overline;
  animation: ${fadeInFromRight} 0.7s 1;

  ${TransitionEffect}
  ${TextCenter}
font-size: 1.5rem;
  padding: 4rem 0rem;
`;

export const Img = styled.img`
  max-width: 170px;
  animation: ${iconSkillsWobble} 1s 1;

  @media (max-width: 730px) {
    max-width: 120px;
  }

  @media (max-width: 620px) {
    max-width: 135px;
  }

  @media (max-width: 360px) {
    max-width: 100px;
  }
`;
export const IconsDiv = styled.div`
  ${FlexContainer}
  gap: 6rem;

  @media (max-width: 620px) {
    flex-direction: column;
    gap: 1rem;
  }
`;

export const IconsRow = styled.div`
  ${FlexContainer}
  gap: 1rem;

  @media (max-width: 1120px) {
    flex-direction: column;
  }

  @media (max-width: 620px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    ${TextCenter}
    grid-gap: 1rem;
    padding: 2rem 0rem;
  }
`;

export const IconsH = styled.h2`
  color: ${(props) => {
    if (props.$purple) {
      return props.$darkMode ? colors.neonPurple : colors.softPurple;
    } else if (props.$mint) {
      return props.$darkMode ? colors.neonMint : colors.softMint;
    } else if (props.$pink) {
      return colors.neonPink;
    } else {
      return props.$darkMode ? colors.neonBlue : colors.softBlue;
    }
  }};

  ${TransitionEffect}
  animation: ${fadeInFromBottom} 0.7s 1;

  @media (max-width: 360px) {
    font-size: 1.1rem;
  }
`;

export const ContactsSection = styled.section`
  padding-top: 7.5rem;
  @media (max-width: 1100px) {
    padding-top: 5rem;
  }
`;

export const ContactsDivWithImg = styled.div`
  ${FlexContainer}
  gap: 1rem;

  padding-bottom: 3rem;

  @media (max-width: 1100px) {
    flex-wrap: wrap;
  }
`;

export const WowDiv = styled.div`
  background: url(${wow}) no-repeat center / 100%;
  border-radius: 1rem;
  margin-left: 1rem;

  @media (max-width: 760px) {
    margin: 0rem 0.5rem;
  }
`;

export const WowNameDiv = styled.h1`
  color: ${(props) =>
    props.$darkMode ? "rgb(255, 255, 255)" : "rgb(0, 0, 0)"};
  background-color: ${(props) =>
    props.$darkMode ? `${colors.darkBackground}` : `${colors.lightBackground}`};
  transition: 0.5s ease-in-out;

  font-size: 10rem;
  ${TextCenter}
  mix-blend-mode: ${(props) => (props.$darkMode ? "darken" : "lighten")};

  animation: ${(props) =>
      props.$darkMode ? fadeInWowDarken : fadeInWowLighten}
    1.5s 1;

  @media (max-width: 460px) {
    font-size: 8rem;
  }

  @media (max-width: 400px) {
    font-size: 6rem;
  }
`;
export const ContactsH = styled.h2`
  ${ColorBlue}
  font-size: 2rem;
  ${TextCenter}
  max-width: 360px;
  width: 100%;
  padding: 0rem 0.5rem;

  @media (max-width: 460px) {
    font-size: 1.7rem;
  }
`;

export const ContactsSecondH = styled.h2`
  color: ${(props) => (props.$darkMode ? colors.neonBlue : colors.neonPink)};
  text-shadow: ${(props) =>
    props.$darkMode ? `0 0 20px ${colors.neonBlue}` : "none"};
  text-decoration: overline;
  font-size: 1.5rem;
  ${TextCenter}
  padding: 2.2rem 0.5rem 0rem;

  animation: ${fadeInFromTopLeft} 0.7s 1;

  @media (max-width: 460px) {
    font-size: 1.3rem;
  }

  @media (max-width: 400px) {
    font-size: 1.2rem;
  }

  @media (max-width: 360px) {
    font-size: 1.1rem;
  }

  @media (max-width: 330px) {
    font-size: 0.9rem;
  }
`;

export const ContactsLink = styled.div`
  ${FlexContainer}
  gap: 1.5rem;

  padding: 1rem 0rem 0.5rem;

  @media (max-width: 460px) {
    gap: 0.5rem;
  }
`;

export const ContactsIcons = styled.img`
  width: 50px;
  transform-origin: center center;
  animation: ${iconContactsWobble} 1s 1;
  @media (max-width: 400px) {
    width: 40px;
  }
`;

export const MeFigureSecond = styled(FigureBase)`
  margin: 1rem 3rem 0rem 0rem;

  @media (max-width: 723px) {
    margin: 1rem 2rem;
  }

  @media (max-width: 400px) {
    max-width: 250px;
    max-height: 360px;
  }
`;

export const MeFigcaptionSecond = styled(FigcaptionBase)`
  @media (max-width: 460px) {
    font-size: 1.9rem;
  }
`;

export const MeImgSecond = styled(ImgBase)`
  @media (max-width: 400px) {
    max-width: 250px;
  }
`;

export const ViberSection = styled.section`
  padding-top: 6rem;
  ${FlexContainer}
  flex-direction: column;
`;

export const ViberH = styled(ContactsH)`
  font-size: 1.5rem;
  padding: 0rem 1rem 2rem;
  max-width: 1440px;
  width: 100%;
  animation: ${fadeInFromTopLeft} 0.7s 1;
`;

export const ViberHSecond = styled(ContactsH)`
  font-size: 1.1rem;
  max-width: 1440px;
  width: 100%;
  padding: 0rem 1rem;
  animation: ${fadeInFromBottomRight} 0.7s 1;

  @media (max-width: 500px) {
    font-size: 0.9rem;
  }
`;

export const ViberIcon = styled.img`
  vertical-align: middle;
  width: 35px;
`;
export const ViberDiv = styled.div`
  ${FlexContainer}
  padding: 2rem 0rem;
`;

export const ViberFigure = styled(FigureBase)`
  transform: rotate(0deg);
  margin: 0rem;
  box-shadow: ${(props) =>
    props.$darkMode
      ? `0 4px 8px 0 rgba(0, 0, 0, 0.2),  0px 2px 10px ${colors.neonPurple}`
      : "0 4px 8px 0 rgba(0, 0, 0, 0.2),  0px 2px 10px rgba(0, 0, 0, 0.19)"};

  @media (max-width: 400px) {
    max-width: 250px;
    max-height: 360px;
  }
`;

export const ViberImg = styled(ImgBase)`
  @media (max-width: 400px) {
    max-width: 250px;
  }
`;

export const ViberFigcaption = styled(FigcaptionBase)`
  color: ${(props) => (props.$darkMode ? colors.neonPurple : "#8F5DB7")};
`;

export const ViberButton = styled(Link)`
  width: 9rem;
  height: 3rem;
  ${BackgroundPurple}
  color: ${(props) => (props.$darkMode ? "#000" : "#fff")};
  box-shadow: ${(props) =>
    props.$darkMode
      ? `0px 0px 15px ${colors.neonPurple}`
      : `0px 0px 5px rgba(0, 0, 0, 0.1)`};
  margin: 0rem 0rem 1rem;
  ${Button}

  &:hover,
&:focus {
    ${BackgroundBlue}
    box-shadow: ${(props) =>
      props.$darkMode
        ? `0px 0px 20px ${colors.neonBlue}`
        : `0px 0px 5px rgba(0, 0, 0, 0.2)`};
  }
`;

export const NotSection = styled.section`
  padding-top: 5rem;
  ${FlexContainer}
  flex-direction: column;
  gap: 0.5rem;
  width: 100%;
`;

const NotH = css`
  color: ${colors.neonPink};
  ${TextCenter}
  padding: 0rem 1rem;
  font-size: 2.5rem;
`;

export const NotHFirst = styled.h1`
  ${NotH}
  animation: ${fadeInFromBottom} 0.7s 1;
`;
export const NotHSecond = styled.h2`
  ${NotH}
  animation: ${fadeInFromBottomRight} 0.7s 1;
`;

export const NotP = styled.p`
  ${ColorBlue}
  font-size: 1.4rem;
  ${TextCenter}
  padding: 0rem 1rem;

  animation: ${fadeInFromTopLeft} 0.7s 1;
`;
export const ProjectsSection = styled(SkillsSection)`
  padding: 7rem 0rem 0rem;
`;

export const ProjectsTitle = styled(SkillsTitle)`
  padding: 0rem;
`;

export const ProjectsDiv = styled.div`
  padding: 2rem 0rem;
  ${FlexContainer}
  flex-wrap: wrap;
  gap: 2rem;
`;

export const ProjectsFigure = styled(FigureBase)`
  transform: rotate(0deg);
  margin: 0.5rem;
  max-width: 400px;
  max-height: 510px;
  gap: 4rem;

  @media (max-width: 450px) {
    max-width: 300px;
    max-height: 410px;
  }

  @media (max-width: 350px) {
    max-width: 250px;
    max-height: 360px;
  }
`;

export const ProjectsDivWithLinks = styled.div`
  ${FlexContainer}
  gap: 6rem;

  @media (max-width: 350px) {
    gap: 3rem;
  }
`;

export const ProjectsFigcaption = styled(FigcaptionBase)`
  padding: 0rem;

  @media (max-width: 350px) {
    font-size: 1.5rem;
  }
`;

const ProjectsLinks = css`
  color: ${colors.neonPink};
  font-size: 1.2rem;
  ${TransitionEffect}

  &:hover,
&:focus {
    ${ColorPurple}
  }

  @media (max-width: 350px) {
    font-size: 1rem;
  }
`;

export const ProjectsPinkLink = styled(Link)`
  ${ProjectsLinks};
`;

export const ProjectsPinkA = styled.a`
  ${ProjectsLinks};
`;

export const ProjectSection = styled.section`
  padding-top: 6rem;
`;

export const ProjectH = styled.h1`
  padding-bottom: 0.5rem;
  font-size: 1.9rem;
  color: ${colors.neonPink};
  ${TextCenter}
  animation: ${fadeInFromLeft} 0.7s 1;

  @media (max-width: 350px) {
    padding: 0rem 1rem 0.5rem;
  }
`;

export const ProjectArticle = styled.article`
  ${FlexContainer}
  ${BackgroundGrey}
box-shadow: ${(props) =>
    props.$darkMode
      ? "0px 0px 10px rgba(255, 255, 255, 0.1)"
      : "0px 0px 10px rgba(0, 0, 0, 0.1)"};

  @media (max-width: 700px) {
    flex-direction: column-reverse;
  }
`;

export const ProjectImg = styled.img`
  max-width: 500px;
  max-height: 500px;
  width: 100%;
  height: 100%;
  padding: 2rem;

  @media (max-width: 850px) {
    max-width: 400px;
    max-height: 400px;
    padding: 1rem;
  }

  @media (max-width: 450px) {
    max-width: 350px;
    max-height: 350px;
  }

  @media (max-width: 350px) {
    max-width: 300px;
    max-height: 300px;
  }
`;

export const ProjectP = styled(MeP)`
  text-align: justify;

  @media (max-width: 850px) {
    font-size: 1.2rem;
    margin-right: 1rem;
  }

  @media (max-width: 731px) {
    font-size: 1.1rem;
    margin-left: 0;
  }

  @media (max-width: 700px) {
    ${TextCenter}
    margin: 1rem;
  }

  @media (max-width: 390px) {
    font-size: 1rem;
  }
`;

export const ProjectDivWithButtonLinks = styled.div`
  ${FlexContainer}
  justify-content: space-evenly;
  padding: 2rem 0rem;

  @media (max-width: 450px) {
    display: grid;
    grid-template-columns: repeat(2, auto);
    grid-template-rows: repeat(2, auto);
    grid-gap: 2rem;
  }
`;

const ProjectButtonsLinks = css`
  width: 9rem;
  height: 3rem;
  font-size: 1rem;
  ${BackgroundMint}
  color: ${(props) => (props.$darkMode ? "#000" : "#fff")};
  box-shadow: ${(props) =>
    props.$darkMode
      ? `0px 0px 15px ${colors.neonMint}`
      : `0px 0px 5px rgba(0, 0, 0, 0.1)`};
  margin: 0;
  ${TextCenter}

  &:hover,
&:focus {
    ${BackgroundBlue}
    box-shadow: ${(props) =>
      props.$darkMode
        ? `0px 0px 15px ${colors.neonBlue}`
        : `0px 0px 5px rgba(0, 0, 0, 0.1)`};
  }

  @media (max-width: 630px) {
    width: 6rem;
    height: 2.2rem;
    font-size: 0.7rem;
  }
`;

export const ProjectButtonLink = styled(ViberButton)`
  ${ProjectButtonsLinks}
`;
export const ProjectButtonLinkBlue = styled(ProjectButtonLink)`
  ${BackgroundBlue}
  box-shadow: ${(props) =>
    props.$darkMode
      ? `0px 0px 15px ${colors.neonBlue}`
      : `0px 0px 5px rgba(0, 0, 0, 0.1)`};

  &:hover,
  &:focus {
    ${BackgroundPurple}
    box-shadow: ${(props) =>
      props.$darkMode
        ? `0px 0px 15px ${colors.neonPurple}`
        : `0px 0px 5px rgba(0, 0, 0, 0.1)`};
  }
`;

const PinkButton = css`
  background-color: ${colors.neonPink};
  box-shadow: ${(props) =>
    props.$darkMode
      ? `0px 0px 15px ${colors.neonPink}`
      : `0px 0px 5px rgba(0, 0, 0, 0.1)`};
`;

export const ProjectButtonA = styled.a`
  ${Button}
  ${ProjectButtonsLinks}
  ${PinkButton}
`;

export const NotFoundButtonLink = styled(ViberButton)`
  ${PinkButton}
  animation: ${fadeInFromLeft} 0.7s 1;
`;
