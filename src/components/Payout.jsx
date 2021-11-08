import styled from "styled-components";
import Button from "../reusuableComponents/Button";
import HeaderText from "../reusuableComponents/HeaderText";
import Currency from "./Currency";

const Payout = () => {
  return (
    <PayoutContainer>
      <HeaderText
        firstText="One-time Payout"
        secondText="Send money internationally"
      />
      <Currency />
      <Button />
    </PayoutContainer>
  );
};

const PayoutContainer = styled.div`
  width: 508px;
  height: 372px;
  background: #ffffff;
  border: 1px solid #f2f2f2;
  box-sizing: border-box;
  border-radius: 6px;
  padding: 33px;
  display: flex;
  flex-direction: column;
  /* justify-content: center;
  align-items: center; */
`;

export default Payout;
