import Steps from "./Steps";
import styled from "styled-components";
import { mediaQueries } from "../../reusuableComponents/mediaQueries";

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

  ${mediaQueries("xs")`
  justify-content: space-between;
  align-items: center;
  margin-top:-1rem;

  `}
  ${mediaQueries("sm")`
  justify-content: space-between;
  align-items: center;
  margin-top:-1rem;
  `}
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

  ${mediaQueries("lg")`
  width: 433px
  `}
  ${mediaQueries("md")`
  width: 323px
  `}
  ${mediaQueries("sm")`
  width: 298px;
  `}
  ${mediaQueries("xs")`
  width: 280px;
  `}
`;

export default StepsNavigation;
