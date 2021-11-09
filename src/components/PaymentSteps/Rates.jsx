import styled from "styled-components";
import minus from "../../assests/minus.svg";
const Rates = () => {
  return (
    <FliqPayTerms>
      <Line></Line>
      <ImageTerms>
        <Image src={minus} />
        <Image src={minus} />
        <Image src={minus} />
      </ImageTerms>
      <AmountTerms>
        <Amount>3.69 USD </Amount>
        <Amount>996.31 EUR </Amount>
        <Amount>1.14989 </Amount>
      </AmountTerms>
      <TextTerms>
        <Text>Transfer fee</Text>
        <Text>Amount we’ll convert</Text>
        <Text>Guaranteed rate (1hr)</Text>
      </TextTerms>
    </FliqPayTerms>
  );
};

const FliqPayTerms = styled.div`
  display: flex;
  align-items: center;
  position: relative;
`;
const ImageTerms = styled.div`
  display: flex;
  flex-direction: column;
`;
const AmountTerms = styled.div`
  display: flex;
  flex-direction: column;
`;
const TextTerms = styled.div`
  display: flex;
  flex-direction: column;
`;
const Image = styled.img`
  width: 20px;
  margin-bottom: 10px;
`;
const Amount = styled.span`
  margin-bottom: 10px;
  margin-left: 15px;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: left;
`;
const Text = styled.span`
  margin-bottom: 10px;
  margin-left: 15px;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: left;
`;
const Line = styled.div`
  width: 120px;
  height: 2px;
  background: #ededed;
  transform: rotate(90deg);
  position: absolute;
  left: -50px;
  top: 48px;
`;

export default Rates;
