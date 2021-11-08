import styled from "styled-components";
const Button = () => {
  return (
    <ButtonContainer>
      <CompareButton>Compare Rates</CompareButton>
      <ContinueButton>Continue</ContinueButton>
    </ButtonContainer>
  );
};

const ButtonContainer = styled.div`
  display: flex;
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
`;
const ContinueButton = styled.button`
  background: #a98cf6;
  border-radius: 6px;
  border: none;
  width: 210.71px;
  height: 50px;
`;
export default Button;
