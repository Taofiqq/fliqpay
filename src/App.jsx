// imports
import { useState } from "react";
import Payout from "./components/Payout/Payout";
import Review from "./components/Review/Review";
import Receipient from "./components/Receipient/Receipient";
import StepsNavigation from "./components/PaymentSteps/StepsNavigation";
import ThankYou from "./reusuableComponents/ThankYou";
import styled from "styled-components";
import logo from "./assests/logo.png";
import cancel from "./assests/cancel.svg";
import GlobalStyles from "./styles/globalStyles";
import Scroll from "./components/SmoothScroll";
import { mediaQueries } from "./reusuableComponents/mediaQueries";

// App component

function App() {
  const labelArray = ["Amount", "Receipient", "Review", "Pay"];
  const [currentStep, setCurrentStep] = useState(1);

  const updateStep = (step) => {
    setCurrentStep(step);
  };

  return (
    <>
      <GlobalStyles />
      <Scroll />
      <NavbarContainer>
        <Logo src={logo} alt="company logo" />
        <StepsNavigation
          labelArray={labelArray}
          currentStep={currentStep}
          updateStep={updateStep}
        />
        <Cancel src={cancel} />
      </NavbarContainer>
      <CardsStyle>
        {currentStep === 1 && (
          <Payout currentStep={currentStep} updateStep={setCurrentStep} />
        )}
        {currentStep === 2 && (
          <Receipient currentStep={currentStep} updateStep={setCurrentStep} />
        )}
        {currentStep === 3 && (
          <Review currentStep={currentStep} updateStep={setCurrentStep} />
        )}
        {currentStep === 4 && <ThankYou />}
      </CardsStyle>
    </>
  );
}

const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 30px;
  padding-bottom: 21px;

  ${mediaQueries("lg")`
  margin-top: 5px;
overflow: hidden;
display: grid;
grid-template-columns: repea(4, 1fr);
grid-template-rows: repeat(2, 1fr);
grid-gap: 1rem;
  `}
  ${mediaQueries("md")`
  margin-top: 5px;
overflow: hidden;
display: grid;
grid-template-columns: repea(4, 1fr);
grid-template-rows: repeat(2, 1fr);
grid-gap: 1rem;
  `}
  ${mediaQueries("sm")`
  margin-top: 5px;
overflow: hidden;
display: grid;
grid-template-columns: repea(4, 1fr);
grid-template-rows: repeat(2, 1fr);
grid-gap: 1rem;
  `}
  ${mediaQueries("xs")`
  margin-top: 5px;
overflow: hidden;
display: grid;
grid-template-columns: repea(4, 1fr);
grid-template-rows: repeat(2, 1fr);
grid-gap: 1rem;
  `}
`;
const Logo = styled.img`
  width: 40px;
  cursor: pointer;

  ${mediaQueries.mediumScreen} {
    grid-row: 1/2;
  }
`;
const Cancel = styled.img`
  width: 10px;
  cursor: pointer;

  ${mediaQueries.mediumScreen} {
    grid-row: 1/2;
  }
`;

const CardsStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #f5f5f5;
  height: 100vh;

  ${mediaQueries("md")`
  background-color: white;
  overflow: hidden;
  `}
  ${mediaQueries("sm")`
  background-color: white;
  overflow: hidden;
  `}
  ${mediaQueries("xs")`
  background-color: white;
  overflow: hidden;
  `}
`;
export default App;
