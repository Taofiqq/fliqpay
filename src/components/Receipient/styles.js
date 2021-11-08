import styled, { css, keyframes } from "styled-components";

export const TabHeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
`;
export const StylizedTab = styled.button`
  border: none;
  color: fff;
  width: 100%;
  padding: 20px;
  background-color: transparent;
  cursor: ${(props) => (props.disabled ? "default" : "pointer")};
  ${(p) =>
    p.active &&
    css`
      color: #4305eb;
      font-weight: 400;
      font-size: 14px;
      font-style: normal;
      /* line-height: 24px; */
    `}
  ${(p) => !p.active && p.inactiveStyle}
`;

export const StylizedPanel = styled.div`
  display: ${(props) => (props.active ? "flex" : "none")};
  width: 100%;
  height: 100%;
  flex-direction: column;
`;

export const TabsHolder = styled.div`
  display: flex;
`;
export const inactiveTab = {
  color: "grey",
  opacity: 0.65,
};

const inset = keyframes`
  0% {
    -webkit-box-shadow: inset 0 0 0 0 #4305eb;
            box-shadow: inset 0 0 0 0 #4305eb
  }
  100%{
    -webkit-box-shadow: inset 0 0 14px 0px #4305eb;
            box-shadow: inset 0 0 14px 0px #4305eb;
  }
`;

export const TabSlider = styled.div`
  width: ${(props) => `${props.width}px`};
  background-color: #4305eb;
  height: 4px;
  transition: 0.5s;
  transform: ${(props) => `translateX(${props.width * props.index}px)`};
  animation: ${inset} 0.9s both;
`;
