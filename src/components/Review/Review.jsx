import styled from "styled-components";
const Review = () => {
  return (
    <ReviewContainer>
      <Text>Review details of your transfer</Text>
      <Line></Line>
      <DetailsContainer>
        <Send>You Send</Send>
        <Amount>1,000USD</Amount>
      </DetailsContainer>
      <DetailsContainer>
        <Send>Total fees (included)</Send>
        <Amount>3.69 USD</Amount>
      </DetailsContainer>
      <DetailsContainer>
        <Send>Amount we’ll convert</Send>
        <Amount>996.31 USD</Amount>
      </DetailsContainer>
      <DetailsContainer>
        <Send>Guaranteed rate</Send>
        <Amount>1.10289</Amount>
      </DetailsContainer>
      <DetailsContainer>
        <Send>Johnny gets</Send>
        <Amount>1,248.63 EUR</Amount>
      </DetailsContainer>

      <Line></Line>

      <DetailsContainer>
        <Send>Name</Send>
        <Amount>Johnny Gbadamosi</Amount>
      </DetailsContainer>
      <DetailsContainer>
        <Send>Email address</Send>
        <Amount>johnny.gbadamosi@gmail.com</Amount>
      </DetailsContainer>
      <DetailsContainer>
        <Send>IBAN / Account number</Send>
        <Amount>DE898919013902102D</Amount>
      </DetailsContainer>

      <Button>Confirm and Continue</Button>
    </ReviewContainer>
  );
};

const ReviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 35px;
  width: 508px;
  height: 510px;
  background: #ffffff;
  border: 1px solid #f2f2f2;
  box-sizing: border-box;
  border-radius: 6px;
`;
const Text = styled.h1`
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 24px;
  color: #2c0c6a;
`;
const Line = styled.div`
  width: 443px;
  height: 0px;
  border: 1px solid #f2f2f2;
  margin-top: 13px;
`;
const DetailsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 19px;
`;
const Send = styled.p``;
const Amount = styled.span``;
const Button = styled.button`
  width: 443.69px;
  height: 50px;
  background: #6fae75;
  border-radius: 6px;
  border: none;
  outline: none;
  margin-top: 33px;
  color: white;
`;
export default Review;
