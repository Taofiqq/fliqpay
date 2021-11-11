import styled from "styled-components";
import { mediaQueries } from "../../reusuableComponents/mediaQueries";
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

  ${mediaQueries("xs")`
    margin-right: 27px;
    margin-top: 2rem;
  `}
  ${mediaQueries("sm")`
    margin-right: 27px;
    margin-top: 2rem;
  `} 
  ${mediaQueries("md")`
    margin-right: 27px;
    margin-top: 2rem;
  `} 
  ${mediaQueries("lg")`
    margin-right: 57px;
    margin-top: 2rem;
  `}
`;
export default Steps;
