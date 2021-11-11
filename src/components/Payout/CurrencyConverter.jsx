import styled from "styled-components";
import dropDown from "../../assests/dropdown.svg";
import { mediaQueries } from "../../reusuableComponents/mediaQueries";
const CurrencyConverter = ({
  currencyOptions,
  selectedCurrency,
  onChangeAmount,
  onChangeCurrency,
  amount,
}) => {
  return (
    <CurrencyInputContainer>
      <InputContainer>
        <Text>You send</Text>
        <Input type="number" value={amount} onChange={onChangeAmount} />
      </InputContainer>
      <Select value={selectedCurrency} onChange={onChangeCurrency}>
        {currencyOptions.map((item) => (
          <Option key={item} value={item}>
            {item}
          </Option>
        ))}
      </Select>
    </CurrencyInputContainer>
  );
};

const CurrencyInputContainer = styled.div`
  display: flex;
  margin-top: 19px;
`;
const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 442.72px;
  height: 65px;
  border: 1px solid #e8e8e8;
  padding: 9px 20px;
  margin-bottom: 12px;

  ${mediaQueries("md")`
  width: 183px;
  `}
  ${mediaQueries("sm")`
  width: 183px;
  `}
  ${mediaQueries("xs")`
  width: 183px;
  `}
`;
const Text = styled.span`
  font-size: 12px;
`;
const Input = styled.input`
  width: 182.1px;
  height: 22.94px;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 24px;
  color: #8b8f96;
  margin-top: 3px;
  border: none;
  ::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    -moz-appearance: text-field;
  }
  &[type="number"] {
    -moz-appearance: textfield;
  }
  &:focus,
  &:hover {
    outline: none;
  }
`;
const Select = styled.select`
  width: 129.2px;
  height: 65px;
  background: #f4f3f8;
  border-radius: 0px 4px 4px 0px;
  border: none;
  cursor: pointer;
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  background-image: url(${dropDown});
  background-repeat: no-repeat;
  background-position: right 10px top 50%;

  &:focus,
  &:hover {
    outline: none;
    border: none;
  }

  ${mediaQueries("md")`
  width: 79.2px;
  `}
  ${mediaQueries("sm")`
  width: 79.2px;
  `}

  ${mediaQueries("xs")`
  width: 79.2px;
  `}
`;
const Option = styled.option`
  text-align: center;
`;

export default CurrencyConverter;
