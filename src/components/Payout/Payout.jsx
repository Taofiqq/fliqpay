import styled from "styled-components";
import Button from "../../reusuableComponents/Button";
import HeaderText from "../../reusuableComponents/HeaderText";
import Currency from "./Currency";

const mediaQueries = {
  mediumScreen: "@media (max-width: 380px)",
};

const Payout = ({ currentStep, updateStep }) => {
  return (
    <PayoutContainer>
      <HeaderText
        firstText="One-time Payout"
        secondText="Send money internationally"
      />
      <Currency />
      <Button currentStep={currentStep} updateStep={updateStep} />
    </PayoutContainer>
  );
};

const PayoutContainer = styled.div`
  width: 508px;
  height: 460px;
  background: #ffffff;
  border: 1px solid #f2f2f2;
  box-sizing: border-box;
  border-radius: 6px;
  padding: 33px;
  display: flex;
  flex-direction: column;

  ${mediaQueries.mediumScreen} {
    border: none;
    width: 414px;
  }
  /* justify-content: center;
  align-items: center; */
`;

export default Payout;
