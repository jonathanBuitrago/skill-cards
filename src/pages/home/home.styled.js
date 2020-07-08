import styled from "styled-components";
import Background from "../../assets/images/bg.jpg";

export const StyledHome = styled.div`
  font-family: "Saira Semi Condensed", sans-serif;
  font-weight: 400;
  height: 100vh;
  display: flex;
  justify-content: space-around;
  overflow: scroll;
  flex-wrap: wrap;
  align-items: center;
  background: url(${Background}) no-repeat center center / cover;
`;
