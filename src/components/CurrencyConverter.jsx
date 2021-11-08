import styled from "styled-components";
import dropDown from "../assests/dropdown.svg";
const CurrencyConverter = ({
  currencyOptions,
  selectedCurrency,
  onChangeAmount,
  onChangeCurrency,
  amount,
}) => {
  return (
    <CurrencyInputContainer>
      <Input type="number" value={amount} onChange={onChangeAmount} />
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
const Input = styled.input`
  width: 442.72px;
  height: 65px;
  border: 1px solid #e8e8e8;
  padding: 0px 20px;
  margin-bottom: 12px;
  ::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
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
`;
const Option = styled.option`
  text-align: center;
`;

export default CurrencyConverter;
