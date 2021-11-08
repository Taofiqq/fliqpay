import styled from "styled-components";
const HeaderText = ({ firstText, secondText }) => {
  return (
    <TextContainer>
      <FirstText>{firstText}</FirstText>
      <SecondText>{secondText}</SecondText>
    </TextContainer>
  );
};

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
const FirstText = styled.h1`
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  color: #2c0c6a;
`;
const SecondText = styled.p`
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 24px;
  color: #877e9e;
`;
export default HeaderText;
