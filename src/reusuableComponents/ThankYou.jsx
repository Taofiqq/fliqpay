import styled from "styled-components";
const ThankYou = () => {
  return (
    <ThankYouContainer>
      <ThankYouTitle>Thank you for your using FliqPay! 😇</ThankYouTitle>
      <ThankYouSubtitle>Hope to see you around next time.</ThankYouSubtitle>
    </ThankYouContainer>
  );
};

const ThankYouContainer = styled.div`
  width: 508px;
  height: 372px;
  background: #ffffff;
  border: 1px solid #f2f2f2;
  box-sizing: border-box;
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const ThankYouTitle = styled.h1`
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  color: #2c0c6a;
`;
const ThankYouSubtitle = styled.h2`
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 24px;
  color: #2c0c6a;
`;

export default ThankYou;
