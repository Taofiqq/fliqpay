import Steps from "./Steps";
import styled from "styled-components";

const mediaQueries = {
  mediumScreen: "@media (max-width: 768px)",
};
const StepsNavigation = ({ labelArray, updateStep, currentStep }) => {
  return (
    <StepNavigationWrapper>
      <Progress value={currentStep} max="4" fill="red"></Progress>

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
  position: relative;

  ${mediaQueries.mediumScreen} {
    grid-row: 4/5;
    grid-column: 2 / -1;
    justify-content: center;
  }
  /* flex-direction: column; */
`;

const Progress = styled.progress`
  width: 536px;
  height: 3px;
  background: #ededed;
  border-radius: 5px;
  position: absolute;
  &::-webkit-progress-value {
    background: linear-gradient(90deg, #4305eb 64.83%, #636166 99.42%);
  }
`;

export default StepsNavigation;
