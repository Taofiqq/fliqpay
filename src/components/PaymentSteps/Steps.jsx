import styled from "styled-components";
const Steps = ({ label, item, index, updateStep, selected }) => {
  return (
    // <div className={"stepBlock" + (selected ? " selected" : "")}>

    <Labels onClick={() => updateStep(index + 1)}>{label}</Labels>
    // </div>
  );
};

const Labels = styled.div`
  margin-right: 122px;
  cursor: pointer;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: left;
  margin-top: 7px;
`;
export default Steps;
