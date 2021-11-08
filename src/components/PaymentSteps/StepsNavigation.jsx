import Steps from "./Steps";
import styled from "styled-components";

const StepsNavigation = ({ labelArray, updateStep, currentStep }) => {
  return (
    <StepNavigationWrapper>
      {labelArray.map((item, index) => (
        <Steps
          label={item}
          key={index}
          index={index}
          updateStep={updateStep}
          selected={currentStep === index + 1}
        />
      ))}
    </StepNavigationWrapper>
  );
};

const StepNavigationWrapper = styled.div`
  display: flex;
`;
export default StepsNavigation;
