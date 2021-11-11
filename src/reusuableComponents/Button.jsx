import styled from "styled-components";
import { mediaQueries } from "./mediaQueries";

const Button = ({ currentStep, updateStep }) => {
  return (
    <ButtonContainer>
      <CompareButton>
        <a href="https://xe.com" target="_blank" rel="noreferrer">
          Compare Rates
        </a>
      </CompareButton>
      <ContinueButton onClick={() => updateStep(currentStep + 1)}>
        Continue
      </ContinueButton>
    </ButtonContainer>
  );
};

const ButtonContainer = styled.div`
  display: flex;
  ${mediaQueries("md")`
  display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
  `}
  ${mediaQueries("xs")`
  display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
  `}
`;

const CompareButton = styled.button`
  width: 210.71px;
  height: 50px;
  border: 1px solid #4305eb;
  box-sizing: border-box;
  border-radius: 6px;
  margin-right: 2rem;
  background-color: transparent;

  ${mediaQueries("md")`
  margin-bottom: 10px;
    margin-right: 0;
    width: calc(253px - 20px);
  `}
  ${mediaQueries("xs")`
  margin-bottom: 10px;
    margin-right: 0;
    width: calc(253px - 20px);
  `}
`;
const ContinueButton = styled.button`
  background: #a98cf6;
  border-radius: 6px;
  border: none;
  width: 210.71px;
  height: 50px;
  cursor: pointer;

  ${mediaQueries("md")`
  width: calc(253px - 20px);
  `}
  ${mediaQueries("xs")`
  width: calc(253px - 20px);
  `}
`;
export default Button;
