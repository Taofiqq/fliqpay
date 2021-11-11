import styled from "styled-components";
import Button from "../../reusuableComponents/Button";
import HeaderText from "../../reusuableComponents/HeaderText";
import Currency from "./Currency";
import { mediaQueries } from "../../reusuableComponents/mediaQueries";

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

  ${mediaQueries("md")`
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: none;
  `}
  ${mediaQueries("sm")`
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: none;
  `}

  ${mediaQueries("xs")`
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: none;
  `}
`;

export default Payout;
