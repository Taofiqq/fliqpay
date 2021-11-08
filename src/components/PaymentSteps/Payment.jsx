import { useState } from "react";
import StepsNavigation from "./StepsNavigation";
import Payout from "../Payout";
import Receipient from "../Receipient/Receipient";
import Review from "../Review/Review";
const Payment = () => {
  const labelArray = ["Amount", "Receipient", "Review", "Pay"];
  const [currentStep, setCurrentStep] = useState(1);

  const updateStep = (step) => {
    setCurrentStep(step);
  };
  return (
    <Payment>
      <StepsNavigation
        labelArray={labelArray}
        currentStep={currentStep}
        updateStep={updateStep}
      />

      {currentStep === 1 && <Payout />}
      {currentStep === 2 && <Receipient />}
      {currentStep === 3 && <Review />}
      {currentStep === 4 && <p>Man</p>}
    </Payment>
  );
};

export default Payment;
