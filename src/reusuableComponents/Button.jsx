import styled from "styled-components";

const mediaQueries = {
  mediumScreen: "@media (max-width: 768px)",
};
const Button = ({ currentStep, updateStep }) => {
  return (
    <ButtonContainer>
      <CompareButton>
        <a href="https://xe.com">Compare Rates</a>
      </CompareButton>
      <ContinueButton onClick={() => updateStep(currentStep + 1)}>
        Continue
      </ContinueButton>
    </ButtonContainer>
  );
};

const ButtonContainer = styled.div`
  display: flex;

  ${mediaQueries.mediumScreen} {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    ${mediaQueries.mediumScreen} {
      display: inline-block;
    }
  }
  /* justify-content: space-evenly; */
`;

const CompareButton = styled.button`
  width: 210.71px;
  height: 50px;
  border: 1px solid #4305eb;
  box-sizing: border-box;
  border-radius: 6px;
  margin-right: 2rem;
  background-color: transparent;

  ${mediaQueries.mediumScreen} {
    margin-bottom: 10px;
    margin-right: 0;
    width: calc(373px - 20px);
  }
`;
const ContinueButton = styled.button`
  background: #a98cf6;
  border-radius: 6px;
  border: none;
  width: 210.71px;
  height: 50px;
  cursor: pointer;
  ${mediaQueries.mediumScreen} {
    width: calc(373px - 20px);
  }
`;
export default Button;
