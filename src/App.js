import { useState } from "react";
import Payout from "./components/Payout";
import Review from "./components/Review/Review";
import Receipient from "./components/Receipient/Receipient";
import styled from "styled-components";
import StepsNavigation from "./components/PaymentSteps/StepsNavigation";
import logo from "./assests/logo.png";
import cancel from "./assests/cancel.svg";
import ThankYou from "./reusuableComponents/ThankYou";

function App() {
  const labelArray = ["Amount", "Receipient", "Review", "Pay"];
  const [currentStep, setCurrentStep] = useState(1);

  const updateStep = (step) => {
    setCurrentStep(step);
  };

  return (
    <>
      <AppContainer>
        <Logo src={logo} alt="company logo" />
        {/* <Payment /> */}
        <StepsNavigation
          labelArray={labelArray}
          currentStep={currentStep}
          updateStep={updateStep}
        />
        <Cancel src={cancel} />
      </AppContainer>
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

const AppContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 30px;
  padding-bottom: 21px;
`;
const Logo = styled.img`
  width: 40px;
  cursor: pointer;
`;
const Cancel = styled.img`
  width: 10px;
  cursor: pointer;
`;

const CardsStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #f5f5f5;
  height: 100vh;
`;
export default App;
