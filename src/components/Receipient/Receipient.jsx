import { useState } from "react";
import { Tab, TabPanel, Tabs } from "./Tabs";
import styled from "styled-components";
import HeaderText from "../../reusuableComponents/HeaderText";
import { mediaQueries } from "../../reusuableComponents/mediaQueries";

const Receipient = ({ currentStep, updateStep }) => {
  const [activeTab, setActiveTab] = useState(1);

  const handleChange = (e, value) => {
    setActiveTab(value);
  };
  return (
    <ReceipientContainer>
      <HeaderText
        firstText="Your Recipient"
        secondText="Who are you sending money to?"
      />
      <Line></Line>
      <Form>
        <Label>Their email (optional)</Label>
        <Input type="text" />
        <Label>Full name of the account holder</Label>
        <Input type="text" />
      </Form>
      <BankDetails>Bank Details</BankDetails>
      <Line></Line>

      {/* Slider */}
      <TabsSliderContainer>
        <Tabs selectedTab={activeTab} onChange={handleChange}>
          <Tab label="Inside Europe" value={0}></Tab>
          <Tab label="Outside Europe" value={1}></Tab>
        </Tabs>
      </TabsSliderContainer>

      <TabsPanelContainer>
        <TabPanel value={activeTab} selectedIndex={0}>
          <Form>
            <IbanLabel>IBAN</IbanLabel>
            <IbanInput type="text" placeholder="DE98370440018929829032" />
          </Form>
        </TabPanel>
        <TabPanel value={activeTab} selectedIndex={1}>
          <Form>
            <SwiftLabel>SWIFT / BIC code</SwiftLabel>
            <IbanInput type="text" placeholder="BUKBGB22" />
            <IbanLabel>IBAN / Account Number</IbanLabel>
            <IbanInput type="text" placeholder="01234567891" />
          </Form>
        </TabPanel>
      </TabsPanelContainer>

      <ContinueButton onClick={() => updateStep(currentStep + 1)}>
        Continue
      </ContinueButton>
    </ReceipientContainer>
  );
};

const ReceipientContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 508px;
  height: auto;
  background: #ffffff;
  border: 1px solid #f2f2f2;
  box-sizing: border-box;
  border-radius: 6px;
  padding: 35px;

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

const BankDetails = styled.h1`
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 24px;
  color: #2c0c6a;
`;
const Line = styled.div`
  width: 443px;
  height: 0px;
  border: 1px solid #f2f2f2;
  margin-top: 13px;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 20px;

  ${mediaQueries("xs")`
justify-content: center;
  `}
`;
const Label = styled.label`
  font-style: normal;
  font-weight: normal;
  font-size: 13px;
  line-height: 24px;
  color: #8b8f96;
`;
const Input = styled.input`
  width: 443px;
  height: 45px;
  border: 1px solid #e8e8e8;
  box-sizing: border-box;
  border-radius: 4px;
  margin-bottom: 20px;
  padding-left: 10px;

  &:focus,
  &:hover {
    outline: none;
  }

  ${mediaQueries("md")`
  width: 303px;
  `}
  ${mediaQueries("xs")`
  width: 233px;
  `}
`;
const ContinueButton = styled.button`
  width: 443.69px;
  padding: 10px;
  height: 50px;
  background: #4305eb;
  border-radius: 6px;
  outline: none;
  border: none;
  margin-top: 20px;
  color: white;
  cursor: pointer;
  margin-top: -3px;

  ${mediaQueries("md")`
 width: 380px;
  `}
  ${mediaQueries("sm")`
 width: 313px;
  `}
  ${mediaQueries("xs")`
 width: 273px;
  `}
`;

// Tabs

const TabsSliderContainer = styled.div`
  display: flex;
`;
const TabsPanelContainer = styled.div`
  height: auto;
  ${mediaQueries("md")`
justify-content: center;
  `}
`;

const IbanLabel = styled.label`
  font-style: normal;
  font-weight: normal;
  font-size: 13px;
  line-height: 24px;
  color: #8b8f96;
`;
const IbanInput = styled.input`
  width: 443px;
  height: 45px;
  border: 1px solid #e8e8e8;
  box-sizing: border-box;
  border-radius: 4px;
  padding-left: 10px;
  margin-bottom: 20px;

  &:focus,
  &:hover {
    outline: none;
  }
  &::placeholder {
    color: #c4c5c6;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 24px;
  }
  ${mediaQueries("md")`
  width: 303px;
  `}
  ${mediaQueries("xs")`
  width: 233px;
  `}
`;
const SwiftLabel = styled.label`
  font-style: normal;
  font-weight: normal;
  font-size: 13px;
  line-height: 24px;
  color: #8b8f96;
`;
export default Receipient;
